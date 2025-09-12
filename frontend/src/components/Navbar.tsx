import { useState, useEffect, useRef } from "react";
import {
  KeyRound,
  Heart,
  Search,
  CalendarPlus,
  CalendarSearch,
  MapPin,
  Tags,
  ChevronDown,
  ChevronUp,
  User,
  Building2,
  X,
} from "lucide-react";
import Hamburger from "./Hamburger";
import { useNavigate } from "react-router-dom";

interface SearchFilters {
  events: string;
  locations: string;
  tags: string[];
}

interface NavbarProps {
  onSearch: (searchInputs: SearchFilters) => void;
}

// Tag options
const TAG_OPTIONS = [
  // Orientation
  { value: "LGBTQ+", label: "LGBTQ+", category: "Orientation" },
  { value: "straight", label: "Straight", category: "Orientation" },

  // Age Groups
  { value: "18-24", label: "18-24", category: "Age" },
  { value: "25-34", label: "25-34", category: "Age" },
  { value: "35-44", label: "35-44", category: "Age" },
  { value: "45-54", label: "45-54", category: "Age" },
  { value: "55+", label: "55+", category: "Age" },

  // Event Types
  { value: "nightlife", label: "Nightlife", category: "Type" },
  { value: "dining", label: "Dining", category: "Type" },
  { value: "party", label: "Party", category: "Type" },
];

