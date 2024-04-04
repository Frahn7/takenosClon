import React from "react";
import { CardMovimientos } from "./CardMovimientos";

export const Movimientos = () => {
  return (
    <div className=" mb-10  mt-6 text-black flex justify-center w-full py-5 rounded-[8px]">
      <div className="bg-white w-[55%] min-h-8 rounded-[8px] text-black font-semibold text-[22px] px-3 py-4">
        Movimientos
        <div className="gap-10 flex flex-col">
          <CardMovimientos fecha="04/04/2024" valor={320} estado="Completado" />
          <CardMovimientos fecha="04/04/2024" valor={10} estado="Rechazado" />
          <CardMovimientos fecha="04/04/2024" valor={240} estado="Pendiente" />
          <CardMovimientos fecha="04/04/2024" valor={35} estado="Completado" />
        </div>
      </div>
    </div>
  );
};
