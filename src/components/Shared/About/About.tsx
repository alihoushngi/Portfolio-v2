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
} from "./AboutStyle";
import AboutContainer from "@/components/Containers/AboutContainer/AboutContainer";
import Logo from "../../../../public/static/images/logow2.png";

const About = () => {
  return (
    <AboutContainer>
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
    </AboutContainer>
  );
};

export default About;
