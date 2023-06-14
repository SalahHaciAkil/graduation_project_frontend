import React from "react";

const input_style =
  "w-2/3 p-4 mt-4 bg-gray-100 rounded-lg border-2 border-gray-200 outline-none text-primary-500 max-sm:w-full max-sm:m-2";

// create style of disabled input
interface InputProps {
  style?: string;
  type?: string;
  placeHolder: string;
  value?: string;
  name?: string;
  onChange?: (e: any) => void;
  [x: string]: any;
}
function Input({
  style,
  placeHolder,
  value,
  onChange,
  name,
  type,
  ...rest
}: InputProps) {
  return (
    <input
      type={type ? type : "text"}
      className={`${input_style} ${style} text-disabled`}
      placeholder={placeHolder}
      onChange={(e) => onChange?.(e)}
      value={value}
      name={name}
      {...rest}
    />
  );
}

export default Input;
