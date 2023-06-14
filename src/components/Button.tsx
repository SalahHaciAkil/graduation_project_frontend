import React from "react";

const btnClass =
  "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800";
const btnClassLoading = btnClass + " cursor-not-allowed opacity-50";

interface ButtonProps {
  loading?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  style?: string;
  [x: string]: any; // for any other props
}

function Button({ loading, onClick, children, style, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={loading}
      onClick={onClick}
      className={
        !loading ? `${btnClass} ${style}` : `${btnClassLoading} ${style}`
      }
    >
      {children}
    </button>
  );
}

export default Button;
