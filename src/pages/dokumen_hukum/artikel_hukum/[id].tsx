
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { DetailProductList } from "@/src/components/DetailProductList";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import FooterComponent from "@/src/components/Footer";

interface ProductDetailInterface {
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

type Product = {
  statusCode: number;
  message: string;
  data:ProductDetailInterface
};


const DetailArtikelHukum = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setLoading] = useState(true);
  const apiPdfUrl = process.env.NEXT_PUBLIC_PDF


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
                Detail Produk Hukum
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="breadcumbPage"
              >
                {`123123`}
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
                <p className="sm:text-xl lg:text-4xl sm:pb-10 lg:pb-28">
                  {'123123'}
                </p>
                <DetailProductList
                  title="Tipe Dokumen"
                  desc={'123123'}
                  status={1}
                />
                <DetailProductList
                  title="Judul"
                  desc={'123123'}
                  status={1}
                />
                <DetailProductList
                  title="T.E.U Badang/Pengarang"
                  desc={'123123'}
                  status={1}
                />
                <DetailProductList
                  title="Nomor Peraturan"
                  desc={'123123'}
                  status={1}
                />
                <DetailProductList
                  title="Jenis / Bentuk Peraturan"
                  desc={'123123'}
                  status={1}
                />
                <DetailProductList
                  title="Status Peraturan"
                  desc={'123123'}
                  status={2}
                />
                <DetailProductList
                  title="Lampiran"
                  desc={'123123'}
                  status={3}
                />

                <SocialMediaRow />
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

export default DetailArtikelHukum;
