import Head from "next/head";
import React, { useState } from "react";
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
import { Footer } from "@/src/components/Footer";

export default function PeraturanPerundangan() {
  const [satisfaction, setSatisfaction] = useState(0);
  const [satisfactionMsg, setSatisfactionMsg] = useState("");
  return (
    <>
      <Header />
      <main className="font-bodyFont w-full h-screen overflow-x-hidden">
        <div
          id="home"
          className="
         w-full 
        h-screen 
        bg-contain
        bg-heroResponsiveBg 
        bg-no-repeat 
        sm:bg-cover
        lg:bg-contain
        lg:bg-top
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
              className="text-4xl lgl:text-5xl font-titleFont text-white font-semibold"
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
            className="
            max-w-contentContainer
            bg-white shadow-bannerFormShadow 
            sm:w-[90%] 
            mdl:w-[90%]
            rounded-3xl mt-10 mx-auto sm:pt-6 lg:pt-10 sm:mb-20
            "
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 sm:px-6 lg:px-10 pb-10"
            >
              <div className="flex flex-row justify-between">
                <p className="text-2xl pb-12">Cari Produk Hukum</p>
                <button className="rounded-xl bg-btnPrimary text-white px-10 sm:h-[50%] lg:h-[60%]">
                  Cari
                </button>
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-col-1 gap-4">
              <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Produk Hukum</p>
                  </div>
                  <div className="dropdown relative inline-block text-left w-full">
                    {satisfactionMsg == "" ? (
                      <p className=" px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none">
                        Produk Hukum
                      </p>
                    ) : (
                      <p className=" px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none">
                        {satisfactionMsg}
                      </p>
                    )}
                    <div
                      className="dropdown-content hidden absolute right-0 z-10 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <p
                          onClick={() => {
                            setSatisfaction(0);
                            setSatisfactionMsg("Berlaku");
                          }}
                          className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm"
                        >
                          Peraturan Daerah
                        </p>
                        <p
                          onClick={() => {
                            setSatisfaction(1);
                            setSatisfactionMsg("Puas");
                          }}
                          className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm"
                        >
                          Peraturan Walikota
                        </p>
                        <p
                          onClick={() => {
                            setSatisfaction(1);
                            setSatisfactionMsg("Puas");
                          }}
                          className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm"
                        >
                          Keputusan Walikota
                        </p>
                        <p
                          onClick={() => {
                            setSatisfaction(1);
                            setSatisfactionMsg("Puas");
                          }}
                          className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm"
                        >
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
                    placeholder="Nomor Produk"
                  ></input>
                </div>
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Tahun</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="number"
                    placeholder="Tahun Produk"
                  ></input>
                </div>
              </div>
              <div className="grid lg:grid-cols-4 sm:grid-col-1 gap-4 mt-8">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Pilih Status</p>
                  </div>
                  <div className="dropdown relative inline-block text-left w-full">
                    {satisfactionMsg == "" ? (
                      <p className=" px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none">
                        Pilih Status
                      </p>
                    ) : (
                      <p className=" px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none">
                        {satisfactionMsg}
                      </p>
                    )}
                    <div
                      className="dropdown-content hidden absolute right-0 z-10 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <p
                          onClick={() => {
                            setSatisfaction(0);
                            setSatisfactionMsg("Berlaku");
                          }}
                          className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm"
                        >
                          Berlaku
                        </p>
                        <p
                          onClick={() => {
                            setSatisfaction(1);
                            setSatisfactionMsg("Puas");
                          }}
                          className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm"
                        >
                          Dicabut
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Tentang</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Tentang Produk Hukum"
                    // onChange={handleChangeMessage}
                    // value={message}
                  ></input>
                </div>
              </div>
            </motion.div>
          </section>
          <div className="max-w-contentContainer mx-auto mt-20">
            <PeraturanPerundanganItem />
            <PeraturanPerundanganItem />
            <PeraturanPerundanganItem />
            <PeraturanPerundanganItem />
            <PeraturanPerundanganItem />
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
