"use client";

import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DesktopNav = () => {
  const router = useRouter();

  return (
    <nav className="container py-4 md:pb-10 lg:px-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center lg:mr-auto">
          <Link href="/conzooming">
            <Image
              src="/images/logo.svg"
              alt="Conzooming app logo"
              width={212}
              height={40}
              className="mr-5"
            />
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-[#231F20]">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center focus:outline-transparent">
                Partner with us <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onSelect={() => router.push("/partners")}
                  className="from-[#E30000] via-[#E30000] to-[#FFB31E] focus:bg-gradient-to-b focus:text-white"
                >
                  Partner
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => router.push("/riders")}
                  className="from-[#E30000] via-[#E30000] to-[#FFB31E] focus:bg-gradient-to-b focus:text-white"
                >
                  Riders
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center rounded-3xl bg-red-500 bg-gradient-to-b from-[#E30000] via-[#E30000] to-[#FFB31E] px-3 py-2 text-base font-medium text-white"
            >
              Get Started
              <span className="ml-[10px] grid h-[18px] w-[18px] place-items-center rounded-full bg-white">
                <ChevronRight className="h-3 w-3 text-[#D3D5D5]" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
