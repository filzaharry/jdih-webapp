import Head from "next/head";
import React, { useEffect, useState } from "react";

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
import moment from "moment";
import { MdDateRange } from "react-icons/md";
import FooterComponent from "@/src/components/Footer";

interface NewsDetailInterface {
  id: string;
  title: string;
  picture: string;
  subtitle: string;
  content: string;
  created_at: string;
}

type News = {
  statusCode: number;
  message: string;
  data: NewsDetailInterface[];
};

export const getServerSideProps = (async (context) => {
  const path = context?.params?.path;
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
    return <p> Is Loading ...</p>;
  } else {
    return (
      <>
        <Header />
        <main className="font-bodyFont w-full h-screen overflow-x-hidden">
          <div
            id="news"
            className="bannerLayout4 
            "
          >
            <Navbar />
            <section className="customSection">
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="titlePage"
              >
                Informasi
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-lg md:max-w-[630px] font-medium text-white"
              >
                {`Beranda > Berita Hukum > Detail`}
              </motion.p>
            </section>
            <section
              id="home"
              className="
            max-w-contentContainer
            bg-white shadow-bannerFormShadow 
            sm:w-[90%] 
            mdl:w-[90%]
            rounded-3xl mt-10 mx-auto sm:pt-4 lg:pt-10 pb-20 sm:mb-20
            "
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-1 lg:px-20 lg:pt-10 sm:px-4"
              >
                <img
                  className="object-cover w-full  lg:h-[800px] rounded-2xl mb-10 shadow-bannerFormShadow "
                  src={data?.data[0].picture ?? ""}
                  alt={data?.data[0].picture ?? ""}
                />
                {/* <Image
                    className="object-cover w-full h-[800px] rounded-2xl mb-10 shadow-bannerFormShadow "
                    src={data?.data[0].picture??''}
                    // src={infoImage}
                    alt="profileImg"
                    width={2670}
                    height={80}
                  /> */}
                <div className="lg:mx-10 lg:mt-10">
                  <p className="sm:text-xl lg:text-4xl mb-4">
                    {data?.data[0].title}
                  </p>

                  <div className="flex flex-row">
                    <div className="flex flex-row sm:mr-2 lg:mr-10">
                      <MdDateRange className="sm:text-sm lg:text-lg mr-2 text-[#FF4E4E]" />
                      <p className="text-colorPrimary sm:text-sm lg:text-md">
                        {moment(data?.data[0].created_at).format("LLL")}
                      </p>
                    </div>
                    {/* <div className="flex flex-row">
                        <AiFillInfoCircle className="text-xl mr-2 mt-0.5 text-[#FF4E4E]" />
                        <p className="text-colorPrimary">kategori blm ada</p>
                      </div> */}
                  </div>
                  <div className="py-4 mt-4">
                    <div className="whitespace-normal">
                      <div className="whitespace-pre-line sm:text-sm lg:text-mdl">
                        {data?.data[0].content}
                      </div>
                    </div>
                  </div>
                  <hr className="w-full h-0.5 mt-8 bg-[#D9D9D9]" />
                  {/* <SocialMediaRow /> */}
                </div>
              </motion.div>
              {/* ))} */}
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
};
export default NewsDetail;
