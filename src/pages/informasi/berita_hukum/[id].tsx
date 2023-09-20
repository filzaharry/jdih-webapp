import Head from "next/head";
import React, { useEffect, useState } from "react";
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
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

interface NewsDetailInterface {
  id: string;
  title: string;
  subtitle: string;
  created_at: string;
}

type News = {
  statusCode: number;
  message: string;
  data: NewsDetailInterface[];
};

export const getServerSideProps = (async (context) => {
  const path = context?.params?.id;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "news/" + path;
  const res = await fetch(apiUrl!.toString());
  const dataResult = await res.json();

  return { props: { dataResult } };
}) satisfies GetServerSideProps<{
  dataResult: News;
}>;

const NewsDetail = ({
  dataResult,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<News | null>(null);
  const [isLoading, setLoading] = useState(true);
  const apiPdfUrl = process.env.NEXT_PUBLIC_PDF;

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
                Informasi
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg md:max-w-[630px] font-medium text-white"
              >
                {`Beranda > Informasi > Berita Hukum > Detail`}
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
              {data?.data?.map((val, i) => (
                <motion.div key={i}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="w-full grid grid-cols-1 px-20 pt-10"
                >
                  <Image
                    className="object-cover w-full h-[800px] rounded-2xl mb-10 shadow-bannerFormShadow "
                    src="https://www.perumdatirtabenteng.co.id/assets/uploads/post_20221223_1671769686.jpg"
                    alt="profileImg"
                    width={2670}
                    height={80}
                  />
                  <div className="mx-10 mt-10">
                    <p className="text-4xl mb-10">{val.title}</p>

                    <div className="flex flex-row">
                      <div className="flex flex-row mr-10">
                        <AiFillInfoCircle className="text-xl mr-2 mt-0.5 text-[#FF4E4E]" />
                        <p className="text-colorPrimary">
                          Selasa, 18 Juli 2023
                        </p>
                      </div>
                      <div className="flex flex-row">
                        <AiFillInfoCircle className="text-xl mr-2 mt-0.5 text-[#FF4E4E]" />
                        <p className="text-colorPrimary">Umum</p>
                      </div>
                    </div>
                    <div className="py-4 mt-4">
                      <p>
                        Peraturan Walikota Nomor 53 Tahun 2023 Perubahan Atas
                        Peraturan Wali Kota Nomor 11 Tahun 2019 Tentang Pedoman
                        Pelaksanaan Kegiatan Pembangunan Sarana dan Prasarana
                        Kelurahan dan Pemberdayaan Masyarakat di Kelurahan.
                      </p>
                    </div>
                    <hr className="w-full h-0.5 mt-8 bg-[#D9D9D9]" />
                    <SocialMediaRow />
                  </div>
                </motion.div>
              ))}
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
export default NewsDetail;
