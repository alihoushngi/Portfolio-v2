"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { StyledMenu } from "./MenuStyled";
import { usePathname } from "next/navigation";

// types
interface menuTypes {
  open: boolean;
}

const Menu = ({ open }: menuTypes) => {
  const routeName = usePathname();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledMenu open={open}>
      <ul>
        <li
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="aos-init tranistion-custom hover:text-white"
        >
          <Link
            href="/"
            className={`menu-item ${
              routeName === "/" ? "active-menu-item" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="aos-init tranistion-custom hover:text-white"
        >
          <Link
            href="/about"
            className={`menu-item ${
              routeName === "/about" ? "active-menu-item" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="aos-init tranistion-custom hover:text-white"
        >
          <Link
            href="/project"
            className={`menu-item ${
              routeName === "/project" ? "active-menu-item" : ""
            }`}
          >
            Project
          </Link>
        </li>
        <li
          data-aos="zoom-in"
          data-aos-duration="2500"
          className="aos-init tranistion-custom hover:text-white"
        >
          <Link
            href="/contact"
            className={`menu-item ${
              routeName === "/contact" ? "active-menu-item" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
