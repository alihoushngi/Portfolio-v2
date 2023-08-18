"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoContainers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="aos-init md:w-1/2 max-l:flex-grow-0 max-l:flex-shrink-0 max-l:basis-auto max-l:w-full"
    >
      <div className="cardStyle">{children}</div>
    </div>
  );
};

export default InfoContainers;
