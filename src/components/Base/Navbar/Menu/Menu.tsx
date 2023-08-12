import React from "react";
import Link from "next/link";
import { StyledMenu } from "./MenuStyled";

// types
interface menuTypes {
  open: boolean;
}

const Menu = ({ open }: menuTypes) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/works">Works</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
