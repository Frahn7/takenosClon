import React from "react";

interface ButtonProps {
  name: string;
  icon: React.ReactNode;
}

export const ButtonHomeName = ({ name, icon }: ButtonProps) => {
  return (
    <div className="text-white font-semibold w-full bg-[#6D37D5] h-[2.5rem] rounded-[8px] text-[20px] items-center text-center flex justify-center gap-1">
      {icon}
      {name}
    </div>
  );
};
