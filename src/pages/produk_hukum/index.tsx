import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Footer } from "@/src/components/Footer";
import { RiBox1Fill, RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { DetailProductList } from "@/src/components/DetailProductList";
import Banner from "@/src/components/Banner";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import axios from "axios";
import PeraturanPerundanganItem from "@/src/components/atom/PeraturanPerundanganItem";
import ProductCard from "@/src/components/ProductCard";
import Status from "@/src/components/atom/Status";
import { BiSolidCheckCircle, BiSolidCity } from "react-icons/bi";
import { useRouter } from "next/router";

interface ProductsInterface {
  id: string;
  title: string;
  subtitle: string;
  created_at: string;
  type: string;
  author: string;
  rules: string;
  number: string;
  status: number;
  attachment: string;
  year: string;
}

type Products = {
  statusCode:number,
  message:string,
  data:ProductsInterface[]
};

export default function History() {
  const router = useRouter();
  const [data, setData] = useState<Products | null>(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://beta-mobilepdam.bengkelkutakkatik.id/api/product_of_law/limit/0"
          // "http://localhost:5001/api/jdih/product_of_law"
        );
        setData(response);
      } catch (error) {
        console.error("what error ?", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Product Data Is Loading ...</p>;
  } else {
    return (
      <>
        <Header />
        <main className="font-bodyFont w-full h-screen overflow-x-hidden">
          <div
            id="home"
            className="
            w-full 
            h-screen 
            bg-cover
            bg-heroResponsiveBg 
            bg-no-repeat 
            bg-center
            lg:bg-heroBackground2  
            "
          >
            <Navbar />
            <section
              className="
              max-w-contentContainer mx-auto py-10 flex flex-col gap-4
              sm:w-[90%]
              mdl:w-[90%]
              lg:py-24 
              xl:px-4 
              xl:mt-20
              lgl:gap-8 
              "
            >
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl lgl:text-5xl font-titleFont text-white"
              >
                Produk Hukum
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg md:max-w-[630px] font-medium text-white"
              >
                {`Beranda > Produk Hukum`}
              </motion.p>
            </section>
            <section
              id="home"
              className="max-w-contentContainer sm:w-[90%] bg-white shadow-bannerFormShadow rounded-2xl xl:mt-32 mx-auto"
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-1 px-20 py-10"
              >
                <div className="flex flex-row justify-between">
                  <p className="text-4xl pb-12">Cari Produk Hukum</p>
                  <button className="rounded-xl bg-btnPrimary text-white px-10 h-[60%]">
                    Cari
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Produk Hukum</p>
                    </div>
                    <div className="dropdown relative inline-block text-left w-full">
                      <p className=" px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none">
                        Pilih Produk Hukum
                      </p>
                      <div
                        className="dropdown-content hidden absolute right-0 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                      >
                        <div className="py-1" role="none">
                          <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                            Semua Produk Hukum
                          </p>
                          <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                            Peraturan Daerah
                          </p>
                          <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                            Peraturan Walikota
                          </p>
                          <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                            Keputusan Walikota
                          </p>
                          <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                            Keputusan Kepala OPD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Nomor</p>
                    </div>
                    <input
                      className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                      type="number"
                      placeholder="Masukkan Nomor"
                    ></input>
                  </div>
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Tahun</p>
                    </div>
                    <input
                      className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                      type="text"
                      placeholder="Masukkan Tahun Produk"
                    ></input>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-8">
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Status</p>
                    </div>
                    <div className="dropdown relative inline-block text-left w-full">
                      <p className=" px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none">
                        Status Produk Hukum
                      </p>
                      <div
                        className="dropdown-content hidden absolute right-0 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                      >
                        <div className="py-1" role="none">
                          <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                            Berlaku
                          </p>
                          <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                            Dicabut
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Tentang</p>
                    </div>
                    <input
                      className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                      type="text"
                      placeholder="Tentang Produk Hukum"
                    ></input>
                  </div>
                </div>
              </motion.div>
            </section>
            <div
              className="max-w-contentContainer mx-auto 
    sm:w-[90%] sm:mt-10
    flex flex-col gap-8"
            >
              <div className="grid grid-cols-1 gap-6">
                {data?.data?.map((val, i) => (
                  <div key={i}  onClick={() => router.push("/produk_hukum/"+val.id)} className="mb-4 hover:bg-slate-100 px-8 py-4 rounded-xl">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center">
                        <p className="text-xl text-slate-400 ">
                          {val.number} -{" "}
                        </p>
                        <p className="text-lg text-black mx-2">{val.type}</p>
                        <p className="text-lg text-slate-400 mr-10">
                          - {val.year}
                        </p>
                        <Status desc={'2'} />
                        {/* <Status desc={val.status.toString()} /> */}
                      </div>
                      <div className="">
                        <p className="cursor-pointer text-colorSecondary inline-block align-bottom sm:text-sm lg:text-md">
                          Lihat Detail
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row mt-4">
                      <BiSolidCity className="text-2xl text-slate-400" />
                      <p className="text-md text-gray-500 ml-4">
                        {val.title + " " + val.subtitle}
                      </p>
                    </div>
                    <hr className="w-full h-0.5 mt-10  border-0 rounded bg-slate-200" />
                  </div>
                ))}

                {/* <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between mt-20">
                  <div>
                    <p className="text-md text-gray-700">
                      Showing
                      <span className="font-medium mx-2">1</span>
                      to
                      <span className="font-medium mx-2">10</span>
                      of
                      <span className="font-medium mx-2">97</span>
                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-btnPrimary px-4 py-2 text-sm text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center px-4 py-2 text-sm text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                        ...
                      </span>
                      <a
                        href="#"
                        className="relative hidden items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div> */}
              </div>
            </div>

            <div
              className="
                  bg-blackWaveBackground 
                  lg:bg-blackWaveBackground 
                  lg:bg-transparent
                  sm:bg-[#141721] 
                  bg-no-repeat bg-cover bg-center
                  "
            >
              <Footer />
            </div>
          </div>
        </main>
      </>
    );
  }
}
