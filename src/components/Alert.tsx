import React from "react";
// create a type that only accepts 3 values
type AlertColor = "red" | "green" | "yellow";
type AlertTextAlign = "left" | "center" | "right";
interface AlertProps {
  color: AlertColor;
  text?: AlertTextAlign;
  children: React.ReactNode;
  style?: string;
}
function Alert({ color, text = "left", style, children }: AlertProps) {
  return (
    <div
      className={`p-4 mb-4 text-sm text-${color}-800 rounded-lg bg-${color}-50 dark:bg-gray-800 dark:text-${color}-300 text-${text} ${style}`}
      role="alert"
    >
      {children}
    </div>
  );
}

export default Alert;
