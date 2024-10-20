import { Button } from "@/components/ui/button";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="md:flex">
      <div className="rounded-3xl border-[1px] border-[#EFF0F0] px-[17px] pt-[18px] md:mr-56">
        <Image
          src="/images/about-us/smiling-face.png"
          alt="smiling face"
          width={299}
          height={324}
          className="h-auto w-auto md:max-h-[438px] md:max-w-[396px] lg:max-h-[500px] lg:max-w-[500px]"
        />

        <div className="pb-10 pt-2 text-[#231F20]">
          <h3 className="text-lg font-bold md:text-2xl">Temitope Sanni</h3>
          <p className="text-sm md:text-xl">CEO/Co-Founder</p>
        </div>
      </div>

      <div className="mt-9 text-[#231F20] md:mt-0">
        <span className="mb-[14px] inline-block rounded-3xl bg-[#231F20] px-3 py-1 text-xs font-medium text-white md:mb-5 md:text-base">
          Our Story
        </span>
        <h3 className="mb-5 w-[316px] text-2xl font-bold md:text-[2.5rem] lg:w-[526px]">
          We’re on a mission to make consumables accessible to everyone
        </h3>
        <div className="text-left text-sm font-medium text-[#AEB2B2] md:w-[607px] md:text-lg">
          <p className="mb-2">
            Conzooming was born from my personal frustration with finding
            healthy, satisfying lunch options in a busy office environment.
            Faced with overpriced, unhealthy meals, I realized many of my
            colleagues shared the same struggle. This sparked the idea for a
            lunch subscription service delivering fresh, delicious meals to busy
            professionals.
          </p>
          <p className="mb-2">
            What started as a simple Google Forms initiative in August 2022,
            where colleagues shared their meal preferences, quickly grew into a
            success. Our cloud kitchen served high-quality meals using the
            freshest ingredients. The overwhelming demand showed that the need
            was bigger than just our office.
          </p>
          <p className="mb-2">
            As we evolved from 'Lunch Time' to Conzooming, we shifted to a
            scalable model, partnering with trusted vendors to meet diverse
            dietary needs.
          </p>
          <p>
            Conzooming is now about more than just meals—it's about ensuring
            everyone can enjoy a healthy, satisfying lunch, no matter how hectic
            life gets. Because life may be busy, but your meals shouldn’t be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
