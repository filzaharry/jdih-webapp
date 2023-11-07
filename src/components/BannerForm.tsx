import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RiBox1Fill } from "react-icons/ri";

interface CategoriesInterface {
  id: string;
  name: string;
  status: number;
}

type Categories = {
  statusCode: number;
  message: string;
  data: CategoriesInterface[];
};

const BannerForm = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [category, setCategory] = useState(0);
  const [categoryMsg, setCategoryMsg] = useState("");
  const [dataCategories, setDataCategories] = useState<Categories | null>(null);
  const [numberProduct, setNumberProduct] = useState("");
  const [yearProduct, setYearProduct] = useState("");
  const [aboutProduct, setAboutProduct] = useState("");
  const router = useRouter();

  let urlMasterCategory: string;

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

  const handleSubmit = () => {
    router.push({
      pathname: "/produk_hukum",
      query: {
        category,
        categoryMsg,
        numberProduct,
        yearProduct,
        aboutProduct,
      },
    });
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer sm:w-[90%] mx-auto xl:mt-20"
    >
      <div className="flex flex-col bg-white xl:flex-row gap-1 px-6 lg:px-12 lg:py-0 sm:py-4 rounded-2xl shadow-bannerFormShadow">
        <div className="formBannerHomePage">
          <div className="flex">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Produk Hukum</p>
          </div>
          <div className="dropdown relative inline-block text-left w-full">
            {categoryMsg == "" ? (
              <p className=" homepageFilter">Pilih Kategori</p>
            ) : (
              <p className=" homepageFilter text-black">{categoryMsg}</p>
            )}
            <div
              className="dropdownCustom"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                {/* <p
                  onClick={() => {
                    setCategory(0);
                    setCategoryMsg("Lihat Semua");
                  }}
                  className="dropdownValueCustom"
                >
                  Lihat Semua
                </p> */}
                {dataCategories?.data?.map((val, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setCategory(parseInt(val.id));
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
        <div className="formBannerHomePage">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Nomor</p>
          </div>
          <input
            className="homepageFilter text-black placeholder-textPlaceholder"
            type="number"
            placeholder="Nomor Produk"
            onChange={(e) => setNumberProduct(e.target.value)}
          ></input>
        </div>
        <div className="formBannerHomePage">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Tahun</p>
          </div>
          <input
            className="homepageFilter text-black placeholder-textPlaceholder"
            type="number"
            placeholder="Tahun Produk"
            onChange={(e) => setYearProduct(e.target.value)}
          ></input>
        </div>
        <div className="mr-4 w-full border-b border-[#EFEFEF] lg:border-none lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Tentang</p>
          </div>
          <input
            className="homepageFilter text-black placeholder-textPlaceholder"
            type="text"
            placeholder="Tentang Produk"
            onChange={(e) => setAboutProduct(e.target.value)}
          ></input>
        </div>
        <div className="mx-auto items-center mt-10 sm:w-full justify-between ">
          <button className="searchBtnBannerHomePage" onClick={handleSubmit}>
            Cari
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerForm;
