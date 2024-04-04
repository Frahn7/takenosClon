import React from "react";
import { TbReload } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ButtonHomeName } from "./ButtonHomeName";
import { IoDownloadOutline } from "react-icons/io5";

export const CardHomeName = () => {
  return (
    <div className="bg-transparent w-full flex justify-center h-[180px] ">
      <div className="flex justify-center CardShadow bg-white  text-[#6D37D5] w-[55%] p-[20px] rounded-lg flex-col">
        <p className="flex items-start  w-full text-[20px] font-semibold">
          Hola, Francisco Antonio!
        </p>
        <div className="flex flex-row justify-between align-middle text-black text-[40px] font-bold mb-5">
          <p>$40,00</p>
          <p className="flex flex-row gap-2 text-[30px]">
            <MdOutlineRemoveRedEye />
            <TbReload />
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <ButtonHomeName name="Ingresar" icon={<IoDownloadOutline />} />
          <ButtonHomeName
            name="Retirar"
            icon={<IoDownloadOutline style={{ rotate: "180deg" }} />}
          />
        </div>
      </div>
    </div>
  );
};
