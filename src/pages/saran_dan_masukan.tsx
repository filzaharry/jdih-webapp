import Head from "next/head";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "../components/Header";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "../components/SocialMediaRow";
import { RiBox1Fill } from "react-icons/ri";
import Image from "next/image";
import { user } from "@/public";
import { Footer } from "../components/Footer";

export default function SaranDanMasukan() {
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
              Saran dan Masukan
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Saran dan Masukan`}
            </motion.p>
          </section>
          <section
            id="home"
            className="
            max-w-contentContainer
            bg-white shadow-bannerFormShadow 
            sm:w-[90%] 
            mdl:w-[90%]
            rounded-3xl mt-10 mx-auto sm:pt-6 lg:pt-10 sm:mb-20
            "
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 sm:px-6 lg:px-10 "
            >
              <div className="flex flex-row justify-between">
                <p className="text-2xl pb-12">Masukkan Saran Anda Disini</p>
                <p></p>
              </div>
              <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-4">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Nama</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Masukkan Nama"
                  ></input>
                </div>
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Email</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="email"
                    placeholder="Masukkan Email"
                  ></input>
                </div>
              </div>
              <div className="grid lg:grid-cols-4 sm:grid-col-1 gap-4 mt-8">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Pendapat Anda</p>
                  </div>
                  <div className="dropdown relative inline-block text-left w-full">
                    <p className=" px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none">
                      Pilih Subjek
                    </p>
                    <div
                      className="dropdown-content hidden absolute right-0 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                          Sangat Puas
                        </p>
                        <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                          Puas
                        </p>
                        <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                          Tidak Puas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Tentang</p>
                  </div>
                  <input
                    className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                    type="text"
                    placeholder="Tentang Produk Hukum"
                  ></input>
                </div>
              </div>
              <div className="flex flex-row justify-between my-10 ">
                <div className="sm:hidden lg:block"></div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-row items-center ">
                    <div className="bg-btnPrimary w-4 h-4 rounded-md mr-2"></div>
                    <p>{`I'm not robot`}</p>
                  </div>
                  <button className="rounded-xl bg-btnPrimary text-white px-10 py-4 ml-8">
                    Kirim
                  </button>
                </div>
              </div>
            </motion.div>
        </section>
          <div
            className="
          max-w-contentContainer mx-auto 
          sm:w-[90%] sm:mt-10
          flex flex-col gap-8"
          >
            <div className="flex flex-row lg:w-[80%] sm:w-[90%] sm:mx-auto lg:m-4">
              <Image
                className="lg:w-10 lg:h-10 sm:w-8 sm:h-8 "
                src={user}
                alt="user"
                width={100}
                height={100}
              />
              <div className="mx-4">
                <p className="text-xl text-colorPrimary">John Doe</p>
                <p className="text-sm text-red-500">12-12-2023</p>
                <p className="my-4 sm:text-sm lg:text:lg text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  distinctio dicta, cum, repudiandae ex culpa illum voluptas
                  mollitia atque enim itaque et a dolorem vero nostrum. Dolorum
                  totam deserunt repellendus assumenda magnam debitis aperiam
                  vitae alias, nesciunt fuga facilis eius illo rerum quo
                  inventore excepturi. Repudiandae perspiciatis excepturi aut.
                  Iste dolorum excepturi possimus voluptatem illum nostrum
                  eveniet, iusto beatae alias molestiae doloremque eos itaque
                  consequatur? Rem sit debitis tempore non in libero quisquam,
                  sapiente inventore atque ab ad molestiae? Laborum minima
                  ducimus inventore veritatis repellat est enim aut earum
                  deserunt necessitatibus voluptas vel eveniet consequatur,
                  impedit ullam error exercitationem placeat!
                </p>
                
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
