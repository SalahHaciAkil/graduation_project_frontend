import React from "react";

interface HeadTitleProps {
  text: string;
  style?: string;
}

function HeadTitle({ text, style }: HeadTitleProps) {
  return <h1 className={`text-white text-3xl w-fit  ${style}`}>{text}</h1>;
}

export default HeadTitle;
