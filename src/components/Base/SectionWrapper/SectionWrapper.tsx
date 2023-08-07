"use client";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="box-border flex flex-wrap relative">
      <div className="container">
        <div className="relative min-h-[1px] flex max-lg:flex max-lg:flex-shrink-0 max-lg:flex-grow-0 max-lg:basis-auto max-lg:w-full md:w-[50%]">
          <div className="max-md:p-0 flex relative w-full flex-wrap content-center px-3">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="w-full aos-init"
            >
              <StyledBox>{children}</StyledBox>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;

//----------style----------
const StyledBox = styled.div`
  width: 100%;
  position: relative;
  padding: 50px 46px;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  background: #0f0f0f;
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(4px);
  /* -webkit-backdrop-filter: blur(4px); */
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.05)
    );
    border-radius: 30px;
    opacity: 0.25;
    box-sizing: border-box;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* background: linear-gradient(to right, rgb(255 255 255 / 15%), rgb(255 255 255 / 1%)); */
    /* background: linear-gradient(
      120deg,
      rgb(255 255 255 / 12%),
      rgb(255 255 255 / 1%)
    ); */
    content: "";
    z-index: -1;
    border-radius: 30px;
    margin: -1px;
  }

  @media (max-width: 585px) {
    flex-direction: column;
  }
  @media (max-width: 920px) {
    margin-bottom: 24px;
  }
  @media (max-width: 1090px) {
    padding: 40px 30px;
  }
`;
