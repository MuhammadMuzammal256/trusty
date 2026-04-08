"use client";

import Image from "next/image";

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
];

export default function BlogSection33() {
  return (
    <div className="mx-5 sm:mx-10">
      <section className="mx-auto py-10 sm:py-16 bg-[#E7F4EF] rounded-[25px] ">
        <div className="max-w-7xl mx-auto px-5 sm:px-10">
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCards.map((card) => (
              <div
                key={card.id}
                className="w-full border border-[#C3C8D0] rounded-[25px] bg-white p-4 sm:p-5"
              >
                <div className="relative w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[180px] rounded-[20px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-5">
                  <div className="w-[142px] h-[33px] px-[18px] rounded-[56px] border border-[#C3C8D0] bg-white flex items-center justify-center">
                    <p className="text-[#252525] text-[14px]">
                      {card.category}
                    </p>
                  </div>

                  <div className="w-[132px] h-[33px] rounded-[56px] border border-[#C3C8D0] bg-[#F7F7F7] flex items-center justify-center gap-[6px]">
                    <img src="/images/calender.svg" alt="calendar" />
                    <p className="text-[#252525] text-[14px]">
                      {card.date}
                    </p>
                  </div>
                </div>

                <h3 className="text-[#252525] font-semibold text-[18px] leading-[26px] mt-3">
                  {card.title}
                </h3>

                <p className="text-[#252525CC] text-[16px] leading-[24px] mt-1">
                  {card.description}
                </p>

                <button className="mt-2 inline-flex items-center gap-2 group">
                  <span className="text-[#04DA8D] font-semibold text-[16px]">
                    Read Article
                  </span>
                  <span className="transition-transform group-hover:translate-x-1 text-[#04DA8D]">
                    →
                  </span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}