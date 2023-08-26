"use client";

import React from "react";
import Image from "next/image";
import { InfoDescStyle, InfoTitleStyle } from "./InfoStyle";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const InfoDesc = () => {
  return (
    <CardContainer
      containerStyle="max-l:w-full h-full"
      cardCustomStyle="w-fit flex flex-col justify-around gap-3"
    >
      <InfoTitleStyle>Ali Houshangi</InfoTitleStyle>
      <InfoDescStyle>
        I am a frontend web designer with a passion for Next.js technology. I am
        always seeking to improve my skills and become a professional so that I
        can create innovative ideas. I have great confidence in my ability to
        search and learn new things quickly. I am a team player who thrives on
        new challenges.
      </InfoDescStyle>
    </CardContainer>
  );
};

export default InfoDesc;
