import { cardBoxes, infoPhoto, logoKotaTng } from "@/public";
import Image from "next/image";
import React, { useState } from "react";
import { TbFiles } from "react-icons/tb";

interface Props {
  title: string;
  desc: string;
  logo: string;
  link: string;
}
const MediaCard = ({ title, desc, logo, link }: Props) => {

  const redirectUrl = () => {
    window.open(link, '_blank');
  }
  return (
    <div
      className="
            transition 
            ease-in-out 
            delay-100 
            duration-100 
            w-full 
            hover:shadow-lg 
            flex flex-col 
            justify-center
            hover:-translate-y-2
            rounded-xl
            p-4
            border border-gray-200
            hover:bg-btnPrimary
            group
            "
    >
      <div className="flex flex-row p-4">
        <div className="">
          <img className="object-cover w-14" src={logo} alt={logo} />
          {/* <Image
            className="object-cover w-14"
            // src={logoKotaTng}
            src={logo}
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lambang_Kota_Tangerang.png/542px-Lambang_Kota_Tangerang.png"
            alt="profileImg"
            width={2670}
            height={80}
          /> */}
        </div>
        <div className="ml-2 p-2">
          <p className="group-hover:text-white text-xl">{title}</p>
        </div>
      </div>
      <div className="ml-4 ">
        <hr className="w-20 h-0.5 mb-4 bg-gray-100 group-hover:bg-white border-0 rounded dark:bg-gray-700" />
        <p className="group-hover:text-white text-md">{desc}</p>
        <p className="group-hover:text-white text-sm italic">{link}</p>
        <p className="mt-4 mb-4 group-hover:text-linkHover text-colorSecondary text-sm" onClick={redirectUrl}>Kunjungi Situs</p>
      </div>
    </div>
  );
};

export default MediaCard;
