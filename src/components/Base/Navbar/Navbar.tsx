"use client";

import React from "react";
import Berger from "./Burger/Burger";

const Navbar = () => {
  return (
    <header className="max-md:py-5 max-sm:container px-5 flex justify-center max-l:justify-end md:p-6 items-center">
      <Berger />
    </header>
  );
};

export default Navbar;
