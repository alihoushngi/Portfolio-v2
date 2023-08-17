"use client";

import React from "react";
import Avatar from "../../../../public/static/images/Avatar.jpg";
import {
  DescribtionWrapperStyled,
  InfoStyled,
  ImageStyled,
  ImageWrapperStyled,
  DescribtionTitleStyled,
  DescribtionNameStyled,
  DescribtionStyled,
} from "./InfoStyled";
import InfoContainers from "@/components/Containers/InfoContainers/InfoContainers";

const Info = () => {
  return (
    <InfoContainers>
      <InfoStyled href="#"></InfoStyled>
      <ImageWrapperStyled>
        <ImageStyled priority src={Avatar} alt="avatar" />
      </ImageWrapperStyled>
      <DescribtionWrapperStyled>
        <DescribtionTitleStyled>FRONTEND DEVELOPER</DescribtionTitleStyled>
        <DescribtionNameStyled>Ali Houshangi</DescribtionNameStyled>
        <DescribtionStyled>
          I am a frontend web designer with a passion for Next.js technology
        </DescribtionStyled>
      </DescribtionWrapperStyled>
    </InfoContainers>
  );
};

export default Info;
