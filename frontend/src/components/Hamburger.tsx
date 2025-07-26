import { Menu, X, Search, KeyRound, CalendarPlus } from "lucide-react";
import { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="hover:bg-button-background-hover relative z-50 cursor-pointer rounded-3xl p-2 text-neutral-600 transition-colors duration-200 hover:text-neutral-800"
        onClick={toggleHamburger}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`bg-background-primary fixed top-18 right-0 left-0 z-40 overflow-hidden border-b border-neutral-200 shadow-xl transition-all duration-300 ease-out ${
          isOpen ? "h-40" : "h-0 border-none"
        }`}
      >
        <div className="p-6 pt-6">
          <div className="relative mb-7">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 transform text-neutral-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search events, locations, tags..."
              className={`w-full rounded-full border py-3 pr-4 pl-10 text-sm transition-all duration-200 outline-none ${
                isFocused
                  ? "ring-opacity-20 border-red-500 ring-2 ring-red-500"
                  : "border-neutral-300 focus:border-red-500"
              }`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          <div className="flex justify-center gap-2">
            <button className="bg-secondary-button-background hover:text-button-text-hover hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 text-white transition-colors">
              <KeyRound size={16} />
              User login
            </button>

            <button className="bg-secondary-button-background hover:text-button-text-hover hover:bg-button-background-hover flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 text-white transition-colors">
              <KeyRound size={16} />
              Host login
            </button>

            <button className="hover:bg-secondary-button-background flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 text-red-500 transition-colors duration-300 hover:text-white">
              <CalendarPlus size={16} />
              Event+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
