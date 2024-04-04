import React from "react";

interface ButtonProps {
  icon: React.ReactNode;
  name: string;
  link: string;
  now: boolean;
  onclick: any;
}

export default function ButtonSideBar({
  icon,
  name,
  link,
  now,
  onclick,
}: ButtonProps) {
  const colorText = now ? "text-[#6D37D5]" : "";

  const className = `flex flex-row text-center items-center hover:text-[#6D37D5] font-semibold cursor-pointer text-[20px] ${colorText} w-full mb-[0.5rem] min-h-[35px]`;

  const Active = () => {
    return (
      <div className="bg-[#6D37D5] w-[7px] h-[35px] rounded-[5px] ml-auto "></div>
    );
  };

  return (
    <div className={className} onClick={onclick}>
      {icon}
      <a>
        <p className="px-[10px]">{name}</p>
      </a>
      {now ? <Active /> : null}
    </div>
  );
}
