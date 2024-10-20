import Image from "next/image";

import { LocationIcon, SearchIcon, UserIcon } from "@/app/icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AuthDialog from "@/app/(not-protected)/components/auth-dialog";

const MainNav = () => {
  const isAuthenticated = false;

  return (
    <nav className="px-5 py-4 md:pb-10 lg:px-[72.5px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center lg:mr-auto">
          <Image
            src="/images/logo.svg"
            alt="Conzooming app logo"
            width={212}
            height={40}
            className="mr-5"
          />

          <div className="flex items-center justify-between">
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF0F0] lg:h-10 lg:w-10">
              <LocationIcon
                width={20}
                height={20}
                className="self-center fill-[#231F20]"
              />
            </div>

            <div>Enter delivery address</div>
          </div>
        </div>

        <div className="flex items-center">
          <Input
            leftIcon={<SearchIcon width={20} height={20} />}
            placeholder="Search for consumables"
            className="mr-4 w-[304px] rounded-2xl border-[1px] border-[#EFF0F0] placeholder:text-sm placeholder:text-[hsl(180_2%_69%)]"
          />

          {isAuthenticated ? (
            <Button variant="ghost">
              <UserIcon width={20} height={20} className="fill-black" />
            </Button>
          ) : (
            <AuthDialog />
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
