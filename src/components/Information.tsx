import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import InformationCard from "./InformationCard";
import { useRouter } from "next/router";
import axios from "axios";

interface NewsInterface {
  id: string;
  title: string;
  subtitle: string;
  created_at: string;
  path: string;
  picture:string;
}

type News = {
  statusCode: number;
  message: string;
  data: NewsInterface[];
};

const Information = () => {
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
  }, []);

  return (
    <div
      id="info"
      className="
            max-w-contentContainer mx-auto 
            sm:w-[90%] sm:mt-10
            flex flex-col gap-8
            lg:py-10
            "
    >
      <div className="flex justify-between items-end">
        <SectionTitle title="Berita Hukum" />
        <p
          onClick={() => router.push("/informasi/berita_hukum")}
          className="linkViewAll"
        >
          Lihat Semua
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* <p>{JSON.stringify(data)}</p> */}
        {data?.data?.map((val, i) => (
          <InformationCard
            title={val.title}
            created_at={val.created_at}
            picture={val.picture}
            key={i}
            id={val.id}
            subtitle={val.subtitle}
            path={val.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Information;
