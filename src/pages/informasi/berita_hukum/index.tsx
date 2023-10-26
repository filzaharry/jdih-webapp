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
import NewsItem from "@/src/components/NewsItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import axios from "axios";

interface NewsInterface {
  id: string;
  title: string;
  subtitle: string;
  created_at: string;
  path: string;
  picture: string;
}

type News = {
  statusCode: number;
  message: string;
  data: NewsInterface[];
};

// export const getServerSideProps = (async (context) => {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL + "news";
//   const res = await fetch(apiUrl!.toString());
//   const dataResult = await res.json();

//   return { props: { dataResult } };
// }) satisfies GetServerSideProps<{
//   dataResult: News;
// }>;

const AllNews = () => {
  const router = useRouter();
  const [data, setData] = useState<News | null>(null);
  const [isLoading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const limit = process.env.NEXT_PUBLIC_LIMIT

  useEffect(() => {
    const url = apiUrl + "news?rowPerPage=" + limit;

    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error("what error ?", error);
      }
      setLoading(false);
    };

    fetchData();
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
            id="home"
            className="
            w-full 
            h-screen 
            bg-contain
            bg-heroResponsiveBg 
            bg-no-repeat 
            sm:bg-cover
            lg:bg-cover
            lg:bg-top
            lg:bg-heroBackground2"
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
                className="text-4xl lgl:text-5xl font-titleFont text-white font-semibold"
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
            rounded-3xl mt-10 mx-auto sm:pt-6 lg:pt-10 sm:mb-20
            "
            >
              {data?.data?.map((val, i) => (
                <NewsItem
                  key={i}
                  id={val.id}
                  subtitle={val.subtitle}
                  title={val.title}
                  path={val.path}
                  picture={val.picture}
                  created_at={val.created_at}
                />
              ))}
            </section>

            <div
              className="
              customFooter
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
export default AllNews;
