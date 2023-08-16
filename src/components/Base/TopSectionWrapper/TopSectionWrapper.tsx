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
    <div>
      <div className="flex mr-auto ml-auto relative max-w-[1170px] flex-wrap">
        <Info />
        <div className="md:w-1/2 max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="aos-init max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto w-full"
          >
            <div className="relative w-full flex flex-wrap content-start py-0 px-3 max-lg:p-0 max-md:p-0 mb-0">
              <Skills />
            </div>
            <section className="relative w-full ">
              <div className="relative flex max-md:flex-wrap gap-4 content-start py-0 px-3 max-lg:p-0 max-md:p-0 mb-0">
                <About />
                <Project />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSectionWrapper;
