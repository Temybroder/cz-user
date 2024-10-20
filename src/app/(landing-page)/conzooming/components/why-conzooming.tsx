import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const WhyConzooming = () => {
  return (
    <div>
      <h2 className="mb-10 w-[256px] text-[1.75rem] font-bold text-[#231F20] md:w-[450px] md:text-5xl">
        Why Conzooming Stands Out
      </h2>

      <div className="flex flex-col gap-7 md:flex-row md:flex-wrap">
        <div className="relative rounded-[28px] border-[1px] border-[#EFF0F0] px-9 pt-9 md:h-[322px] md:w-7/12 lg:h-[322px]">
          <div className="md:w-[292px]">
            <h3 className="mb-[10px] text-xl font-bold text-[#231F20] lg:text-[2rem]">
              Saves more time
            </h3>
            <p className="mb-10 w-[228px] text-xs text-[#AEB2B2] md:mb-6 lg:text-base">
              Save valuable hours each day, giving you more freedom to focus on
              the things that matter most to you
            </p>

            <Button
              type="button"
              className="mb-6 rounded-3xl bg-red-500 bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] px-5 py-4 text-sm font-semibold text-white"
            >
              Start ordering
              <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
                <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
              </p>
            </Button>
          </div>

          <Image
            src="/images/landing-page/bicycle-courier.png"
            alt="Bicycle courier delivering food"
            width={181}
            height={174}
            className="ml-20 md:absolute md:top-[179px] md:ml-[250px] lg:-bottom-[1px] lg:ml-[500px]"
          />
        </div>

        <div className="relative rounded-[28px] border-[1px] border-[#EFF0F0] px-9 pt-9 md:w-1/3 lg:h-[322px] lg:w-[530px]">
          <div className="md:w-[240px]">
            <h3 className="mb-[10px] text-xl font-bold text-[#231F20] lg:text-[2rem]">
              Several options
            </h3>
            <p className="mb-7 w-[218px] text-xs text-[#AEB2B2] lg:text-base">
              Order consumables from the best restaurants or stores near you .
              From the variety of options proffered to you, select your best
              choice
            </p>
          </div>

          <Image
            src="/images/meals/french-fries-and-drink.png"
            alt="fast food set of burger, french fries and drink"
            width={144}
            height={89}
            className="mb-[22px] ml-[70px] md:absolute md:-bottom-[21px] lg:-bottom-[22px] lg:left-[280px]"
          />
        </div>

        <div className="relative rounded-[28px] border-[1px] border-[#EFF0F0] px-9 pt-9 md:h-[322px] md:w-1/3 lg:h-[322px] lg:w-[530px]">
          <div className="md:w-[359px]">
            <h3 className="mb-[10px] text-xl font-bold text-[#231F20] lg:text-[2rem]">
              Personalized meal plan
            </h3>
            <p className="mb-10 w-[240px] text-xs text-[#AEB2B2] lg:text-base">
              Create a customized meal plan tailored specifically to your needs
              using your unique nutrition data
            </p>

            <Button
              type="button"
              className="mb-[22px] rounded-3xl bg-red-500 bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] px-5 py-4 text-sm font-semibold text-white md:hidden"
            >
              Start ordering
              <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
                <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
              </p>
            </Button>
          </div>

          <Image
            src="/images/landing-page/calendar.png"
            alt="fast food set of burger, french fries and drink"
            width={186}
            height={155}
            className="ml-10 md:absolute md:left-20 md:top-[200px] lg:left-[300px]"
          />
        </div>

        <div className="relative rounded-[28px] border-[1px] border-[#EFF0F0] px-9 pt-9 md:h-[322px] md:w-7/12 lg:h-[322px]">
          <div>
            <h3 className="mb-[10px] text-xl font-bold text-[#231F20] lg:text-[2rem]">
              Flexible ordering
            </h3>
            <p className="mb-10 w-[228px] text-xs text-[#AEB2B2] lg:text-base">
              Order Once or Enjoy the Convenience of a Subscription—The Choice
              is Yours. Order for consumables from restaurants or stores near
              you on your own terms.
            </p>

            <Button
              type="button"
              className="mb-6 rounded-3xl bg-red-500 bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] px-5 py-4 text-sm font-semibold text-white"
            >
              Start ordering
              <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
                <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
              </p>
            </Button>
          </div>

          <div>
            <Image
              src="/images/landing-page/payment-and-quick-delivery.png"
              alt="fast food set of burger, french fries and drink"
              width={206}
              height={119}
              className="ml-20 object-cover md:absolute md:left-[200px] md:top-[200px] lg:left-[400px] lg:top-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="relative -mb-3 mt-10 h-3 w-full rounded-b-3xl bg-white"></div>
      <div className="h-[16px] w-full rounded-b-3xl bg-[#231F20]"></div>
    </div>
  );
};

export default WhyConzooming;
