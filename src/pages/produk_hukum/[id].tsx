import FooterComponent from "@/src/components/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { DetailProductList } from "@/src/components/DetailProductList";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

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
  data: ProductDetailInterface
};

export const getServerSideProps = (async (context) => {
  const id = context?.params?.id
  const apiUrl = process.env.NEXT_PUBLIC_API_URL  + "product_of_law/detail/" + id;
  const res = await fetch(apiUrl!.toString());
  const dataResult = await res.json();
  
  return { props: { dataResult } };
}) satisfies GetServerSideProps<{
  dataResult: Product;
}>;

const ProdukHukumDetail = ({dataResult}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setLoading] = useState(true);
  const apiPdfUrl = process.env.NEXT_PUBLIC_PDF

  useEffect(() => {
    console.log("dataResult");
    console.log(dataResult);
    
    if (!router.isReady) return;
    // codes using router.query

    if (dataResult.statusCode == 200) {
      setLoading(false);
      setData(dataResult)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  if (isLoading) {
    return <p> Is Loading ...</p>;
  } else {
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
                Detail Produk Hukum
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="breadcumbPage"
              >
                {`Beranda > Produk Hukum > Detail Produk Hukum`}
              </motion.p>
            </section>
            <section id="home" className="bannerLayout2">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-1 lg:px-20 lg:py-10 sm:px-4"
              >
                <p className="sm:text-xl lg:text-4xl sm:pb-10 lg:pb-18">
                  {data == null
                    ? ""
                    : data?.data?.title}
                </p>
                <DetailProductList
                  title="Tipe Dokumen"
                  desc={data == null ? "" : data?.data?.type}
                  status={1}
                />
                <DetailProductList
                  title="Deskripsi"
                  desc={data == null ? "" : data?.data?.subtitle}
                  status={1}
                />
                <DetailProductList
                  title="T.E.U Badang/Pengarang"
                  desc={data == null ? "" : data?.data?.author}
                  status={1}
                />
                <DetailProductList
                  title="Nomor Peraturan"
                  desc={data == null ? "" : data?.data?.number}
                  status={1}
                />
                <DetailProductList
                  title="Jenis / Bentuk Peraturan"
                  desc={data == null ? "" : data?.data?.rules}
                  status={1}
                />
                <DetailProductList
                  title="Status Peraturan"
                  desc={data == null ? "" : data?.data?.status?.toString() == "" ? '1' : '1'}
                  status={2}
                />
                <DetailProductList
                  title="Lampiran"
                  desc={data == null ? "" : apiPdfUrl+'/product_of_law/'+data?.data?.attachment}
                  status={3}
                />

                {/* <SocialMediaRow /> */}
              </motion.div>
            </section>

            <div className="customFooter">
              <FooterComponent />
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default ProdukHukumDetail;
