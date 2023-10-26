import Head from "next/head";
import React from "react";
import { Footer } from "@/src/components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { MdDateRange } from "react-icons/md";

export default function VisiDanMisi() {
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
              Informasi
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="breadcumbPage"
            >
              {`Beranda > Informasi > Visi dan Misi`}
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
              <p className="titleContent">
                Visi dan Misi
              </p>

              <div className="flex flex-row">
                <div className="flex flex-row sm:mr-2 lg:mr-10">
                  <MdDateRange className="dateIcon" />
                  <p className="text-colorPrimary sm:text-sm lg:text-lg">
                    Selasa, 18 Juli 2023
                  </p>
                </div>
                <div className="flex flex-row">
                  <AiFillInfoCircle className="dateIcon" />
                  <p className="text-colorPrimary sm:text-sm lg:text-lg">
                    Umum
                  </p>
                </div>
              </div>
              <div className="py-4 lg:mt-4">
                <p className="textContent">
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
              {/* <SocialMediaRow /> */}
            </motion.div>
          </section>
          <div
            className="
              customFooter
              "
          >
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
