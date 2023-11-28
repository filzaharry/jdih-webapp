import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

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

const slides = [
  "https://www.perumdatirtabenteng.co.id/assets/uploads/post_20230222_1677041359.jpg",
  "https://plus.unsplash.com/premium_photo-1698496965640-fc258e348b1e?q=80&w=3719&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const NewsBanner = () => {
  const [curr, setCurr] = useState<number>(0);
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

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const autoSlide = false;
  const autoSlideInterval = 3000;

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });
  return (
    <div
      className="
      max-w-contentContainer mx-auto 
      sm:w-[90%] sm:mt-10
      flex flex-col gap-8
      lg:py-10
    "
    >
      <div className="flex justify-between items-end">
        <SectionTitle title="Banner Promo" />
      </div>
      <div className="w-full h-[560px] overflow-hidden relative rounded-3xl bg-slate-800">
        <div
          className="flex transition-transform ease-out duration-500 "
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <div className="flex lgl:pl-0 ">
            {/* {slides?.map((val, i) => ( */}
            {data?.data?.map((val, i) => (
              <>
                <div className="">
                  <img src={val.picture} className="h-full" alt={val.picture} />
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <BiChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <BiChevronRight size={40} />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
