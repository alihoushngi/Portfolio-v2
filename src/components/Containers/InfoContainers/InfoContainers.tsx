"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoContainers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="aos-init md:w-1/2 max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full"
    >
      <div className="w-full backdrop-blur-sm rounded-3xl border-[0.5px] border-solid border-ColorRound relative bg-[#0f0f0f] before:absolute before:left-0 before:top-0 before:w-full before:h-full z-10 before:bg-gradient-to-r before:from-gradientSecound before:to-gradientFirst before:rounded-3xl before:opacity-[0.25] before:box-border after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:-z-10 after:rounded-3xl after:-m-[1px] box-border py-[50px] px-[46px] flex items-start gap-[30px] max-lg:py-[40px] max-lg:px-[30px] max-l:mb-6 max-sm:flex-col">
        {children}
      </div>
    </div>
  );
};

export default InfoContainers;
