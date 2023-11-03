// // import { Typography } from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import { HiPhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { CgPin } from "react-icons/cg";
import { LuLineChart } from "react-icons/lu";
import axios from "axios";

const currentYear = new Date().getFullYear();

interface VisitorInterface {
  daily: number;
  weekly: number;
  monthly: number;
  all: number;
}

type Visitor = {
  statusCode: number;
  message: string;
  data: VisitorInterface;
  daily: number;
  weekly: number;
  monthly: number;
  all: number;
};

const FooterComponent = () => {
  // export function Footer() {
  const [data, setData] = useState<Visitor | null>(null);
  const [daily, setDaily] = useState<string | null | number>(0);
  const [weekly, setWeekly] = useState<string | null | number>(0);
  const [monthly, setMonthly] = useState<string | null | number>(0);
  const [all, setAll] = useState<string | null | number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let url: string;
  let urlPost: string;

  useEffect(() => {
    insertVisitor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    url = `${apiUrl}allVisitor`;
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(response.data);
        setDaily(data?.daily!);
        setWeekly(data?.weekly!);
        setMonthly(data?.monthly!);
        setAll(data?.all!);
      } catch (error: any) {
        console.error("what error ?", error);
      }
      setIsLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const insertVisitor = async () => {
    try {
      let headers = {
        accept: "*/*",
        "Content-Type": "application/json",
      };
      urlPost = `${apiUrl}visitor`;
      const browser = window.navigator.appCodeName;
      const ip = await axios.get("https://api.ipify.org/?format=json");
      //   console.log('=====>>>>',ip.data.ip);
      //   console.log('=====>>>>',browser);
      const res = await axios.post(
        urlPost,
        {
          ip: ip.data.ip.toString(),
          browser: browser,
        },
        {
          headers: headers,
        }
      );
      // console.log(res);
    } catch (error: any) {
      console.error("what error ?", error);
    }
  };

  return (
    <footer className="max-w-contentContainer text-white mx-auto relative w-full sm:w-[90%]">
      <div className="mx-auto w-full sm:pt-20 lg:pt-48 lg:mt-48 ">
        <div
          className="
                flex 
                lg:flex-row 
                sm:flex-col 
                justify-between 
                gap-4 
                md:grid-cols-
                "
        >
          <div className="lg:w-[40%] sm:w-[100%] mr-8">
            <p className="text-2xl font-semibold">JDIH PDAM</p>
            <p className="text-md mt-4 mr-4 font-thin">
              Merupakan wadah pendayagunaan bersama atas dokumen hukum secara
              tertib dan terpadu.
            </p>
          </div>
          <div className="w-full flex lg:flex-row sm:flex-col justify-between">
            <div className="lg:w-[70%] sm:w-[100%]">
              <p className="text-xl mb-4 font-semibold">Alamat</p>
              <div className="flex flex-row mb-2">
                <CgPin className="text-[#66B3F9] text-2xl" />
                <p className="w-[60%] text-md ml-4 mb-4 font-extralight">
                  Jalan Komp. Pu Prosida o.10, RT.001/RW.002, Mekarsari, Kec.
                  Neglasari, Kota Tangerang, Banten 15129
                </p>
              </div>
              <div className="flex flex-row mb-2">
                <HiPhone className="text-[#66B3F9] text-2xl" />
                <p className="text-md ml-4 mb-4 font-extralight">
                  (021)-5587234
                </p>
              </div>
              {/* <div className="flex flex-row mb-2">
                                <MdOutlineMail className='text-[#66B3F9] text-2xl' />
                                <p className="text-md ml-4 mb-4 font-extralight">jdih.harmonidigital.id</p>
                            </div> */}
            </div>
            <div className="lg:w-[30%] mr-20 sm:w-[100%]">
              <p className="text-xl mb-4 font-semibold">Link Terkait</p>
              <p className="text-md mb-4 font-extralight">Website SiGanteng</p>
              <p className="text-md mb-4 font-extralight">JDIH Pusat</p>
              <p className="text-md mb-4 font-extralight">
                JDIH Kota Tangerang
              </p>
            </div>
            <div className="lg:w-[50%] sm:w-[100%]">
              <p className="text-xl mb-4 font-semibold">Kunjungan</p>
              <div className="flex flex-row mb-2 justify-between">
                <div className="flex flex-row mr-20">
                  <LuLineChart className="text-[#66B3F9] text-2xl mr-1" />
                  <p className="text-md ml-4 font-extralight">Hari ini</p>
                </div>
                {isLoading == false && (
                  <p className="text-md ml-4 font-extralight">{daily}</p>
                )}
              </div>
              <div className="flex flex-row mb-2 justify-between">
                <div className="flex flex-row mr-20">
                  <LuLineChart className="text-[#66B3F9] text-2xl mr-1" />
                  <p className="text-md ml-4 font-extralight">Minggu ini</p>
                </div>
                {isLoading == false && (
                  <p className="text-md ml-4 font-extralight">{weekly}</p>
                )}
              </div>
              <div className="flex flex-row mb-2 justify-between">
                <div className="flex flex-row mr-20">
                  <LuLineChart className="text-[#66B3F9] text-2xl mr-1" />
                  <p className="text-md ml-4 font-extralight">Bulan ini</p>
                </div>
                {isLoading == false && (
                  <p className="text-md ml-4 font-extralight">{monthly}</p>
                )}
              </div>
              <div className="flex flex-row mb-2 justify-between">
                <div className="flex flex-row mr-20">
                  <LuLineChart className="text-[#66B3F9] text-2xl mr-1" />
                  <p className="text-md ml-4 font-extralight">Semua</p>
                </div>
                {isLoading == false && (
                  <p className="text-md ml-4 font-extralight">{all}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex w-full sm:w-[100%] sm:pb-14 flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <p className="mx-auto">Perumda Tirta Benteng Kota Tangerang</p>
          {/* <p className='mx-auto'>Copyright &copy; {currentYear}{" "} JDIH PDAM Kota Tangerang</p> */}
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;

// import { AiFillThunderbolt } from "react-icons/ai";
// import Image from "next/image";
// import { profileImg } from "@/public";
// import { Chart as ChartJS, registerables } from "chart.js";
// import { Bar, Line } from "react-chartjs-2";
// import { FaCircle } from "react-icons/fa";
// import { data } from "autoprefixer";
// import axios from "axios";
// import { useRouter } from "next/router";
// ChartJS.register(...registerables);

// type ChartValue = number[];
// type ChartTitle = string[];

// interface StatisticInterface {
//   categories: string[];
//   seriesStatusBerlaku: number[];
//   seriesStatusDicabut: number[];
// }

// type Statistic = {
//   statusCode: number;
//   message: string;
//   data: StatisticInterface;
// };

// const Statistic = () => {
//   const router = useRouter();
//   const [data, setData] = useState<Statistic | null>(null);
//   const [perdir, setperdir] = useState(true);
//   const [perwal, setPerwal] = useState(false);
//   const [category, setCategory] = useState<ChartTitle | undefined>([]);
//   const [berlaku, setBerlaku] = useState<ChartValue | undefined>([]);
//   const [dicabut, setDicabut] = useState<ChartValue | undefined>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     let url: string;
//     if (perdir == true) {
//       url = apiUrl + "product_of_law/dashboard?type=1";
//     } else if (perwal == true) {
//       url = apiUrl + "product_of_law/dashboard?type=2";
//     }

//     const fetchData = async () => {
//       try {
//         const { data: response } = await axios.get(url);
//         setData(data);
//         setCategory(response.data.categories);
//         setBerlaku(response.data.seriesStatusBerlaku);
//         setDicabut(response.data.seriesStatusDicabut);
//         console.log("response", response.data.categories);
//       } catch (error) {
//         console.error("what error ?", error);
//       }
//       setIsLoading(false);
//     };

//     fetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [perdir, perwal]);

//   const handleperdir = () => {
//     setperdir(true);
//     setPerwal(false);
//   };
//   const handlePerwal = () => {
//     setperdir(false);
//     setPerwal(true);
//   };
//   return (
//     <div
//       id="statistic"
//       className="max-w-contentContainer
//       mx-auto
//       sml:pt-20
//       lg:py-10
//       lg:mt-40
//       xl:mt-50 xl:pt-10
//       lgl:py-32
//       sm:w-[90%]
//       mdl:w-[90%]"
//     >
//       <div className="flex flex-col">
//         <SectionTitle title="Statistik" />

//         <div className="flex md:flex-row sm:flex-col my-4">
//           <button
//             onClick={handleperdir}
//             className={`${
//               perdir
//                 ? "bg-btnPrimary px-10 py-3 my-2 text-white md:mr-2"
//                 : "border border-gray-400 px-10 py-3 my-2 md:mr-2 text-gray-400"
//             } rounded-xl`}
//           >
//             Grafik Data Perdir
//           </button>
//           <button
//             onClick={handlePerwal}
//             className={`${
//               perwal
//                 ? "bg-btnPrimary px-10 py-3 my-2 text-white md:mr-2"
//                 : "border border-gray-400 px-10 py-3 my-2 md:mr-2 text-gray-400"
//             } rounded-xl`}
//           >
//             Grafik Data Perwal
//           </button>
//         </div>
//       </div>
//       <br />
//       <div>
//         <Line
//           id="myChart"
//           data={{
//             labels: category,
//             // labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags"],
//             datasets: [
//               // {
//               //   label: "Terbit",
//               //   fill: false,
//               //   borderColor: "#2E90FA",
//               //   backgroundColor: "#2E90FA",
//               //   borderWidth: 6,
//               //   pointRadius: 0,

//               //   data: terbit,
//               // },
//               {
//                 label: "Dicabut",
//                 fill: false,
//                 borderColor: "#FF4E4E",
//                 backgroundColor: "#FF4E4E",
//                 borderWidth: 6,
//                 pointRadius: 0,

//                 data: dicabut,
//               },
//               {
//                 label: "Berlaku",
//                 fill: false,
//                 borderColor: "#38FFB7",
//                 backgroundColor: "#38FFB7",
//                 borderWidth: 6,
//                 pointRadius: 0,

//                 data: berlaku,
//               },
//             ],
//           }}
//           options={{
//             plugins: {
//               legend: {
//                 display: false,
//               },
//             },
//             elements: {
//               line: {
//                 tension: 0.4,
//               },
//             },
//             scales: {
//               x: {
//                 grid: {
//                   display: false,
//                 },
//               },
//               y: {
//                 grid: {
//                   display: false,
//                 },
//               },
//             },
//           }}
//         ></Line>

//         <div className="flex flex-row mx-auto w-full justify-center mt-10">
//           {/* <div id="terbit" className="flex flex-row mx-4">
//             <FaCircle className="text-[#2E90FA] mt-1" />
//             <p className="ml-2">Terbit</p>
//           </div> */}
//           <div id="dicabut" className="flex flex-row mx-4">
//             <FaCircle className="text-[#FF4E4E] mt-1" />
//             <p className="ml-2">Dicabut</p>
//           </div>
//           <div id="berlaku" className="flex flex-row mx-4">
//             <FaCircle className="text-[#38FFB7] mt-1" />
//             <p className="ml-2">Berlaku</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistic;
