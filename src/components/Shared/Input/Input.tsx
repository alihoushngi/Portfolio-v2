"use client";

import React from "react";
import { ReactComponent } from "@/types/types";
import { IInputPropsType } from "./InputTypes";

const Input: ReactComponent<IInputPropsType> = (props) => {
  const {
    IsLable = false,
    InputName,
    LableName,
    InputType,
    InputPlaceholder,
  } = props;

  return (
    <>
      {IsLable && <label htmlFor={InputName}>{LableName}</label>}
      <input
        className="w-full border-0 bg-gradient-to-r from-[#ffffff80] to-[#ffffff1a] text-black rounded-xl py-4 px-5 text-sm block focus:outline-none focus-within:outline-none focus-visible:outline-none"
        type={InputType}
        name={InputName}
        placeholder={InputPlaceholder}
      />
    </>
  );
};

export default Input;
