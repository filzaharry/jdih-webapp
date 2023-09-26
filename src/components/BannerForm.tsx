import React from "react";
import { RiBox1Fill } from "react-icons/ri";

const BannerForm = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer sm:w-[90%] bg-white shadow-bannerFormShadow rounded-2xl xl:mt-32 mx-auto"
    >
      <div className="flex flex-col xl:flex-row gap-1 px-6 lg:px-12 lg:py-0 sm:py-4">
        {/* <div className="mr-4 w-full border-b xl:border-r border-[#EFEFEF] lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Produk Hukum</p>
          </div>
          <input
            className="py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
            type="text"
            placeholder="Cari Produk Hukum"
          ></input>
        </div> */}
        <div className="mr-4 w-full border-b xl:border-r border-[#EFEFEF] lg:py-10 sm:py-4">
          <div className="flex">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Produk Hukum</p>
          </div>
          <div className="dropdown relative inline-block text-left w-full">
            <p className=" py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none">
              Pilih Kategori
            </p>
            <div
              className="dropdown-content hidden absolute right-0 z-10 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                  Peraturan Daerah
                </p>
                <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                  Peraturan Walikota
                </p>
                <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                  Keputusan Walikota
                </p>
                <p className="text-gray-700 cursor-pointer hover:bg-slate-100 block px-4 py-2 text-sm">
                  Keputusan Sekertaris Daerah
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-4 w-full border-b xl:border-r border-[#EFEFEF] lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Nomor</p>
          </div>
          <input
            className="py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
            type="text"
            placeholder="Nomor Produk"
          ></input>
        </div>
        <div className="mr-4 w-full border-b xl:border-r border-[#EFEFEF] lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Tahun</p>
          </div>
          <input
            className="py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
            type="text"
            placeholder="Tahun Produk"
          ></input>
        </div>
        <div className="mr-4 w-full border-b border-[#EFEFEF] lg:border-none lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Tentang</p>
          </div>
          <input
            className="py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
            type="text"
            placeholder="Tentang Produk"
          ></input>
        </div>
        <div className="mx-auto items-center mt-10 sm:w-full justify-between ">
          <button className="rounded-xl bg-btnPrimary text-white sm:py-4 px-10 h-[50%] float-right sm:w-full lg:w-[60%]">
            Cari
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerForm;
