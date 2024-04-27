import React from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  title: string;
  onClick?: () => void;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ type, title, onClick, className }) => {
  return (
    <button
      type={type}
      className={
        className ||
        "lg:block w-[100px] h-full  px-[8px] py-[12px] border border-gray-300 rounded-[8px] bg-[#88AB8E] font-bold text-[20px] text-center text-white hover:bg-[#AFC8AD]"
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
