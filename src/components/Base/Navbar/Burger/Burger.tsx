"use client";

import React, { useState } from "react";
import Menu from "../Menu/Menu";

const Berger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`flex flex-col justify-between w-6 h-[0.9rem] text-2xl leading-8 z-[70] cursor-pointer md:hidden`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`w-full h-[1px] bg-white block duration-300 ${
            open ? "transform -rotate-45" : ""
          }`}
        />
        <div
          className={`w-full h-[1px] bg-white block duration-300 ${
            open ? "scale-0" : ""
          }`}
        />
        <div
          className={`w-full h-[1px] bg-white block duration-300 ${
            open ? "transform  -translate-y-[13px] rotate-45" : ""
          }`}
        />
      </div>
      <Menu open={open} />
    </>
  );
};

export default Berger;
