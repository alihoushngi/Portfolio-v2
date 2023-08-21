import React from "react";
import {
  AboutImage,
  AboutImageWrapperStyle,
  AboutInfoButtonStyle,
  AboutInfoButtonWrapperStyle,
  AboutInfoDescribeStyle,
  AboutInfoSyle,
  AboutInfoTitleStyle,
  AboutInfoWrapperStyle,
  AboutLink,
  AboutWrapper,
} from "./MainAboutStyle";
import Logo from "../../../../../public/static/images/logow2.png";
import CardContainer from "@/components/Containers/CardContainer/CardContainer";

const MainAbout = () => {
  return (
    <CardContainer
      containerStyle="w-[49%] flex items-stretch"
      aosDuration="2500"
      aosStyle="fade-left"
    >
      <AboutWrapper>
        <AboutLink href="/about" />
        <AboutImageWrapperStyle>
          <AboutImage priority src={Logo} alt="logo" />
        </AboutImageWrapperStyle>
        <AboutInfoWrapperStyle>
          <AboutInfoSyle>
            <AboutInfoDescribeStyle>MORE ABOUT ME</AboutInfoDescribeStyle>
            <AboutInfoTitleStyle>About</AboutInfoTitleStyle>
          </AboutInfoSyle>
          <AboutInfoButtonWrapperStyle>
            <AboutInfoButtonStyle>{"-->"}</AboutInfoButtonStyle>
          </AboutInfoButtonWrapperStyle>
        </AboutInfoWrapperStyle>
      </AboutWrapper>
    </CardContainer>
  );
};

export default MainAbout;
