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
      <div className="flex items-center bg-white border border-[#E1E3F6] rounded-full h-[75px] overflow-hidden">
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center pl-7.5 py-5.75 gap-2 cursor-pointer"
        >
          <img src="images/4x4.svg" alt="drop" />

          <span className="font-small text-[#17253F]">
            {selectedCategory}
          </span>

          <img src="images/dropdown.svg" alt="drop" />

          <img src="/images/Line.svg" alt="" className="ml-[20px]" />
        </div>

        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search company or product"
            className="w-full px-4 py-3 text-[16px] outline-none text-[#2A2A2A]"
          />
        </div>

        <div className="h-full">
          <button className="bg-[#04DA8D] px-6 h-full flex items-center justify-center">
            <img src="/images/search.svg" alt="search" />
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 mt-2 w-full sm:w-[250px] bg-white border border-[#E1E3F6] rounded-xl shadow-lg z-50 transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelect(item)}
            className="px-4 py-3 hover:bg-[#F5F7FF] cursor-pointer text-[#17253F]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}