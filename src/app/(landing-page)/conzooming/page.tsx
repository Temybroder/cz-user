import Consumables from "./components/consumables";
import Faqs from "../components/faqs";
import ForEveryone from "./components/for-everyone";
import Grow from "../components/grow";
import Header from "./components/header";
import OrderInstantly from "../components/order-instantly";
import WhyConzooming from "./components/why-conzooming";

const LandingPage = () => {
  return (
    <>
      <div className="mb-14">
        <Header />
      </div>

      <div className="mb-[70px] md:mb-[118px]">
        <ForEveryone />
      </div>

      <div className="mb-[65px] md:mb-[88px]">
        <WhyConzooming />
      </div>

      <div className="mb-9 grid place-items-center px-5 md:mb-[88px] md:px-[60px]">
        <Grow />
      </div>

      <div className="mb-10 grid place-items-center px-5 md:mb-[88px] md:px-[60px]">
        <Consumables />
      </div>

      <div className="mb-[52px] grid place-items-center md:mb-20 lg:px-20">
        <OrderInstantly />
      </div>

      <Faqs />
    </>
  );
};

export default LandingPage;
