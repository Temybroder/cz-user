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

      <div className="mb-[47px] px-5 md:mb-[88px] md:px-[60px]">
        <Mission />
      </div>

      <div className="mb-36">
        <CoreValues />
      </div>

      <div className="mb-[52px] grid place-items-center md:mb-20 md:px-11 lg:px-48">
        <OrderInstantly />
      </div>

      <div className="px-5 md:px-20">
        <Faqs />
      </div>
    </>
  );
};

export default AboutUsPage;
