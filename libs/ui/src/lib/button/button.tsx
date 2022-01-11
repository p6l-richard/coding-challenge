import className from 'classnames';
import React from 'react';

import './button.module.css';

export interface ButtonProps {
  children: any;
  variant: "contained" | "outline" | "text";
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export function Button(props: ButtonProps) {

  const { children, variant = "text", onClick } = props;

  const classes = className(
    "text-3xl font-normal text-center rounded-lg lg:px-8 lg:py-8",
    variant === "contained" && "bg-blue-500 text-white hover:bg-blue-700 shadow-lg",
    variant === "outline" && "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    variant === "text" && "text-blue-500"
  )

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
