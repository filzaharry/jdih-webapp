import Head from "next/head";
import React from "react";
import { Footer } from "@/src/components/Footer";
import { RiBox1Fill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { DetailProductList } from "@/src/components/DetailProductList";
import Banner from "@/src/components/Banner";
import { motion } from "framer-motion";
import Image from "next/image";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import NewsItem from "@/src/components/NewsItem";

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
              Berita Hukum
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Informasi > Berita Hukum`}
            </motion.p>
          </section>
          <section
            id="home"
            className="
            max-w-contentContainer
            bg-white shadow-bannerFormShadow 
            sm:w-[90%] 
            mdl:w-[90%]
            rounded-3xl mt-10 mx-auto pt-10 pb-20 sm:mb-20
            "
          >
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
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
