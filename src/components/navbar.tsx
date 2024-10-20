import MainNav from './main-nav';
import MobileNavbar from './mobile-nav';

const Navbar = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileNavbar />
      </div>

      <div className="hidden md:block">
        <MainNav />
      </div>
    </>
  );
};

export default Navbar;
