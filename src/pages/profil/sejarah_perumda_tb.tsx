import Head from "next/head";
import React from "react";
import { Footer } from "@/src/components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { historyBentengan, historyPerumdaTb } from "@/public";
import Image from "next/image";

export default function SejarahPerumdaTb() {
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
              {`Beranda > Profil > Sejarah Perumda TB`}
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
                Sejarah PDAM Kota Tangerang
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
                {/* FINAL USE MARKDOWN */}
                <div className="lg:w-full drop-shadow-xl">
                  <Image
                    className="rounded-2xl object-cover lg:w-[800px] mx-auto"
                    src={historyPerumdaTb}
                    alt="historyPerumdaTb"
                    width={2670}
                    height={80}
                    crossOrigin="anonymous"
                  />
                  <p className="sm:text-sm lg:text-lg mb-4 text-center italic mt-2">
                    Sumber :{" "}
                    <a
                      className="hover:text-blue-500"
                      href="https://travelista.id/featured/2561/menelisik-sungai-cisadane-dari-kolonial-hingga-moderen/"
                    >
                      menelisik-sungai-cisadane-dari-kolonial-hingga-moderen
                    </a>
                  </p>
                </div>
                <p className="indent-10 sm:text-sm lg:text-lg text-justify mb-4">
                  Pertengahan Abad XV: Tiga Aria Pada Masa Kolonialisme Belanda
                  (abad XV), Sultan Banten mengangkat Tiga Aria / Maulana yang
                  merupakan kerabat jauh Sultan dari Kerjaaan Sumedang Larang
                  bernama Yudhanegara, Wangsakara dan Santika. Kegiatannya
                  bertugas untuk membantu perekonomian Kesultanan Banten dengan
                  melakukan perlawanan terhadap VOC dengan praktik Monopolinya.
                  Tangerang Kota Benteng, Pada perjuangannya ketiga maulana
                  tersebut membangun benteng pertahanan yang disebut masyarakat
                  sekitar dengan istilah daerah "Benteng" atau "Bentengan". Hal
                  ini turut mendasari sebutan Kota Tangerang yang dikenal dengan
                  sebutan Kota Benteng.
                </p>
                <p className="indent-10 sm:text-sm lg:text-lg text-justify mb-4">
                  Saat ini sisa bangunan "Bentengan" tersebut berada di beberapa
                  titik di bawah permukaan air Sungai Cisadane yang semakin
                  melebar. 1654 M: "Tanggeran" Bangunan Penanda nama "Tangerang"
                  berasal dari sebutan masyarakat sekitar terhadap bangunan tugu
                  dengan tinggi kira-kira 2,5 meter yang didirikan Pangeran
                  Soegiri, putra Sultan Ageng Tirtayasa dari Kesultanan Banten,
                  bersama-sama dengan masyarakat sekitar pada tanggal 5 Sapar
                  tahun Wawu ( 1654 Masehi ) yang terletak kira-kira 500 meter
                  di tepi barat bantaran sungai Cisadane tepatnya di Gardu Gede
                  yang kini dikenal dengan nama Kampung Gerendeng.
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
                  <p className="sm:text-sm lg:text-lg mb-4 text-center italic mt-2">
                    Sumber :{" "}
                    <a
                      className="hover:text-blue-500"
                      href="https://www.facebook.com/abouttng/photos/a.287506648257174/845478772459956/?type=3"
                    >
                      Facebook About Tangerang
                    </a>
                  </p>
                </div>
                <p className="indent-10 sm:text-sm lg:text-lg text-justify mb-4">
                  Fungsi tugu tersebut adalah sebagai pembatas atau penanda
                  wilayah kekuasaan kesultanan Banten di sebelah barat Sungai
                  Cisadane dengan wilayah yang dikuasi VOC di sebelah timur.
                  Atas dasar fungsinya tersebut, masyarakat menyebut tugu dan
                  daerah itu dengan sebutan "Tetengger" atau "Tanggeran" yang
                  berarti "penanda". Pasca 17 April 1684: Dari "Tanggeran"
                  menjadi "Tangerang" Pasca penandatanganan perjanjian antara
                  VOC dengan Kesultanan Banten yang diwakili oleh Sultan Haji
                  atau Sultan Abunnashri Abdulkahar putra Sultan Ageng Tirtayasa
                  pewaris Kesultanan Banten tanggal 17 April 1684, Belanda
                  sepenuhnya menguasai wilayah "Tanggeran". Dalam penguasaannya,
                  tentara Belanda juga merekrut warga pribumi di antaranya dari
                  Madura dan Makasar yang di antaranya ditempatkan di sekitar
                  wilayah benteng. Tentara VOC yang berasal dari Makasar tidak
                  mengenal huruf mati, dan terbiasa menyebut "Tangeran" dengan
                  "Tangerang".
                </p>
                <p className="indent-10 sm:text-sm lg:text-lg text-justify mb-4">
                  Kesalahan ejaan dan dialek inilah yang diwariskan dari
                  generasi ke generasi bahkan hingga saat ini. Pasca Tahun 1981
                  - 1993: Wilayah yang Berkembang Pesat Seiring berjalannya
                  waktu, daerah Tangerang yang kala itu berbentuk Kabupaten
                  Daerah Tingkat II mengalami perkembangan yang sangat pesat.
                  Letaknya yang berbatasan langsung dengan Ibu Kota menjadikan
                  beberapa kecematan yang berbatasan langsung menjadi pusat
                  segala kegiatan baik Pemerintah, Ekonomi, industri, dan
                  Perdagangan, Politik, Sosial Budaya.Hingga pada tanggal 28
                  Februari 1981 disahkan Peraturan Pemerintah Nomor 50 Tahun
                  1981 tentang Pembentukan Kota Administratif Tangerang.
                </p>
                <p className="indent-10 sm:text-sm lg:text-lg text-justify mb-4">
                  Adapun Walikota Administratif Tangerang yang telah menjabat
                  mulai terbentuk Kota Administratif adalah :
                </p>
                <ol className="mb-4">
                  <li>
                    <p className="indent-10 sm:text-sm lg:text-lg text-justify">
                      1. Periode 1982-1986 : Bapak KARSO PERMANA, BA
                    </p>
                  </li>
                  <li>
                    <p className="indent-10 sm:text-sm lg:text-lg text-justify">
                      2. Periode 1986-1990 : Bapak Drs. H. YITNO
                    </p>
                  </li>
                  <li>
                    <p className="indent-10 sm:text-sm lg:text-lg text-justify">
                      3. Periode 1990-1993 : Bapak Drs. H. DJAKARIA MACHMUD
                    </p>
                  </li>
                </ol>
                <p className="indent-10 sm:text-sm lg:text-lg text-justify mb-4">
                  1 Juni 1987 sampai dengan 28 Februari 1993: Dari Kabupaten ke
                  Kotamadya. Dalam perjalanan kurun waktu 12 Tahun Kabupaten Tangerang
                  kembali menunjukan perkembangan dan pertumbuhan di segala
                  bidang. Dengan lama proses 5 tahun 8 bulan 27 hari yaitu sejak
                  tanggal 1 Juni 1987 sampai dengan 28 Februari 1993 dan secara
                  resmi Kotamadya Daerah Tingkat II Tangerang menjadi Daerah
                  Otonom Ke-25 di Jawa Barat dan Ke-312 se Indonesia.
                </p>
                <p className="indent-10 sm:text-sm lg:text-lg text-justify mb-4">
                  Selanjutnya, Kotamadya Daerah Tingkat II Tangerang diresmikan
                  oleh Bapak Jendral TNI ( Pur ) RUDINI ( Menteri Dalam Negri
                  Republik Indonesia ) pada hari Minggu tanggal 28 Februari 1993
                  bertepatan dengan bulan Suci Ramadhan 1413 H sekaligus
                  melantik Bapak Drs. H. DJAKARIA MACHMUD sebagai Pejabat
                  Walikotamadya Kepala Daerah Tingkat II Tangerang.
                </p>
                <p className="indent-10 sm:text-sm lg:text-lg text-justify mb-4">
                  1993-Sekarang: Para Pemimpin satu tahun kemudian, berdasarkan
                  hasil pemilihan DPRD Kotamadya Daerah Tingkat II Tangerang
                  Bapak Drs. H. DJAKARIA MACHMUD terpilih sebagai Walikotamadya
                  Kepala Daerah Tingkat II Tangerang yang pertama.Adapun urutan
                  Walikotamadya Kepala Daerah Tingkat II Tangerang adalah
                  sebagai berikut:Tahun 1993-1998 : Bapak Drs. H. DJAKARIA
                  MACHMUDTahun 1998-2003 : Bapak Drs. H. MOCH. THAMRINTahun
                  2003-2013 : Bapak Drs. H. WAHIDIN HALIM (2 Periode)Tahun
                  2013-2023 : Bapak H. ARIEF R. WISMANSYAH, B.Sc., M.Kes. (2
                  Periode)Sumber : tangerangkota.go.id
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
