import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
// import useWindowDimensions from "./../components/hooks/dimensions";
import axios from "axios";
import { useRouter } from "next/router";

interface ProductInterface {
  id: string;
  title: string;
  number: string;
  subtitle: string;
}

type Products = ProductInterface[];

const Product = () => {
  const router = useRouter();
  const [data, setData] = useState<Products | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:5001/api/jdih/product_of_law"
    
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
  }, []);

  if (isLoading) {
    return <p>Product Data Is Loading ...</p>;
  } else {
    return (
      <div
        id="product"
        className="max-w-contentContainer mx-auto 
    sm:w-[90%] sm:mt-10
    flex flex-col gap-8
    "
      >
        <div className="flex justify-between items-end">
          <SectionTitle title="Produk Hukum" />
          <p onClick={() => router.push("/produk_hukum")} className="cursor-pointer text-colorSecondary inline-block align-bottom sm:text-sm lg:text-lg">
            Lihat Semua
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {data?.map((val, i) => (
            <ProductCard
              key={i}
              id={val.id}
              title={val.title +' No. '+ val.number}
              subtitle={val.subtitle}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Product;
