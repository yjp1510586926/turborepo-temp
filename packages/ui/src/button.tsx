"use client";

import { ReactNode } from "react";
import { Button as Buttons } from "antd";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  onClickFunc: () => void;
}

export const VNButton = ({
  children,
  className,
  appName,
  onClickFunc = () => {},
}: ButtonProps) => {
  return (
    <Buttons className={className} onClick={onClickFunc}>
      {children}
      {appName}
    </Buttons>
  );
};
