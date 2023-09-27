import React from "react";

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
    <div>
      {IsLable && <label htmlFor={InputName}>{LableName}</label>}
      <input type={InputType} name={InputName} placeholder={InputPlaceholder} />
    </div>
  );
};

export default Input;
