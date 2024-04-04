"use client";

import Image from "next/image";
import TakenosLogo from "../../../public/img/TakenosLogo.png";
import ButtonSideBar from "./ButtonSideBar";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CobrosIcon } from "./icons/Cobros";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";
import { CloseIcon } from "./icons/Close";

export default function SideBar() {
  const [HandleBar, setHandleBar] = useState("HOME");

  return (
    <div className="flex justify-start flex-col fixed w-[23%] pt-[25px] h-screen bg-white ">
      <div className="py-10 px-10 items-center">
        <Image src={TakenosLogo} alt="Takenos" width={230} height={30} />
      </div>
      <div className="flex h-[1px] bg-gray-300 mb-[20px] "></div>
      <div className="flex flex-col  ps-[20px] gap-[5px]">
        <ButtonSideBar
          icon={<IoHomeOutline />}
          name="Home"
          link="/?actual=HOME"
          onclick={() => {
            setHandleBar("HOME");
          }}
          now={HandleBar == "HOME" ? true : false}
        />
        <ButtonSideBar
          icon={<CobrosIcon />}
          name="Cobros"
          link="/?actual=COBRO"
          onclick={() => {
            setHandleBar("COBRO");
          }}
          now={HandleBar == "COBRO" ? true : false}
        />
        <ButtonSideBar
          icon={<IoIosHelpCircleOutline />}
          name="Soporte"
          link="/?actual=SOPORTE"
          onclick={() => {
            setHandleBar("SOPORTE");
          }}
          now={HandleBar == "SOPORTE" ? true : false}
        />
        <ButtonSideBar
          icon={<CgProfile />}
          name="Mi cuenta"
          link="/?actual=CUENTA"
          onclick={() => {
            setHandleBar("CUENTA");
          }}
          now={HandleBar == "CUENTA" ? true : false}
        />
      </div>
      <div className="flex flex-col-reverse mt-auto  mb-7 justify-center w-full">
        <div className="flex justify-center mt-4 text-white ">
          <p className="text-[20px] text-red-600 font-semibold gap-2 flex flex-row items-center">
            <CloseIcon />
            Cerrar sesión
          </p>
        </div>
        <div className="flex mt-auto w-[75%] bg-[#6D37D5]  h-[50px] text-white rounded-2xl justify-center items-center self-center ">
          <p className="text-[20px] font-semibold gap-2 flex flex-row items-center">
            Sumate al discord <FaDiscord fontSize={35} color="white" />
          </p>
        </div>
      </div>
    </div>
  );
}
