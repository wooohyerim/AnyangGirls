import React from "react";

interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  onClick,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="w-[90%] h-[60px] border p-4 border-s-slate-300 bg-white outline-none rounded-md"
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
    />
  );
};

export default Input;
