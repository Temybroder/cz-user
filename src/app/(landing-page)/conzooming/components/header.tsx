import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container grid justify-between md:grid-cols-2 lg:px-20">
      <div className="flex flex-col justify-center md:items-center">
        <Button className="mb-4 w-fit self-center rounded-[20px] bg-[#231F20] text-xs font-medium text-white md:mb-0 md:self-start md:text-base">
          <div className="relative mr-1 h-3 w-3 self-center rounded-full bg-red-500">
            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"></div>
          </div>
          For all consumables
        </Button>
        <h1 className="mb-4 grid text-center text-4xl font-bold leading-tight text-[#231F20] md:text-left md:text-[56px] md:leading-[64px] lg:text-[72px] lg:leading-[80px]">
          Need fast deliveries?
        </h1>
        <p className="mb-8 w-[225px] self-center text-center text-sm leading-normal text-[#231F20] md:self-start md:text-left md:text-lg lg:w-[370px] lg:text-xl">
          Get food, drugs, and groceries delivered to your doorstep easily
        </p>
        <Button
          type="button"
          className="mb-[50px] w-fit self-center rounded-3xl bg-red-500 bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] px-[56.5px] py-[14.5px] text-base font-semibold text-white md:self-start lg:px-[70px] lg:py-[18px]"
        >
          Get Started
          <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
            <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
          </p>
        </Button>
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/images/landing-page/landing-page-image.png"
          alt="Delivery man"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 609px"
          className="mx-auto h-auto w-[265px] object-cover md:mx-0 md:w-[609px]"
          quality={100}
        />
      </div>
    </header>
  );
};

export default Header;
