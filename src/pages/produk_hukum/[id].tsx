import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import { DetailProductList } from "@/components/DetailProductList";
import SocialMediaRow from "@/components/SocialMediaRow";
import axios from "axios";

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

type Products = ProductDetailInterface;

const ProdukHukumDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<Products | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    
    if (!router.isReady) return;
    // codes using router.query
    
    const fetchData = async () => {
      try {
        const url = "http://localhost:5001/api/jdih/product_of_law/detail?polId=" + id;
        const { data: response } = await axios.get(url); 
        setData(response.data);
      } catch (error) {
        console.error("what error ?", error);
      }

      setLoading(false);
    };

    fetchData();
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
                Detail Produk Hukum 123
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg md:max-w-[630px] font-medium text-white"
              >
                {`${data?.title}`}
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
                {data == null ? "" : data?.title + " No. " + data?.number + " " + data?.subtitle}
                </p>
                <DetailProductList
                  title="Tipe Dokumen"
                  desc={data == null ? "" : data?.type}
                  status={1}
                />
                <DetailProductList
                  title="Judul"
                  desc={data == null ? "" : data?.subtitle}
                  status={1}
                />
                <DetailProductList
                  title="T.E.U Badang/Pengarang"
                  desc={data == null ? "" : data?.author}
                  status={1}
                />
                <DetailProductList
                  title="Nomor Peraturan"
                  desc={data == null ? "" : data?.number}
                  status={1}
                />
                <DetailProductList
                  title="Jenis / Bentuk Peraturan"
                  desc={data == null ? "" : data?.rules}
                  status={1}
                />
                <DetailProductList
                  title="Status Peraturan"
                  desc={
                    data == null
                      ? ""
                      : data?.status.toString()
                  }
                  status={2}
                />
                <DetailProductList
                  title="Lampiran"
                  desc={data == null ? "" : data?.attachment}
                  status={3}
                />

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
};

export default ProdukHukumDetail;
