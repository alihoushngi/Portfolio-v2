"use client";
import React from "react";

import MainAbout from "@/components/Shared/MainPage/MainAbout/MainAbout";
import MainProject from "@/components/Shared/MainPage/MainProject/MainProject";
import MainInfo from "@/components/Shared/MainPage/MainInfo/MainInfo";
import MainSkills from "@/components/Shared/MainPage/MainSkills/MainSkills";

const MainTopSectionWrapper = () => {
  return (
    <div className="flex relative flex-wrap l:max-h-[325px] justify-between max-l:gap-4">
      <MainInfo />
      <div className="md:w-[49%] max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full ">
        <div className="h-full max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto w-full flex flex-col justify-between gap-3">
          <div className="relative w-full flex flex-wrap content-start py-0 h-fit max-md:p-0 mb-0">
            <MainSkills />
          </div>
          <div className="relative w-full h-full">
            <div className="relative flex max-md:flex-wrap h-full content-start py-0 max-md:p-0 mb-0 max-md:gap-3">
              <MainAbout />
              <MainProject />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTopSectionWrapper;
