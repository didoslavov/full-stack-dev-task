"use client";

import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import logo from "/public/logo.svg";
import NavLink from "../ui/NavLink";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";

const navLinks = ["Product", "Pricing", "Company", "Blog", "Contact"];

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative col-start-1 col-end-13 grid grid-cols-12 items-center px-4 py-6 md:pl-4 2xl:col-start-2 2xl:col-end-12">
      <Link href="/">
        <Image
          src={logo}
          className={`${isOpen ? "left absolute top-6 z-50 m-4" : "col-span-2 col-start-1"}`}
          alt="Company logo - Rooody"
          width={95}
          height={26}
        />
      </Link>
      <ul
        className={`${isOpen ? "fixed right-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-main-grey-100 text-2xl font-bold text-main-blue-900" : "hidden"} col-start-3 col-end-8 text-sm md:gap-4 lg:flex xl:gap-9`}
      >
        {navLinks.map((l, i) => (
          <li onClick={toggleMobileMenu} key={i} className="relative px-1 py-1">
            <NavLink
              className={
                (pathname === `/${l.toLowerCase()}` &&
                  "border-b-2 border-black pb-2") ||
                undefined
              }
              link={"/" + l.toLowerCase()}
            >
              {l}
            </NavLink>
          </li>
        ))}
        <CgClose
          size={30}
          className="absolute right-4 top-6 text-main-blue-900 hover:cursor-pointer lg:hidden"
          onClick={toggleMobileMenu}
        />
      </ul>
      <Button
        size="sm"
        link="#"
        type="outline"
        className="col-span-3 col-start-4 text-nowrap px-5 text-center text-xs shadow-md md:col-span-2 md:col-start-8 lg:col-span-1 lg:col-start-11"
      >
        Log In
      </Button>

      <Button
        link="#"
        size="sm"
        className="col-span-3 col-start-7 row-span-1 text-nowrap px-6 text-center shadow-md md:col-start-10 lg:col-start-12"
        type="full"
      >
        Try for Free
      </Button>
      <AiOutlineMenu
        onClick={toggleMobileMenu}
        size={30}
        className="col-start-12 text-main-blue-900 hover:cursor-pointer md:col-start-13 lg:hidden"
      />
    </header>
  );
}

export default Header;
