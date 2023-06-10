import React from "react";

// if less then sm screen, w-full, else w-2/3
const input_style =
  "w-full p-4 m-4 mt-4 bg-gray-100 rounded-lg border-2 border-gray-200 outline-none text-black max-sm:w-full max-sm:m-2";
function OpenAiInputKey(): JSX.Element {
  return (
    
    <div className="w-full flex justify-center">
      <input
        type="text"
        className={input_style}
        placeholder="Enter your OpenAI API key here"
      />
    </div>
  );
}

export default OpenAiInputKey;
