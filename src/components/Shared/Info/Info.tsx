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
      <InfoStyled href="#">
        <ImageWrapperStyled>
          <ImageStyled priority src={Avatar} alt="avatar" />
        </ImageWrapperStyled>
        <DescribtionWrapperStyled>
          <DescribtionTitleStyled>Frontend Developer</DescribtionTitleStyled>
          <DescribtionNameStyled>Ali Houshangi</DescribtionNameStyled>
          <DescribtionStyled>Im Web Designer based in Rasht</DescribtionStyled>
        </DescribtionWrapperStyled>
      </InfoStyled>
    </InfoContainers>
  );
};

export default Info;
