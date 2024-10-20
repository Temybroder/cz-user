import { AppleIcon, GooglePlaytoreIcon } from "@/app/icons";
import Image from "next/image";

const OrderInstantly = () => {
  return (
    <div className="relative h-auto w-full overflow-hidden rounded-[32px] bg-[#363031] p-8 text-white md:h-[392px] md:p-8">
      <Image
        src="/images/meals/donut.png"
        alt="donut"
        width={99}
        height={96}
        className="absolute left-0 top-0 md:left-4 md:top-0"
      />

      <div className="flex h-full flex-col md:flex-row md:items-center md:justify-between">
        <div className="z-10 mt-[60px] flex flex-col items-center justify-center md:w-1/2 md:items-start md:justify-start md:pr-4">
          <h2 className="j mb-3 w-[217px] text-center text-[1.75rem] font-bold text-white md:mb-6 md:w-[369px] md:text-left md:text-4xl lg:text-5xl">
            Order instantly with just a click
          </h2>

          <div className="flex justify-center space-x-4 md:justify-start">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#231F20]">
              <GooglePlaytoreIcon width={21} height={27} />
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#231F20]">
              <AppleIcon width={23} height={28} className="fill-white" />
            </div>
          </div>
        </div>

        <div className="relative h-[400px] md:left-10 md:top-12 md:mt-0 md:h-full md:w-1/2 lg:-left-[10px] lg:top-0">
          <Image
            src="/images/landing-page/iphone2.png"
            alt="large iphone"
            width={292}
            height={362}
            className="absolute bottom-0 right-0 z-20 md:bottom-4 md:right-4 lg:-bottom-8"
          />
          <Image
            src="/images/landing-page/iphone1.png"
            alt="small iphone"
            width={260}
            height={272}
            className="absolute -bottom-4 -left-7 z-30 md:bottom-4 lg:-bottom-8 lg:left-40"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderInstantly;
