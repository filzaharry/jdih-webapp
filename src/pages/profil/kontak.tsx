import Head from "next/head";
import React from "react";
import FooterComponent from "@/src/components/Footer";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { MdDateRange } from "react-icons/md";

export default function Kontak() {
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
              Kontak
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="breadcumbPage"
            >
              {`Beranda > Profil > Kontak`}
            </motion.p>
          </section>
          <section id="home" className="bannerLayout2">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 lg:px-10 text-center sm:px-4"
            >
              <div className="lg:mx-10">
                <p className="titleContent">
                  Hubungi Kami
                </p>

                <div className="flex lg:flex-row sm:flex-col lg:gap-20 md:gap-10 sm:gap-4 lg:mt-10 text-start">
                  <div className="w-full items-center ">
                    <p className="lg:text-xl sm:text-md font-bold lg:pb-2 md:pb-2">Lokasi</p>
                    <p className="lg:text-base sm:text-sm">Komplek PU Prosida Bendungan 10 Kel.Mekarsari Kec.Neglasari Kota Tangerang</p>
                  </div>
                  <div className="w-full items-center ">
                    <p className="lg:text-xl sm:text-md font-bold lg:pb-2 md:pb-2">Telepon</p>
                    <p className="lg:text-base sm:text-sm">+62 21 5538865</p>
                  </div>
                  <div className="w-full items-center ">
                    <p className="lg:text-xl sm:text-md font-bold lg:pb-2 md:pb-2">Email</p>
                    <p className="lg:text-base sm:text-sm">hublang@pdamtirtabenteng.com</p>
                  </div>
                </div>
                <div className="mt-10 drop-shadow-xl mb-10">
                  <iframe className="w-full rounded-xl sm:h-50 md:h-72 lg:h-96"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.779549346095!2d106.6270096760853!3d-6.160272560378385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8b52e3e77a5%3A0xc31a7aef8add8bbf!2sPerumda%20Tirta%20Benteng!5e0!3m2!1sid!2sid!4v1700186371667!5m2!1sid!2sid"
                    loading="lazy"
                  ></iframe>
                </div>

                {/* 
                <div className="py-4 lg:mt-4 ">
                  <p className="textContent">jdih@perumdatirtabenteng.co.id</p>
                  <br />
                  <p className="textContent">021 - 5587234</p>
                  <br />
                  <p className="textContent">
                    Komplek PU Prosida Bendungan 10 Kel. Mekarsari Kec.
                    Neglasari
                  </p>
                </div> */}
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
