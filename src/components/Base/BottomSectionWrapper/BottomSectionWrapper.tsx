"use client";
import Blog from "@/components/Shared/MainPage/Blog/Blog";
import Contact from "@/components/Shared/MainPage/Contact/Contact";
import Services from "@/components/Shared/MainPage/Services/Services";
import React from "react";

const BottomSectionWrapper = () => {
  return (
    <section className="relative w-full justify-between max-l:mb-16 max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto flex max-l:flex-wrap h-full content-start py-0 max-l:p-0 mb-0 gap-3">
      <div className="w-1/4 max-l:w-full">
        <Blog />
      </div>
      <div className="w-1/2 max-l:w-full">
        <Services />
      </div>
      <div className="w-1/4 max-l:w-full">
        <Contact />
      </div>
    </section>
  );
};

export default BottomSectionWrapper;
