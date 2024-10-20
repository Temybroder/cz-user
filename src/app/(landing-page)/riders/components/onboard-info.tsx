import Image from "next/image";

const onboardInfo = [
  {
    title: "Sign up",
    info: "Register on our platform, and we'll verify your details to get you started",
    image: "/images/partners/phone.png",
    width: 37,
    height: 55,
  },
  {
    title: "Get verified",
    info: "We take time to complete the necessary checks to verify your identity and confirm your right to work",
    image: "/images/riders/verify.png",
  },
  {
    title: "Start delivering",
    info: "After verification, you'll receive an email confirming your rider account is active and ready for orders",
    image: "/images/riders/delivery-man-on-scooter.png",
  },
];

const OnboardInfo = () => {
  return (
    <div>
      <h3 className="mb-12 text-center text-2xl font-bold text-[#231F20] md:text-left md:text-5xl">
        Get started easily in 3 steps
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
