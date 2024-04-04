import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Notificaciones = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="flex justify-end mt-[20px] mr-10 bg-white rounded-full">
        <IoMdNotificationsOutline
          color="#612dc1"
          className=" p-[15px] text-[65px] "
        />
      </div>
    </div>
  );
};
