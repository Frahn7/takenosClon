import { CardHomeName } from "./components/CardHomeName";
import { CarouselPlugin } from "./components/CarouselHome";
import { DolarTakenos } from "./components/DolarTakenos";
import { Movimientos } from "./components/Movimientos";
import { Notificaciones } from "./components/Notificaciones";

export default function Home() {
  return (
    <div className="w-full flex flex-col ml-[350px]">
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
