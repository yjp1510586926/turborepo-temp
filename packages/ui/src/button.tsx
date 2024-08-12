"use client";

import { ReactNode } from "react";
import { Button as Buttons } from "antd";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const VNButton = ({ children, className, appName }: ButtonProps) => {
  return (
    <Buttons
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </Buttons>
  );
};
