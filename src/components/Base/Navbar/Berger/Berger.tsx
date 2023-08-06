import React, { useState } from "react";
import { BergerWrapper } from "./StyledBerger";
import Menu from "../Menu/Menu";

const Berger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <BergerWrapper
        open={open}
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between w-[25px] h-[18px] text-[25px] leading-[2rem] z-10 cursor-pointer lg:hidden"
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
