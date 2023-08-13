"use client";
import Info from "@/components/Shared/Info/Info";
import Skills from "@/components/Shared/Skills/Skills";
import React from "react";

const FirstSectionWrapper = () => {
  return (
    <div>
      <div className="flex mr-auto ml-auto relative max-w-[1170px] flex-wrap">
        <Info />
        <div className="md:w-1/2 max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full">
          <div className="relative w-full flex flex-wrap content-start py-0 px-3 max-lg:p-0 max-md:p-0 mb-0">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSectionWrapper;
