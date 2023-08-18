import React from "react";
import {
  ServicesImage,
  ServicesIconWrapperStyle,
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
import coding from "../../../../public/static/images/codingService.png";
import photoshop from "../../../../public/static/images/photoshopService.png";
import uiux from "../../../../public/static/images/uxuiServices.png";
import wordpress from "../../../../public/static/images/wordpressServices.png";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesLink href="/services" />
        <ServicesIconWrapperStyle>
          <ServicesImage priority src={coding} alt="coding" width={30} />
          <ServicesImage priority src={photoshop} alt="photoshop" width={30} />
          <ServicesImage priority src={uiux} alt="uiux" width={30} />
          <ServicesImage priority src={wordpress} alt="wordpress" width={30} />
        </ServicesIconWrapperStyle>
        <ServicesInfoWrapperStyle>
          <ServicesInfoSyle>
            <ServicesInfoDescribeStyle>
              Whats can I do ?
            </ServicesInfoDescribeStyle>
            <ServicesInfoTitleStyle>Services</ServicesInfoTitleStyle>
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
