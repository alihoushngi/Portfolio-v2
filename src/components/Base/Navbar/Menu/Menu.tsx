"use client";

import React from "react";
import Link from "next/link";
import { StyledMenu } from "./MenuStyled";
import { usePathname } from "next/navigation";

// types
interface menuTypes {
  open: boolean;
}

const Menu = ({ open }: menuTypes) => {
  const routeName = usePathname();

  return (
    <StyledMenu open={open}>
      <ul>
        <li className="tranistion-custom hover:text-white">
          <Link
            href="/"
            className={`menu-item ${
              routeName === "/" ? "active-menu-item" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li className="tranistion-custom hover:text-white">
          <Link
            href="/about"
            className={`menu-item ${
              routeName === "/about" ? "active-menu-item" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li className="tranistion-custom hover:text-white">
          <Link
            href="/project"
            className={`menu-item ${
              routeName === "/project" ? "active-menu-item" : ""
            }`}
          >
            Project
          </Link>
        </li>
        <li className="tranistion-custom hover:text-white">
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
