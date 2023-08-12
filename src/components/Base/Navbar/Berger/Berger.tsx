"use client";

import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { BergerWrapper } from "./BergerStyled";

const Berger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <BergerWrapper open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BergerWrapper>
      <Menu open={open} />
    </>
  );
};

export default Berger;
