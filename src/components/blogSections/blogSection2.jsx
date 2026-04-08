"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const blogCards = [
  {
    id: 1,
    image: "/images/bss1.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
  {
    id: 2,
    image: "/images/bss1.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
  {
    id: 3,
    image: "/images/bss1.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
  {
    id: 4,
    image: "/images/bss1.svg",
    category: "Review Matters",
    date: "July 30, 2024",
    title: "The FTC’s fake reviews ruling and what it means for you",
    description: "The prevalence of influencers in our",
  },
];

export default function BlogSection2() {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (maxScrollLeft <= 0) {
      setActiveDot(0);
      return;
    }

    const totalDots = blogCards.length;
    const currentDot = Math.round(
      (scrollLeft / maxScrollLeft) * (totalDots - 1)
    );

    setActiveDot(currentDot);
  };

  const scrollToDot = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const totalDots = blogCards.length;

    const targetScroll =
      totalDots > 1 ? (maxScrollLeft / (totalDots - 1)) * index : 0;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white  pt-16">
      <div className="max-w-7xl mx-auto px-10 ">
     
        <h2 className="text-[#17253F] text-center font-semibold text-2xl sm:text-3xl lg:text-4xl mb-14">
          Reviews Matter
        </h2>

        
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {blogCards.map((card) => (
            <div
              key={card.id}
              className="shrink-0 w-full md:max-w-[400px] lg:w-[377px] lg:h-[400px] border border-[#C3C8D0] rounded-[25px] bg-[#E9ECEF] p-4 sm:p-5"
            >
           
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[180px] rounded-[20px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <div className="w-[142px] h-[33px] px-[18px] gap-[6px] rounded-[56px] border border-[#C3C8D0] bg-[#FFFFFF] flex items-center justify-center">
                  <p className="text-[#2D2D2D] text-[14px] leading-[100%] font-normal">
                    {card.category}
                  </p>
                </div>

                <div className="w-[132px] h-[33px] px-[18px] gap-[6px] rounded-[56px] border border-[#C3C8D0] bg-[#F7F7F7] flex items-center justify-center">
                  <p className="text-[#2D2D2D] text-[14px] leading-[100%] font-normal">
                    {card.date}
                  </p>
                </div>
              </div>

   
             <h3 className="text-[#252525] font-semibold text-[18px] leading-[26px] mt-3">
                {card.title}
              </h3>

              <p className="text-[#252525CC]  font-normal text-[16px] leading-[24px] mt-1 ">
                {card.description}
              </p>

              <button className="mt-1 inline-flex  items-center gap-2 group hover:cursor-pointer">
                <span className="text-[#04DA8D] font-semibold text-[16px] leading-[30px]">
                  Read Article
                </span>

                <span className="transition-transform group-hover:translate-x-1 text-[#04DA8D]">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>


        <div className="flex items-center justify-center gap-[3px] mt-6">
          {blogCards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDot(index)}
              className={`transition-all duration-300 ${
                activeDot === index
                  ? "w-[29px] h-[8px] bg-[#17253F] rounded-[34px]"
                  : "w-[8px] h-[8px] border border-[#17253F] rounded-full bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}