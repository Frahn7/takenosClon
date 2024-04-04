import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Notificaciones = () => {
  return (
    <div className="flex justify-end mt-[60px] px-[80px]">
      <IoMdNotificationsOutline
        color="#612dc1"
        className="bg-white rounded-full p-2 h-[60px] w-[80px]"
      />
    </div>
  );
};
