import React from "react";

interface TextAreaResultProps {
  value: string;
  style?: string;
  placeholder?: string;
  cols: number;
  rows: number;
  onChange?: (e: any) => void;
  [x: string]: any;
}

function TextAreaResult({
  value,
  style,
  rows,
  cols,
  placeholder,
  onChange,
  ...rest
}: TextAreaResultProps) {
  return (
    <>
      <textarea
        className={`w-2/3 h-96 p-4 mt-4 bg-gray-100 rounded-lg border-2 border-gray-200 outline-none text-black max-sm:w-full max-sm:m-2 ${style}`}
        value={value}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        onChange={(e) => onChange?.(e)}
        {...rest}
      />
    </>
  );
}

export default TextAreaResult;
