"use client";

import React from "react";
import { InputSyle } from "./StyleInput";

interface IInputPropsType {
  IsLable?: boolean;
  LableName?: string;
  InputType: string;
  InputName: string;
  InputPlaceholder?: string;
}

const Input = ({
  IsLable = false,
  InputName,
  LableName,
  InputType,
  InputPlaceholder,
}: IInputPropsType) => {
  return (
    <>
      {IsLable && <label htmlFor={InputName}>{LableName}</label>}
      <InputSyle
        type={InputType}
        name={InputName}
        placeholder={InputPlaceholder}
      />
    </>
  );
};

export default Input;
