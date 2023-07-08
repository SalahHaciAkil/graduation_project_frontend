import React from "react";
// create a type that only accepts 3 values
type AlertColor = "red" | "green" | "yellow";
type AlertTextAlign = "left" | "center" | "right";
interface AlertProps {
  text?: AlertTextAlign;
  children: React.ReactNode;
  style?: string;
}
function Alert({  text = "left", style, children }: AlertProps) {
  return (
    <div
      className={`p-4 mb-4 text-sm rounded-lg dark:bg-gray-800 text-${text} ${style}`}
      role="alert"
    >
      {children}
    </div>
  );
}

export default Alert;
