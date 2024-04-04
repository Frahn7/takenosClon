import React from "react";
import { Argentina } from "./icons/Argentina";
interface CardProps {
  fecha: string;
  valor: number;
  estado: string;
}

export const CardMovimientos = ({ fecha, valor, estado }: CardProps) => {
  return (
    <div>
      <div className="mt-3 flex flex-row gap-2 text-[16px] py-2">
        <div className="flex items-center px-3">
          <Argentina />
        </div>
        <p className="text-nowrap">
          CBU/CVU - ARS <br />
          <span className="text-[14px] text-gray-400">Retiro: {fecha}</span>
        </p>
        <div className="flex justify-end w-full flex-col text-end">
          <p>${valor} USD</p>
          <p className="text-gray-400">{estado}</p>
        </div>
      </div>
      <div className="flex justify-center w-full ">
        <div className="bg-gray-300  h-[1px] w-[55%] mt-5"></div>
      </div>
    </div>
  );
};
