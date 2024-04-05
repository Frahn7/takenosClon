"use client";

import React, { useState } from "react";
import { TbReload } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { ButtonHomeName } from "./ButtonHomeName";
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";

export const CardHomeName = () => {
  const [Seguridad, setSeguridad] = useState(false);

  return (
    <div className="bg-transparent w-full flex justify-center h-[180px] mt-[30px] ">
      <div className="flex justify-center CardShadow bg-white  text-[#6D37D5] w-[55%] p-[20px] rounded-lg flex-col CardShadow">
        <p className="flex items-start  w-full text-[20px] font-semibold">
          Hola, Francisco Antonio!
        </p>
        <div className="flex flex-row justify-between items-center text-black text-[40px] font-bold mb-5 align-middle">
          {Seguridad ? <p>$****</p> : <p>$40,00</p>}
          <p className="flex flex-row gap-2 text-[30px]">
            {Seguridad ? (
              <IoIosEyeOff
                className="cursor-pointer"
                onClick={() => {
                  setSeguridad(!Seguridad);
                }}
              />
            ) : (
              <MdOutlineRemoveRedEye
                className="cursor-pointer"
                onClick={() => {
                  setSeguridad(!Seguridad);
                }}
              />
            )}

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
