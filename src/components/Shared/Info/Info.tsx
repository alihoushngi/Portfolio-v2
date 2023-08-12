"use client";

import React from "react";
import Avatar from "../../../../public/static/images/Avatar.jpg";
import {
  DescribtionWrapperStyled,
  FirstSecWrapperStyled,
  ImageStyled,
  ImageWrapperStyled,
} from "./InfoStyled";

const Info = () => {
  return (
    <FirstSecWrapperStyled href="#">
      <ImageWrapperStyled>
        <ImageStyled src={Avatar} alt="avatar" />
      </ImageWrapperStyled>
      <DescribtionWrapperStyled>
        <h4>Frontend Developer</h4>
        <h1>Ali Houshangi</h1>
        <p></p>
      </DescribtionWrapperStyled>
    </FirstSecWrapperStyled>
  );
};

export default Info;
