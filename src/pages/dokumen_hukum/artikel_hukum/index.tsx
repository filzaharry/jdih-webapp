import Head from "next/head";
import React from "react";
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
import ArticleOfLaw from "@/src/components/ArticleOfLaw";

export default function ArtikelHukum() {
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
              className="text-4xl lgl:text-5xl font-titleFont text-white font-semibold"
            >
              Artikel Hukum
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Dokumen Hukum > Artikel Hukum`}
            </motion.p>
          </section>
          <section
            id="home"
            className="
            max-w-contentContainer
            bg-white shadow-bannerFormShadow 
            sm:w-[90%] 
            mdl:w-[90%]
            rounded-3xl mt-10 mx-auto pt-10 sm:mb-20
            "
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 px-10 pb-10"
            >
              <div className="flex flex-row justify-between">
                <p className="text-2xl pb-12">Cari Artikel Hukum</p>
                <button className="rounded-xl bg-btnPrimary text-white px-10 h-[60%]">
                  Cari
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Judul</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Masukkan Judul Artikel"
                  ></input>
                </div>
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Sumber</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Masukkan Sumber Artikel"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Subjek</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Masukkan Subjek Artikel"
                  ></input>
                </div>
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Tahun Terbit</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Masukkan Tahun Terbit"
                  ></input>
                </div>
              </div>
            </motion.div>
          </section>
          <div className="max-w-contentContainer mx-auto mt-20">
            <ArticleOfLaw />
            <ArticleOfLaw />
            <ArticleOfLaw />
            <ArticleOfLaw />
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
