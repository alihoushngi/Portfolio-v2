"use client";

import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import {
  EducationSectionTitleStyle,
  EducationCompanyStyle,
  EducationDateStyle,
  EducationItemStyle,
  EducationListStyle,
  EducationTitleStyle,
} from "./InfoEducationStyle";

const InfoEducation = () => {
  return (
    <CardContainer
      containerStyle="max-l:w-full h-[64%]"
      cardCustomStyle="w-full min-h-auto "
    >
      <EducationSectionTitleStyle>Education</EducationSectionTitleStyle>
      <EducationListStyle>
        <EducationItemStyle>
          <EducationDateStyle>2019-2021</EducationDateStyle>
          <EducationTitleStyle>B.S. Computer Engineering</EducationTitleStyle>
          <EducationCompanyStyle>Chamran University</EducationCompanyStyle>
        </EducationItemStyle>
      </EducationListStyle>
    </CardContainer>
  );
};

export default InfoEducation;
