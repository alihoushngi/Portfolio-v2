"use client";

import React from "react";
import Avatar from "../../../../../public/static/images/Avatar.jpg";
import {
  DescribtionWrapperStyled,
  InfoStyled,
  ImageStyled,
  ImageWrapperStyled,
  DescribtionTitleStyled,
  DescribtionNameStyled,
  DescribtionStyled,
  InfoWrapperStyle,
} from "./MainInfoStyled";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const MainInfo = () => {
  return (
    <CardContainer containerStyle="max-l:w-full md:w-1/2">
      <InfoWrapperStyle>
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
      </InfoWrapperStyle>
    </CardContainer>
  );
};

export default MainInfo;
