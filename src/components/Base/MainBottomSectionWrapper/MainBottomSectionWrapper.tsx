"use client";
import MainBlog from "@/components/Shared/MainPage/MainBlog/MainBlog";
import MainContact from "@/components/Shared/MainPage/MainContact/MainContact";
import MainServices from "@/components/Shared/MainPage/MainServices/MainServices";
import React from "react";

const MainBottomSectionWrapper = () => {
  return (
    <section className="relative w-full justify-between max-l:mb-16 max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto flex max-l:flex-wrap h-full content-start py-0 max-l:p-0 mb-0 gap-3">
      <div className="w-1/4 max-l:w-full">
        <MainBlog />
      </div>
      <div className="w-1/2 max-l:w-full">
        <MainServices />
      </div>
      <div className="w-1/4 max-l:w-full">
        <MainContact />
      </div>
    </section>
  );
};

export default MainBottomSectionWrapper;
