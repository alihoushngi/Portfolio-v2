"use client";
import React, { useEffect, useState } from "react";
import { ReactComponent } from "@/types/types";
import { ICardContainerProps } from "./CardContainerTypes";
import AOS from "aos";
import "aos/dist/aos.css";

const CardContainer: ReactComponent<ICardContainerProps> = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update isMobile state based on window dimensions
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Initialize AOS
    AOS.init();

    // Event listener to update isMobile state on window resize
    window.addEventListener("resize", handleResize);

    // Initial check for mobile
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const {
    aos = isMobile ? false : true,
    children,
    cardCustomStyle,
    containerStyle,
  } = props;
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
