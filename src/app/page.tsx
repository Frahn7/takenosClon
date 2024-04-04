import { CardHomeName } from "./components/CardHomeName";
import { CarouselPlugin } from "./components/CarouselHome";
import { DolarTakenos } from "./components/DolarTakenos";
import { Movimientos } from "./components/Movimientos";
import { Notificaciones } from "./components/Notificaciones";

export default function Home() {
  return (
    <div className="w-full flex flex-col ml-[350px]">
      <div className="flex justify-center h-[30px] bg-yellow-400 my-5 rounded-[8px] text-black text-[20px] font-semibold pb-10 py-2">
        Este es un sitio ficticio realizado por mi, no es la página oficial de
        Takenos. Visite Takenos
        <a
          href="https://www.app.takenos.com/auth"
          target="_blank"
          className="px-1 text-gray-500"
        >
          AQUI
        </a>
      </div>
      <Notificaciones />
      <CardHomeName />
      <div className="flex justify-center mt-6">
        <CarouselPlugin />
      </div>
      <DolarTakenos />
      <Movimientos />
    </div>
  );
}
