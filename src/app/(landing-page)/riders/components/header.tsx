import { AppleIcon, GooglePlaytoreIcon } from "@/app/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col items-center rounded-lg bg-white md:flex-row md:justify-between">
        <div className="grid place-items-center md:max-w-[641px] md:place-items-start">
          <Button className="mb-4 rounded-[20px] bg-[#231F20] text-xs font-medium text-white md:mb-5 md:text-base">
            <div className="relative mr-1 h-3 w-3 rounded-full bg-red-500">
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"></div>
            </div>
            Deliver smiles
          </Button>

          <h1 className="mb-4 grid w-[241px] text-center text-[2rem] font-bold leading-tight md:w-[224px] md:text-left lg:w-[500px] lg:text-7xl">
            Drive with us, Deliver smiles
          </h1>

          <p className="mb-8 w-[241px] text-center text-sm md:w-[423px] md:text-left md:text-lg">
            Join Conzooming growing network of riders and be your own boss
          </p>

          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
            <Button
              type="button"
              className="rounded-3xl bg-[#231F20] px-3 py-2 text-sm font-medium text-white lg:text-base"
            >
              <GooglePlaytoreIcon width={18} height={24} className="mr-2" />
              Download on Google Play
            </Button>
            <Button
              type="button"
              className="rounded-3xl bg-[#231F20] px-3 py-2 text-sm font-medium text-white lg:text-base"
            >
              <AppleIcon
                width={18}
                height={24}
                className="mr-[14px] fill-white"
              />
              Download on App Store
            </Button>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute -left-4 top-0 hidden h-full w-2 rounded-l-3xl bg-gradient-to-b from-[#E30000] to-[#FFB31E] lg:block"></div>

            <Image
              src="/images/landing-page/deliver-man.png"
              alt="Delivery man"
              width={234}
              height={275}
              className="object-contain md:h-[340px] md:w-[350px] lg:h-[440px] lg:w-[450px]"
            />
          </div>
        </div>
      </div>
      <div className="relative -mb-3 h-3 w-full rounded-b-3xl bg-white"></div>
      <div className="h-4 w-full rounded-b-3xl bg-[#231F20]"></div>
    </header>
  );
};

export default Header;
