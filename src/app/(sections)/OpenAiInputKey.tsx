"use client";
import { useGlobalContext } from "@/Context";
import { Alert } from "@/components";
import React from "react";

// if less then sm screen, w-full, else w-2/3
function OpenAiInputKey(): JSX.Element {
  const { set_openai_api_key } = useGlobalContext();
  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <input
          onChange={(e) => set_openai_api_key(e.target.value.trim())}
          type="text"
          className="p-4 m-4 bg-gray-100 rounded-lg border-2 border-gray-200 outline-none text-black max-sm:w-full max-sm:m-2"
          placeholder="Enter your OpenAI API key here..."
        />
        <Alert
          text="center"
          style="mx-4 text-yellow-800 bg-yellow-50 dark:text-yellow-300"
        >
          <>
            You don't have an OpenAI API key ? create one{" "}
            <a
              className="underline"
              href="https://platform.openai.com/account/api-keys"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </>
        </Alert>
      </div>
    </>
  );
}

export default OpenAiInputKey;
