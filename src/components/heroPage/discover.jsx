import Image from "next/image";
import TextField from "../cards/textField/textField";
export default function Discover() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto flex max-w-[1150px] flex-col items-center px-4 text-center">
       
        <h2 className="max-w-[700px] text-[38px] font-bold leading-[54px] tracking-[-1px] text-[#1F2A44] md:text-[52px]">
          Brought Something Recently
        </h2>

    
        <p className="mt-4 max-w-[540px] text-[16px] leading-[30px] text-[#6B7280]">
          Recently made a purchase? Share your experience to help
          others &amp; provide feedback to businesses!
        </p>

     
        <div className="relative   w-19">
          <Image
            src="/images/downRings.svg"
            alt="hero"
            width={110}
            height={60}
            className="absolute right-0 lg:top-[-100] lg:left-98 md:top-[-70] md:left-80 top-[-130] left-30"
          />
        </div>
       
        <div className="mt-3 flex w-full max-w-[860px] ">
         
        <TextField />
        </div>

        
      </div>
    </section>
  );
}