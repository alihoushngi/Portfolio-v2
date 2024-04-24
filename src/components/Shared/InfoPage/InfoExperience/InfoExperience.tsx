"use client";

import React, { useEffect } from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import { InfoExperienceList } from "./InfoExperienceList";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import "aos/dist/aos.css";

const InfoExperience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full">
      <h2
        className="text-3xl uppercase text-white mb-1 text-center font-bold aos"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Experience
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        {InfoExperienceList.map((data, index) => {
          return (
            <CardContainer
              key={index}
              containerStyle="max-l:w-full grow shrink basis-[45%]"
              cardCustomStyle="w-full"
            >
              <Link
                href={data.link}
                aria-label={data.ariaLable}
                title={data.company}
              >
                <span className="text-[#bcbcbc] opacity-60 text-base font-medium mb-3">
                  {data.date}
                </span>
                <h3 className="text-lg text-white opacity-90 mb-2">
                  {data.positionTitle}
                </h3>
                <span className="text-[#bcbcbc] font-normal text-sm opacity-60 m-0">
                  {data.company}
                </span>
              </Link>
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
};

export default InfoExperience;
