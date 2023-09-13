import React from "react";
import Status from "./Status";
import { BiSolidCity } from "react-icons/bi";

const PeraturanPerundanganItem = () => {
  return (
    <div className="mb-4 hover:bg-slate-200 px-8 py-4 rounded-xl">
      <div className="flex flex-row items-center">
        <p className="text-xl text-slate-400 ">121 - </p>
        <p className="text-xl text-black mx-2">Peraturan Walikota</p>
        <p className="text-xl text-slate-400 mr-10">- 2022</p>
        <Status desc={`Berlaku`} />
        <Status desc={`Detail`} />
      </div>
      <div className="flex flex-row mt-4">
        <BiSolidCity className="text-2xl text-slate-400" />
        <p className="text-md text-gray-700 ml-4">
          Pemberian Remunerasi pada Badan Layanan Umum Daerah Unit Pelaksana
          Teknis Pusat Kesehatan Masyarakat dan Laboratorium Kesehatan Daerah.
        </p>
      </div>
      <hr className="w-full h-0.5 mt-10  border-0 rounded bg-slate-200" />
    </div>
  );
};

export default PeraturanPerundanganItem;
