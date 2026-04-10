"use client";

import TextField from "@/components/cards/textField/textField";
import CategoryCard from "./categoryCard";
import AboutSection5 from "@/components/aboutSections/AboutSection5";
import Footer from "@/components/Footer/Footer";

export default function CategorySection1() {
  return (
    <div className=" bg-[url('/images/Hero-bg.svg')] pb-5 bg-cover bg-start">
      <div className="max-w-7xl px-10 mx-auto h-full">
        <div className="pt-20  pb-[55px] sm:pb-[70px] lg:pb-[0px]">
          <div className="text-center mb-[40px] sm:mb-[52px] lg:mb-[68px]">
            <p className="text-[12px] sm:text-[16px] font-light leading-[1.4] mb-7.5">
              <span className="text-gray-400">Homepage</span>
              <span className="mx-1 text-gray-400">›</span>
              <span className="text-[#17253F] font-medium">Categories</span>
            </p>

            <h2 className="text-[#17253F] mb-10 font-semibold text-[30px] leading-[1.15] sm:text-[40px] lg:text-[50px]">
              What are you looking for?
            </h2>

            <TextField />
            <div className="flex items-start justify-between flex-wrap gap-4 sm:my-20 my-10 mb-8">
              <h1 className="font-semibold text-[22px] sm:text-[26px]md:text-[32px] lg:text-[38px] max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-full" >
                What you are looking for?
              </h1>

              <button
                className="flex items-center justify-center border-[1.5px] border-[#04DA8D] rounded-full gap-1 font-medium text-center  text-[14px] sm:text-[16px] lg:text-[18px] w-[120px] sm:w-[135px] lg:w-[150px] h-[36px] sm:h-[40px] lg:h-[43px] cursor-pointer" >
                See More
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
        <CategoryCard/>
        
      </div>
      <AboutSection5/>
        <Footer className="rounded-tl-[0px]  rounded-tr-[0px] " />
    </div>
  );
}
