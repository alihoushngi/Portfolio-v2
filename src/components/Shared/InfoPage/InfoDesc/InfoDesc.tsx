"use client";

import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const InfoDesc = () => {
  return (
    <CardContainer
      containerStyle="max-l:w-full h-full"
      cardCustomStyle="w-fit flex flex-col justify-around gap-1"
    >
      <h1 className="text-white text-4xl font-medium max-2l:text-lg">
        Ali Houshangi
      </h1>
      <p className="text-white opacity-80 text-base m-0 max-2l:text-xs text-justify">
        I am a frontend web designer with a passion for Next.js technology. I am
        always seeking to improve my skills and become a professional so that I
        can create innovative ideas. I have great confidence in my ability to
        search and learn new things quickly. I am a team player who thrives on
        new challenges.
      </p>
    </CardContainer>
  );
};

export default InfoDesc;
