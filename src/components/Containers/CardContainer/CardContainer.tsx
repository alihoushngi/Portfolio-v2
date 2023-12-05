"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardContainer = ({
  children,
  containerStyle,
  cardCustomStyle,
  aos = true,
}: {
  children: React.ReactNode;
  aos?: boolean;
  containerStyle?: string;
  cardCustomStyle?: string;
}) => {
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
