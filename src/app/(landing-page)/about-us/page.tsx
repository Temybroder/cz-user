import Faqs from "../components/faqs";
import OrderInstantly from "../components/order-instantly";
import CoreValues from "./components/core-values";
import Header from "./components/header";
import Mission from "./components/mission";

const AboutUsPage = () => {
  return (
    <>
      <div className="mb-[74px] mt-[52px] px-5 md:px-20">
        <Header />
      </div>

      <div className="mb-[47px] md:mb-[88px]">
        <Mission />
      </div>

      <div className="my-[88px]">
        <CoreValues />
      </div>

      <div className="mb-[52px] grid place-items-center md:mb-20 lg:px-20">
        <OrderInstantly />
      </div>

      <div className="px-5 md:px-20">
        <Faqs />
      </div>
    </>
  );
};

export default AboutUsPage;