const Navbar = ({ onSearch }: NavbarProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [loginIsClicked, setLoginIsClicked] = useState(false);
  const [tagsDropdownOpen, setTagsDropdownOpen] = useState(false);

  // Search input states with tags array
  const [searchInputs, setSearchInputs] = useState({
    events: "",
    locations: "",
    tags: [] as string[], // Specify array of strings
  });

  const navigate = useNavigate();
  const tagsDropdownRef = useRef<HTMLDivElement>(null);

  const toggleHeart = () => {
    setIsClicked(!isClicked);
  };

  const toggleLoginDrop = () => {
    setLoginIsClicked(!loginIsClicked);
  };

  const toggleTagsDropdown = () => {
    setTagsDropdownOpen(!tagsDropdownOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tagsDropdownRef.current &&
        !tagsDropdownRef.current.contains(event.target as Node)
      ) {
        setTagsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUserLogin = () => {
    navigate("/login");
    setLoginIsClicked(false);
  };

  const handleHostLogin = () => {
    navigate("/login");
    setLoginIsClicked(false);
  };

  // Handle input changes for text fields
  const handleInputChange = (field: string, value: string) => {
    setSearchInputs((prev) => ({
      ...prev,
      [field]: value, // Evaluates value within field (no if conditions needed!)
    }));
  };

  // Handle Enter key press for quick search
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Handle tag de/selection
  const handleTagToggle = (tagValue: string) => {
    setSearchInputs((prev) => ({
      ...prev,
      tags: prev.tags.includes(tagValue)
        ? prev.tags.filter((tag) => tag !== tagValue)
        : [...prev.tags, tagValue],
    }));
  };

  const removeTag = (tagValue: string) => {
    setSearchInputs((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagValue),
    }));
  };

  // Handle search button click
  const handleSearch = () => {
    if (onSearch) onSearch(searchInputs);
  };

  // Sort tags by category (Orientation, age, type), loops through everything (processed later)
  // 'Reduces' our array into a singular sorted (by catergory) object
  const groupedTags = TAG_OPTIONS.reduce(
    (result, tag) => {
      if (!result[tag.category]) {
        result[tag.category] = [];
      }
      result[tag.category].push(tag);
      return result;
    },
    {} as Record<string, typeof TAG_OPTIONS>,
  );

  return (
    <nav
      className={`bg-background-primary sticky top-0 z-50 flex w-full items-center justify-between px-6 py-5 text-sm transition-shadow duration-500 ${isScrolled ? "shadow-xl" : "shadow-none"}`}
    >
      {/* Left */}
      <div className="flex-shrink-0 duration-300 hover:scale-110">
        <div className="flex items-center gap-1 rounded-lg p-2 text-2xl font-bold text-red-500">
          <button
            className="rotate-20 cursor-pointer duration-300 hover:rotate-0 hover:animate-pulse"
            onClick={toggleHeart}
          >
            {!isClicked ? <Heart /> : <Heart fill="red" />}
          </button>
          <span className="cursor-default">link</span>
        </div>
      </div>

      {/* Middle */}
      <div className="mx-8 hidden flex-1 lg:block">
        <div
          className={`flex w-full items-center rounded-full border bg-white shadow-sm transition-all duration-200 ${
            isFocused || tagsDropdownOpen
              ? "border-transparent shadow-lg ring-2 ring-red-500"
              : "border-neutral-300 hover:shadow-md"
          }`}
        >
          {/* Events */}
          <div className="flex flex-1 items-center border-r border-neutral-200">
            <div className="pl-6">
              <CalendarSearch
                size={16}
                className={`transition-colors duration-200 ${
                  isFocused === "events" ? "text-red-500" : "text-neutral-400"
                }`}
              />
            </div>
            <div className="flex-1 p-2 py-3 pr-4">
              <input
                type="text"
                placeholder="Search events"
                value={searchInputs.events}
                onChange={(e) => handleInputChange("events", e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full border-none bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                onFocus={() => setIsFocused("events")}
                onBlur={() => setIsFocused(null)}
              />
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-1 items-center border-r border-neutral-200">
            <div className="pl-6">
              <MapPin
                size={16}
                className={`transition-colors duration-200 ${
                  isFocused === "locations"
                    ? "text-red-500"
                    : "text-neutral-400"
                }`}
              />
            </div>
            <div className="flex-1 p-2 py-3 pr-4">
              <input
                type="text"
                placeholder="Locations"
                value={searchInputs.locations}
                onChange={(e) => handleInputChange("locations", e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full border-none bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                onFocus={() => setIsFocused("locations")}
                onBlur={() => setIsFocused(null)}
              />
            </div>
          </div>

          {/* Tags Dropdown */}
          <div
            className="relative flex flex-1 items-center"
            ref={tagsDropdownRef}
          >
            <div className="pl-6">
              <Tags
                size={16}
                className={`transition-colors duration-200 ${
                  tagsDropdownOpen ? "text-red-500" : "text-neutral-400"
                }`}
              />
            </div>
            <div
              className="flex-1 cursor-pointer p-2 py-3 pr-4"
              onClick={toggleTagsDropdown}
            >
              <div className="flex items-center justify-between">
                {searchInputs.tags.length === 0 ? (
                  <span className="text-sm text-neutral-400">Tags</span>
                ) : (
                  <div className="flex flex-wrap items-center gap-1">
                    {searchInputs.tags.slice(0, 2).map(
                      (
                        tag, // Only show 2 tags to rpevent overflwo
                      ) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800"
                        >
                          {tag}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeTag(tag);
                            }}
                            className="rounded-full p-0.5 hover:bg-red-200"
                          >
                            <X size={10} />
                          </button>
                        </span>
                      ),
                    )}
                    {searchInputs.tags.length > 2 && (
                      <span className="text-xs text-neutral-500">
                        +{searchInputs.tags.length - 2} more
                      </span>
                    )}
                  </div>
                )}
                <ChevronDown
                  size={14}
                  className={`text-neutral-400 transition-transform ${tagsDropdownOpen ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {/* Tags Dropdown Menu */}
            {tagsDropdownOpen && (
              <div className="absolute top-full right-0 left-0 z-50 mt-2 max-h-80 overflow-y-auto rounded-lg border border-neutral-200 bg-white shadow-lg">
                {Object.entries(groupedTags).map(
                  (
                    [category, tags], // Breaks into key value pairs (using the catergorised object from ealier)
                  ) => (
                    <div key={category} className="p-2">
                      <div className="px-2 py-1 text-xs font-semibold tracking-wide text-neutral-600 uppercase">
                        {category}
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {tags.map((tag) => (
                          <button
                            key={tag.value}
                            onClick={() => handleTagToggle(tag.value)}
                            className={`rounded-md px-3 py-2 text-left text-sm transition-colors ${
                              searchInputs.tags.includes(tag.value)
                                ? "bg-red-100 text-red-800"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {tag.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="m-1 flex-shrink-0 cursor-pointer rounded-full bg-red-500 p-3 text-white transition-all duration-200 hover:bg-red-600"
          >
            <Search size={14} />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="hidden flex-shrink-0 lg:block">
        <div className="flex gap-2">
          <button className="hover:text-button-text-hover hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 transition-colors duration-300">
            <CalendarPlus size={16} />
            Create Events
          </button>

          {/* Login Dropdown */}
          <div className="relative">
            <button
              className="hover:text-button-text-hover hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 transition-colors"
              onClick={toggleLoginDrop}
            >
              <KeyRound size={16} />
              Login
              {!loginIsClicked ? (
                <ChevronDown size={16} className="pt-[3px] pl-[2px]" />
              ) : (
                <ChevronUp size={16} className="pt-[3px] pl-[2px]" />
              )}
            </button>

            {/* Dropdown Menu */}
            {loginIsClicked && (
              <div className="absolute right-0 z-50 mt-2 w-48 rounded-xl border border-neutral-200 bg-white py-2 shadow-lg">
                <button
                  onClick={handleUserLogin}
                  className="hover:bg-button-background-hover text-button-text flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors"
                >
                  <User size={16} className="text-neutral-400" />
                  Users
                </button>
                <button
                  onClick={handleHostLogin}
                  className="hover:bg-button-background-hover text-button-text flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors"
                >
                  <Building2 size={16} className="text-neutral-400" />
                  Hosts
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Once the screen size hits lg and below, hamburger appears. Hidden is active while screen is lg+= */}
      <div className="block text-right font-bold lg:hidden">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
