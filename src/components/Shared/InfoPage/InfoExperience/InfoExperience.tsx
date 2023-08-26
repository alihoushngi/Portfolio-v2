"use client";

import React from "react";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";
import {
  ExperienceSectionTitleStyle,
  ExperienceCompanyStyle,
  ExperienceDateStyle,
  ExperienceItemStyle,
  ExperienceListStyle,
  ExperienceTitleStyle,
} from "./InfoExperienceStyle";

const InfoExperience = () => {
  return (
    <CardContainer containerStyle="max-l:w-full" cardCustomStyle="w-full">
      <ExperienceSectionTitleStyle>Experience</ExperienceSectionTitleStyle>
      <ExperienceListStyle>
        <ExperienceItemStyle>
          <ExperienceDateStyle>2021-2022</ExperienceDateStyle>
          <ExperienceTitleStyle>Frontend Developer</ExperienceTitleStyle>
          <ExperienceCompanyStyle>Pezhvak Dadeh Khazar</ExperienceCompanyStyle>
        </ExperienceItemStyle>
        <ExperienceItemStyle>
          <ExperienceDateStyle>2019-2020</ExperienceDateStyle>
          <ExperienceTitleStyle>WordPress Designer</ExperienceTitleStyle>
          <ExperienceCompanyStyle>Nila Soft</ExperienceCompanyStyle>
        </ExperienceItemStyle>
      </ExperienceListStyle>
    </CardContainer>
  );
};

export default InfoExperience;
