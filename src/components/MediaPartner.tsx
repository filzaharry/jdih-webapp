import React, { useEffect, useState } from "react";
// import ArchiveCard from "./ArchiveCard";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import MediaCard from "./MediaCard";
import axios from "axios";

interface MediaInterface {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  logo: string;
}

type Medias = MediaInterface[];

const MediaPartner = () => {
  const [data, setData] = useState<Medias | null>(null);
  const [isLoading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const limit = process.env.NEXT_PUBLIC_LIMIT;

  useEffect(() => {
    console.log();

    const url = apiUrl + "mediapartner/" + limit;

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
      id="media"
      className="max-w-contentContainer mx-auto 
            sm:w-[90%] sm:mt-10
            flex flex-col gap-8
            py-10 
        "
    >
      <div className="flex justify-between items-end">
        <SectionTitle title="Media Terkait" />
        <p className="text-colorSecondary inline-block align-bottom sm:text-sm lg:text-lg">
          
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {data?.map((val, i) => (
        <MediaCard
        key={i}
          title={val.title}
          logo={apiUrl + val.logo}
          link={val.link}
          desc={val.subtitle}
        />
          ))}
      </div>
    </div>
  );
};

export default MediaPartner;
