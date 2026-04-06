"use client";

import Marquee from "react-fast-marquee";

export default function Section3() {
  const reviews = [
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Courtney Henry",
      avatar: "/images/top-img.svg",
    },
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Arlene McCoy",
      avatar: "/images/top-img.svg",
    },
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Ralph Edwards",
      avatar: "/images/top-img.svg",
    },
    {
      name: "Tech Wizards",
      website: "techwizards.com",
      user: "Brooklyn Simmons",
      avatar: "/images/top-img.svg",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div>
        <h2 className="mb-10 text-center text-[28px] font-semibold leading-[1.2] text-[#1F2A44] md:text-[38px]">
          Discover What People Like and Dislike
        </h2>

        {/* ROW 1 (Right ➝ Left) */}
        <div className="w-full overflow-hidden">
          <Marquee direction="left" speed={20}>
            <div className="inline-flex gap-5 py-2">
              {[...reviews, ...reviews].map((item, index) => (
          
                <div
                  key={index}
                  className="w-[376px] shrink-0 overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#EFF3F7] px-4 py-4 align-top shadow-none"
                >
                  {/* Top */}
                  <div className="mb-4 flex items-start gap-3">
                    <div className="relative h-[54px] w-[54px] shrink-0 rounded-[10px] border border-[#D1D5DB] bg-[#F8F8F8]">
                      <span className="absolute right-[-2px] top-[-2px] h-[10px] w-[10px] rounded-full border border-[#16A34A] bg-[#22C55E]"></span>
                    </div>

                    <div className="min-w-0 pt-[2px]">
                      <h3 className="truncate text-[14px] font-semibold text-[#111827]">
                        {item.name}
                      </h3>
                      <p className="mt-[6px] truncate text-[12px] text-[#8A8F98]">
                        {item.website}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-[2px]">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="flex h-[14px] w-[14px] items-center justify-center bg-[#00B67A] text-[9px] text-white"
                        >
                          ★
                        </div>
                      ))}
                    </div>

                    <span className="text-[12px] text-[#4B5563]">5.0</span>
                  </div>

                  {/* Review */}
            <p className="mb-3 w-full text-[13px] leading-[1.6] text-[#3F3F46] break-words whitespace-normal overflow-hidden">
  Had a great experience with Tech Wizards when my laptop
  crashed. They were able to recover all my files and had my
  computer running like new again...
</p>

                  {/* Link */}
                  <button className="mb-4 text-[13px] font-semibold text-[#00B67A]">
                    Read Review →
                  </button>

                  <div className="mb-4 h-px w-full bg-[#E5E7EB]" />

                  {/* Bottom */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full bg-[#D1D5DB]">
                        <img
                          src={item.avatar}
                          alt={item.user}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-semibold text-[#2C2F36]">
                          {item.user}
                        </p>
                        <div className="mt-[6px] flex items-center gap-1">
                          <span className="truncate text-[12px] text-[#8A8F98]">
                            Top Contributor
                          </span>
                          <span><img src="/images/paid-star.svg" alt="" /></span>
                        </div>
                      </div>
                    </div>

                    <span className="shrink-0 text-[11px] text-[#A1A1AA]">
                      15 mins ago
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* ROW 2 (Left ➝ Right) */}
        <div className="w-full overflow-hidden mt-6">
          <Marquee direction="right" speed={20}>
            <div className="inline-flex gap-5 py-2">
              {[...reviews, ...reviews].map((item, index) => (
                // SAME CARD AGAIN (no change)
                 <div
                  key={index}
                  className="w-[376px] shrink-0 overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#EFF3F7] px-4 py-4 align-top shadow-none"
                >
                  {/* Top */}
                  <div className="mb-4 flex items-start gap-3">
                    <div className="relative h-[54px] w-[54px] shrink-0 rounded-[10px] border border-[#D1D5DB] bg-[#F8F8F8]">
                      <span className="absolute right-[-2px] top-[-2px] h-[10px] w-[10px] rounded-full border border-[#16A34A] bg-[#22C55E]"></span>
                    </div>

                    <div className="min-w-0 pt-[2px]">
                      <h3 className="truncate text-[14px] font-semibold text-[#111827]">
                        {item.name}
                      </h3>
                      <p className="mt-[6px] truncate text-[12px] text-[#8A8F98]">
                        {item.website}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-[2px]">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="flex h-[14px] w-[14px] items-center justify-center bg-[#00B67A] text-[9px] text-white"
                        >
                          ★
                        </div>
                      ))}
                    </div>

                    <span className="text-[12px] text-[#4B5563]">5.0</span>
                  </div>

                  {/* Review */}
            <p className="mb-3 w-full text-[13px] leading-[1.6] text-[#3F3F46] break-words whitespace-normal overflow-hidden">
  Had a great experience with Tech Wizards when my laptop
  crashed. They were able to recover all my files and had my
  computer running like new again...
</p>

                  {/* Link */}
                  <button className="mb-4 text-[13px] font-semibold text-[#00B67A]">
                    Read Review →
                  </button>

                  <div className="mb-4 h-px w-full bg-[#E5E7EB]" />

                  {/* Bottom */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full bg-[#D1D5DB]">
                        <img
                          src={item.avatar}
                          alt={item.user}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-semibold text-[#2C2F36]">
                          {item.user}
                        </p>
                        <div className="mt-[6px] flex items-center gap-1">
                          <span className="truncate text-[12px] text-[#8A8F98]">
                            Top Contributor
                          </span>
                          <span>
                            <img src="/images/paid-star.svg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="shrink-0 text-[11px] text-[#A1A1AA]">
                      15 mins ago
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}