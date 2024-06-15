"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { setTheme } = useTheme();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTheme(isChecked ? "dark" : "light");
    console.log(isChecked ? "dark" : "light");
  };

  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <p className="text-[0.8rem] font-medium">
          Lights {isChecked ? "on" : "off"}
        </p>
      </label>
    </>
  );
};

export default ModeToggle;
