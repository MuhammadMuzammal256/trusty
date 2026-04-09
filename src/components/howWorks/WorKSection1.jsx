import Image from "next/image";

function ConsumerIcon() {
  return (
    <Image
      src="/images/c1.svg"
      alt="person"
      width={40}
      height={40}
      className="shrink-0"
    />
  );
}

function BusinessIcon() {
  return (
    <Image
      src="/images/c2.svg"
      alt="person"
      width={30}
      height={30}
      className="shrink-0"
    />
  );
}

function InfoCard({ type = "consumer", title, text }) {
  return (
    <div className="rounded-[18px] border border-[#DCE3EA] bg-[rgba(239,243,247,1)] p-5 shadow-[0_1px_0_rgba(16,24,40,0.02)]">
      <div className="flex items-center justify-center gap-3 rounded-[14px] border border-[#D7DEE6] bg-white px-2 py-4">
        {type === "business" ? <BusinessIcon /> : <ConsumerIcon />}
        <h3 className="text-[18px] sm:text-[20px] font-semibold text-[rgba(23,37,63,1)]">
          {title}
        </h3>
      </div>

      <p className="mt-5 text-[15px] leading-[22px] text-black">
        {text}
      </p>

      <button className="mt-5 inline-flex items-center gap-1 text-[16px] font-semibold text-[rgba(23,37,63,1)]">
        View Details <span>→</span>
      </button>
    </div>
  );
}

export default function WorkSection1() {
  return (
    <section className="bg-gradient-to-b from-[#7EA5ED]/5 to-white py-20 ">
      <div className="mx-auto max-w-[60rem] px-10">
        <div className="text-center">
                 <p className="text-[12px] sm:text-[16px] font-light leading-[1.4] mb-7.5">
  <span className="text-gray-400">Homepage</span>
  <span className="mx-1 text-gray-400">›</span>
  <span className="text-[#17253F] font-medium">How it Works</span>
</p>

          <h1 className="mt-3 font-sans font-semibold text-[32px] leading-[42px] text-[#17253F] sm:text-[40px] sm:leading-[54px] md:text-[48px] md:leading-[64px] lg:text-[50px] lg:leading-[70px]">
            We&apos;re open to all.
          </h1>

          <p className="mx-auto px-10 mt-4 max-w-[760px] text-center font-poppins text-[16px] leading-[28px] font-normal tracking-normal text-[#17253F] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[32px]">
            A platform where customers rate businesses, sharing reviews to guide
            others and help companies improve.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[14px]">
          <Image
            src="/images/groupPic.svg"
            alt="People working together"
            width={900}
            height={520}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div className="mt-8">
          <h2 className="text-[22px] md:text-[24px] font-bold   text-[#252525]">
            How do reviews get on Trusty Feedback?
          </h2>

          <div className="mt-4 space-y-4  text-[16px] sm:text-[17px] leading-[24px] font-light tracking-normal text-[rgba(23,37,63,1)]">
            <p>
              Reviews on Trusty Feedback are written by consumers from across
              the globe. Anyone who has had a recent buying or service
              experience can write a review, for free, as long as they have a
              Trusty Feedback user account, follow our Guidelines for Reviewers,
              and don’t have a conflict of interest with the business
              they&apos;re reviewing. A user account must be connected to an
              email address so we can get in touch for account- and service-
              related issues.
            </p>

            <p>
              All reviews about a business are shown on their profile page. This
              is where consumers can read and write reviews, and find other
              relevant information about the business, such as the overall
              TrustScore and star rating.
            </p>

            <p>A Trusty Feedback review can start in two ways:</p>
          </div>

          <div className="mt-8 md:px-0 grid grid-cols-1 gap-5 md:grid-cols-3 ">
            <InfoCard
              type="consumer"
              title="Consumers"
              text="Consumers who've had an experience with a business can create a Trustpilot account and write an unsolicited review. We call these “organic reviews”."
            />

            <InfoCard
              type="business"
              title="Businesses"
              text="Consumers who've had an experience with a business can create a Trustpilot account and write an unsolicited review. We call these “organic reviews”."
            />

            <InfoCard
              type="consumer"
              title="Consumers"
              text="Consumers who've had an experience with a business can create a Trustpilot account and write an unsolicited review. We call these “organic reviews”."
            />
          </div>
        </div>
      </div>
    </section>
  );
}