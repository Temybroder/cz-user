import Image from "next/image";

const PartnerWithConzooming = () => {
  return (
    <section className="container text-[#231F20] lg:px-20">
      <h2 className="mb-8 w-[180px] text-center text-2xl font-bold md:w-[550px] md:text-left md:text-5xl">
        Partner with Conzooming for growth
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-1 md:row-span-2">
          <div className="h-full rounded-3xl bg-[#FF6666] p-8 text-white">
            <span className="mb-[14px] inline-block rounded-3xl bg-[#FBCACA] px-3 py-1 text-xs text-[#FF2424] md:mb-5 md:text-base">
              Menu management
            </span>
            <h3 className="mb-2 text-lg font-bold md:mb-4 md:text-[2rem]">
              Effortlessly manage your menu
            </h3>
            <p className="mb-6 text-xs md:text-lg">
              Create multiple categories, add options to menu items, and mark
              items out of stock
            </p>
            <div className="relative top-[34px] flex justify-center md:top-[59px] lg:top-[59px] xl:top-[109.8px]">
              <Image
                src="/images/partners/iphone1.png"
                alt="Menu management interface on an iPhone"
                width={316}
                height={264}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-3xl bg-[#FFBC66] p-8 md:col-span-2 md:flex-row md:justify-between md:pb-0">
          <div>
            <span className="mb-[14px] inline-block rounded-3xl bg-[#FDEDD8] px-3 py-1 text-xs text-[#231F20] md:mb-5 md:text-base">
              Receive & withdraw
            </span>
            <h3 className="mb-2 text-lg font-bold text-[#231F20] md:mb-4 md:w-72 md:text-[2rem]">
              Collect payment and withdraw
            </h3>
            <p className="mb-6 text-xs md:w-[295px] md:text-lg">
              Seamlessly collect and withdraw your earnings with ease, ensuring
              fast, secure transactions at any time
            </p>
          </div>

          <div className="relative top-8 flex justify-center md:top-0">
            <Image
              src="/images/partners/iphone2.png"
              alt="Payment and withdrawal interface on an iPhone"
              width={316}
              height={264}
              className="rounded-lg object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col rounded-3xl bg-[#EFF0F0] p-8 md:col-span-2 md:flex-row md:justify-between md:pb-0">
          <div>
            <span className="mb-4 inline-block rounded-3xl bg-[#D3D5D5] px-3 py-1 text-sm text-[#231F20] md:mb-5 md:text-base">
              Earning target
            </span>
            <h3 className="mb-2 text-lg font-bold text-[#231F20] md:mb-4 md:w-[180px] md:text-[2rem]">
              Set earning target
            </h3>
            <p className="mb-6 text-xs text-[#AEB2B2] md:w-[295px] md:text-lg">
              Define your earning goals and track progress effortlessly, helping
              you stay focused and motivated
            </p>
          </div>

          <div className="relative top-8 flex justify-center md:top-0">
            <Image
              src="/images/partners/iphone3.png"
              alt="Earning target interface on an iPhone"
              width={316}
              height={264}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithConzooming;
