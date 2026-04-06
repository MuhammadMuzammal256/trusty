"use client";

import Image from "next/image";

export default function ReviewCard() {
  return (
    <div className="bg-white border border-[rgba(23,37,63,0.1)] rounded-[23.74px] w-[211px]   shadow-lg overflow-hidden">
      <div className="flex gap-3 p-3.5">
        <div className="relative w-[35.72px] h-[35.72px] rounded-full overflow-hidden">
          <Image
            src="/images/top-img.svg"
            alt="profile"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="font-[500] text-[15.19px] font-poppins">Hayley M</h3>

          <p className="flex items-center gap-1 text-[11.39px] text-gray-500 font-poppins">
            Top Contributor
            <img
              src="/images/paid-star.svg"
              alt="badge"
              className="w-[12px] h-[12px]"
            />
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 px-[14px] pt-[9px] pb-[10px]">
        <img className="h-[14.52px]" src="/images/mul-star.svg" alt="rating" />
        <span className="text-[11.46px] font-poppins">5.0</span>
      </div>

      <p className="px-[14px] pb-[18px] text-[12.34px] leading-[17.09px] break-words overflow-hidden w-full line-clamp-3 font-poppins">
        Loved the atmosphere & food! The truffle pasta was amazing, and the
        service was excellent.
      </p>

      <div className="border-t border-[rgba(23,37,63,0.1)] px-[14px] py-[10px] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <img className="h-[38px]" src="/images/b-img.svg" alt="" />

          <span className="font-[600] text-[12.34px] font-poppins">
            The Gourmet <br /> Grill
          </span>
        </div>

        <img className="h-[18px] mr-[2px]" src="/images/tick.svg" alt="" />
      </div>
    </div>
  );
}
