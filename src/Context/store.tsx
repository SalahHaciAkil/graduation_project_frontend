"use client";
// store.tsx

import React, { createContext, useContext, useReducer, useState } from "react";

interface ContextProps {
  openai_api_key: string;
  set_openai_api_key: (openai_api_key: string) => void;
}

const Context = createContext<ContextProps>({
  openai_api_key: "",
  set_openai_api_key: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [openai_api_key, set_openai_api_key] = useState<string>("");
  return (
    <Context.Provider
      value={{
        openai_api_key,
        set_openai_api_key,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => useContext(Context);
