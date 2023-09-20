import Head from "next/head";
import React from "react";
import { Footer } from "@/src/components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { BiSolidCity } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";
import AcademicScriptCard from "@/src/components/ItemGeneral";
import ItemGeneral from "@/src/components/ItemGeneral";

export default function NaskahAkademik() {
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
              Naskah Akademik
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Informasi Lainnya > Naskah Akademik`}
            </motion.p>
          </section>

          <div
            className="
            sm:pt-4
            lg:py-10 
            lg:mt-40
            xl:mt-0 xl:pt-0
            sm:w-[90%] 
            mdl:w-[90%]
            lg:w-[70%]
          bg-white shadow-bannerFormShadow 
            rounded-2xl mx-auto py-10 sm:mb-20 lg:mb-4"
          >
            <div className="max-w-contentContainer mx-auto sm:w-[90%] sm:mt-10 flex flex-col gap-8">
              <div className="lg:pt-10">
                <ItemGeneral/>
                <ItemGeneral/>
                <ItemGeneral/>
                <ItemGeneral/>
                <ItemGeneral/>
              </div>
            </div>
          </div>
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
