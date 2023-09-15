import { cardBoxes, infoPhoto, logoKotaTng } from "@/public";
import Image from "next/image";
import React from "react";
import { TbFiles } from "react-icons/tb";

interface Props {
  title: string;
  desc: string;
  listItem: string[];
  link: string;
}
const MediaCard = ({ title, desc, listItem, link }: Props) => {
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
          <Image
            className="object-cover w-14"
            src={logoKotaTng}
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lambang_Kota_Tangerang.png/542px-Lambang_Kota_Tangerang.png"
            alt="profileImg"
            width={2670}
            height={80}
          />
        </div>
        <div className="ml-2 p-2">
          <p className="group-hover:text-white text-xl">Kota Tangerang</p>
        </div>
      </div>
      <div className="ml-4 ">
        <hr className="w-20 h-0.5 mb-4 bg-gray-100 group-hover:bg-white border-0 rounded dark:bg-gray-700" />
        <p className="group-hover:text-white text-md">Situs Resmi Kota Tangerang.</p>
        <p className="group-hover:text-white text-sm italic">https://tangerangkota.go.id/</p>
        <p className="mt-4 mb-4 group-hover:text-linkHover text-colorSecondary text-sm">Kunjungi Situs</p>
      </div>
    </div>
  );
};

export default MediaCard;
