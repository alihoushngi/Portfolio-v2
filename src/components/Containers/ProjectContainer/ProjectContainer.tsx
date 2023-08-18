import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectContainer = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="aos-init max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto w-1/2 min-h-[1px] max-md:w-full md:ms-2"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="cardStyle">{children}</div>
    </div>
  );
};

export default ProjectContainer;
