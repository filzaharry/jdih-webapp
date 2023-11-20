import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import { profileImg } from "@/public";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FaCircle } from "react-icons/fa";
import { data } from "autoprefixer";
import axios from "axios";
import { useRouter } from "next/router";
ChartJS.register(...registerables);

type ChartValue = number[];
type ChartTitle = string[];

interface StatisticInterface {
  categories: string[];
  seriesStatusBerlaku: number[];
  seriesStatusDicabut: number[];
}

type Statistic = {
  statusCode: number;
  message: string;
  data: StatisticInterface;
};

const Statistic = () => {
  const router = useRouter();
  const [data, setData] = useState<Statistic | null>(null);
  const [perdir, setperdir] = useState(true);
  const [perwal, setPerwal] = useState(false);
  const [category, setCategory] = useState<ChartTitle | undefined>([]);
  const [berlaku, setBerlaku] = useState<ChartValue | undefined>([]);
  const [dicabut, setDicabut] = useState<ChartValue | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    let url: string;
    if (perdir == true) {
      url = apiUrl + "product_of_law/dashboard?type=1";
    } else if (perwal == true) {
      url = apiUrl + "product_of_law/dashboard?type=2";
    }

    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(data);
        setCategory(response.data.categories);
        setBerlaku(response.data.seriesStatusBerlaku);
        setDicabut(response.data.seriesStatusDicabut);
        console.log("response", response.data.categories);
      } catch (error) {
        console.error("what error ?", error);
      }
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perdir, perwal]);

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
      xl:mt-50 xl:pt-10
      lgl:py-32 
      sm:w-[90%] 
      mdl:w-[90%]"
    >
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
        <Line
          id="myChart"
          data={{
            labels: category,
            // labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
            datasets: [
              // {
              //   label: "Terbit",
              //   fill: false,
              //   borderColor: "#2E90FA",
              //   backgroundColor: "#2E90FA",
              //   borderWidth: 6,
              //   pointRadius: 0,

              //   data: terbit,
              // },
              {
                label: "Dicabut",
                fill: false,
                borderColor: "#FF4E4E",
                backgroundColor: "#FF4E4E",
                borderWidth: 6,
                pointStyle: 'rectRot',
                pointRadius: 5,
                pointBorderColor: '#FF4E4E',
                // data: [3, 12, 20, 12, 41, 9, 10, 12],
                data: dicabut,
              },
              {
                label: "Berlaku",
                fill: false,
                borderColor: "#38FFB7",
                backgroundColor: "#38FFB7",
                borderWidth: 6,
                pointStyle: 'rectRot',
                pointRadius: 5,
                pointBorderColor: '#38FFB7',
                // data: [0, 10, 8, 12, 6],
                data: berlaku,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
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
          {/* <div id="terbit" className="flex flex-row mx-4">
            <FaCircle className="text-[#2E90FA] mt-1" />
            <p className="ml-2">Terbit</p>
          </div> */}
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
