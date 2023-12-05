"use client";

import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { BurgerWrapper } from "./BurgerStyled";

const Berger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <BurgerWrapper open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerWrapper>
      <Menu open={open} />
    </>
  );
};

export default Berger;
