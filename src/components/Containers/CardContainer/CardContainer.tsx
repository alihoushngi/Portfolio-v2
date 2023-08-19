import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardContainer = ({
  children,
  containerStyle,
  cardCustomStyle,
}: {
  children: React.ReactNode;
  containerStyle?: string;
  cardCustomStyle?: string;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className={`${containerStyle} aos-init sectionContainers`}
    >
      <div className={`${cardCustomStyle} cardStyle`}>{children}</div>
    </div>
  );
};

export default CardContainer;
