"use client";

import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "Boomerang Pet ID Tags",
    website: "www.boomerangtags.com",
    score: "4.9",
    reviews: "1,725 reviews",
    location: "Plimto Beach, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#E8E6B8]",
    logoText: "boomerang\nTAGS",
  },
  {
    id: 2,
    name: "Tadibrothers",
    website: "www.tadibrothers.com",
    score: "4.8",
    reviews: "281 reviews",
    location: "Fresno, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#DDF0FF]",
    logoText: "TDI\nBROTHER",
  },
  {
    id: 3,
    name: "Springtime Supplements",
    website: "www.springtimeinc.com",
    score: "4.9",
    reviews: "1,725 reviews",
    location: "Cookeville, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#EAF6D8]",
    logoText: "SPRINGTIME",
  },
  {
    id: 4,
    name: "Honest Paws",
    website: "www.honestpet.com",
    score: "4.8",
    reviews: "1,726 reviews",
    location: "Plimto Beach, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#EEE6FF]",
    logoText: "HP",
  },
  {
    id: 5,
    name: "Boomerang Pet ID Tags",
    website: "www.boomerangtags.com",
    score: "4.9",
    reviews: "1,725 reviews",
    location: "Plimto Beach, United States",
    latest: "Latest Reviews",
    logoBg: "bg-[#E8E6B8]",
    logoText: "boomerang\nTAGS",
  },
];
function CompanyCard({ item }) {
  return (
    <div className="rounded-[14px] bg-slate-100 px-5 py-5">

      {/* TOP SECTION */}
      <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">

        {/* LEFT SIDE */}
        <div className="flex gap-3">

          {/* IMAGE */}
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[10px] overflow-hidden">
            <Image
              src="/images/smileFace.svg"
              alt="logo"
              width={50}
              height={50}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* TEXT CONTENT */}
          <div>

            {/* STARS */}
            <div className="flex items-center gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-[23px] w-[23px] items-center justify-center bg-[#00B67A]"
                >
                  <img src="/images/stars.svg" alt="star" />
                </div>
              ))}
            </div>

            {/* NAME */}
            <h3 className="mt-1.5 font-semibold text-[20px] text-black leading-tight">
              {item.name}
            </h3>

            {/* WEBSITE */}
            <p className="mt-1 text-[11px] text-gray-500">
              {item.website}
            </p>

          </div>
        </div>

        {/* RIGHT BUTTON (FIXED MOBILE) */}
        <button className="shrink-0 rounded-full bg-[#D6E3EF] px-3 sm:px-4 py-1.5 text-[11px] sm:text-[12px] font-medium text-black shadow-sm whitespace-nowrap">
          Most Relevant
        </button>

      </div>

      {/* DIVIDER */}
      <div className="w-full h-[1px] mt-6 bg-[#E5E7EB]"></div>

      {/* SECOND ROW */}
      <div className="mt-4 flex items-center justify-between flex-wrap gap-y-2">

        {/* LEFT */}
        <div className="flex items-center gap-3 text-[14px] text-[#7A8597]">
          <p>
            TrustScore{" "}
            <span className="text-[#1877F2] font-medium">
              {item.score}
            </span>
          </p>

          <span className="text-[#C4C4C4]">|</span>

          <p className="text-black">{item.reviews}</p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 text-[14px] text-[#7A8597]">

          <img src="/images/global.svg" className="w-[16px] h-[16px]" />
          <img src="/images/sms.svg" className="w-[16px] h-[16px]" />

          <span className="text-[#C4C4C4]">|</span>

          <span className="text-[#9AA3B2]">
            Pet Supply Store
          </span>

        </div>
      </div>

      {/* LOCATION ROW */}
      <div className="mt-3 flex items-center justify-between flex-wrap gap-y-2">

        <div className="flex items-center gap-2 text-[14px] text-[#7A8597]">
          <img src="/images/location.svg" className="w-[16px] h-[16px]" />
          <span>{item.location}</span>
        </div>

        <button className="flex items-center gap-1 text-[14px] text-[#1877F2] font-medium">
          <img src="/images/bbr2.svg" alt="" />
        </button>

      </div>

    </div>
  );
}
function FilterRow({ label, hasBorder = true, icon = false }) {
  return (
    <div
      className={`flex items-center justify-between py-2 mt-1 text-[18px] text-[#4B5563] ${
        hasBorder
          ? " border border-solid border-[rgba(210,219,228,1)] rounded-2xl p-2"
          : ""
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span>{label}</span>
        <img src="/images/not.svg" alt="" />
      
        <span className="text-[#C5C5C5]">|</span>
      </div>

      <div className="flex justify-between">
        <input type="checkbox" />
      </div>
    </div>
  );
}
export default function SingleCategorySection1() {
  return (
    <div className=" bg-[url('/images/Hero-bg.svg')] pb-5 bg-cover bg-start">
      <div className="max-w-7xl px-10 mx-auto h-full">
        <div className="pt-20  lg:pb-[0px] sm:pb-[0px] lg:pb-[0px]">
          <div className="text-center mb-[40px] sm:mb-[52px] lg:mb-[68px]">
            <p className="text-[12px] sm:text-[16px] font-light leading-[1.4] mb-7.5">
              <span className="text-gray-400">Homepage</span>
              <span className="mx-1 text-gray-400">›</span>
              <span className="text-gray-400 font-medium">Categories</span>
              <span className="mx-1 text-gray-400">›</span>
              <span className="text-[#17253F] font-medium">Animals & Pets</span>
            </p>

            <h2 className="text-[#17253F] mb-10 font-semibold text-[30px] leading-[1.15] sm:text-[40px] lg:text-[50px]">
              What are you looking for?
            </h2>

            <div className="flex items-start justify-between flex-wrap gap-4 sm:my-0 my-10 mb-8">
              <h1 className="font-semibold text-[22px] sm:text-[26px]md:text-[32px] lg:text-[38px] max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-full">
                What you are looking for?
              </h1>

              <button className="flex items-center justify-center border-[1.5px] border-[#04DA8D] rounded-full gap-1 font-medium text-center text-[14px] sm:text-[16px] lg:text-[18px] w-[120px] sm:w-[135px] lg:w-[150px] h-[36px] sm:h-[40px] lg:h-[43px] cursor-pointer">
                See More
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:mt-10 mt-0 grid grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)] xl:gap-8">
          <div>
            <div className="rounded-[6px]  border border-solid border-black/20 bg-white">
              <div className="flex items-center justify-between border-b border-[#ECECEC] px-4 py-3">
                <span className="font-poppins font-semibold text-[20px] leading-none text-center [leading-trim:cap-height] tracking-normal text-black">
                  Filters
                </span>
                <button className="text-[14px] font-poppins text-[#EF4444]">
                  Clear all filters
                </button>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-1.5">
                  <button className="rounded-full border border-solid border-black/10 bg-white px-2.5 py-1 text-[16px] text-balck">
                    Any
                  </button>
                  <button className="rounded-full border border-[#BFE8D8] bg-[#CBF0E4] px-2.5 py-1 text-[16px] text-black">
                    3.0+
                  </button>
                  <button className="rounded-full border border-solid border-black/10 bg-white px-2.5 py-1 text-[16px] text-black">
                    4.0+
                  </button>
                  <button className="rounded-full border border-solid border-black/10 bg-white px-2.5 py-1 text-[16px] text-black">
                    4.5+
                  </button>
                </div>

                <div className="mt-4 rounded-[6px] border border-solid border-[rgba(210,219,228,1)] bg-white px-3 py-2.5  font-poppins font-normal text-[18px] leading-none tracking-normal text-black">
                  <div className="flex items-center justify-between">
                    <span>United States</span>
                    <img src="/images/dropdown.svg" alt="" />
                  </div>
                </div>

                <div className="mt-2 rounded-[6px] border border-solid border-[rgba(210,219,228,1)] bg-white px-3 py-2.5 text-[16px] text-black/50">
                  <div className="flex items-center justify-between">
                    <span> City or ZIP code</span>
                  </div>
                </div>

                <div className="mt-4">
                  <FilterRow label="Verified" icon />
                  <FilterRow label="Claimed" icon />
                </div>
                <div>
                  <div className="flex gap-5">
                    <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">
                      Animal health
                    </button>
                    <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">
                      Cats & Dogs
                    </button>
                  </div>
                  <div className="flex gap-5">
                    <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">
                      Pet Stores
                    </button>
                    <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">
                      Horses & Riding
                    </button>
                  </div>
                  <div className="flex gap-5">
                    <button className="border border-solid text-[14px] px-2 border-black/10 rounded-2xl p-1 mt-2">
                      Animal Parks & Zoo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[14px] font-sans font-normal leading-none tracking-normal text-black">
                1–20 of 1,770 results
              </p>

              <div className="flex items-center gap-2">
                <span className="font-sans font-normal text-[14px] leading-none tracking-normal text-black">
                  Sort by
                </span>
                <button className="flex items-center gap-5 rounded-[6px] border border-solid border-slate-200 bg-white px-3 py-2 text-[18px] text-black">
                  Most relevant
                  <span>
                    <img src="/images/dropdown.svg" alt="" />
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {companies.map((item) => (
                <CompanyCard key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-8  flex items-center justify-center gap-2 text-[10px] text-[#6B7280]">
              <button className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-black text-white">
                1
              </button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <span>...</span>
              <button>15</button>
              <button className="text-[#9CA3AF]">›</button>
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-[764px] mx-auto text-center ">
          <h2 className="font-'Poppins' font-semibold text-[26px] leading-[70px] tracking-[0%] text-[#17253f]">
            Popular Searches
          </h2>

          <div className="mt-5   flex flex-wrap items-center justify-center gap-2">
            {[
              "Horse & Riding",
              "Cats & Dogs",
              "Animal Parks & Zoo",
              "Animal Health",
              "Cats & Dogs",
              "Pet Stores",
              "Horse & Riding",
              "Animal Parks & Zoo",
            ].map((tag, i) => (
              <button
                key={i}
                className="rounded-full font-Poppins font-normal text-[17.91px] leading-[100%] tracking-[0%] border border-solid border-slate-200  bg-white px-4 py-2 text-black"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
