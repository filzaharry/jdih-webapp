import Head from "next/head";
import React, { useEffect, useState } from "react";
import FooterComponent from "@/src/components/Footer";
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
import {
  BiSolidCheckCircle,
  BiSolidCity,
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Highlighted from "@/src/components/atom/Highlight";

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
interface CategoriesInterface {
  id: string;
  name: string;
  status: number;
}

type Products = {
  statusCode: number;
  message: string;
  currentPage: string | number;
  totalData: string;
  data: ProductsInterface[];
};

type Categories = {
  statusCode: number;
  message: string;
  data: CategoriesInterface[];
};

// export const getServerSideProps = (async (context) => {

//   const apiUrl = process.env.NEXT_PUBLIC_API_URL + "product_of_law/limit/0";
//   const res = await fetch(apiUrl!.toString());
//   const dataResult = await res.json();

//   return { props: { dataResult } };
// }) satisfies GetServerSideProps<{
//   dataResult: Products;
// }>;

const AllProducts = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [data, setData] = useState<Products | null>(null);
  const [dataCategories, setDataCategories] = useState<Categories | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState<
    string | null | string[] | number | number[]
  >(0);
  const [statusMsg, setStatusMsg] = useState<string | null | string[]>("");
  const [category, setCategory] = useState<
    string | null | string[] | number | number[]
  >(0);
  const [categoryMsg, setCategoryMsg] = useState<string | null | string[]>("");
  const [categoryTitle, setCategoryTitle] = useState<string | null | string[]>(
    ""
  );
  const [numberProduct, setNumberProduct] = useState<string | null | string[]>(
    ""
  );
  const [yearProduct, setYearProduct] = useState<string | null | string[]>("");
  const [aboutProduct, setAboutProduct] = useState<string | null | string[]>(
    ""
  );
  const [fromRoute, setFromRoute] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [highlight, setHighlight] = useState<string | null | string[]>("");

  let urlMasterCategory: string;

  let url: string;
  let urlCategory: string = "";
  let urlNumberProduct: string = "";
  let urlYearProduct: string = "";
  let urlAboutProduct: string = "";
  let urlStatusProduct: string = "";
  const rowPerPage: string = "10";
  const clearQueryUrl = "";

  useEffect(() => {
    urlMasterCategory = `${apiUrl}master_category`;

    const fetchCategory = async () => {
      try {
        const { data: response } = await axios.get(urlMasterCategory);
        setDataCategories(response);
      } catch (error) {
        console.error("what error ?", error);
      }
    };

    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    if (Object.keys(router.query).length > 0) {
      setFromRoute(true);
      if (fromRoute == true) {
        setCategory(router?.query?.category ?? "");
        setCategoryMsg(router?.query?.categoryMsg ?? "");
        setCategoryTitle(router?.query?.categoryMsg ?? "");
        setNumberProduct(router?.query?.numberProduct ?? "");
        setYearProduct(router?.query?.yearProduct ?? "");
        setAboutProduct(router?.query?.aboutProduct ?? "");
      }
    }

    if (category == 0) {
      setCategoryMsg("");
    }

    if (category != 0) {
      urlCategory = `&category=${category}`;
      setHighlight(categoryMsg);
    }
    if (numberProduct != "") {
      urlNumberProduct = `&number=${numberProduct}`;
      setHighlight(numberProduct);
    }
    if (yearProduct != "") {
      urlYearProduct = `&year=${yearProduct}`;
      setHighlight(yearProduct);
    }
    if (status != "") {
      urlStatusProduct = `&status=${status}`;
      setHighlight(statusMsg);
    }
    if (aboutProduct != "") {
      urlAboutProduct = `&about=${aboutProduct}`;
      setHighlight(aboutProduct);
    }

    url = `${apiUrl}product_of_law?rowPerPage=${rowPerPage}&page=${currentPage}${urlCategory}${urlNumberProduct}${urlYearProduct}${urlStatusProduct}${urlAboutProduct}`;

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, isLoading]);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("what error ?", error);
    }
    setIsLoading(false);
  };

  const filterSearch = () => {
    setIsLoading(true);
    setFromRoute(false);
    setCategoryTitle(categoryMsg);
    router.replace({ search: clearQueryUrl });
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    setIsLoading(true);
    setFromRoute(false);
  };
  const handleNext = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setIsLoading(true);
    setFromRoute(false);
  };
  const handleResetFilter = () => {
    setIsLoading(true);
    setFromRoute(false);
    router.replace({ search: clearQueryUrl });
    setCategory(0);
    setCategoryMsg("");
    setNumberProduct("");
    setYearProduct("");
    setAboutProduct("");
    setStatus(0);
    setStatusMsg("");
    setHighlight("");
  };

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
              {`Produk Hukum ${categoryTitle}`}
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Produk Hukum ${categoryTitle}`}
            </motion.p>
          </section>

          <section id="home" className="bannerLayout1">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 sm:px-6 lg:px-10 pb-10"
            >
              <div className="flex sm:flex-col lg:flex-row justify-between">
                <p className="text-2xl lg:pb-12 sm:pb-2">Cari Produk Hukum</p>
                <div className="flex flex-row gap-4 items-center sm:pb-12">
                  <div
                    className="flex flex-row gap-4 items-center justify-center cursor-pointer"
                    onClick={handleResetFilter}
                  >
                    <p className="linkViewAll text-sm">Reset Filter</p>
                  </div>
                  <button
                    className="rounded-xl bg-btnPrimary text-white px-10 lg:h-14 sm:h-10"
                    onClick={filterSearch}
                  >
                    Cari
                  </button>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-col-1 gap-4">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Produk Hukum</p>
                  </div>
                  <div className="dropdown relative inline-block text-left w-full">
                    {categoryMsg == "" ? (
                      <p className=" textFilterInnerBox">Pilih Kategori</p>
                    ) : (
                      <p className=" textFilterInnerBox text-black">
                        {categoryMsg}
                      </p>
                    )}
                    <div
                      className="dropdownCustom"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        {dataCategories?.data?.map((val, i) => (
                          <p
                            key={i}
                            onClick={() => {
                              setCategory(val.id);
                              setCategoryMsg(val.name);
                            }}
                            className="dropdownValueCustom"
                          >
                            {val.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Nomor</p>
                  </div>
                  <input
                    className="textFilterInnerBox text-black placeholder-textPlaceholder"
                    type="number"
                    placeholder="Nomor Produk"
                    value={numberProduct || ""}
                    onChange={(e) => setNumberProduct(e.target.value)}
                  ></input>
                </div>
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Tahun</p>
                  </div>
                  <input
                    className="textFilterInnerBox text-black placeholder-textPlaceholder"
                    type="number"
                    placeholder="Tahun Produk"
                    // onChange={yearHandleChange}
                    value={yearProduct || ""}
                    onChange={(e) => setYearProduct(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="grid lg:grid-cols-4 sm:grid-col-1 gap-4 mt-8">
                <div className="">
                  <div className="flex">
                    <RiBox1Fill className="text-xl mr-2 mb-2" />
                    <p className="text-base">Pilih Status</p>
                  </div>
                  <div className="dropdown relative inline-block text-left w-full">
                    {statusMsg == "" ? (
                      <p className=" textFilterInnerBox">Pilih Status</p>
                    ) : (
                      <p className=" textFilterInnerBox  text-black">
                        {statusMsg}
                      </p>
                    )}
                    <div
                      className="dropdownCustom"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <p
                          onClick={() => {
                            setStatus(1);
                            setStatusMsg("Berlaku");
                          }}
                          className="dropdownValueCustom"
                        >
                          Berlaku
                        </p>
                        <p
                          onClick={() => {
                            setStatus(2);
                            setStatusMsg("Dicabut");
                          }}
                          className="dropdownValueCustom"
                        >
                          Dicabut
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
                    className="textFilterInnerBox text-black placeholder-textPlaceholder"
                    type="text"
                    placeholder="Tentang Produk Hukum"
                    value={aboutProduct || ""}
                    onChange={(e) => setAboutProduct(e.target.value)}
                  ></input>
                </div>
              </div>
            </motion.div>
          </section>
          <div className="max-w-contentContainer mx-auto sm:w-[90%] sm:mt-10 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-2">
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
                              <Status desc={val.status} />
                            </div>
                            {/* <div className="sm:hidden lg:block">
                              <p className="cursor-pointer text-colorSecondary inline-block align-bottom sm:text-sm lg:text-md">
                                Lihat Detail
                              </p>
                            </div> */}
                          </div>
                          <div className="flex flex-row mt-4 ">
                            <div className="w-[2%] text-center pt-1">
                              <BiSolidCity className="sm:hidden lg:block text-slate-400 h-6 w-6" />
                            </div>
                            <div className="w-[100%]">
                              <Highlighted
                                title={val.title}
                                text={val.subtitle}
                                highlight={highlight?.toString()}
                              />
                              {/* <p className="sm:text-sm text-justify lg:text-base text-gray-500 sm:ml-0 lg:ml-4">
                                {val.title + " " + val.subtitle}
                              </p> */}
                            </div>
                          </div>
                          <hr className="w-full h-0.5 border-0 mt-4 rounded bg-slate-200" />
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
              <div className="flex flex-row justify-between py-10">
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
                        <p className="linkViewAllDisabled text-gray-400">
                          Sebelumnya
                        </p>
                      </div>
                    </>
                  )}

                  {data?.data?.length! < parseInt(rowPerPage) ? (
                    <>
                      <div className="flex flex-row gap-4 items-center justify-center cursor-pointer">
                        <p className="linkViewAllDisabled text-gray-400">
                          Selanjutnya
                        </p>
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
            </div>
          </div>

          <div className="customFooter">
            <FooterComponent />
          </div>
        </div>
      </main>
    </>
  );
};
export default AllProducts;
