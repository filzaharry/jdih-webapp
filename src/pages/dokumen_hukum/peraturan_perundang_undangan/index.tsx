import Head from "next/head";
import React from "react";
import { Footer } from "@/src/components/Footer";
import { RiBox1Fill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { DetailProductList } from "@/src/components/DetailProductList";
import Banner from "@/src/components/Banner";
import { motion } from "framer-motion";
import Status from "@/src/components/atom/Status";
import { BiSolidCity } from "react-icons/bi";
import PeraturanPerundanganItem from "@/src/components/atom/PeraturanPerundanganItem";

export default function PeraturanPerundangan() {
  return (
    <>
      <Header />
      <main
        className="font-bodyFont w-full h-screen overflow-x-hidden
       overflow-y-scroll scrollbar scrollbar-track-gray-400 scrollbar-thumb-gray-700
       "
      >
        <div
          id="history"
          className=" w-full h-screen bg-heroBackground2 bg-no-repeat bg-contain "
        >
          <Navbar />
          <section className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 xl:mt-20">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-4xl lgl:text-5xl font-titleFont text-white"
            >
              Peraturan Perundang - Undangan
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Peraturan Perundang - Undangan`}
            </motion.p>
          </section>
          <section
            id="home"
            className="max-w-formBannerContainer bg-white shadow-bannerFormShadow rounded-3xl mt-10 mx-auto py-10"
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
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Masukkan Tahun Produk"
                  ></input>
                </div>
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Produk Hukum</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Masukkan Tahun Produk"
                  ></input>
                </div>
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Produk Hukum</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Masukkan Tahun Produk"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Status</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Pilih Status Produk"
                  ></input>
                </div>
                <div className="">
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
          <div className="max-w-formBannerContainer mx-auto mt-20">
            <PeraturanPerundanganItem />
            <PeraturanPerundanganItem />
            <PeraturanPerundanganItem />
            <PeraturanPerundanganItem />
            <PeraturanPerundanganItem />

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between mt-20">
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
            </div>
          </div>

          <div className="h-screen bg-blackWaveBackground bg-no-repeat bg-cover bg-center">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
