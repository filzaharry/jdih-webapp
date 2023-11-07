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

import ArticleOfLaw from "@/src/components/ArticleOfLaw";
import FooterComponent from "@/src/components/Footer";

export default function ArtikelHukum() {
  return (
    <>
        <Header />
        <main className="font-bodyFont w-full h-screen overflow-x-hidden">
          <div
            id="home"
            className="
           customHeader 
            "
          >
            <Navbar />
            <section
              className="
              customSection
              "
            >
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
            bannerLayout1
            "
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 px-10 pb-10"
            >
              <div className="flex lg:flex-row sm:flex-col justify-between">
                <p className="text-2xl pb-12">Cari Artikel Hukum</p>
                <button className="sm:hidden lg:block rounded-xl bg-btnPrimary text-white px-10 h-[60%]">
                  Cari
                </button>
              </div>
              <div className="grid sm:grid-col-1 lg:grid-cols-2 gap-4">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Judul</p>
                  </div>
                  <input
                    className="textFilterInnerBox"
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
                    className="textFilterInnerBox"
                    type="text"
                    placeholder="Masukkan Sumber Artikel"
                  ></input>
                </div>
              </div>
              <div className="grid sm:grid-col-1 lg:grid-cols-2 gap-4 mt-8">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Subjek</p>
                  </div>
                  <input
                    className="textFilterInnerBox"
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
                    className="textFilterInnerBox"
                    type="text"
                    placeholder="Masukkan Tahun Terbit"
                  ></input>
                </div>
              </div>
              <button className="mt-4 sm:block lg:hidden rounded-xl bg-btnPrimary text-white px-10 h-[50px]">
                  Cari
                </button>
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
              customFooter
              "
          >
            <FooterComponent />
          </div>
        </div>
      </main>
    </>
  );
}
