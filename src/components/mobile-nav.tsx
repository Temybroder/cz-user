'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Input } from './ui/input';
import { XIcon } from 'lucide-react';
import { CartIcon, LocationIcon, SearchIcon, UserIcon } from '@/app/icons';
import AuthDialog from '@/app/(not-protected)/components/auth-dialog';

const MobileNavbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const isAuthenticated = false;

  const renderSearchButton = () => {
    return isSearchVisible ? (
      <button
        onClick={() => setSearchVisible(false)}
        className="grid h-5 w-5 place-items-center rounded-full bg-[#363031]"
      >
        <XIcon className="h-4 w-4 text-white" />
      </button>
    ) : (
      <button
        onClick={() => setSearchVisible(true)}
        className="grid h-8 w-8 place-items-center rounded-full border-[1px] border-[#EFF0F0]"
      >
        <SearchIcon width={20} height={20} />
      </button>
    );
  };

  const renderAuthenticatedIcons = () => {
    if (isSearchVisible) {
      return null;
    }

    return (
      <>
        <button className="grid h-8 w-8 place-items-center rounded-full border-[1px] border-[#EFF0F0]">
          <CartIcon width={20} height={20} className="fill-[#231F20]" />
        </button>
        <button className="grid h-8 w-8 place-items-center rounded-full border-[1px] border-[#EFF0F0]">
          <UserIcon width={20} height={20} className="fill-[#231F20]" />
        </button>
      </>
    );
  };

  const renderLoginButton = () => {
    if (isSearchVisible) {
      return null;
    }

    return <AuthDialog />;
  };

  return (
    <nav className="container px-5 pt-4">
      <div className="mb-3 flex items-center justify-between">
        <Image
          src="/images/logo.svg"
          alt="Conzooming app logo"
          width={125}
          height={24}
        />

        <div className="flex items-center gap-2">
          {renderSearchButton()}
          {isAuthenticated ? renderAuthenticatedIcons() : renderLoginButton()}
        </div>
      </div>

      <div className="flex items-center">
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF0F0]">
          <LocationIcon width={20} height={20} className="self-center fill-[#231F20]" />
        </div>

        <div>Enter delivery address</div>
      </div>

      {isSearchVisible && (
        <div className="mt-3">
          <Input
            leftIcon={<SearchIcon width={20} height={20} />}
            placeholder="Search for consumables"
            className="mr-4 rounded-2xl border-[1px] border-[#EFF0F0] placeholder:text-xs placeholder:text-[#AEB2B2]"
          />
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
