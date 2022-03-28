import React, { memo } from "react";

export type InputProps = {
  className?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  className = "",
  value = "",
  onChange,
  placeholder = "",
  disabled = false,
}) => {
  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default memo(Input);
