import Image from "next/image";

export default function LookingCard({ imageSrc, altText, title }) {
  return (
    <div className="flex flex-col bg-white shadow-[0px_0px_25px_0px_rgba(23,37,63,0.1)] w-45.5 h-36.75  py-8.5 rounded-[25px] items-center justify-center">
      <Image
        src={imageSrc}
        alt={altText}
        width={40}
        height={40}
        className="mb-3.5"
      />
      <p className="font-normal text-[18px] text-center text-[rgba(26,26,26,1)]">
        {title}
      </p>
    </div>
  );
}
