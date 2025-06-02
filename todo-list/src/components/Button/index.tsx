import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./styles.css";

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "fill" | "outline" | "ghost",
}

export const Button = ({ buttonType = "fill", children, ...props }: ButtonProps) => {
  return <button className={"button " + buttonType} {...props}>{children}</button>;
};
