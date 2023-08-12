"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BoxWrapperStyled,
  SectionContainerStyled,
  SectionStyled,
  SectionWrapperStyle,
  StyledBox,
} from "./SectionWrapperStyled";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionWrapperStyle>
      <SectionStyled>
        <SectionContainerStyled>
          <BoxWrapperStyled
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="aos-init"
          >
            <StyledBox>{children}</StyledBox>
          </BoxWrapperStyled>
        </SectionContainerStyled>
      </SectionStyled>
    </SectionWrapperStyle>
  );
};

export default SectionWrapper;
