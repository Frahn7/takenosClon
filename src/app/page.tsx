import { CardHomeName } from "./components/CardHomeName";
import { CarouselPlugin } from "./components/CarouselHome";
import { DolarTakenos } from "./components/DolarTakenos";
import { Notificaciones } from "./components/Notificaciones";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Notificaciones />
      <CardHomeName />
      <div className="flex justify-center mt-6">
        <CarouselPlugin />
      </div>
      <DolarTakenos />
    </div>
  );
}
