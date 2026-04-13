
import HeroPage from "./heropage/page";

import TopPickForYou from "@/components/heroPage/topPickForYou";
import InsuranceCompany from "@/components/heroPage/InsuranceCompany/InsuranceCompany";
import Footer from "@/components/Footer/Footer";

import OwnBusiness from "@/components/heroPage/ownBusiness";

import Discover from "@/components/heroPage/discover";

import LikeDislike from "@/components/heroPage/likeDislike";

export default function Home() {
  return (
    <>
      <HeroPage />
      <TopPickForYou />
      <InsuranceCompany />
      <LikeDislike />
      <OwnBusiness />
      <Discover />
      <Footer />
    </>
  );
}
