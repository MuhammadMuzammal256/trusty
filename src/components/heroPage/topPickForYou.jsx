"use client";

import { useState } from "react";
import TopPicksCard from "../cards/topPicksCard";

export default function TopPickForYou() {
  const data = [
    {
      logo: "/images/bank.svg",
      company: "Cloudly",
      title: "Trip Insure",
      website: "www.businesstoolkit.com",
      rating: "4.9/5.0",
      reviews: "7891",
    },
    {
      logo: "/images/bank.svg",
      company: "Finora",
      title: "Health Cover",
      website: "www.finora.com",
      rating: "4.8/5.0",
      reviews: "6521",
    },
    {
      logo: "/images/bank.svg",
      company: "Insurely",
      title: "Life Protect",
      website: "www.insurely.com",
      rating: "4.7/5.0",
      reviews: "5320",
    },
    {
      logo: "/images/bank.svg",
      company: "SafeNet",
      title: "Travel Shield",
      website: "www.safenet.com",
      rating: "4.9/5.0",
      reviews: "8421",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="w-full mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-15 flex flex-col items-center justify-center">
        <h1 className="mb-15 font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] text-center">
          Top picks for you
        </h1>
<div className="overflow-hidden w-full">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${index * 100}%)`,
    }}
  >
    {data.map((item, i) => (
      <div
        key={i}
        className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:items-center gap-5 place-items-center"
      >
        <TopPicksCard {...item} />
        <TopPicksCard {...item} />
        <TopPicksCard {...item} />
        <TopPicksCard {...item} />
      </div>
    ))}
  </div>
</div>

        <div className="flex items-center gap-[6px] justify-center mt-10">
          {[0, 1, 2, 3].map((dot, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`cursor-pointer transition-all duration-300 ${
                index === i
                  ? "w-8 h-3 bg-[#1F2A44] rounded-full"
                  : "w-3 h-3 border border-[#1F2A44] rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}