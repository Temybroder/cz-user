import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const WhyConzooming = () => {
  return (
    <section>
      <div className="container lg:px-20">
        <h2 className="mb-10 w-[256px] text-[1.75rem] font-bold text-[#231F20] md:w-[450px] md:text-5xl">
          Why Conzooming Stands Out
        </h2>

        <div className="grid gap-7 md:grid-cols-2">
          <div className="rounded-[28px] border-[1px] border-[#EFF0F0] bg-[#F5F5F5] px-9 pt-9 md:h-[322px]">
            <div>
              <h3 className="mb-[10px] text-xl font-bold text-[#231F20] lg:text-[2rem]">
                Saves more time
              </h3>
              <p className="mb-10 w-[228px] text-xs text-[#AEB2B2] lg:text-base">
                Save valuable hours each day, giving you more freedom to focus
                on the things that matter most to you
              </p>

              <div className="">
                <Button
                  type="button"
                  className="mb-6 rounded-3xl bg-red-500 px-5 py-4 text-sm font-semibold text-white hover:bg-red-600"
                >
                  Start ordering
                  <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
                    <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
                  </p>
                </Button>

                <div className="relative h-full w-full lg:-top-[112px] lg:left-[200px]">
                  <Image
                    src="/images/landing-page/timer.png"
                    alt="Timer icon"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 120px"
                    quality={100}
                    className="mx-auto h-auto w-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border-[1px] border-[#EFF0F0] bg-[#FEF6EC] px-9 pb-10 pt-9 md:h-[322px]">
            <div className="md:w-[240px]">
              <h3 className="mb-[10px] text-xl font-bold text-[#231F20] lg:text-[2rem]">
                More options
              </h3>
              <p className="mb-7 w-[218px] text-xs text-[#AEB2B2] lg:text-base">
                Order consumables from the best restaurants near you. From the
                variety of options proffered to you, select your best choice
              </p>
            </div>

            <div className="relative h-full w-full lg:-top-[50px] lg:left-[150px]">
              <Image
                src="/images/landing-page/vaadin-options.png"
                alt="Options icon"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 120px"
                quality={100}
                className="mx-auto h-auto w-[120px]"
              />
            </div>
          </div>

          <div className="rounded-[28px] border-[1px] border-[#EFF0F0] bg-[#EAFBFB] px-9 pb-[38px] pt-9 md:h-[322px]">
            <div className="md:w-[359px]">
              <h3 className="mb-[10px] text-xl font-bold text-[#231F20] lg:text-[2rem]">
                Personalized meal plan
              </h3>
              <p className="mb-10 w-[240px] text-xs text-[#AEB2B2] lg:text-base">
                Create a customized meal plan tailored specifically to your
                needs using your unique nutrition data
              </p>
            </div>
            <div className="relative flex w-full justify-center lg:-top-[60px] lg:left-[220px]">
              <Image
                src="/images/landing-page/planner-note-image.png"
                alt="Meal plan icon"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 120px"
                className="mx-auto h-auto w-[120px]"
              />
            </div>
          </div>

          <div className="rounded-[28px] border-[1px] border-[#EFF0F0] bg-[#FFF2F2] px-9 pt-9 md:h-[322px]">
            <div className="md:w-[292px]">
              <h3 className="mb-[10px] text-xl font-bold text-[#231F20] lg:text-[2rem]">
                Customize your order
              </h3>
              <p className="mb-10 w-[228px] text-xs text-[#AEB2B2] md:mb-6 lg:text-base">
                Save time creating meal plans and dietary boundaries for a
                perfect dining experience
              </p>

              <Button
                type="button"
                className="mb-6 rounded-3xl bg-red-500 px-5 py-4 text-sm font-semibold text-white hover:bg-red-600"
              >
                Start ordering
                <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
                  <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
                </p>
              </Button>

              <div className="relative h-full w-full lg:-top-[110px] lg:left-[370px]">
                <Image
                  src="/images/landing-page/order-box-image.png"
                  alt="Store icon"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 120px"
                  quality={100}
                  className="mx-auto h-auto w-[169px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mb-3 mt-10 h-3 w-full rounded-b-3xl bg-white"></div>
      <div className="h-[16px] w-full rounded-b-3xl bg-[#231F20]"></div>
    </section>
  );
};

export default WhyConzooming;
