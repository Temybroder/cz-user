import DesktopNav from "../app/(landing-page)/components/desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar2 = () => {
  return (
    <>
      <div className="mb-[43px] md:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </>
  );
};

export default Navbar2;
