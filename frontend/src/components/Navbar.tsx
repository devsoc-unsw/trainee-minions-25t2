import { useState, useEffect } from "react";
import {
  KeyRound,
  ScanFace,
  Heart,
  Search,
  CalendarPlus,
  CalendarSearch,
  MapPin,
  Tags,
} from "lucide-react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);

    
  const toggleHeart = () => {
      setIsClicked(!isClicked);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-background-primary sticky top-0 z-50 flex w-full items-center justify-between px-6 py-5 text-sm transition-shadow duration-500 ${isScrolled ? "shadow-xl" : "shadow-none"}`}
    >
      {/* Left */}
      <div className="flex-shrink-0 hover:scale-110 duration-300">
        <div className="flex items-center gap-1 rounded-lg p-2 text-2xl font-bold text-red-500">
          <button 
            className="cursor-pointer rotate-20 hover:rotate-0 hover:animate-pulse duration-300"
            onClick={toggleHeart}
          >
            {!isClicked ? (
              <Heart />
            ) : (
              <Heart fill="red"/>
            )}
          </button>
          <span className="cursor-default">link</span>
        </div>
      </div>

      
      {/* Middle */}
      <div className="hidden lg:block mx-8 flex-1">
        <div className={`flex w-full items-center rounded-full border bg-white shadow-sm transition-all duration-200 ${
          isFocused 
            ? 'border-transparent ring-2 ring-red-500 shadow-lg' 
            : 'border-neutral-300 hover:shadow-md'
        }`}>
          
          {/* Events */}
          <div className="flex items-center flex-1 border-r border-neutral-200">
            <div className="pl-6">
              <CalendarSearch size={16} className={`transition-colors duration-200 ${
                isFocused === 'events' ? 'text-red-500' : 'text-neutral-400'
              }`} />
            </div>
            <div className="flex-1 p-2 py-3 pr-4">
              <input
                type="text"
                placeholder="Search events"
                className="w-full border-none bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                onFocus={() => setIsFocused('events')}
                onBlur={() => setIsFocused(null)}
              />
            </div>
          </div>

          {/* Locations */}
          <div className="flex items-center flex-1 border-r border-neutral-200">
            <div className="pl-6">
              <MapPin size={16} className={`transition-colors duration-200 ${
                isFocused === 'locations' ? 'text-red-500' : 'text-neutral-400'
              }`} />
            </div>
            <div className="flex-1 p-2 py-3 pr-4">
              <input
                type="text"
                placeholder="Locations"
                className="w-full border-none bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                onFocus={() => setIsFocused('locations')}
                onBlur={() => setIsFocused(null)}
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center flex-1">
            <div className="pl-6">
              <Tags size={16} className={`transition-colors duration-200 ${
                isFocused === 'tags' ? 'text-red-500' : 'text-neutral-400'
              }`} />
            </div>
            <div className="flex-1 p-2 py-3 pr-4">
              <input
                type="text"
                placeholder="Tags"
                className="w-full border-none bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
                onFocus={() => setIsFocused('tags')}
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
      <div className="hidden lg:block flex-shrink-0">
        <div className="flex gap-2">
          <button className="hover:text-button-text-hover duration-300 hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 transition-colors">
            <CalendarPlus size={16} />
            Create Events
          </button>
          <button className="hover:text-button-text-hover hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 transition-colors">
            <ScanFace size={16} />
            Signup
          </button>
          <button className="hover:text-button-text-hover hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 transition-colors">
            <KeyRound size={16} />
            Login
          </button>
        </div>
      </div>
      
      {/** Once the screen size hits lg and below, hamburger appears. Hidden is active while screen is lg+=*/}
      <div className="lg:hidden text-right font-bold block">
        <Hamburger />
      </div>
      
    </nav>
  );
};

export default Navbar;