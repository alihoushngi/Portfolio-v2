"use client";
import React from "react";
import Blog from "@/components/Shared/Blog/Blog";
import Services from "@/components/Shared/Services/Services";
import Profile from "@/components/Shared/Profile/Profile";

const BottomSectionWrapper = () => {
  return (
    <div className="flex mr-auto ml-auto relative max-w-[1170px] flex-wrap l:max-h-[325px] mt-3 mb-24">
      <div className="md:w-full max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full ">
        <div className="aos-init h-full max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto w-full flex flex-col justify-between gap-3">
          <section className="relative w-full ">
            <div className="relative flex max-l:flex-wrap h-full content-start py-0 px-3 max-l:p-0 mb-0 gap-3">
              <div className="w-1/4 max-l:w-full">
                <Blog />
              </div>
              <div className="w-1/2 max-l:w-full">
                <Services />
              </div>
              <div className="w-1/4 max-l:w-full">
                <Profile />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BottomSectionWrapper;
