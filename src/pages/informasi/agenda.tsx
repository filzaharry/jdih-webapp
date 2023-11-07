import Head from "next/head";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { DetailProductList } from "@/src/components/DetailProductList";
import ScheduleCard from "@/src/components/ScheduleCard";
import FooterComponent from "@/src/components/Footer";


export default function Agenda() {
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
              Agenda
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Informasi > Agenda`}
            </motion.p>
          </section>
         
            <ScheduleCard 
            date="Selasa, 18 Juli 2023"
            desc="Pembahasan Rapat Rancangan Peraturan Daerah tentang Perubahan
            Atas Peraturan Daerah Nomor 5 Tahun 2010 tentang Peraturan
            Daerah tentang Kawasan Tanpa Rokok dan Rancangan Peraturan
            Daerah tentang Jaminan Kesehatan Daerah"
            duration="10.00 WIB s/d Selesai"
            member="110"
            location="The Jayakarta Hotel Anyer"
            status={1}
            theme="Pembahasan Rancangan Peraturan Daerah"
            title="Pembahasan Rancangan Peraturan Daerah"
            />
            <ScheduleCard 
            date="Selasa, 18 Juli 2023"
            desc="Pembahasan Rapat Rancangan Peraturan Daerah tentang Perubahan
            Atas Peraturan Daerah Nomor 5 Tahun 2010 tentang Peraturan
            Daerah tentang Kawasan Tanpa Rokok dan Rancangan Peraturan
            Daerah tentang Jaminan Kesehatan Daerah"
            duration="10.00 WIB s/d Selesai"
            member="110"
            location="The Jayakarta Hotel Anyer"
            status={1}
            theme="Pembahasan Rancangan Peraturan Daerah"
            title="Pembahasan Rancangan Peraturan Daerah"
            />
            <ScheduleCard 
            date="Selasa, 18 Juli 2023"
            desc="Pembahasan Rapat Rancangan Peraturan Daerah tentang Perubahan
            Atas Peraturan Daerah Nomor 5 Tahun 2010 tentang Peraturan
            Daerah tentang Kawasan Tanpa Rokok dan Rancangan Peraturan
            Daerah tentang Jaminan Kesehatan Daerah"
            duration="10.00 WIB s/d Selesai"
            member="110"
            location="The Jayakarta Hotel Anyer"
            status={1}
            theme="Pembahasan Rancangan Peraturan Daerah"
            title="Pembahasan Rancangan Peraturan Daerah"
            />
            <ScheduleCard 
            date="Selasa, 18 Juli 2023"
            desc="Pembahasan Rapat Rancangan Peraturan Daerah tentang Perubahan
            Atas Peraturan Daerah Nomor 5 Tahun 2010 tentang Peraturan
            Daerah tentang Kawasan Tanpa Rokok dan Rancangan Peraturan
            Daerah tentang Jaminan Kesehatan Daerah"
            duration="10.00 WIB s/d Selesai"
            member="110"
            location="The Jayakarta Hotel Anyer"
            status={1}
            theme="Pembahasan Rancangan Peraturan Daerah"
            title="Pembahasan Rancangan Peraturan Daerah"
            />
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
