"use client";
import { useRef, useState } from "react";

const cards = [
  { title: "Trip Insure", tag: "Cloudly" },
  { title: "The Business Kit", tag: "Camera" },
  { title: "Cafe Nostra Cosa", tag: "Cloudly" },
  { title: "SadaPay Banking", tag: "Camera" },
];

export default function CardSlider() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActive(index);
  };

  return (
    <div className="w-full py-10">
      
      {/* Cards Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-6 px-6 scroll-smooth no-scrollbar"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="min-w-[300px] md:min-w-[320px] bg-gray-100 rounded-2xl p-5 flex-shrink-0"
          >
            {/* Top Tag */}
            <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 bg-green-400 rounded-full"></div>
              <span className="font-semibold text-lg">{card.tag}</span>
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                www.businesstoolkit.com
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-green-500">
                  {"★★★★★"}
                </div>
                <span className="text-sm text-gray-600">
                  4.9/5.0 (7891)
                </span>
              </div>

              {/* Link */}
              <p className="mt-4 font-medium text-gray-700 cursor-pointer">
                View Details →
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-gray-800" : "w-2 bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}