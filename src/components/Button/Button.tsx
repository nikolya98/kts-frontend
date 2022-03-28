import React, { memo } from "react";

export type ButtonProps = {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode | string;
};

const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={className}
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(Button);
