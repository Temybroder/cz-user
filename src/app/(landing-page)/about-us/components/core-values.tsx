import { Button } from "@/components/ui/button";
import Image from "next/image";

const values = [
  {
    icon: "/images/about-us/excellence.png",
    title: "Excellence",
    description:
      "We're committed to providing service of exceptional quality, raising the bar for excellence.",
    bgColor: "#FEF6EC",
  },
  {
    icon: "/images/about-us/communication-icon.png",
    title: "Clear Communication",
    description:
      "By listening to our community and anticipating their needs, we create experiences that make every meal feel personalized, thoughtful, and satisfying",
    bgColor: "#EAFBFB",
  },
  {
    icon: "/images/about-us/heart-with-dog-paw.png",
    title: "Empathy",
    description:
      "By listening to our community and anticipating their needs, we create experiences that make every meal feel personalized, thoughtful, and satisfying",
    bgColor: "#FFF",
  },
];

const CoreValues = () => {
  return (
    <section className="px-5 md:px-[60px]">
      <div>
        <Button className="mb-4 h-0 rounded-3xl px-[10px] py-3 text-xs font-medium md:mb-8 md:text-base">
          Our Core values
        </Button>
        <h3 className="mb-5 w-[316px] text-2xl font-bold md:mb-12 md:w-96 md:text-[2.5rem]">
          What sets us apart
        </h3>
      </div>

      <div className="flex flex-col gap-7 md:flex-row">
        {values.map((value) => (
          <div
            key={value.title}
            style={{ backgroundColor: value.bgColor }}
            className="w-[282px] rounded-2xl border-[1px] border-[#EFF0F0] px-[31px] pt-[38px] md:w-[408px] md:h-[335px] md:flex-grow md:px-10 md:pb-[46px]"
          >
            <Image
              src={value.icon}
              alt={value.title}
              width={48}
              height={45}
              className="mb-9 md:h-[77px] md:w-[78px]"
            />
            <h4 className="mb-3 text-xl font-bold text-[#231F20] md:text-[2rem]">
              {value.title}
            </h4>
            <p className="mb-10 text-sm text-[#AEB2B2] md:text-lg">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
