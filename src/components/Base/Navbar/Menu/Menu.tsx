"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { StyledMenu } from "./MenuStyled";

// types
interface menuTypes {
  open: boolean;
}

const Menu = ({ open }: menuTypes) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledMenu open={open}>
      <ul>
        <li data-aos="zoom-in" data-aos-duration="1000" className="aos-init">
          <Link href="/">Home</Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="1500" className="aos-init">
          <Link href="/about">About</Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="2000" className="aos-init">
          <Link href="/project">Project</Link>
        </li>
        <li data-aos="zoom-in" data-aos-duration="2500" className="aos-init">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
