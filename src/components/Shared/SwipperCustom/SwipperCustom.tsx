import React from "react";
import { SwipperWrapper } from "./SwipperCustomStyled";

const SwipperCustom = ({ children }: { children: React.ReactNode }) => {
  return <SwipperWrapper>{children}</SwipperWrapper>;
};

export default SwipperCustom;
