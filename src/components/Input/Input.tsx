import { memo } from "react";

export type InputProps = {
  className?: string;
  type?: "text" | "checkbox" | "radio";
  value?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  className = "",
  type = "text",
  value = "",
  onChange,
  placeholder = "",
  disabled = false,
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default memo(Input);
