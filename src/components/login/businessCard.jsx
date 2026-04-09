"use client";

export default function BusinessCard() {
  return (
    <section className="mx-10 bg-white ">
      
      <div className="  rounded-tl-[25px] rounded-tr-[25px]  bg-[#16284A]">
        <div className="mx-auto max-w-7xl px-10 py-10 md:px-12 md:py-14 lg:px-[40px]">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="max-w-[470px]">
              <h2 className="mb-5 text-[34px] font-semibold leading-[1.08] text-white lg:text-[40px]">
                Own a Business? Sign Up Now
                <br />
                Gain Genuine Reviews!
              </h2>

              <p className="mb-8 max-w-[460px] text-[15px] leading-[1.6] text-white">
                Register with us to build trust through authentic reviews.
                Showcase your services, engage with your audience, and grow your
                reputation with real feedback.
              </p>

              <button className="rounded-full bg-[#04DA8D] px-8 py-4 text-[16px] font-semibold text-[#17253F] hover:opacity-95">
                Get Started
              </button>
            </div>

            <div className="w-full max-w-[500px]">
              <img
                src="/images/top.svg"
                alt="business"
                className="w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}