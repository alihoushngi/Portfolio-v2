"use client";
import React, { useEffect } from "react";
import Info from "@/components/Shared/Info/Info";
import Skills from "@/components/Shared/Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "@/components/Shared/About/About";
import Project from "@/components/Shared/Project/Project";

const TopSectionWrapper = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex mr-auto ml-auto relative max-w-[1170px] flex-wrap l:max-h-[325px]">
      <Info />
      <div className="md:w-1/2 max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full ">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="aos-init h-full max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto w-full flex flex-col justify-between gap-3"
        >
          <div className="relative w-full flex flex-wrap content-start py-0 px-3  max-md:p-0 mb-0">
            <Skills />
          </div>
          <section className="relative w-full ">
            <div className="relative flex max-md:flex-wrap h-full content-start py-0 px-3 max-md:p-0 mb-0 max-md:gap-3">
              <About />
              <Project />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TopSectionWrapper;
