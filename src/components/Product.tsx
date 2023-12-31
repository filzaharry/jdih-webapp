import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
// import useWindowDimensions from "./../components/hooks/dimensions";
import axios from "axios";
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
  currentPage: string | number;
  totalData: string;
  data: ProductsInterface[];
};

const Product = () => {
  const router = useRouter();
  const [data, setData] = useState<Products | null>(null);
  const [isLoading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const limit = process.env.NEXT_PUBLIC_LIMIT

  useEffect(() => {
    const url = apiUrl + "product_of_law?rowPerPage=" +limit
    
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(response.data);
        // console.log("response", response.data);
        
      } catch (error) {
        console.error("what error ?", error);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p> Is Loading ...</p>;
  } else {
    return (
      <div
        id="product"
        className="max-w-contentContainer mx-auto sm:w-[90%] sm:mt-10 flex flex-col gap-8">
        <div className="flex justify-between items-end">
          <SectionTitle title="Produk Hukum" />
          <p onClick={() => router.push("/produk_hukum")} className="linkViewAll">
            Lihat Semua
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {data?.data?.map((val, i) => (
            <ProductCard
              key={i}
              id={val.id}
              title={val.title}
              subtitle={val.subtitle}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Product;
