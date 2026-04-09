import BlogSection1 from "@/components/blogSections/blogSection1";
import BolgSection2 from "@/components/blogSections/blogSection2";
import BlogSection3 from "@/components/blogSections/blogSection3";
import Footer from "@/components/Footer/Footer";


export default function Blog() {

  return (
    <>

     <BlogSection1 />
     <BolgSection2 />
     <BlogSection3 />
      <Footer className="
     rounded-tl-[0px] 
       rounded-tr-[0px] 
     " />
    </> 
  );
}
