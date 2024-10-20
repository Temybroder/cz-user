import { WhiteCircleIcon } from "@/app/icons";
import Image from "next/image";

const RiderRequirement = () => {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 px-4 py-8 sm:px-8 md:px-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-8 md:mb-0 md:max-w-[50%]">
          <h2 className="mb-5 text-2xl font-bold text-white md:text-4xl lg:text-5xl">
            Join Conzooming as a rider
          </h2>

          <p className="mb-4 text-white md:text-lg">
            To join Conzooming as a rider
          </p>

          <ul className="space-y-2 text-sm text-white md:text-lg">
            <li className="flex items-center gap-2">
              <WhiteCircleIcon width={16} height={16} />
              <span>You must be at least 18 years old</span>
            </li>
            <li className="flex items-center gap-2">
              <WhiteCircleIcon width={16} height={16} />
              <span>Must have a Smartphone (Android or iOS)</span>
            </li>
            <li className="flex items-start gap-2">
              <WhiteCircleIcon
                width={25}
                height={25}
                className="md:h-4 md:w-4"
              />
              <span>
                You must own a bicycle, motorcycle or car with the right license
                and insurance
              </span>
            </li>
          </ul>
        </div>

        <div className="relative top-8 md:flex-1">
          <div className="relative z-10 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:transform lg:-top-[25px]">
            <Image
              src="/images/riders/rider-helmet-desktop.png"
              alt="Rider helmet"
              width={292}
              height={362}
              className="mx-auto object-contain md:mx-0"
            />
          </div>
          <div className="absolute right-0 top-0 hidden md:block lg:-right-12 lg:-top-[208px]">
            <Image
              src="/images/riders/seamless-fruit-pattern.png"
              alt="Fruit pattern"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderRequirement;
