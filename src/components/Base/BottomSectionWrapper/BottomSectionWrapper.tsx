"use client";
import React from "react";
import About from "@/components/Shared/About/About";
import Project from "@/components/Shared/Project/Project";

const BottomSectionWrapper = () => {
  return (
    <div className="flex mr-auto ml-auto relative max-w-[1170px] flex-wrap l:max-h-[325px] mt-3 mb-24">
      <div className="md:w-full max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full ">
        <div className="aos-init h-full max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto w-full flex flex-col justify-between gap-3">
          <section className="relative w-full ">
            <div className="relative flex max-md:flex-wrap h-full content-start py-0 px-3 max-md:p-0 mb-0 max-md:gap-3">
              <About />
              <Project />
              <About />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BottomSectionWrapper;
