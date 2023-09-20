import React from "react";

const ArticleOfLaw = () => {
  return (
    <div className="mb-4 px-8 pb-4 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <p className="sm:text-sm lg:text-lg text-black">
          121 - Pencemaran Nama Baik Melalui Media Sosial :Perbandingan Hukum
            Positif dan Islam
          </p>
        </div>
        <div className="sm:hidden lg:block">
          <p className="text-red-400 border-b border-red-400">Lihat detail</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        {/* <BiSolidCity className="text-2xl text-slate-400" /> */}
        <p className="sm:text-sm lg:text-md text-gray-400 italic mt-2">
          Pencemaran Nama Baik - 2022 - Saepul Rochman (Program Studi
          Perbandingan Mazhab)
        </p>
      </div>
      <hr className="w-full h-[1.4px] mt-8 border-0 rounded bg-slate-200" />
    </div>
  );
};

export default ArticleOfLaw;
