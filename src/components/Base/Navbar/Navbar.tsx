"use client";

import React from "react";
import Berger from "./Burger/Burger";

const Navbar = () => {
  return (
    <header className="max-md:py-5">
      <div className="max-sm:container px-5">
        <div className="flex justify-center md:p-6 items-center">
          <Berger />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
