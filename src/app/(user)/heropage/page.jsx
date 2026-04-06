import LookingCard from "@/components/cards/lookingCard";
import ReviewCard from "@/components/cards/reviewCard";
import MarqueTag from "@/components/heroPage/marqueTag";
import InsuranceCompany from "@/components/InsuranceCompany/InsuranceCompany";
import TextField from "@/components/textField/textField";

export default function FHeroPage() {
  return (
    <div className="bg-[url('/images/Hero-bg.svg')] bg-cover bg-start">
      <div className="px-13.25 py-18.5 mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between h-full">
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
          <div className="flex flex-col items-center pt-[53px] mx-auto text-center ">
            <h1 className="text-[#1E293B]">
              <span className="block  font-semibold text-[50px] leading-[70px] text-center">
                Find Top Businesses & Services,
              </span>

              <span className="relative block  font-bold text-[50px] leading-[70px] text-center">
                Trusted by Your Reviews
                <img
                  src="/images/ring.svg"
                  alt=""
                  className="
        hidden lg:block
        absolute
        top-[10px]
        right-[-90px]
        w-[82px]
      "
                />
              </span>
            </h1>

            <p
              className="
    mt-4

    font-normal

 
    text-center
    text-[#64748B]
      text-[24px]
    max-w-[700px]
    mx-auto
  "
            >
              Millions of unbiased reviews. Trusted by 700 Million+ users
            </p>

         
            <div
              className="
              mt-8 md:mt-5
              w-full 
              max-w-full sm:max-w-[500px] md:max-w-[650px] lg:max-w-[720px]
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
