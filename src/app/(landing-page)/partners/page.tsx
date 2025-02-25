import Faqs from "../components/faqs";
import Grow from "../components/grow";
import OrderInstantly from "../components/order-instantly";
import Header from "./components/header";
import OnboardInfo from "./components/onboard-info";
import PartnerWithConzooming from "./components/partner-with-conzooming2";

const PartnersPage = () => {
  return (
    <main>
      <div className="mb-[74px] mt-[52px]">
        <Header />
      </div>

      <div className="mb-[58px] md:mb-20">
        <PartnerWithConzooming />
      </div>

      <div className="mb-[58px] px-5 md:mb-20">
        <OnboardInfo />
      </div>

      <div className="mb-[58px] px-5 md:mb-20 md:px-28">
        <Grow />
      </div>

      <div className="mb-[52px] grid place-items-center md:mb-20 md:px-11 lg:px-20">
        <OrderInstantly />
      </div>

      <Faqs />
    </main>
  );
};

export default PartnersPage;
