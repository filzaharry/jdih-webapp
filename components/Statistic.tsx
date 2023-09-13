import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public";
import Linechart from "./Linechart";

const Statistic = () => {
  const [perda, setPerda] = useState(true);
  const [perwal, setPerwal] = useState(false);

  const handlePerda = () => {
    setPerda(true);
    setPerwal(false);
  };
  const handlePerwal = () => {
    setPerda(false);
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
            onClick={handlePerda}
            className={`${
              perda
                ? "bg-btnPrimary px-10 py-3 my-2 text-white md:mr-2"
                : "border border-gray-400 px-10 py-3 my-2 text-gray-400"
            } rounded-xl`}
          >
            Grafik Data Perda
          </button>
          <button
            onClick={handlePerwal}
            className={`${
              perwal
                ? "bg-btnPrimary px-10 py-3 my-2 text-white md:mr-2"
                : "border border-gray-400 px-10 py-3 my-2 text-gray-400"
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
