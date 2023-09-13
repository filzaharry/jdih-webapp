import { cardBoxes, infoPhoto } from "@/public";
import Image from "next/image";
import React from "react";
import { TbFiles } from "react-icons/tb";

interface Props {
  title: string;
  desc: string;
  listItem: string[];
  link: string;
}
const CertificateCard = ({ title, desc, listItem, link }: Props) => {
  return (
    // <a href="">
    <div
      className="
            transition 
            ease-in-out 
            delay-100 
            duration-100 
            w-full 
            hover:shadow-lg 
            flex flex-col 
            justify-center gap-6 
            hover:-translate-y-2 group
            "
    >
      <div className="flex flex-col items-center  rounded-xl border border-slate-400 ">
        <Image
          width={2670}
          height={80}
          className="w-full m-2 "
          src={
            "https://jdih.tangerangkota.go.id/assets/files/foto_berita/penghargaan-64992cdf21e87.jpg"
          }
          alt="infoPhoto"
        />
        <div
          className="
              hidden 
              group-hover:block 
              group-hover:bg-gradient-to-t from-black/80 to-black/30 
              group-hover:absolute
              w-full 
              rounded-xl
              h-full
              top-0 left-0 duration-300
              "
        >
          <div className="
           group-hover:pr-4
           group-hover:pb-4
           group-hover:absolute
           group-hover:bottom-0 
           group-hover:left-0">
            <p className="text-white bg-colorSecondary text-md ml-4 py-1 w-[20%] text-center rounded-full">
              2017
            </p>
            <p className="text-white text-2xl sm:text-xl ml-4 font-semibold">
              Penghargaan JDIH Kota Tangerang
            </p>
            <p className="text-white text-sm ml-4">
              Penghargaan sebagai Pengelola JDIH Terbaik Kedua Tahun 2014
            </p>
          </div>
        </div>
      </div>
    </div>
    // </a>
  );
};

export default CertificateCard;
