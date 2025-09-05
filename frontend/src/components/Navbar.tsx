import { useState, useEffect } from "react";
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
} from "lucide-react";
import Hamburger from "./Hamburger";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [loginIsClicked, setLoginIsClicked] = useState(false);
  const navigate = useNavigate();

  const toggleHeart = () => {
    setIsClicked(!isClicked);
  };

  const toggleLoginDrop = () => {
    setLoginIsClicked(!loginIsClicked);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUserLogin = () => {
    navigate('/login');
    setLoginIsClicked(false);
  }

  const handleHostLogin = () => {
    navigate('/login');
    setLoginIsClicked(false);
  }

  // Close dropdown when clicking outside

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
            isFocused
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
                className="w-full border-none bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                onFocus={() => setIsFocused("locations")}
                onBlur={() => setIsFocused(null)}
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-1 items-center">
            <div className="pl-6">
              <Tags
                size={16}
                className={`transition-colors duration-200 ${
                  isFocused === "tags" ? "text-red-500" : "text-neutral-400"
                }`}
              />
            </div>
            <div className="flex-1 p-2 py-3 pr-4">
              <input
                type="text"
                placeholder="Tags"
                className="w-full border-none bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                onFocus={() => setIsFocused("tags")}
                onBlur={() => setIsFocused(null)}
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="m-1 flex-shrink-0 cursor-pointer rounded-full bg-red-500 p-3 text-white transition-all duration-200 hover:bg-red-600">
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
                className="hover:bg-button-background-hover text-button-text flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors">
                  <User size={16} className="text-neutral-400" />
                  Users
                </button>
                <button 
                onClick={handleHostLogin}
                className="hover:bg-button-background-hover text-button-text flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors">
                  <Building2 size={16} className="text-neutral-400" />
                  Hosts
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/** Once the screen size hits lg and below, hamburger appears. Hidden is active while screen is lg+=*/}
      <div className="block text-right font-bold lg:hidden">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
