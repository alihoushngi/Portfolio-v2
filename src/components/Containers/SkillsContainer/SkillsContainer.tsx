import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsContainer = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="aos-init max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto w-full h-full"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="cardStyle p-8">{children}</div>
    </div>
  );
};

export default SkillsContainer;
