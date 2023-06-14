import React from "react";

interface SelectProps {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  [x: string]: any;
}

const select_style =
  "border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent";
const Select = ({ children, style, defaultValue, ...rest }: SelectProps) => {
  return (
    <select
      defaultValue={defaultValue}
      className={`${select_style} ${style}`}
      {...rest}
    >
      {children}
    </select>
  );
};
interface OptionProps {
  value: string;
  children: React.ReactNode;
  defaultValue?: string;
  [x: string]: any;
}
const Option = ({ children, value, ...rest }: OptionProps) => {
  return (
    <option {...rest} value={value}>
      {children}
    </option>
  );
};

Select.Option = Option;

export default Select;
