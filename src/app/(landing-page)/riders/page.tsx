import Faqs from "../components/faqs";
import Grow from "../components/grow";
import OrderInstantly from "../components/order-instantly";
import Header from "./components/header";
import OnboardInfo from "./components/onboard-info";

import JoinAsRider from "./components/JoinAsRider";
import RiderRequirement from "./components/rider-requirements";

const RidersPage = () => {
  return (
    <main>
      <div className="mb-[74px] mt-[52px] px-5 md:px-20">
        <Header />
      </div>

      <div className="mb-[58px] px-5 md:mb-20 md:px-20">
        <JoinAsRider />
      </div>

      <div className="mb-[58px] px-5 md:mb-20 md:px-20">
        <OnboardInfo />
      </div>

      <div className="mb-[58px] px-5 md:mb-20 md:px-40">
        <RiderRequirement />
      </div>

      <div className="mb-[58px] px-5 md:mb-20 lg:px-20">
        <Grow />
      </div>

      <div className="mb-[52px] grid place-items-center md:mb-20 md:px-11 lg:px-48">
        <OrderInstantly />
      </div>

      <div className="px-5 md:px-20">
        <Faqs />
      </div>
    </main>
  );
};

export default RidersPage;
