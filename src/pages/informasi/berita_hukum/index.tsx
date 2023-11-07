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
import NewsItem from "@/src/components/NewsItem";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import FooterComponent from "@/src/components/Footer";

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
  currentPage: string | number;
  totalData: string;
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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [data, setData] = useState<News | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const limit = process.env.NEXT_PUBLIC_LIMIT;

  const [currentPage, setCurrentPage] = useState<number>(0);

  let url: string;
  const rowPerPage: string = "10";

  useEffect(() => {
    // const url = apiUrl + "news?rowPerPage=" + limit;

    url = `${apiUrl}news?rowPerPage=${rowPerPage}&page=${currentPage}`;

    console.log(url);

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady,isLoading]);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("what error ?", error);
    }
    setIsLoading(false);
  };



const handlePrev = () => {
  const prevPage = currentPage - 1;
  setCurrentPage(prevPage);
  setIsLoading(true);
};
const handleNext = () => {
  const nextPage = currentPage + 1;
  setCurrentPage(nextPage);
  setIsLoading(true);
};

  return (
    <>
      <Header />
      <main className="font-bodyFont w-full h-screen overflow-x-hidden">
        <div id="home" className="bannerLayout4">
          <Navbar />
          <section className="customSection">
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
          <section id="home" className="bannerLayout2">
            {isLoading == true ? (
              <p>Loading ....</p>
            ) : (
              <>
                {data?.data?.length == 0 ? (
                  <>
                    <p>Tidak Ada Data</p>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </>
            )}
              <div className="flex flex-row justify-between py-10 lg:px-10 sm:px-4">
                {data?.data?.length! > 0 ? (
                  <>
                    <p className="linkViewAllDisabled">
                      Menampilkan 1 sampai {data?.data?.length!} dari{" "}
                      {data?.totalData} entri
                    </p>
                  </>
                ) : (
                  <>
                    <p className="linkViewAllDisabled">
                      Menampilkan 0 dari {data?.totalData} entri
                    </p>
                  </>
                )}

                <div className="flex flex-row gap-10">
                  {currentPage > 0 ? (
                    <>
                      <div
                        className="flex flex-row gap-4 items-center justify-center cursor-pointer"
                        onClick={handlePrev}
                      >
                        <IoMdArrowDropleft className="linkViewAll" />
                        <p className="linkViewAll">Sebelumnya</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-row gap-4 items-center justify-center cursor-pointer">
                        <IoMdArrowDropleft className="linkViewAllDisabled text-gray-400" />
                        <p className="linkViewAllDisabled text-gray-400">Sebelumnya</p>
                      </div>
                    </>
                  )}

                  {data?.data?.length! < parseInt(rowPerPage) ? (
                    <>
                      <div className="flex flex-row gap-4 items-center justify-center cursor-pointer">
                        <p className="linkViewAllDisabled text-gray-400">Selanjutnya</p>
                        <IoMdArrowDropright className="linkViewAllDisabled text-gray-400" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="flex flex-row gap-4 items-center justify-center cursor-pointer"
                        onClick={handleNext}
                      >
                        <p className="linkViewAll">Selanjutnya</p>
                        <IoMdArrowDropright className="linkViewAll" />
                      </div>
                    </>
                  )}
                </div>
              </div>
          </section>

          <div className="customFooter">
            <FooterComponent />
          </div>
        </div>
      </main>
    </>
  );
};
export default AllNews;
