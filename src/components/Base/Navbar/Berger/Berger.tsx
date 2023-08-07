"use client";

import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { styled } from "styled-components";

const Berger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <BergerWrapper
        open={open}
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between w-[25px] h-[18px] text-[25px] leading-[2rem] z-50 cursor-pointer lg:hidden"
      >
        <div />
        <div />
        <div />
      </BergerWrapper>
      <Menu open={open} />
    </>
  );
};

export default Berger;

// style
const BergerWrapper = styled.div<{ open: boolean }>`
  div {
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    display: block;
    transition: 0.4s;

    &:nth-child(1) {
      transform: ${({ open }) =>
        open &&
        "translate3d(0px, 6px, 0px) scale(1, 1) rotate(45deg) scale(1, 1)"};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open && "scale(0)"};
    }

    &:nth-child(3) {
      transform-origin: left;
      transform: ${({ open }) =>
        open &&
        "translate3d(4px, -2px, 0px) scale(1, 1) rotate(-45deg) scale(1, 1)"};
    }
  }
`;
