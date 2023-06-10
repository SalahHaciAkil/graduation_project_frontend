import React from "react";

interface TextAreaResultProps {
  result: string;
  style?: string;
}

function TextAreaResult({ result, style }: TextAreaResultProps) {
  return (
    <>
      <textarea
        className={`w-2/3 h-96 p-4 mt-4 bg-gray-100 rounded-lg border-2 border-gray-200 outline-none text-black max-sm:w-full max-sm:m-2 ${style}`}
        placeholder="Result"
        value={result}
        readOnly
        cols={30}
        rows={10}
      />
    </>
  );
}

export default TextAreaResult;
