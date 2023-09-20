import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Footer } from "@/src/components/Footer";
import { RiBox1Fill, RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { DetailProductList } from "@/src/components/DetailProductList";
import Banner from "@/src/components/Banner";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import axios from "axios";
import PeraturanPerundanganItem from "@/src/components/atom/PeraturanPerundanganItem";
import ProductCard from "@/src/components/ProductCard";
import Status from "@/src/components/atom/Status";
import { BiSolidCheckCircle, BiSolidCity } from "react-icons/bi";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface ProductsInterface {
  id: string;
  title: string;
  subtitle: string;
  created_at: string;
  type: string;
  author: string;
  rules: string;
  number: string;
  status: number;
  attachment: string;
  year: string;
}

type Products = {
  statusCode: number;
  message: string;
  data: ProductsInterface[];
};

export const getServerSideProps = (async (context) => {
  const id = context?.params?.id;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "product_of_law/limit/0";
  const res = await fetch(apiUrl!.toString());
  const dataResult = await res.json();

  return { props: { dataResult } };
}) satisfies GetServerSideProps<{
  dataResult: Products;
}>;

const AllProducts = ({
  dataResult,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [data, setData] = useState<Products | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("dataResult");
    console.log(dataResult);

    if (!router.isReady) return;
    // codes using router.query

    if (dataResult.statusCode == 200) {
      setLoading(false);
      setData(dataResult);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  if (isLoading) {
    return <p>Product Data Is Loading ...</p>;
  } else {
    return (
      <>
        <Header />
        <main className="font-bodyFont w-full h-screen overflow-x-hidden">
          <div
            id="home"
            className="
            w-full 
            h-screen 
            bg-cover
            bg-heroResponsiveBg 
            bg-no-repeat 
            bg-center
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
                Produk Hukum
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg md:max-w-[630px] font-medium text-white"
              >
                {`Beranda > Produk Hukum`}
              </motion.p>
            </section>

            <section
              id="home"
              className="
            max-w-contentContainer
            bg-white shadow-bannerFormShadow 
            sm:w-[90%] 
            mdl:w-[90%]
            rounded-3xl mt-10 mx-auto pt-10 sm:mb-20
            "
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-1 sm:px-6 lg:px-10"
              >
                <div className="flex flex-row justify-between">
                  <p className="text-2xl pb-12">Cari Produk Hukum</p>
                  <button className="rounded-xl bg-btnPrimary text-white px-10 sm:h-[50%] lg:h-[60%]">
                    Cari
                  </button>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-col-1 gap-4">
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Produk Hukum</p>
                    </div>
                    <input
                      className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                      type="text"
                      placeholder="Masukkan Tahun Produk"
                    ></input>
                  </div>
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Produk Hukum</p>
                    </div>
                    <input
                      className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                      type="text"
                      placeholder="Masukkan Tahun Produk"
                    ></input>
                  </div>
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Produk Hukum</p>
                    </div>
                    <input
                      className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                      type="text"
                      placeholder="Masukkan Tahun Produk"
                    ></input>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-4 my-4 pb-8">
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Status</p>
                    </div>
                    <input
                      className="px-4 py-4 appearance-none rounded-xl flex-auto w-full bg-transparent border border-[#EBEBEB] xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
                      type="text"
                      placeholder="Pilih Status Produk"
                    ></input>
                  </div>
                  <div className="">
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
              </motion.div>
            </section>
            <div className="max-w-contentContainer mx-auto sm:w-[90%] sm:mt-10 flex flex-col gap-8">
              <div className="grid grid-cols-1 gap-2">
                {data?.data?.map((val, i) => (
                  <div
                    key={i}
                    onClick={() => router.push("/produk_hukum/" + val.id)}
                    className=" hover:bg-slate-100 px-4 py-4 rounded-lg"
                  >
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex sm:flex-col lg:flex-row sm:items-start lg:items-center">
                        <div className="flex flex-row">
                          <p className="sm:text-md lg:text-lg text-slate-600 mr-4 lg:mb-0 sm:mb-2">
                            SK No. {val.number} - {val.type} - {val.year}
                          </p>
                        </div>
                        <Status desc={"2"} />
                      </div>
                      <div className="sm:hidden lg:block">
                        <p className="cursor-pointer text-colorSecondary inline-block align-bottom sm:text-sm lg:text-md">
                          Lihat Detail
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row mt-4">
                      <BiSolidCity className="sm:hidden lg:block text-2xl text-slate-400" />
                      <p className="sm:text-sm text-justify lg:text-base text-gray-500 sm:ml-0 lg:ml-4">
                        {val.title + " " + val.subtitle}
                      </p>
                    </div>
                    <hr className="w-full h-0.5 border-0 mt-4 rounded bg-slate-200" />
                  </div>
                ))}
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
};
export default AllProducts;
