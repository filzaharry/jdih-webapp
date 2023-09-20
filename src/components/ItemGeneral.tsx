import React from "react";
import { BiSolidCity } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";

const ItemGeneral = () => {
  return (
    <div className="sm:py-0 lg:py-4">
      <div className="grid sm:grid-col-1 lg:grid-col-2 lg:items-center lg:justify-between">
        <div className="flex flex-row items-start text-justify">
          <p className="sm:text-sml lg:text-lg text-slate-700 ">1.</p>
          <p className="sm:text-sml lg:text-lg text-slate-700 mx-2">
            Naskah Akademik Rancangan Peraturan Daerah tentang Pajak Daerah dan
            Retribusi Daerah Kota Tangerang
          </p>
        </div>
        <div className="flex flex-row py-2 items-center">
          <div className="flex flex-row ml-4 items-center">
            <BiSolidCity className="sm:text-sm lg:text-2xl text-slate-400" />
            <p className="sm:text-sm lg:text-md text-gray-500 ml-2">Tahun 2022</p>
          </div>
          <div className="p-2 ml-4 rounded-md w-fit flex flex-row border border-[#3E6AFF] bg-[#edf5fe] text-[#3E6AFF]">
            <HiDocumentText className="sm:text-sm lg:text-md mt-0.5 mr-1" />
            <p className="text-sm">Download</p>
          </div>
        </div>
      </div>

      <hr className="w-full h-[1px] border-0 rounded bg-slate-200 mt-2 mb-6" />
    </div>
  );
};

export default ItemGeneral;
