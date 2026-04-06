"use client";
import { useState, useRef, useEffect } from "react";

export default function TextField() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const dropdownRef = useRef(null);

  const categories = [
    "Insurance",
    "Banking",
    "E-commerce",
    "Travel",
    "Technology",
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setSelectedCategory(item);
    setOpen(false);
  };

  return (
    <div ref={dropdownRef} className="w-full max-w-4xl mx-auto relative">
      
      <div className="flex items-center bg-white border border-[#E1E3F6] rounded-full overflow-hidden h-[55px] sm:h-[60px] md:h-[65px] lg:h-[75px]">
        
        {/* Category */}
        <div
          onClick={() => setOpen(!open)}
          className="
            flex items-center gap-2 cursor-pointer pl-3 sm:pl-5 md:pl-6 lg:pl-7.5 py-3 sm:py-4 md:py-5">
          <img src="images/4x4.svg" alt="drop" className="w-4 sm:w-5" />

          <span className="
            text-[#17253F]
            text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]
          ">
            {selectedCategory}
          </span>

          <img src="images/dropdown.svg" alt="drop" className="w-3 sm:w-4" />

          <img
            src="/images/Line.svg"
            alt=""
            className="ml-[10px] sm:ml-[15px] md:ml-[20px]"
          />
        </div>

        {/* Input */}
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search company or product"
            className="
              w-full outline-none text-[#2A2A2A]
              
              px-2 sm:px-3 md:px-4
              text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]
            "
          />
        </div>

        {/* Button */}
        <div className="h-full">
          <button className="
            bg-[#04DA8D] h-full flex items-center justify-center
            
            px-3 sm:px-4 md:px-5 lg:px-6
          ">
            <img src="/images/search.svg" alt="search" className="w-4 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute left-0 mt-2 
          w-full sm:w-[220px] md:w-[240px] lg:w-[250px]
          bg-white border border-[#E1E3F6] rounded-xl shadow-lg z-50 transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            className="
              cursor-pointer text-[#17253F]
              
              px-3 sm:px-4
              py-2 sm:py-3
              text-[13px] sm:text-[14px] md:text-[15px]
              hover:bg-[#F5F7FF]
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}