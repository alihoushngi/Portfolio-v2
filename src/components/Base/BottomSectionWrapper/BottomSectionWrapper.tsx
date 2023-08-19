"use client";
import React from "react";
import Blog from "@/components/Shared/Blog/Blog";
import Services from "@/components/Shared/Services/Services";
import Contact from "@/components/Shared/Contact/Contact";

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
