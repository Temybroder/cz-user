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
      <Header />

      <div className="mb-[70px] grid place-items-center md:mb-[118px]">
        <ForEveryone />
      </div>

      <div className="mb-[65px] grid place-items-center px-5 md:mb-[88px] md:px-[60px]">
        <WhyConzooming />
      </div>

      <div className="mb-9 grid place-items-center px-5 md:mb-[88px] md:px-[60px]">
        <Grow />
      </div>

      <div className="mb-10 grid place-items-center px-5 md:mb-[88px] md:px-[60px]">
        <Consumables />
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

export default LandingPage;
