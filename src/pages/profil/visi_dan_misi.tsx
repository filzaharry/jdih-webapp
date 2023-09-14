import Head from "next/head";
import React from "react";
import { Footer } from "@/src/components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";

export default function VisiDanMisi() {
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
              {`Beranda > Informasi > Visi dan Misi`}
            </motion.p>
          </section>
          <section
            id="home"
            className="
            max-w-contentContainer
            sml:pt-20
            lg:py-10 
            lg:mt-40
            xl:mt-0 xl:pt-0
            lgl:py-32 
            sm:w-[90%] 
            mdl:w-[90%]
          bg-white shadow-bannerFormShadow 
            rounded-3xl mt-10 mx-auto py-10 sm:mb-20"
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 sm:px-8 lg:px-20 lg:pt-20"
            >
              <p className="sm:text-xl lg:text-4xl sm:pb-10 lg:pb-8">
                Visi dan Misi
              </p>

              <div className="flex flex-row">
                <div className="flex flex-row sm:mr-2 lg:mr-10">
                  <AiFillInfoCircle className="sm:text-sm lg:text-xl sm:mr-1 lg:mr-2 mt-0.5 text-[#FF4E4E]" />
                  <p className="text-colorPrimary sm:text-sm lg:text-lg">
                    Selasa, 18 Juli 2023
                  </p>
                </div>
                <div className="flex flex-row">
                  <AiFillInfoCircle className="sm:text-sm lg:text-xl sm:mr-1 lg:mr-2 mt-0.5 text-[#FF4E4E]" />
                  <p className="text-colorPrimary sm:text-sm lg:text-lg">
                    Umum
                  </p>
                </div>
              </div>
              <div className="py-4 lg:mt-4">
                <p className="sm:text-sm lg:text-lg text-justify">
                  Menjadikan Perusahaan yang Berkembang,Sehat serta Melayani
                  Melalui Pelayanan Prima
                </p>
                <ul>
                  <li>1. Percepatan Penambahan Cakupan Layanan. </li>
                  <li>
                    2. Menyediakan Kebutuhan Air Minum bagi Masyarakat secara
                    Berkesinambungan melalui Pelayanan Prima.{" "}
                  </li>
                  <li>3. Meningkatkan Kinerja Keuangan Perusahaan. </li>
                  <li>
                    4. Meningkatkan Kualitas SDM agar mampu Berkreasi dan
                    Berinovasi secara Profesional serta Meningkatkan
                    Kesejahteraan Pegawai.{" "}
                  </li>
                  5. Membina Hubungan Baik dengan Pelanggan dan StakeHolder
                  Perusahaan.
                </ul>
              </div>
              <hr className="w-full h-0.5 mt-8 bg-[#D9D9D9]" />
              <SocialMediaRow />
            </motion.div>
          </section>
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
