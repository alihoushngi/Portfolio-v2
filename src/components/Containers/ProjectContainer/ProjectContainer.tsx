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
      <div className="w-full lg:m-0 backdrop-blur-sm rounded-3xl border-[0.5px] border-solid border-ColorRound relative bg-[#0f0f0f] before:absolute before:left-0 before:top-0 before:w-full before:h-full z-10 before:bg-gradient-to-r before:from-gradientSecound before:to-gradientFirst before:rounded-3xl before:opacity-[0.25] before:box-border after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:-z-10 after:rounded-3xl after:-m-[1px] py-[20px] px-[25px] md:mb-6">
        {children}
      </div>
    </div>
  );
};

export default ProjectContainer;
