import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardContainer = ({
  children,
  containerStyle,
  cardCustomStyle,
  aosDuration,
  aosStyle,
}: {
  children: React.ReactNode;
  containerStyle?: string;
  cardCustomStyle?: string;
  aosDuration: string;
  aosStyle: string;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos={aosStyle}
      data-aos-duration={aosDuration}
      className={`${containerStyle} aos-init sectionContainers`}
    >
      <div className={`${cardCustomStyle} cardStyle`}>{children}</div>
    </div>
  );
};

export default CardContainer;
