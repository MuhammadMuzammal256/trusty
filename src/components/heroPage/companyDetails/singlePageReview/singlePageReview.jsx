import Footer from "@/components/Footer/Footer";
import Image from "next/image";




export default function SinglePageReview() {
  return (
    <section className="w-full bg-[url('/images/Hero-bg.svg')] bg-cover bg-start">
      <div className="mx-auto  max-w-7xl px-10   py-5 md:py-[60px]">
                         <p className="text-[12px] sm:text-[16px] font-light leading-[1.4] mb-10">
  <span className="text-gray-400">Homepage</span>
  <span className="mx-1 text-gray-400">›</span>
  <span className="text-[#17253F] font-medium">Top Listing</span>
</p>

        <div className="mt-5 rounded-[18px] bg-[#eff3f7] p-4 sm:p-5 md:p-[16px] shadow-[0_0_0_1px_rgba(15,23,42,0.02)]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                <Image
                  src="/images/top-img.svg"
                  alt="Diana S"
                  width={50}
                  height={50}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div>
                <h3 className="text-[16px] mt-2 font-semibold leading-none text-black">
                  Diana S
                </h3>
                <p className="mt-[5px] text-[15px] leading-none text-black">
                  1 Review
                </p>
              </div>
            </div>

            <div className="pt-[6px]">
             
        <div className="flex flex-wrap gap-1">
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src="/images/stars.svg"
              alt="star"
              className="h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7"
            />
          ))}
        </div>
            </div>
          </div>

          <h2 className="mt-5  font-sans font-bold text-[16px] leading-none  capitalize text-black">
            Orders Never Received
          </h2>

          <p className="mt-4 max-w-full leading-[21px]  font-light text-base  tracking-normal text-black">
            I never receive the orders from remix. First two times I ordered only the
            cleanup bag. I only found out that they were returned after I installed
            the Fan Courier app for an unrelated order and saw the history. Third
            time I double/triple checked that the delivery address and phone number
            are correct. Once again, in the Fan Courier app I could see the package
            on its way. Fan Courier is taking forever to respond, Remix same. The
            order was paid in advance, hope I’ll someday see either my money back or
            my order but until then I am highly disappointed by the services. Hoping
            that they will respond to my email after this review because it seems
            they are more active here than on customer support.
          </p>
            <p className="mt-3 text-[14px] text-[#7B8794]">
          <span className="font-semibold text-[#4A4A4A]">
            Date of experience:
          </span>{" "}
          <span className="font-normal">October 13, 2024</span>
        </p>


          <div className="mt-4 border-t border-[#D8E0E7] pt-4">
                  <div className="flex items-center gap-4 text-[#7B8794]">
            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-[#1A202C]"
            >
              <img
                src="/images/thumb.svg"
                alt="Useful"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <span className="font-medium text-[16px]">
                Useful
              </span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-1 hover:text-[#1A202C]"
            >
              <img
                src="/images/share.svg"
                alt="Share"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <span className="font-medium text-[16px]">
                Share
              </span>
            </button>
          </div>
          </div>

          <div className="mt-6 rounded-[20px] bg-white p-0">
            <div className="rounded-[14px] border-l-[3px] border-[#04DA8D] px-4 py-4 sm:px-5 sm:py-5">
              <h4 className="font-sans font-bold text-[16px] leading-none text-black">
                Reply From Remixshop.Com
              </h4>

              <p className="mt-4 max-w-[650px]  leading-[21px] font-light text-base  tracking-normal [leading-trim:cap-height] text-black">
                Thank you for your review. We&apos;ll continue working on improving
                our products and services and we apologize for any inconvenience
                caused.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer className="rounded-tl-[25px] "/>
    </section>
  );
}