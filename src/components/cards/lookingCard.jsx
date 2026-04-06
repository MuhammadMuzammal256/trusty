import Image from "next/image";

export default function LookingCard({ imageSrc, altText, title }) {
  return (
    <div className="
      flex flex-col bg-white 
      shadow-[0px_0px_25px_0px_rgba(23,37,63,0.1)] 
      
      w-[140px] sm:w-[160px] md:w-[170px] lg:w-45.5
      h-[130px] sm:h-[140px] md:h-[145px] lg:h-36.75
      
      py-6 sm:py-7 md:py-8.5
      rounded-[25px] 
      items-center justify-center
    ">
      <Image
        src={imageSrc}
        alt={altText}
        width={40}
        height={40}
        className="mb-2 sm:mb-3 md:mb-3.5"
      />

      <p className="font-normal text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-center text-[rgba(26,26,26,1)]">
        {title}
      </p>
    </div>
  );
}