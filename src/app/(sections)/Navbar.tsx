"use client";
import React from "react";
// apply all ts features to this file when needed
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/app/(sections)/Logo";

interface navLinkProps {
  link: string;
  href: string;
}

const navbar_element_style: string =
  "me-2 text-gray-500 hover:text-blue-700 transition-colors";
const navLinks: navLinkProps[] = [
  {
    link: "Home",
    href: "/",
  },
];

function Navbar(): JSX.Element {
  const pathname: string = usePathname();
  return (
    <>
      <div className="w-full flex justify-between items-center p-4 lg:px-40 sm:px-20 px-10 bg-white">
        <Logo href="/" />
        <ul className="">
          {navLinks.map(({ link, href }: navLinkProps, index: number) => {
            const isActive: boolean = pathname.startsWith(href);
            return (
              <li key={link}>
                <Link
                  href={href}
                  className={
                    isActive
                      ? navbar_element_style + " text-blue-700"
                      : navbar_element_style
                  }
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>{" "}
    </>
  );
}

export default Navbar;
