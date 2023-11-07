import Head from "next/head";
import React from "react";
import FooterComponent from "@/src/components/Footer";
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
              className="titlePage"
            >
              Pengelola JDIH
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Profil > Struktur Organisasi > Pengelola JDIH`}
            </motion.p>
          </section>
          <section
            id="home"
            className="
            customLayoutContent"
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
                    <td className="border py-4 pl-4 border-slate-700">DODDY EFFENDI, SH</td>
                    <td className="border py-4 pl-4 border-slate-700">DIREKTUR UTAMA</td>
                    <td className="border py-4 pl-4 border-slate-700">PENANGGUNG JAWAB</td>
                  </tr>
                  <tr>
                    <td className="border py-4 pl-4 border-slate-700">JOKO SURANA, ST</td>
                    <td className="border py-4 pl-4 border-slate-700">DIREKTUR TEKNIK</td>
                    <td className="border py-4 pl-4 border-slate-700">WAKIL PENANGGUNG JAWAB</td>
                  </tr>
                  <tr>
                    <td className="border py-4 pl-4 border-slate-700">HARI HARTIAN, SH</td>
                    <td className="border py-4 pl-4 border-slate-700">MANAGER UHPSDM</td>
                    <td className="border py-4 pl-4 border-slate-700">KETUA</td>
                  </tr>
                  <tr>
                    <td className="border py-4 pl-4 border-slate-700">BUDI RAHMAYADI</td>
                    <td className="border py-4 pl-4 border-slate-700">STAF HUKUM</td>
                    <td className="border py-4 pl-4 border-slate-700">ANGGOTA DAN DOKUMENTASI HUKUM</td>
                  </tr>
                  <tr>
                    <td className="border py-4 pl-4 border-slate-700">DIAN PURNAMASARI, SH</td>
                    <td className="border py-4 pl-4 border-slate-700">ASISTEN MANAGER HUKUM</td>
                    <td className="border py-4 pl-4 border-slate-700">WAKIL KETUA</td>
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
