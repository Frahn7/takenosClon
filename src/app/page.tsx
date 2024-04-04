import { CardHomeName } from "./components/CardHomeName";
import { Notificaciones } from "./components/Notificaciones";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Notificaciones />
      <CardHomeName />
    </div>
  );
}
