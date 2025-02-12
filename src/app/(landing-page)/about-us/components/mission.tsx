import Image from "next/image";

const Mission = () => {
  return (
    <div className="container mx-auto lg:px-20">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between md:space-x-12 lg:space-x-44">
        {/* Left Column - Image and Profile Info */}
        <div className="flex flex-col items-center rounded-3xl border border-[#EFF0F0] bg-white px-[17px] pb-[53px] pt-[18px] md:items-start">
          <div className="relative mb-6 h-[280px] w-[280px] rounded-lg bg-white p-3 shadow-lg md:h-[320px] md:w-[320px]">
            <Image
              src="/images/about-us/smiling-face.png"
              alt="Temitope Sanni"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>

          <div className="p-6 text-[#231F20]">
            <h3 className="text-xl font-semibold">Temitope Agboola</h3>
            <p className="text-gray-600">CEO/Founder</p>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="mt-8 flex-1 text-left md:ml-auto md:mt-0">
          <span className="mb-[14px] inline-block rounded-full bg-[#231F20] px-4 py-1 text-sm font-medium text-white">
            Our Story
          </span>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:w-[550px]">
            We're on a mission to make consumables accessible to everyone
          </h2>

          <div className="space-y-4 text-gray-500 md:max-w-2xl">
            <p className="mb-2">
              Conzooming was born from my personal frustration with finding
              healthy, satisfying lunch options in a busy office environment.
              Faced with overpriced, meals which I couldnt tailor to my taste,
              I realized many of my colleagues shared the same struggle. This
              sparked the idea for a lunch subscription service delivering fresh,
              delicious meals to busy "consumers".
            </p>
            <p className="mb-2">
              What started as a simple Google Forms initiative, where colleagues
              shared their meal preferences, quickly grew into
              a success. Our vendors served high-quality meals using the
              freshest ingredients according to customer request. The overwhelming
              demand showed that the need was bigger than just our office.
            </p>
            <p className="mb-2">
              As we evolved into what is now Conzooming, we shifted to a
              scalable model; partnering with trusted vendors to meet diverse
              meal preferences and needs.
            </p>
            <p>
              Conzooming is now about more than just meals—it's about ensuring
              everyone can hope for a healthy, satisfying lunch, and delivery, no
              matter how hectic life gets. Because life may be busy, but getting
              your meals and other needs shouldn't be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
