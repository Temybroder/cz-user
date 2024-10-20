import Link from "next/link";
import Image from "next/image";

import { FOOTER_LINKS, FOOTER_PRIVACY_INFO, SOCIALS } from "@/constants";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@/app/icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-[#121112]">
      <div className="padding-container max-container mb-10 ml-10 mr-10 mt-20 flex w-full flex-col gap-6">
        <div className="flex flex-col items-start justify-center gap-[30%] md:flex-row">
          <div className="flex flex-col">
            <Link href="/" className="">
              <Image
                src="/images/logo-footer.svg"
                alt="Conzooming app logo"
                width={212}
                height={40}
                className="mr-5"
              />
            </Link>

            <div className="sm:mb-20">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 mb-12 flex flex-row gap-2 text-white md:mb-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
                    <Link href="/" className="">
                      <FacebookIcon width={20} height={20} className="" />
                    </Link>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
                    <Link href="/" className="">
                      <InstagramIcon width={20} height={20} className="" />
                    </Link>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
                    <Link href="/" className="">
                      <TwitterIcon width={20} height={20} className="" />
                    </Link>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
                    <Link href="/" className="">
                      <LinkedinIcon width={20} height={20} className="" />
                    </Link>
                  </div>
                </ul>
              </FooterColumn>
            </div>
          </div>
          {/* </Link> */}

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="flex flex-col gap-4 text-xs text-white">
                  {column.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
        <div className="bg-white-20 border" />

        <div className="flex flex-col items-start justify-between text-xs md:flex-row">
          <div className="mb-6 md:mb-0">
            <p className="text-left-0 flex flex-col text-white">
              &copy; 2024 Conzooming. All rights reserved
            </p>
          </div>
          <div className="flex gap-6">
            {FOOTER_PRIVACY_INFO.map((column, index) => (
              <p key={index} className="right-0 flex flex-row text-white">
                {column.links.map((link) => (
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="whitespace-nowrap text-sm font-bold text-white">
        {title}
      </h4>
      {children}
    </div>
  );
};
export default Footer;
