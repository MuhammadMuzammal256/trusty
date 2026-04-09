import Image from "next/image";

export default function WorkSection3() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-10  ">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_412px] md:gap-[38px]">
          <div className="max-w-[490px]">
            <h2 className=" font-semibold lg:text-[34px] md:text-[23px] text-[20px] leading-[47px] tracking-[0%] text-[#17253F]">
              A neutral space for dialogue and collaboration
            </h2>

            <p className="mt-3 text-[13px] sm:text-[16px]  font-light text-base leading-[25px] tracking-normal [leading-trim:cap-height] text-[#17253F]">
              &quot;We&apos;re open to all. We believe this is the best way to help
              consumers make informed decisions when buying products and
              services.&quot;
            </p>

            <p className="mt-4 text-[16px]  font-semibold text-base leading-6.25 tracking-normal [leading-trim:cap-height] text-[#17253F]">
              Ben Martin Director of Privacy
            </p>
          </div>
          <div className="overflow-hidden  rounded-lg">
            <Image
              src="/images/smileFace.svg"
              alt="Woman"
              width={400}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}