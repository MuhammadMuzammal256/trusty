import LookingCard from "@/components/cards/lookingCard";
import ReviewCard from "@/components/cards/reviewCard";
import MarqueTag from "@/components/heroPage/marqueTag";
import InsuranceCompany from "@/components/heroPage/InsuranceCompany/InsuranceCompany";
import TextField from "@/components/cards/textField/textField";

export default function FHeroPage() {
  return (
    <div className="bg-[url('/images/Hero-bg.svg')] bg-cover bg-start">
      <div className="px-13.25 py-18.5 mx-auto max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between h-full">
        <div className="mr-4 p-0 hidden lg:block ">
          <img
            src="/images/ring-left.svg"
            className="absolute -top-6 -left-6 z-0"
            alt=""
          />
          <div className="relative z-10">
            <ReviewCard />
          </div>
        </div>
<div>
  <div className="flex flex-col items-center pt-[40px] sm:pt-[45px] md:pt-[50px] lg:pt-[53px] mx-auto text-center">
    
    <h1 className="text-[#1E293B]">
      
      <span className="block font-semibold 
        text-[28px] leading-[38px]
        sm:text-[34px] sm:leading-[46px]
        md:text-[42px] md:leading-[56px]
        lg:text-[50px] lg:leading-[70px]">
        Find Top Businesses & Services,
      </span>

      <span className="relative block font-bold 
        text-[28px] leading-[38px]
        sm:text-[34px] sm:leading-[46px]
        md:text-[42px] md:leading-[56px]
        lg:text-[50px] lg:leading-[70px]">
        
        Trusted by Your Reviews

        <img
          src="/images/ring.svg"
          alt=""
          className="
            hidden lg:block
            absolute
            top-[5px] md:top-[8px] lg:top-[10px]
            right-[-40px] md:right-[-60px] lg:right-[-90px]
            w-[50px] md:w-[65px] lg:w-[82px]
          "
        />
      </span>
    </h1>

    <p
      className="
        mt-3 sm:mt-4
        font-normal
        text-center
        text-[#64748B]

        text-[16px]
        sm:text-[18px]
        md:text-[20px]
        lg:text-[24px]

        max-w-[90%] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px]
        mx-auto
      "
    >
      Millions of unbiased reviews. Trusted by 700 Million+ users
    </p>

    <div
      className="
        mt-6 sm:mt-7 md:mt-5
        w-full 
        max-w-[90%]
        sm:max-w-[500px] 
        md:max-w-[650px] 
        lg:max-w-[720px]
      "
    >
      <TextField />
    </div>

  </div>
</div>

        <div className="pt-[155px] ml-4 p-0 hidden lg:block relative">
          <img
            src="/images/ring-right.svg"
            className="absolute -top-6 -right-6 z-0"
            alt=""
          />
          <div className="relative z-10">
              <ReviewCard />
          </div>
          
        </div>
      </div>
      <MarqueTag />
      
      
    </div>
  );
}
