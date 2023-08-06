import React, { useState } from "react";
import { BergerWrapper, Bergerline } from "./StyledBerger";

const Berger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <BergerWrapper open={open}>
      <Bergerline></Bergerline>
      <Bergerline></Bergerline>
      <Bergerline></Bergerline>
    </BergerWrapper>
  );
};

export default Berger;
