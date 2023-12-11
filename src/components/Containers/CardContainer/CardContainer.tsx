"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactComponent } from "@/types/types";
import { ICardContainerProps } from "./CardContainerTypes";

const CardContainer: ReactComponent<ICardContainerProps> = (props) => {
  const { aos = true, children, cardCustomStyle, containerStyle } = props;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {aos ? (
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className={`${containerStyle} aos-init sectionContainers`}
        >
          <div className={`${cardCustomStyle} cardStyle`}>{children}</div>
        </div>
      ) : (
        <div className={`${containerStyle}  sectionContainers`}>
          <div className={`${cardCustomStyle} cardStyle`}>{children}</div>
        </div>
      )}
    </>
  );
};

export default CardContainer;
