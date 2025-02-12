import Image from "next/image";

const JoinAsRider = () => {
  return (
    <section className="container text-[#231F20] lg:px-20">
      <div className="grid place-items-center md:place-items-start">
        <h2 className="mb-8 w-[180px] text-center text-2xl font-bold md:w-[550px] md:text-left md:text-5xl">
          Why you should join Conzooming as a rider
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-start-3 md:row-span-2">
          <div className="h-full rounded-3xl bg-[#28C2C2] p-8 text-white">
            <span className="mb-[14px] inline-block rounded-3xl bg-[#C4F3F3] px-3 py-1 text-xs text-[#21A0A0] md:mb-5 md:text-base">
              easy & secure
            </span>
            <h3 className="mb-2 text-lg font-bold md:mb-4 md:text-[2rem]">
              Secured withdrawals
            </h3>
            <p className="mb-6 text-xs md:text-lg">
              Enjoy hassle-free withdrawals directly to your account, ensuring
              quick access to your earnings whenever you need them
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

        <div className="flex flex-col rounded-3xl bg-[#FAE1C1] p-8 md:col-span-2 md:row-start-1 md:flex-row md:justify-between md:pb-0">
          <div>
            <span className="mb-[14px] inline-block rounded-3xl bg-[#FDEDD8] px-3 py-1 text-xs text-[#231F20] md:mb-5 md:text-base">
              earn more
            </span>
            <h3 className="mb-2 text-lg font-bold text-[#231F20] md:mb-4 md:w-72 md:text-[2rem]">
              Increased earning possibilities
            </h3>
            <p className="mb-6 text-xs md:w-[295px] md:text-lg">
              Enjoy the opportunity to earn competitive income with flexible
              hours, maximising your earnings while balancing your schedule.
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

        <div className="flex flex-col rounded-3xl bg-[#FEF1F1] p-8 md:col-span-2 md:row-start-2 md:flex-row md:justify-between md:pb-0">
          <div>
            <span className="mb-4 inline-block rounded-3xl bg-[#FBCACA] px-3 py-1 text-sm text-[#231F20] md:mb-5 md:text-base">
              support
            </span>
            <h3 className="mb-2 text-lg font-bold text-[#231F20] md:mb-4 md:w-[180px] md:text-[2rem]">
              24/7 Support
            </h3>
            <p className="mb-6 text-xs text-[#AEB2B2] md:w-[295px] md:text-lg">
              Need assistance or facing an issue? Just chat with us through the
              rider app
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

export default JoinAsRider;
