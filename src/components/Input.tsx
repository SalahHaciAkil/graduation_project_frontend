import React from "react";

const input_style =
  "w-2/3 p-4 mt-4 bg-gray-100 rounded-lg border-2 border-gray-200 outline-none text-black max-sm:w-full max-sm:m-2";
function Input({ style }: { style: string }) {
  return (
    <input
      type="text"
      className={`${input_style} ${style}`}
      placeholder="Enter a Youtube Link Video"
    />
  );
}

export default Input;
