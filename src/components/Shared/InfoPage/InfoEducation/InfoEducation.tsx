"use client";

import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const InfoEducation = () => {
  return (
    <CardContainer
      containerStyle="max-l:w-full h-[64%]"
      cardCustomStyle="w-full min-h-auto "
    >
      <h2 className="text-base uppercase text-white mb-6 font-bold">
        Education
      </h2>
      <ul className="flex flex-col justify-between gap-10">
        <li>
          <span className="text-[#bcbcbc] opacity-60 text-base font-medium mb-3">
            2019-2021
          </span>
          <h3 className="text-lg text-white opacity-90 mb-2">
            B.S. Computer Engineering
          </h3>
          <span className="text-[#bcbcbc] text-sm opacity-60 font-normal m-0">
            Chamran University
          </span>
        </li>
      </ul>
    </CardContainer>
  );
};

export default InfoEducation;
