"use client";

export default function OwnBusiness() {
  return (
    <section className="mx-10 bg-white px-0 py-4 md:py-6">
      <div className="mx-auto  rounded-[22px] bg-[#16284A] px-8 py-10 md:px-12 md:py-14 lg:px-[60px]">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row lg:px-10">
          
          <div className="max-w-[470px]">
            <h2 className="mb-5 text-[34px] font-semibold leading-[1.08] text-white lg:text-[40px]">
              Own a Business? Sign Up Now
             
           Gain Genuine Reviews!
            </h2>

            <p className="mb-8 max-w-[460px] text-[15px] leading-[1.6] text-white">
              Register with us to build trust through authentic reviews.
              Showcase your services, engage with your audience, and grow your
              reputation with real feedback.
            </p>

            <button className="rounded-full bg-[#04DA8D] px-8 py-4 text-[16px] font-semibold leading-none text-[#17253F] transition hover:opacity-95">
              Get Started
            </button>
          </div>


          <div>
            <img src="/images/top.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}