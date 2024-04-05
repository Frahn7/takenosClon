"use client";

import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Notificaciones = () => {
  const [Modal, setModal] = useState(false);

  return (
    <div className="w-full flex justify-end">
      {Modal ? (
        <div className=" bg-white w-[300px] text-center align-middle items-center rounded-[8px] mt-6 mr-2">
          <div className="mt-1">
            <p className="text-black ">Notificaciones</p>
            <p className="text-gray-600">No tienes notificaciones</p>
          </div>
        </div>
      ) : null}
      <div
        className="flex justify-end mt-[20px] mr-10 bg-white rounded-full cursor-pointer"
        onClick={() => {
          setModal(!Modal);
        }}
      >
        <IoMdNotificationsOutline
          color="#612dc1"
          className=" p-[15px] text-[65px] "
        />
      </div>
    </div>
  );
};
