import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Grow = () => {
  return (
    <section className="lg:px-28">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-3 w-[259px] text-center text-[1.75rem] font-bold text-[#231F20] md:w-[392px] md:text-5xl">
          Everything you need to grow
        </h2>

        <p className="mb-8 w-[289px] text-center text-xs text-[#AEB2B2] md:w-[289px] md:text-lg">
          Become a part of our expanding network, either as a vendor or rider.
        </p>
      </div>

      <div className="flex flex-col gap-9 md:flex-row md:justify-between">
        <div className="flex flex-grow flex-col rounded-3xl border-[1px] border-[#EFF0F0] lg:w-[512px]">
          <div className="flex h-32 w-full items-center justify-center rounded-t-3xl bg-[#FEF6EC]">
            <Image
              src="/images/landing-page/money-tree.png"
              alt="Growth Chart"
              width={144}
              height={202}
              className="h-24 w-24 object-contain"
            />
          </div>

          <div className="px-4 pb-8 pt-7">
            <h3 className="mb-2 text-xl font-bold text-[#231F20] md:text-[1.75rem]">
              Serve more, Earn more
            </h3>
            <p className="mb-7 text-xs text-[#AEB2B2] md:w-[295px] md:text-base">
              Together, we expand your service's reach, connecting you with more
              people and creating greater opportunities for growth.
            </p>

            <div className="relative">
              <div className="absolute rounded-3xl bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] p-[2px]">
                <div className="h-full rounded-3xl bg-white">
                  <Button
                    type="button"
                    variant="outline"
                    className="relative flex h-full items-center justify-center rounded-3xl border-[1px] border-none bg-white px-4 py-2 text-[#E30000]"
                  >
                    Learn more
                    <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-[#E30000]">
                      <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
                    </p>
                  </Button>
                </div>
              </div>
              <div className="invisible">
                <Button className="flex items-center rounded-3xl px-4 py-2">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-grow flex-col rounded-3xl border-[1px] border-[#EFF0F0] lg:w-[512px]">
          <div className="flex h-32 w-full items-center justify-center rounded-t-3xl bg-[#FF2424]">
            <img
              src="/images/landing-page/coin-smile-mobile.png"
              alt="Smiley Coin"
              width={144}
              height={202}
              className="h-24 w-24"
            />
          </div>

          <div className="px-4 pb-8 pt-7">
            <h3 className="mb-2 text-xl font-bold text-[#231F20] md:text-[1.75rem]">
              Deliver Smiles everyday
            </h3>
            <p className="mb-7 text-xs text-[#AEB2B2] md:w-[295px] md:text-base">
              Join us and turn every mile into an opportunity, making a
              difference with each journey you take.
            </p>

            <div className="relative">
              <div className="absolute rounded-3xl bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] p-[2px]">
                <div className="h-full rounded-3xl bg-white">
                  <Button
                    type="button"
                    variant="outline"
                    className="relative flex h-full items-center justify-center rounded-3xl border-[1px] border-none bg-white px-4 py-2 text-[#E30000]"
                  >
                    Learn more
                    <p className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-[#E30000]">
                      <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
                    </p>
                  </Button>
                </div>
              </div>
              <div className="invisible">
                <Button className="flex items-center rounded-3xl px-4 py-2">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grow;
