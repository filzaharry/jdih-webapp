import Head from "next/head";
import React from "react";
import { Footer } from "@/components/Footer";
import { RiBox1Fill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import { DetailProductList } from "@/components/DetailProductList";
import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import Image from "next/image";

export default function News() {
  return (
    <>
      <Header />
      <main
        className="font-bodyFont w-full h-screen overflow-x-hidden
       overflow-y-scroll scrollbar scrollbar-track-gray-400 scrollbar-thumb-gray-700
       "
      >
        <div
          id="news"
          className=" w-full h-screen bg-heroBackground2 bg-no-repeat bg-contain "
        >
          <Navbar />
          <section className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 xl:mt-20">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-4xl lgl:text-5xl font-titleFont font-semibold text-white"
            >
              Informasi
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Informasi`}
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
              className="w-full grid grid-cols-1 px-20 pt-10"
            >
              <Image
                className="object-cover w-full h-[800px] rounded-2xl mb-10 shadow-bannerFormShadow "
                src="https://www.perumdatirtabenteng.co.id/assets/uploads/post_20221223_1671769686.jpg"
                alt="profileImg"
                width={2670}
                height={80}
              />
              <div className="mx-10 mt-10">

                <p className="text-4xl mb-10">
                  Verifikasi dan Validasi Lapangan PSU
                </p>

                <div className="flex flex-row">
                  <div className="flex flex-row mr-10">
                    <AiFillInfoCircle className="text-xl mr-2 mt-0.5 text-[#FF4E4E]" />
                    <p className="text-colorPrimary">Selasa, 18 Juli 2023</p>
                  </div>
                  <div className="flex flex-row">
                    <AiFillInfoCircle className="text-xl mr-2 mt-0.5 text-[#FF4E4E]" />
                    <p className="text-colorPrimary">Umum</p>
                  </div>
                </div>
                <div className="py-4 mt-4">
                  <p>
                    Peraturan Walikota Nomor 53 Tahun 2023 Perubahan Atas
                    Peraturan Wali Kota Nomor 11 Tahun 2019 Tentang Pedoman
                    Pelaksanaan Kegiatan Pembangunan Sarana dan Prasarana
                    Kelurahan dan Pemberdayaan Masyarakat di Kelurahan.
                  </p>
                </div>
                <hr className="w-full h-0.5 mt-8 bg-[#D9D9D9]" />
                <div className="flex flex-row justify-end mt-28 pb-8">
                  <div className="px-10 py-2 mr-2 rounded-full w-fit  bg-[#4A66AD] text-white">
                    <p>Share</p>
                  </div>
                  <div className="px-10 py-2 mr-2 rounded-full w-fit  bg-[#6BAAE8] text-white">
                    <p>Share</p>
                  </div>
                  <div className="px-10 py-2 mr-2 rounded-full w-fit  bg-[#65D072] text-white">
                    <p>Share</p>
                  </div>
                  <div className="px-10 py-2 mr-2 rounded-full w-fit  bg-[#7D7D7D] text-white">
                    <p>Share</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <div className="h-screen bg-blackWaveBackground bg-no-repeat bg-cover bg-center">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
