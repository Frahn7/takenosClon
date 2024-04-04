"use client";

import Image from "next/image";
import TakenosLogo from "../../../public/img/TakenosLogo.png";
import ButtonSideBar from "./ButtonSideBar";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CobrosIcon } from "./icons/Cobros";

export default function SideBar() {
  return (
    <div className="flex justify-start flex-col w-[20%] pt-[25px] h-screen bg-white ">
      <div className="py-10 px-10 items-center">
        <Image src={TakenosLogo} alt="Takenos" width={220} height={30} />
      </div>
      <div className="flex h-[1px] bg-gray-300 mb-[20px] "></div>
      <div className="flex flex-col  ps-[20px]">
        <ButtonSideBar
          icon={<IoHomeOutline />}
          name="Home"
          link="/"
          now={true}
        />
        <ButtonSideBar icon={<CobrosIcon />} name="Cobros" link="/" />
        <ButtonSideBar
          icon={<IoIosHelpCircleOutline />}
          name="Soporte"
          link="/"
        />
        <ButtonSideBar icon={<CgProfile />} name="Mi cuenta" link="/" />
      </div>
    </div>
  );
}
