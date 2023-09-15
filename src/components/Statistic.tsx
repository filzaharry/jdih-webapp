import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FaCircle } from "react-icons/fa";
import { data } from "autoprefixer";
ChartJS.register(...registerables);

type Statistic = number[];

const Statistic = () => {
  const [perdir, setperdir] = useState(true);
  const [perwal, setPerwal] = useState(false);
  const [terbit, setTerbit] = useState<Statistic | null>([])
  const [berlaku, setBerlaku] = useState<Statistic | null>([])
  const [dicabut, setDicabut] = useState<Statistic | null>([])

  useEffect(() => {
    if (perdir == true) {
      setTerbit([100, 200, 120, 300, 200, 124, 320, 500])
      setDicabut([130, 210, 190, 310, 210, 120, 320, 200])
      setBerlaku([140, 280, 520, 120, 200, 424, 120, 200])
    } else if (perwal == true){
      setTerbit([140, 240, 290, 320, 400, 474, 520, 600])
      setDicabut([130, 210, 290, 310, 410, 520, 520, 600])
      setBerlaku([100, 200, 320, 400, 450, 524, 620, 700])
    }
  }, [perdir, perwal])
  

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
      <div>
      <Line id="myChart"
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags"],
          datasets: [
            {
              label: "Terbit",
              fill: false,
              borderColor: "#2E90FA",
              backgroundColor: "#2E90FA",
              borderWidth: 6,
              pointRadius: 0,

              data: terbit,
            },
            {
              label: "Dicabut",
              fill: false,
              borderColor: "#FF4E4E",
              backgroundColor: "#FF4E4E",
              borderWidth: 6,
              pointRadius: 0,

              data: dicabut,
            },
            {
              label: "Berlaku",
              fill: false,
              borderColor: "#38FFB7",
              backgroundColor: "#38FFB7",
              borderWidth: 6,
              pointRadius: 0,

              data: berlaku,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
        }}
      ></Line>

      <div className="flex flex-row mx-auto w-full justify-center mt-10">
        <div id="terbit" className="flex flex-row mx-4">
          <FaCircle className="text-[#2E90FA] mt-1" />
          <p className="ml-2">Terbit</p>
        </div>
        <div id="dicabut" className="flex flex-row mx-4">
          <FaCircle className="text-[#FF4E4E] mt-1" />
          <p className="ml-2">Dicabut</p>
        </div>
        <div id="berlaku" className="flex flex-row mx-4">
          <FaCircle className="text-[#38FFB7] mt-1" />
          <p className="ml-2">Berlaku</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Statistic;
