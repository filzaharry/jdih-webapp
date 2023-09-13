import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public";
import Linechart from "./Linechart";

const Statistic = () => {
  const [perdir, setperdir] = useState(true);
  const [perwal, setPerwal] = useState(false);

  const handleperdir = () => {
    setperdir(true);
    setPerwal(false);
  };
  const handlePerwal = () => {
    setperdir(false);
    setPerwal(true);
  };
  return (
    <div
      id="statistic"
      className="max-w-contentContainer
      mx-auto 
      sml:pt-20
      lg:py-10 
      lg:mt-40
      xl:mt-0 xl:pt-0
      lgl:py-32 
      sm:w-[90%] 
      mdl:w-[90%]">
      <div className="flex flex-col">
        <SectionTitle title="Statistik" />

        <div className="flex md:flex-row sm:flex-col my-4">
          <button
            onClick={handleperdir}
            className={`${
              perdir
                ? "bg-btnPrimary px-10 py-3 my-2 text-white md:mr-2"
                : "border border-gray-400 px-10 py-3 my-2 md:mr-2 text-gray-400"
            } rounded-xl`}
          >
            Grafik Data Perdir
          </button>
          <button
            onClick={handlePerwal}
            className={`${
              perwal
                ? "bg-btnPrimary px-10 py-3 my-2 text-white md:mr-2"
                : "border border-gray-400 px-10 py-3 my-2 md:mr-2 text-gray-400"
            } rounded-xl`}
          >
            Grafik Data Perwal
          </button>
        </div>
      </div>
      <br />
      <Linechart />
    </div>
  );
};

export default Statistic;
