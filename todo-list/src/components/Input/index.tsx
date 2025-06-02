import type { InputHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  setValue?: (value: string) => void;
}

export const Input = ({ value, setValue, ...props }: InputProps) => {
  return (
    <input
      type="text"
      placeholder="Add new task"
      name="task"
      className="task-input"
      value={value || ""}
      onChange={(event) => setValue && setValue(event.target.value)}
      {...props}
    />
  );
};
