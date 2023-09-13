import Head from "next/head";
import React from "react";
import { Footer } from "@/components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/components/SocialMediaRow";

export default function ArtikelHukum() {
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
                Sambutan Manager Bagian Umum, Hukum, Dan Pengembangan SDM
                Perumda Tirta Benteng Kota Tangerang
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
                  Assalamualaikum Wr. Wb dan Salam Sejahtera Selalu{" "}
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-justify">
                  Jaringan Dokumentasi Informasi Hukum (JDIH) Perumda Tirta
                  Benteng Kota Tangerang Sebagaimana Yang Ada Saat Ini Merupakan
                  Salah Satu Bukti Komitmen Pemerintah Kota Tangerang Untuk
                  Melaksanakan Transparansi, Sekaligus Pemenuhan Kewajiban
                  Pelayanan Publik dalam Penyediaan Informasi Publik Yang
                  Dibutuhkan Oleh Masyarakat dan Pihak Yang Membutuhkan Lainnya.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-justify">
                  Kehadiran JDIH Perumda Tirta Benteng Merupakan Wadah untuk
                  Penyebarluasan Produk Hukum dengan memanfaatkan sarana
                  teknologi informasi yang terus berkembang. JDIH Perumda Tirta
                  Benteng yang telah tampil di dunia maya pada tahun 2023 dapat
                  diakses melalui alamat https://jdih@perumdatirtabenteng.co.id
                  dimana isi dari website tersebut adalah produk Hukum yang
                  telah dikeluarkan oleh Perumda Tirta Benteng Sejak tahun 2008
                  sampai 2023 disertai dengan Link untuk mengunduh (Download)
                  Produk Hukum yang di Butuhkan.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-justify">
                  Guna peningkatan kualitas penyajian dimasa yang akan datang,
                  maka kami sangat terbuka untuk menerima saran-saran positif
                  dari pengguna website/netter dan masyarakat umumnya. Untuk itu
                  jika anda memiliki saran dan masukan Maka silahkan disampaikan
                  melalui website ini (www.perumdatirtabenteng.co.id/webmail)
                  atau secara tertulis ke Bagian Hukum Perumda Tirta Benteng
                  Kota Tangerang.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-justify">
                  Demikian Yang bisa kami sampaikan Wassalamualaikum Wr.Wb, dan
                  Salam Sejahtera selalu.
                </p>
                <br />
                <p className="sm:text-sm lg:text-lg text-justify">
                  Manager Bagian Umum, Hukum, Dan Pengembangan SDM Perumda Tirta
                  Benteng Kota Tangerang.
                </p>
                <p className="font-bold sm:text-sm lg:text-lg text-justify">
                  Hari Hartian, SH.
                </p>
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
