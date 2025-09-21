// components/Button.tsx

import React from "react";
import { ButtonProps } from "@/interfaces";

// The component now destructures 'title' and 'styles' from props
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      // The styles prop is now used directly in the className
      className={`bg-blue-500 text-white shadow-md hover:bg-blue-600 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;