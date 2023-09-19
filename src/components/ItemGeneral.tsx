import React from "react";
import { BiSolidCity } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";

const ItemGeneral = () => {
  return (
    <div className="py-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-start">
          <p className="text-lg text-slate-700 ">1.</p>
          <p className="text-lg text-slate-700 mx-2">
            Naskah Akademik Rancangan Peraturan Daerah tentang Pajak Daerah dan
            Retribusi Daerah Kota Tangerang
          </p>
        </div>
        <div className="">
          <div className="p-2 mr-4 rounded-md w-fit flex flex-row border border-[#3E6AFF] bg-[#edf5fe] text-[#3E6AFF]">
            <HiDocumentText className="text-lg mt-0.5 mr-2" />
            <p className="text-sm">Download</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-2 ml-4">
        <BiSolidCity className="text-2xl text-slate-400" />
        <p className="text-md text-gray-500 ml-2">Tahun 2022</p>
      </div>
      <hr className="w-full h-[1px] border-0 rounded bg-slate-200 mt-2" />
    </div>
  );
};

export default ItemGeneral;
