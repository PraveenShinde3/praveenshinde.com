import React from "react";

const Button = ({ onClick, text, icon, bold, highlight }) => {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={` hover:-translate-y-1 transition-all ease-in-out duration-200 flex gap-2 text-[0.8rem] items-center ${
        highlight ? "bg-foreground text-background" : "bg-accent  "
      } ${text ? "px-[15px]" : "px-[10px]"} py-[6px] rounded-full ${
        bold ? "font-bold" : "opacity-80"
      }`}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
