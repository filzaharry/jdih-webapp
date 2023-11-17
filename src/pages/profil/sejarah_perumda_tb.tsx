import Head from "next/head";
import React from "react";
import FooterComponent from "@/src/components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { historyBentengan, historyPerumdaTb } from "@/public";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";

export default function SejarahPerumdaTb() {
  return (
    <>
      <Header />
      <main className="font-bodyFont w-full h-screen overflow-x-hidden">
        <div id="home" className="customHeader">
          <Navbar />
          <section className="customSection">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="titlePage"
            >
              Sejarah
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="breadcumbPage"
            >
              {`Beranda > Profil > Sejarah Perumda TB`}
            </motion.p>
          </section>
          <section id="home" className="bannerLayout2">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 lg:px-10 lg:pt-10 sm:px-4"
            >
              <div className="lg:mx-10">
                <p className="titleContent">Sejarah PDAM Kota Tangerang</p>

                <div className="flex flex-row">
                  <div className="flex flex-row sm:mr-2 lg:mr-10">
                    <MdDateRange className="dateIcon" />
                    <p className="text-colorPrimary sm:text-sm lg:text-md">
                      Selasa, 18 Juli 2023
                    </p>
                  </div>
                  {/* <div className="flex flex-row">
                  <AiFillInfoCircle className="dateIcon" />
                  <p className="text-colorPrimary sm:text-sm lg:text-lg">
                    Umum
                  </p>
                </div> */}
                </div>
                <div className="py-4 lg:mt-4">
                  {/* FINAL USE MARKDOWN */}
                  <div className="lg:w-full drop-shadow-xl">
                    <Image
                      className="rounded-2xl object-cover lg:w-[500px]"
                      src={historyPerumdaTb}
                      alt="historyPerumdaTb"
                      width={2670}
                      height={80}
                      crossOrigin="anonymous"
                    />
                    <p className="sm:text-xs lg:text-md mb-4 italic mt-2">
                      Sumber :{" "}
                      <a
                        className="hover:text-blue-500"
                        href="https://travelista.id/featured/2561/menelisik-sungai-cisadane-dari-kolonial-hingga-moderen/"
                      >
                        menelisik-sungai-cisadane-dari-kolonial-hingga-moderen
                      </a>
                    </p>
                  </div>

                  <p className="indent-10 textContent mb-4">
                    Perumda Tirta Benteng Kota Tangerang merupakan user dalam
                    pengelolaan air minum di Kota Tangerang yang mana pada
                    awalnya didirikannya berdasarkan pada Peraturan Daerah
                    Kotamadya Daerah Tingkat II Tangerang Nomor 33 tahun 1995
                    tentang pembentukan Perusahaan Daerah Air Minum (PDAM)
                    Kotamadya Daerah Tingkat II Tangerang, Organisasi dan Tata
                    Kerja Perusahaan Daerah Air Minum (PDAM) yang kemudian
                    ditetapkan dengan Keputusan Walikotamadya Kepala Daerah
                    Tingkat II Nomor 30 Tahun 1995 tentang Organisai dan Tata
                    Kerja Perusahaan Daerah Air minum Kotamadya Daerah Tingkat
                    II Tangerang .
                  </p>
                  <p className="indent-10 textContent mb-4">
                    Adapun dalam perjalanannya dasar hukum PDAM Tirta benteng
                    Kota Tangerang mengalami perubahan yaitu, Peraturan daerah
                    kota tangerang nomor : 14 tahun 2002 tentang perubahan atas
                    peraturan daerah kotamadya daerah tingkat II tangerang nomor
                    11 tahun 1999 tentang pelayanan air minum di wilayah
                    kotamadya daerah tingkat II tangerang. Peraturan daerah kota
                    tangerang nomor : 10 tahun 2009 tentang perubahan atas
                    peraturan daerah kotamadya daerah tingkat II tangerang nomor
                    33 tahun 1995 tentang pembentukan perusahaan daerah air
                    minum kotamadya daerah tingkat II tangerang peraturan daerah
                    kota tangerang nomor : 11 tahun 2009 tentang organ dan
                    kepegawaian pdam
                  </p>
                  <p className="indent-10 textContent mb-4">
                    Tugas dari PDAM itu sendiri yaitu menyelenggarakan
                    pengelolaan air minum untuk meningkatkan kesejahteraan
                    masyarakat yang mencakup aspek social, kesehatan, pelayanan
                    umum serta melaksanakan kebijakan umum yang digariskan oleh
                    walikota Tangerang.
                  </p>

                  <div className="lg:w-full drop-shadow-xl">
                    <Image
                      className="rounded-2xl object-cover lg:w-[800px] mx-auto"
                      src={historyBentengan}
                      alt="historyBentengan"
                      width={2670}
                      height={80}
                      crossOrigin="anonymous"
                    />
                    <p className="sm:text-xs lg:text-md mb-4 text-center italic mt-2">
                      Sumber :{" "}
                      <a
                        className="hover:text-blue-500"
                        href="https://www.facebook.com/abouttng/photos/a.287506648257174/845478772459956/?type=3"
                      >
                        Facebook About Tangerang
                      </a>
                    </p>
                  </div>
                  <p className="indent-10 textContent mb-4">
                    Fungsi dari PDAM Tirta Benteng Kota Tangerang meliputi :
                  </p>
                  <ol className="mb-4">
                    <li>
                      <p className="indent-10 textContent">
                        1. Pelayanan umum dan jasa
                      </p>
                    </li>
                    <li>
                      <p className="indent-10 textContent">
                        2. Penyelenggara kepetingan umum
                      </p>
                    </li>
                    <li>
                      <p className="indent-10 textContent">
                        3. Peningkatan pendapatan daerah
                      </p>
                    </li>
                  </ol>
                </div>
                <hr className="w-full h-0.5 mt-8 bg-[#D9D9D9]" />
                {/* <SocialMediaRow /> */}
              </div>
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
