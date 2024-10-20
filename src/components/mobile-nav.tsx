"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "relative px-5 py-4 md:pb-10 lg:px-[72.5px]",
        isOpen && "h-screen overflow-hidden",
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/conzooming" onClick={closeMenu} className="z-20">
          <Image
            src="/images/logo.svg"
            alt="Conzooming app logo"
            width={124}
            height={24}
            className="mr-5"
          />
        </Link>

        <button
          className="z-20 block sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div
          className={cn(
            "fixed inset-0 z-10 bg-gradient-to-r from-red-500/95 via-orange-500/95 to-yellow-500/95 transition-transform duration-300 ease-in-out sm:static sm:block sm:bg-transparent",
            isOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0",
          )}
        >
          <ul className="flex h-full flex-col items-center justify-center gap-6 p-3 text-white sm:h-auto sm:flex-row sm:items-center sm:gap-3 sm:p-0 sm:text-inherit">
            <NavItem closeMenu={closeMenu}>
              <Link href="/partners">Partners</Link>
            </NavItem>
            <NavItem closeMenu={closeMenu}>
              <Link href="/riders">Riders</Link>
            </NavItem>
            <NavItem closeMenu={closeMenu}>
              <Link href="/about-us">About us</Link>
            </NavItem>
            <NavItem closeMenu={closeMenu}>
              <Link
                href=""
                className="inline-flex items-center rounded-3xl bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] px-3 py-2 text-base font-medium text-white"
              >
                Get Started
                <span className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
                  <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
                </span>
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

type NavItemProps = {
  children: React.ReactNode;
  closeMenu: () => void;
};

const NavItem = ({ children, closeMenu }: NavItemProps) => (
  <li className="w-full text-center sm:w-auto" onClick={closeMenu}>
    {children}
  </li>
);

export default MobileNav;
