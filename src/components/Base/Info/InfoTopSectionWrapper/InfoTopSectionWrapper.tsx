"use client";

import React, { useEffect } from "react";
import InfoDesc from "@/components/Shared/InfoPage/InfoDesc/InfoDesc";
import InfoPhoto from "@/components/Shared/InfoPage/InfoPhoto/InfoPhoto";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoTopSectionWrapper = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex relative flex-wrap l:max-h-[325px] justify-between max-l:gap-4">
      <InfoPhoto />
      <div className="md:w-[69%] max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full ">
        <div className="h-full max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto w-full flex flex-col justify-between gap-3">
          <div
            className="relative w-full flex flex-wrap content-start py-0 h-fit max-md:p-0 mb-0 aos"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="text-white text-3xl font-bold items-center max-2l:text-3xl text-center w-full">
              SELF-SUMMARY
            </h2>
          </div>
          <div className="relative w-full h-full">
            <div className="relative flex max-md:flex-wrap h-full content-start py-0 max-md:p-0 mb-0 max-md:gap-3">
              <InfoDesc />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTopSectionWrapper;
