import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-5 lg:px-[60px]">
      <div className="relative flex flex-col rounded-3xl bg-[#231F20] px-6 text-white md:flex-row md:justify-between md:px-10 md:pb-[123px] md:pt-[119px] lg:pb-[150px] lg:pt-[140px]">
        <div className="grid place-items-center pt-[53px] md:w-1/2 md:max-w-[379px] md:place-items-start md:pt-0">
          <Button className="mb-4 rounded-[20px] bg-white text-xs font-medium text-[#231F20] hover:bg-white md:mb-0 md:text-base">
            <div className="relative mr-1 h-3 w-3 rounded-full bg-red-500">
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"></div>
            </div>
            For all consumables
          </Button>
          <h1 className="mb-4 grid text-center text-4xl font-bold leading-tight md:text-left md:text-[56px] md:leading-[64px] lg:text-[72px] lg:leading-[80px]">
            Need fast deliveries?
          </h1>
          <p className="mb-8 text-center text-sm leading-normal md:text-left md:text-lg lg:text-xl">
            Get food, drugs, and groceries delivered to your doorstep easily
          </p>
          <Button
            type="button"
            className="mb-[50px] rounded-3xl bg-red-500 bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] px-[56.5px] py-[14.5px] text-base font-semibold text-white lg:px-[70px] lg:py-[18px]"
          >
            Get Started
            <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
              <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
            </p>
          </Button>
        </div>

        <div className="relative flex items-center justify-center md:w-1/2 md:flex-none md:items-start">
          <div className="relative">
            <div className="relative md:h-[434px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute -left-4 top-0 hidden h-full w-2 rounded-l-3xl bg-gradient-to-b from-[#E30000] to-[#FFB31E] lg:block"></div>
              <div className="absolute bottom-0 left-0 hidden h-4 w-2 bg-gradient-to-r from-[#E30000] to-[#FFB31E] lg:block"></div>
              <Image
                src="/images/landing-page/deliver-man.png"
                alt="Delivery man"
                width={266}
                height={260}
                className="z-10 object-cover lg:h-[500px] lg:w-[500px]"
              />
            </div>
          </div>

          <div className="absolute -bottom-[40px] hidden lg:left-10 lg:block">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FEF1F1] md:h-28 md:w-28 lg:h-32 lg:w-32">
              <Image
                src="/images/landing-page/pills.png"
                alt="Drugs supplement"
                width={500}
                height={41}
                className="md:h-[91px] md:w-[100px] lg:h-[110px] lg:w-[120px]"
              />
            </div>
          </div>

          <div className="absolute hidden md:-bottom-[65px] md:right-[160px] lg:-bottom-[85px] lg:right-[400px] lg:block">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FAE1C1] md:h-28 md:w-28 lg:h-32 lg:w-32">
              <Image
                src="/images/meals/noodles.png"
                alt="Noodles"
                width={60}
                height={301}
                className="md:h-[51px] md:w-[90px] lg:h-[60px] lg:w-[110px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
