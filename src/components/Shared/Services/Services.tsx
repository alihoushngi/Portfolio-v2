import React from "react";
import {
  ServicesImage,
  ServicesImageWrapperStyle,
  ServicesInfoButtonStyle,
  ServicesInfoButtonWrapperStyle,
  ServicesInfoDescribeStyle,
  ServicesInfoSyle,
  ServicesInfoTitleStyle,
  ServicesInfoWrapperStyle,
  ServicesLink,
  ServicesWrapper,
} from "./ServicesStyle";
import ServicesContainer from "@/components/Containers/ServicesContainer/ServicesContainer";
import Logo from "../../../../public/static/images/logow2.png";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesLink href="#" />
        <ServicesImageWrapperStyle>
          <ServicesImage priority src={Logo} alt="logo" />
        </ServicesImageWrapperStyle>
        <ServicesInfoWrapperStyle>
          <ServicesInfoSyle>
            <ServicesInfoDescribeStyle>
              more Services me
            </ServicesInfoDescribeStyle>
            <ServicesInfoTitleStyle>Who I am ?</ServicesInfoTitleStyle>
          </ServicesInfoSyle>
          <ServicesInfoButtonWrapperStyle>
            <ServicesInfoButtonStyle>{"-->"}</ServicesInfoButtonStyle>
          </ServicesInfoButtonWrapperStyle>
        </ServicesInfoWrapperStyle>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
