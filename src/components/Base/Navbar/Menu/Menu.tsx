import React from "react";
import { StyledMenu } from "./StyledMenu";
import Link from "next/link";

interface menuTypes {
  open: boolean;
}

const Menu = ({ open }: menuTypes) => {
  return (
    <StyledMenu className="bg-primary " open={open}>
      <ul className="md:w-full">
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
