import Marquee from "react-fast-marquee";
import LookingCard from "../cards/lookingCard";

export default function MarqueTag() {
      const cards = [
    {
      imageSrc: "/images/electronics.svg",
      altText: "Electronics",
      title: "Electronics",
    },
    {
      imageSrc: "/images/clothing.svg",
      altText: "Clothing",
      title: "Clothing",
    },
    {
      imageSrc: "/images/estate.svg",
      altText: "Real Estateports",
      title: "Real Estate",
    },
    { imageSrc: "/images/hotels.svg", altText: "Hotels", title: "Hotels" },
    { imageSrc: "/images/bank.svg", altText: "Bank", title: "Bank" },
    {
      imageSrc: "/images/restu.svg",
      altText: "Restaurants",
      title: "Restaurants",
    },
    {
      imageSrc: "/images/sofa.svg",
      altText: "Furniture Store",
      title: "Furniture Store",
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-10 flex items-start justify-between ">
        <h1
          className="
          
            font-semibold
            text-[38px]
          
          "
        >
          What you are looking for?
        </h1>
<button
  className="
    flex items-center justify-center
    border-[1.5px] border-[#04DA8D]
    rounded-full
    gap-1
    text-[18px]  font-medium
    text-center
    w-[150px]
    h-[43px]
    mb-12
   
  "
>
  See More
  <span className="ml-2">→</span>
</button>
      </div>
      <Marquee className="p-4">
   <div className="flex gap-4 ">
        {cards.map(function (ele, index) {
          return (
            <LookingCard
              key={index}
              imageSrc={ele.imageSrc}
              altText={ele.altText}
              title={ele.title}
            />
          );
        })}
      </div>

</Marquee>
<div className="max-w-7xl  px-4 mt-20 border-b border-black opacity-5 w-full ">

</div>
    </div>
  )
}