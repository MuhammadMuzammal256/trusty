"use client";

import Image from "next/image";
import { useState } from "react";
import TextField from "../cards/textField/textField";

export default function AboutSection5() {
 

  return (
    <div className="px-10 ">
      <div className="w-full  bg-[#05442e] rounded-[25px] mx-auto md:px-20 py-20">
        <div className="mx-auto flex max-w-287.5 flex-col items-center px-4 text-center">
          <h2 className="  font-'Poppins' font-semibold lg:text-[38px] md:text-[30px] text-[25px] leading-[100%] tracking-[0%] text-center  text-white md:text-[52px]">
            Brought Something Recently
          </h2>

          <p className="mt-4 mb-10 max-w-100 font-'Poppins' font-normal text-base leading-7.5 tracking-normal text-center [leading-trim:cap-height] text-[16px] text-white">
            Recently made a purchase? Share your experience to help others
            &amp; provide feedback to businesses!
          </p>

          <TextField />
        </div>
      </div>
    </div>
  );
}
