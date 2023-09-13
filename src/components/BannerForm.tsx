import React from "react";
import { RiBox1Fill } from "react-icons/ri";

const BannerForm = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer sm:w-[90%] bg-white shadow-bannerFormShadow rounded-2xl xl:mt-32 mx-auto"
    >
      <div className="flex flex-col xl:flex-row gap-1 px-6 lg:px-12 lg:py-0 sm:py-4">
        <div className="mr-4 w-full border-b xl:border-r border-[#EFEFEF] lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Produk Hukum</p>
          </div>
          <input
            className="py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
            type="text"
            placeholder="Cari Produk Hukum"
          ></input>
        </div>
        <div className="mr-4 w-full border-b xl:border-r border-[#EFEFEF] lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Produk Hukum</p>
          </div>
          <input
            className="py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
            type="text"
            placeholder="Masukkan Nomor Produk"
          ></input>
        </div>
        <div className="mr-4 w-full border-b xl:border-r border-[#EFEFEF] lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Produk Hukum</p>
          </div>
          <input
            className="py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
            type="text"
            placeholder="Masukkan Tahun Produk"
          ></input>
        </div>
        <div className="mr-4 w-full border-b border-[#EFEFEF] lg:border-none lg:py-10 sm:py-4">
          <div className="flex flex-row">
            <RiBox1Fill className="text-xl mr-2 mb-2" />
            <p className="text-base">Produk Hukum</p>
          </div>
          <input
            className="py-2 appearance-none rounded-xl flex-auto w-full bg-transparent xl:w-79 text-textPlaceholder leading-tight focus:outline-none"
            type="text"
            placeholder="Masukkan Tentang Produk"
          ></input>
        </div>
        <div className="mx-auto items-center mt-10 sm:w-full ">
          <button className="rounded-xl bg-btnPrimary text-white sm:py-4 px-10 h-[50%] sm:w-full">
            Cari
          </button>
        </div>
      </div>
    </section>
    // <section id="home" className='max-w-formBannerContainer bg-white shadow-bannerFormShadow rounded-2xl mt-32 mx-auto py-10'>
    //     <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:flex gap-10 justify-between md:pl-10 sm:pl-10 xs:pl-10">
    //         <div className="flex-auto hidden xl:block"></div>
    //         <div className="flex-auto w-64">
    //             <div className="flex">
    //                 <RiBox1Fill className='text-xl mr-2 mb-2'/>
    //                 <p className='text-base'>Produk Hukum</p>
    //             </div>
    //             <input className="appearance-none flex-auto w-64 bg-transparent border-none xl:w-79 text-textPlaceholder leading-tight focus:outline-none" type="text" placeholder="Cari Produk Hukum"></input>
    //         </div>

    //         <div className="flex-auto w-64">
    //             <div className="flex">
    //                 <RiBox1Fill className='text-xl mr-2 mb-2'/>
    //                 <p className='text-base'>Nomor</p>
    //             </div>
    //             <input className="appearance-none flex-auto w-64 bg-transparent border-none xl:w-79 text-textPlaceholder leading-tight focus:outline-none" type="text" placeholder="Masukkan Nomor Produk"></input>
    //         </div>
    //         <div className="flex-auto w-64">
    //             <div className="flex">
    //                 <RiBox1Fill className='text-xl mr-2 mb-2'/>
    //                 <p className='text-base'>Tahun</p>
    //             </div>
    //             <input className="appearance-none flex-auto w-64 bg-transparent border-none xl:w-79 text-textPlaceholder leading-tight focus:outline-none" type="text" placeholder="Masukkan Tahun Produk"></input>
    //         </div>
    //         <div className="flex-auto w-64">
    //             <div className="flex">
    //                 <RiBox1Fill className='text-xl mr-2 mb-2'/>
    //                 <p className='text-base'>Tentang</p>
    //             </div>
    //             <input className="appearance-none flex-auto w-64 bg-transparent border-none xl:w-79 text-textPlaceholder leading-tight focus:outline-none" type="text" placeholder="Masukkan Tentang Produk"></input>
    //         </div>
    //         <div className=" flex-auto">
    //            <button className='rounded-md bg-btnPrimary text-white px-10 py-4'>Cari</button>
    //         </div>
    //         <div className="flex-auto hidden xl:block"></div>
    //     </div>
    // </section>
  );
};

export default BannerForm;
