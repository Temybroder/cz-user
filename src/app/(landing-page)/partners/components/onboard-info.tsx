import Image from "next/image";

const onboardInfo = [
  {
    title: "Register",
    info: "Register on our platform, and we'll verify your details to get you started",
    image: "/images/partners/phone.png",
    width: 37,
    height: 55,
  },
  {
    title: "Upload menu",
    info: "After approval, you can upload your food items (menu, products, etc.) into their respective categories",
    image: "/images/partners/menu.png",
  },
  {
    title: "Accept orders",
    info: "Orders will be received through the consumer app, allowing you to accept and prepare them.",
    image: "/images/partners/delivery paper bag.png",
  },
];

const OnboardInfo = () => {
  return (
    <div className="">
      <span className="mb-[14px] inline-block rounded-3xl bg-[#231F20] px-3 py-1 text-xs font-medium text-white md:mb-5 md:text-base">
        How it works
      </span>

      <h3 className="mb-12 text-center text-2xl font-bold text-[#231F20] md:text-left md:text-5xl">
        Get onboarded easily
      </h3>

      <div className="grid grid-cols-1 gap-8 text-[#231F20] md:grid-cols-3">
        {onboardInfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl border-[1px] border-[#EFF0F0] p-6"
          >
            <div className="">
              <Image
                src={item.image}
                alt={item.title}
                width={48}
                height={50}
                className="mb-6 object-contain"
              />
            </div>
            <h4 className="md:tex-[2rem] mb-3 text-lg font-bold">
              {item.title}
            </h4>
            <p className="text-xs text-[#AEB2B2] md:text-lg">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardInfo;
