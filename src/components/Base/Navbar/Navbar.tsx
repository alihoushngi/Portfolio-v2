"use client";

import React from "react";
import Berger from "./Burger/Burger";

const Navbar = () => {
  return (
    <header className="max-md:py-5 max-sm:container px-5 flex justify-center max-l:justify-end md:p-6 items-center gap-5 max-md:justify-between flex-row-reverse max-md:flex-row">
      <a
        className="p-2 bg-slate-400 rounded-lg text-black text-sm font-light hover:bg-slate-800 hover:text-white hover:font-medium transition-all"
        href="https://drive.google.com/file/d/1N3mtqYjM2cAfVp2aLOXW6zaZhYmFcbfq/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
      <Berger />
    </header>
  );
};

export default Navbar;
