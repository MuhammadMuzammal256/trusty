

export default function singleCategorySection1() {
  return (
    <section className="w-full bg-[url('/images/Hero-bg.svg')] bg-cover bg-start">
      <div className="mx-auto  max-w-7xl px-10   py-5 md:py-[60px]">
                         <p className="text-[12px] sm:text-[16px] font-light leading-[1.4] mb-10">
  <span className="text-gray-400">Homepage</span>
  <span className="mx-1 text-gray-400">›</span>
  <span className="text-[#17253F] font-medium">Top Listing</span>
</p>

        <div className="mt-5 rounded-[18px] bg-[#eff3f7] p-4 sm:p-5 md:p-[16px] shadow-[0_0_0_1px_rgba(15,23,42,0.02)]">
          <div className="flex items-center justify-between gap-4">
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

              
            </div>

           
             
     
            </div>




        </div>
      </div>

    </section>
  );
}