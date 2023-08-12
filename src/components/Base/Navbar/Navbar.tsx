import Image from "next/image";
import React from "react";
import logo from "public/static/images/logo_white.png";
import Link from "next/link";
import Berger from "./Berger/Berger";

const Navbar = () => {
  return (
    <header className="max-md:py-5">
      <div className="max-sm:container px-5">
        <div className="flex justify-between md:p-6 items-center">
          <Link href="/" className="z-50 inline-block">
            <Image
              priority
              src={logo}
              alt="logo"
              width={100}
              className="sm:w-[150px]"
            />
          </Link>
          <Berger />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
