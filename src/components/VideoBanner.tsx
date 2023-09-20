import React from "react";
import SectionTitle from "./SectionTitle";
import { infoPhoto, profileImg } from "@/public";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";

const VideoBanner = () => {
  return (
    <div
      id="video"
      className="max-w-contentContainer mx-auto py-10 flex flex-col gap-8"
    >
      <div className="flex justify-between">
        <SectionTitle title="Video" />
      </div>

      <a href="">
        <div className="w-full h-80 relative group ">
          <div className="absolute w-full h-[480px] rounded-3xl">
            <div className="w-full h-full relative z-20 flex lgl:pl-0">
              <Image
                className="rounded-3xl w-full object-cover"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="profileImg"
                width={2670}
                height={80}
                crossOrigin='anonymous'
              />
              <div
                className="
              hiddden lgl:inline-block absolute 
              w-full h-[480px]
              bg-gradient-to-t from-colorPrimary/80 to-colorPrimary/10 
              rounded-3xl top-0 left-0 duration-300
              "
              >
                <div className="mt-10 visible">
                  <AiFillPlayCircle className="text-8xl mt-52 mb-10 text-white mx-auto" />
                  <p className="text-white text-3xl mb-2 pl-10">
                    Rapat Informasi Publik
                  </p>
                  <p className="text-white/80 text-white text-md pl-10">
                    Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113
                    Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha
                    Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan.
                    Lihat Selengkapnya ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="text-lg flex gap-4 mt-40 mx-auto">
        <a href="" className="text-gray-400 duration-300">
          <FaCircle />
        </a>
        <a href="" className="text-colorSecondary duration-300">
          <FaCircle />
        </a>
        <a href="" className="text-gray-400 duration-300">
          <FaCircle />
        </a>
        <a href="" className="text-gray-400 duration-300">
          <FaCircle />
        </a>
        <a href="" className="text-gray-400 duration-300">
          <FaCircle />
        </a>
      </div>
    </div>
  );
};

export default VideoBanner;
