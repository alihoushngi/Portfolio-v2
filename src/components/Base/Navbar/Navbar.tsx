"use client";

import Image from "next/image";
import React from "react";
import logo from "public/static/images/logo-wb.png";
import Link from "next/link";
import Menu from "./Menu/Menu";
import Berger from "./Berger/Berger";

const Navbar = () => {
  return (
    <header className="max-md:py-5">
      <div className="container max-xl:px-5">
        <div className="flex justify-between">
          <Link href="/" className="z-10 inline-block">
            <Image src={logo} alt="logo" width={30} />
          </Link>
          <Menu />
          <Berger />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
