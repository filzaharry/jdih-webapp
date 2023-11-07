import * as React from "react";
import { motion } from "framer-motion";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import FooterComponent from "@/src/components/Footer";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

export default function Tupoksi() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
              Tugas Pokok dan Fungsi Seksi Hukum
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Profil > Tugas Pokok dan Fungsi Seksi Hukum`}
            </motion.p>
          </section>
          <section
            id="home"
            className="
            customLayoutContent"
          >
            {/* <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 sm:px-8 lg:px-20 lg:pt-20"
            > */}
              {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
                <div
                  style={{
                    height: "750px",
                    width: "900px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Viewer
                    fileUrl="/other/tupoksi.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker> */}
              {/* <object data="http://localhost:3000/other/tupoksi.pdf" type="application/pdf" width="100%" height="900"></object> */}
              {/* <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="900"></object> */}
              {/* <hr className="w-full h-0.5 mt-8 bg-[#D9D9D9]" /> */}
              {/* <SocialMediaRow /> */}
            {/* </motion.div> */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 sm:px-8 lg:px-20 lg:pt-20"
            >
              <p className="titleContent">
                Tupoksi ( Tugas Pokok dan Fungsi Seksi Hukum )
              </p>

              <div className="flex flex-row">
                <div className="flex flex-row sm:mr-2 lg:mr-10">
                  <MdDateRange className="dateIcon" />
                  <p className="text-colorPrimary sm:text-sm lg:text-lg">
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
                <p className="textContent">
                  Assalamualaikum Wr. Wb dan Salam Sejahtera Selalu{" "}
                </p>
                <br />
                <p className="textContent">
                  Jaringan Dokumentasi Informasi Hukum (JDIH) Perumda Tirta
                  Benteng Kota Tangerang Sebagaimana Yang Ada Saat Ini Merupakan
                  Salah Satu Bukti Komitmen Pemerintah Kota Tangerang Untuk
                  Melaksanakan Transparansi, Sekaligus Pemenuhan Kewajiban
                  Pelayanan Publik dalam Penyediaan Informasi Publik Yang
                  Dibutuhkan Oleh Masyarakat dan Pihak Yang Membutuhkan Lainnya.
                </p>
                <br />
                <p className="textContent">
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
                <p className="textContent">
                  Guna peningkatan kualitas penyajian dimasa yang akan datang,
                  maka kami sangat terbuka untuk menerima saran-saran positif
                  dari pengguna website/netter dan masyarakat umumnya. Untuk itu
                  jika anda memiliki saran dan masukan Maka silahkan disampaikan
                  melalui website ini (www.perumdatirtabenteng.co.id/webmail)
                  atau secara tertulis ke Bagian Hukum Perumda Tirta Benteng
                  Kota Tangerang.
                </p>
                <br />
                <p className="textContent">
                  Demikian Yang bisa kami sampaikan Wassalamualaikum Wr.Wb, dan
                  Salam Sejahtera selalu.
                </p>
                <br />
                <p className="textContent">
                  Manager Bagian Umum, Hukum, Dan Pengembangan SDM Perumda Tirta
                  Benteng Kota Tangerang.
                </p>
                <p className="font-bold textContent">
                  Hari Hartian, SH.
                </p>
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
            <FooterComponent />
          </div>
        </div>
      </main>
    </>
  );
};

