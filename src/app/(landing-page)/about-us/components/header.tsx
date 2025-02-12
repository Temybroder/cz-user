import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="relative overflow-clip rounded-3xl bg-[#FEF6EC] px-6 pt-10 text-white md:pb-[123px] md:pt-[119px]">
        <div>
          <div className="hidden md:block">
            <div className="h-[122px] w-[122px] rounded-full md:absolute md:-left-10 md:top-[220px] md:grid md:place-items-center md:bg-white">
              <Image
                src="/images/meals/shawarma.png"
                alt="sharwama"
                width={78}
                height={59}
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-12 left-0 right-0 mx-auto grid h-[214px] w-[214px] place-items-center rounded-full bg-[#C4F3F3] md:-left-10 md:mx-0 md:h-52 md:w-52">
            <Image
              src="/images/meals/vegies.png"
              alt="sharwama"
              width={145}
              height={137}
              className="-mt-5 h-[177px] w-[185px] object-cover"
            />
          </div>

          <div className="hidden md:block">
            <div className="absolute -right-[60px] top-[180px] grid h-[122px] w-[122px] place-items-center rounded-full bg-[#FBCACA]">
              <Image
                src="/images/landing-page/pills.png"
                alt="pharmaceutical-drug-dietary-supplement"
                width={185}
                height={177}
                className="object-cover"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="absolute -bottom-5 -right-[60px] grid h-[122px] w-[122px] place-items-center rounded-full bg-[#FAE1C1]">
              <Image
                src="/images/meals/half-noddles.png"
                alt="Noodles"
                width={107}
                height={100}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid place-items-center text-[#231F20]">
          <Button
            type="button"
            className="mb-4 rounded-[20px] bg-[#231F20] text-xs font-medium text-white md:mb-0 md:text-base"
          >
            <div className="relative mr-1 h-3 w-3 rounded-full bg-red-500">
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"></div>
            </div>
            For all consumables
          </Button>
          <h1 className="mb-4 grid w-[241px] text-center text-[2rem] font-bold text-[#231F20] md:w-[651px] md:text-7xl">
            Seamless ordering; where fast meets fresh
          </h1>
          <p className="mb-8 w-[250px] text-center text-sm md:w-[359px] md:text-left md:text-lg">
            Effortless access to consumables in your city
          </p>
          <Button
            type="button"
            className="mb-[191px] rounded-3xl bg-red-500 bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] px-[56.5px] py-[14.5px] text-base font-semibold text-white md:mb-0"
          >
            Get Started
            <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
              <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
            </p>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
