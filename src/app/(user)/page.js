import NavBar from "@/components/NavBar";
import LookingCard from "@/components/cards/lookingCard";
import ReviewCard from "@/components/cards/reviewCard";
import TopBankCard from "@/components/cards/topBankCard";
import TopPicksCard from "@/components/cards/topPicksCard";
import TextField from "@/components/textField/textField";
import HeroPage from "./heropage/page";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import TopPickForYou from "@/components/heroPage/topPickForYou";
import InsuranceCompany from "@/components/InsuranceCompany/InsuranceCompany";
import Footer from "@/components/Footer/Footer";

import OwnBusiness from "@/components/heroPage/ownBusiness";
import Brought from "@/components/heroPage/brought";
import Section5 from "@/components/Footer/Section5";
import Discover from "@/components/heroPage/discover";
import Section3 from "@/components/heroPage/Section3";



export default function Home() {
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
    <>
      <NavBar />
      <HeroPage />
      <TopPickForYou />
      <InsuranceCompany />
      <Section3 />
    <OwnBusiness />
   <Discover />

    <Footer/>
{/* <Marquee className="p-4">
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
<TextField /> */}
  
  {/* <div className="bg-red-500">
       <TopPicksCard />
       <TopBankCard />
  </div>
 
  <TopPicksCard /> */}

    </>
  );
}
