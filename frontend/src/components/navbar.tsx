import { useState, useEffect } from "react";
import {
  KeyRound,
  ScanFace,
  Heart,
  Search,
  CalendarPlus,
  CalendarSearch,
  MapPinPlusInside,
  Tags,
} from "lucide-react";

const Navbar = () => {
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
      <div className="flex-shrink-0">
        <button className="flex cursor-pointer items-center gap-1 rounded-lg p-2 text-2xl font-bold text-red-500">
          <Heart />
          link
        </button>
      </div>

      {/* Middle */}
      <div className="mx-8 flex-1">
        <div className="flex w-full items-center rounded-full border border-neutral-300 bg-white shadow-sm">
          <div className="pl-6">
            <CalendarSearch size={12} />
          </div>
          <div className="flex-1 cursor-pointer border-r border-neutral-200 p-2 py-2 pr-4">
            <input
              type="text"
              placeholder="Search events"
              className="w-full border-none bg-transparent text-sm text-neutral-500 outline-none placeholder:text-neutral-400"
            />
          </div>

          <div className="pl-6">
            <MapPinPlusInside size={12} />
          </div>
          <div className="flex-1 cursor-pointer border-r border-neutral-200 p-2 py-2 pr-4">
            <input
              type="text"
              placeholder="Locations"
              className="w-full border-none bg-transparent text-sm text-neutral-500 outline-none placeholder:text-neutral-400"
            />
          </div>

          <div className="pl-6">
            <Tags size={12} />
          </div>
          <div className="flex-1 cursor-pointer p-2 py-2 pr-4">
            <input
              type="text"
              placeholder="Tags"
              className="w-full border-none bg-transparent text-sm text-neutral-500 outline-none placeholder:text-neutral-400"
            />
          </div>

          <button className="m-1 flex-shrink-0 cursor-pointer rounded-full bg-red-500 p-3 text-white transition-colors hover:bg-red-600">
            <Search size={12} />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex-shrink-0">
        <div className="flex gap-2">
          <button className="hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 transition-colors">
            <CalendarPlus size={16} />
            Create Events
          </button>
          <button className="hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 transition-colors">
            <ScanFace size={16} />
            Signup
          </button>
          <button className="hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 transition-colors">
            <KeyRound size={16} />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
