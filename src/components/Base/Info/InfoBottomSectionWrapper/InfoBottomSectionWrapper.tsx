"use client";
import React from "react";
import InfoExperience from "@/components/Shared/InfoPage/InfoExperience/InfoExperience";
import InfoEducation from "@/components/Shared/InfoPage/InfoEducation/InfoEducation";
import InfoContact from "@/components/Shared/InfoPage/InfoContact/InfoContact";

const InfoBottomSectionWrapper = () => {
  return (
    <section className="relative w-full justify-between max-l:mb-16 max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto flex max-l:flex-wrap h-full content-start py-0 max-l:p-0 mb-0 gap-3">
      <div className="w-1/2 max-l:w-full">
        <InfoExperience />
      </div>
      <div className="w-1/2 max-l:w-full flex gap-3 flex-col">
        <InfoEducation />
        <InfoContact />
      </div>
    </section>
  );
};

export default InfoBottomSectionWrapper;
