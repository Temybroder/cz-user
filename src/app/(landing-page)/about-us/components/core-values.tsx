import { Button } from "@/components/ui/button";
import Image from "next/image";

const CoreValues = () => {
  return (
    <section className="container mx-auto lg:px-20">
      <div>
        <Button className="mb-4 h-0 rounded-3xl px-[10px] py-3 text-xs font-medium md:mb-8 md:text-base">
          Our Core values
        </Button>
        <h3 className="mb-5 w-[316px] text-2xl font-bold md:mb-12 md:w-96 md:text-[2.5rem]">
          What sets us apart
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Excellence Card */}
        <div className="rounded-lg border border-[#EFF0F0] bg-[#FEF6EC] p-6 transition-transform hover:scale-105">
          <div className="mb-4">
            <Image
              src="/images/about-us/excellence.png"
              alt="Excellence"
              width={48}
              height={45}
              quality={100}
              className="mb-9 md:h-[77px] md:w-[78px]"
            />
          </div>
          <h3 className="mb-3 text-sm font-bold text-[#231F20] lg:text-[2rem]">
            Excellence
          </h3>
          <p className="mb-10 text-sm text-[#AEB2B2] md:text-lg">
            We&apos;re committed to providing service of exceptional quality,
            raising the bar for excellence.
          </p>
        </div>

        {/* Clear Communication Card */}
        <div className="rounded-lg border border-[#EFF0F0] bg-[#EAFBFB] p-6 transition-transform hover:scale-105">
          <div className="mb-4">
            <Image
              src="/images/about-us/communication-icon.png"
              alt="Clear Communication"
              width={48}
              height={45}
              className="mb-9 md:h-[77px] md:w-[78px]"
            />
          </div>
          <h3 className="mb-3 text-wrap text-sm font-bold text-[#231F20] lg:text-[2rem]">
            Clear Communication
          </h3>
          <p className="mb-10 text-sm text-[#AEB2B2] md:text-lg">
            By listening to our community and anticipating their needs, we
            create experiences that make every meal feel personalized,
            thoughtful, and satisfying.
          </p>
        </div>

        {/* Empathy Card */}
        <div className="rounded-lg border border-[#EFF0F0] bg-white p-6 transition-transform hover:scale-105">
          <div className="mb-4">
            <Image
              src="/images/about-us/heart-with-dog-paw.png"
              alt="heart-with-dog-paw"
              width={48}
              height={45}
              className="mb-9 md:h-[77px] md:w-[78px]"
            />
          </div>
          <h3 className="mb-3 text-sm font-bold text-[#231F20] lg:text-[2rem]">
            Empathy
          </h3>
          <p className="mb-10 text-sm text-[#AEB2B2] md:text-lg">
            By listening to our community and anticipating their needs, we
            create experiences that make every meal feel personalized,
            thoughtful, and satisfying.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
