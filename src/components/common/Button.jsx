import React from "react";

const Button = ({ title, onClick, className, ...props }) => {
  return (
    <div className={className} onClick={onClick} {...props}>
      {title}
    </div>
  );
};

export default Button;
