import Marquee from "react-fast-marquee";
import LookingCard from "../cards/lookingCard";

export default function MarqueTag() {
  const cards = [
    { imageSrc: "/images/electronics.svg", altText: "Electronics", title: "Electronics" },
    { imageSrc: "/images/clothing.svg", altText: "Clothing", title: "Clothing" },
    { imageSrc: "/images/estate.svg", altText: "Real Estateports", title: "Real Estate" },
    { imageSrc: "/images/hotels.svg", altText: "Hotels", title: "Hotels" },
    { imageSrc: "/images/bank.svg", altText: "Bank", title: "Bank" },
    { imageSrc: "/images/restu.svg", altText: "Restaurants", title: "Restaurants" },
    { imageSrc: "/images/sofa.svg", altText: "Furniture Store", title: "Furniture Store" },
  ];

  return (
    <div className="w-full">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto 
        px-4 sm:px-6 md:px-8 lg:px-10
        flex items-start justify-between flex-wrap gap-4
        mb-8
      ">
     <h1
  className="
    font-semibold
    text-[22px]
    sm:text-[26px]
    md:text-[32px]
    lg:text-[38px]

    max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-full
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
            font-medium text-center
            
            text-[14px] sm:text-[16px] lg:text-[18px]
            w-[120px] sm:w-[135px] lg:w-[150px]
            h-[36px] sm:h-[40px] lg:h-[43px]
          "
        >
          See More
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Marquee */}
      <Marquee
        className="py-3 sm:py-4 "
        speed={40}
        pauseOnHover={true}
        gradient={false}
      >
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          {cards.map((ele, index) => {
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

      {/* Bottom line */}
      <div className="max-w-7xl mx-auto px-4 mt-10 sm:mt-14 md:mt-20 border-b border-black opacity-5 w-full"></div>
    </div>
  );
}