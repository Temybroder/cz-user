import { AppleIcon, GooglePlaytoreIcon } from "@/app/icons";
import Image from "next/image";

const forEveryone = [
  {
    image: "/images/landing-page/customer-phone.png",
    title: "Customers",
    description:
      "Find the best restaurants and vendors near you all in one place and have your consumables delivered to you in few minutes",
    bgColor: "#FF9999",
  },

  {
    image: "/images/landing-page/partner-phone.png",
    title: "Become a Partner",
    description:
      "Grow your business with easy menu and order management, multiple branches, simple payouts, and more",
    bgColor: "#FAE1C1",
  },

  {
    image: "/images/landing-page/rider-phone.png",
    title: "Become a Rider",
    description:
      "Set your own hours, ride your bike, track your progress, earn bonuses, and withdraw easily. Get more done with our app",
    bgColor: "#28C2C2",
  },
];

const ForEveryone = () => {
  return (
    <section>
      <div className="container grid place-items-center lg:px-20">
        <div className="relative grid place-items-center rounded-t-3xl bg-white pt-10">
          <h2 className="mb-7 w-[270px] text-center text-[1.75rem] font-bold text-[#231F20] md:mb-14 md:w-[450px] md:px-10 md:text-5xl lg:w-[40%]">
            For Everyone - From Vendor to doorstep
          </h2>

          <div className="grid place-items-center gap-5 md:grid-cols-3">
            {forEveryone.map((everyone) => (
              <div
                key={everyone.title}
                className="w-full min-w-[220px] rounded-3xl border-[1px] border-[#EFF0F0]"
              >
                <div
                  className="relative mb-5 grid w-full place-items-center rounded-t-3xl px-16 pt-[22px]"
                  style={{ backgroundColor: everyone.bgColor }}
                >
                  <Image
                    src={everyone.image}
                    alt="a phone"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="mx-auto h-auto w-[203px] object-cover"
                    quality={100}
                  />
                </div>

                <div className="px-5">
                  <h3 className="mb-2 whitespace-nowrap text-wrap text-left text-2xl font-bold text-[#231F20] md:text-[1.75rem]">
                    {everyone.title}
                  </h3>
                  <p className="text-xs text-[#AEB2B2] md:text-base">
                    {everyone.description}
                  </p>

                  <div className="flex gap-2 py-6">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-[#231F20]">
                      <GooglePlaytoreIcon width={14} height={18.47} />
                    </div>

                    <div className="grid h-8 w-8 place-items-center rounded-full bg-[#231F20]">
                      <AppleIcon
                        width={18}
                        height={22}
                        className="fill-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative -mb-3 mt-10 h-3 w-full rounded-b-3xl bg-white"></div>
      <div className="h-[16px] w-full rounded-b-3xl bg-[#E30000]"></div>
    </section>
  );
};

export default ForEveryone;
