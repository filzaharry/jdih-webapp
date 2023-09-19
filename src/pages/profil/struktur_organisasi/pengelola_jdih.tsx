import Head from "next/head";
import React from "react";
import { Footer } from "@/src/components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";

export default function PengelolaJdih() {
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
              Pengelola JDIH
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Struktur Organisasi > Pengelola JDIH`}
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
              <table className="border-collapse border border-slate-500">
                <thead>
                  <tr>
                    <th className="border py-4 px-2 border-slate-600">NAMA</th>
                    <th className="border py-4 px-2 border-slate-600">JABATAN</th>
                    <th className="border py-4 px-2 border-slate-600">JABATAN TIM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border py-4 pl-4 border-slate-700">DIAN PURNAMASARI, SH</td>
                    <td className="border py-4 pl-4 border-slate-700">ASISTEN MANAGER HUKUM</td>
                    <td className="border py-4 pl-4 border-slate-700">KETUA</td>
                  </tr>
                  <tr>
                    <td className="border py-4 pl-4 border-slate-700">WIWIT HAYU NIATI, SH</td>
                    <td className="border py-4 pl-4 border-slate-700">STAF HUKUM</td>
                    <td className="border py-4 pl-4 border-slate-700">ANGGOTA DAN DOKUMENTASI HUKUM</td>
                  </tr>
                  <tr>
                    <td className="border py-4 pl-4 border-slate-700">ADRIANSYAH TRI SETIYADI, SH</td>
                    <td className="border py-4 pl-4 border-slate-700">STAF HUKUM</td>
                    <td className="border py-4 pl-4 border-slate-700">ANGGOTA DAN DOKUMENTASI HUKUM</td>
                  </tr>
                  <tr>
                    <td className="border py-4 pl-4 border-slate-700">BUDI RAHMAYADI</td>
                    <td className="border py-4 pl-4 border-slate-700">STAF HUKUM</td>
                    <td className="border py-4 pl-4 border-slate-700">ANGGOTA DAN DOKUMENTASI HUKUM</td>
                  </tr>
                </tbody>
              </table>
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
