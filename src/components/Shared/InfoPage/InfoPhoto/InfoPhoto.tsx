"use client";

import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import Avatar from "../../../../../public/static/images/Avatar3.jpg";
import React from "react";
import { ImageStyled, ImageWrapperStyled } from "./InfoPhotoStyle";

const InfoPhoto = () => {
  return (
    <CardContainer
      containerStyle="max-l:w-full justify-center md:w-[29%]"
      cardCustomStyle="md:w-fit max-md:w-full"
    >
      <ImageWrapperStyled>
        <ImageStyled priority src={Avatar} alt="avatar" />
      </ImageWrapperStyled>
    </CardContainer>
  );
};

export default InfoPhoto;
