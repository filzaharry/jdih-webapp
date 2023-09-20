import React from "react";
import Status from "./Status";
import { BiSolidCity } from "react-icons/bi";

const PeraturanPerundanganItem = () => {
  return (
    <div className="mb-4 px-8 pb-4 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <div className="flex sm:flex-col lg:flex-row">
          <div className="flex flex-row mb-2">
            <p className="sm:text-sm lg:text-lg text-slate-400 ">121 - </p>
            <p className="sm:text-sm lg:text-lg text-black mx-2">Peraturan Walikota</p>
            <p className="sm:text-sm lg:text-lg text-slate-400 mr-10">- 2022</p>
          </div>
          <Status desc={`Berlaku`} />
        </div>
        <div className="lg:block sm:hidden">
          <p className="text-red-400 border-b border-red-400">Lihat detail</p>
        </div>
      </div>
      <div className="flex flex-row mt-4 items-center">
        {/* <BiSolidCity className="text-2xl text-slate-400" /> */}
        <p className="sm:text-sm lg:text-md text-gray-700">
          Perubahan Atas Peraturan Wali Kota Nomor 121 Tahun 2022 Tentang
          Pemberian Remunerasi Pada Badan Layanan Umum Daerah Unit Pelaksana
          Teknis Pusat Kesehatan Masyarakat Dan Laboratorium Kesehatan Daerah
        </p>
      </div>
      <hr className="w-full h-[1.4px] mt-8 border-0 rounded bg-slate-200" />
    </div>
  );
};

export default PeraturanPerundanganItem;
