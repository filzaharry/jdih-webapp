// import { Typography } from "@material-tailwind/react";

import { HiPhone } from 'react-icons/hi';
import { MdOutlineMail } from 'react-icons/md';
import { CgPin } from 'react-icons/cg'
import { LuLineChart } from 'react-icons/lu';

const LINKS = [
    {
        title: "Alamat",
        icons: [],
        items: ["Jl. Satria Sudirman, RT.002 / RW.001 Sukarasa, Kec. Tangerang, Kota Tangerang, Banten 15111", "(021) 55764955 ext. 3100", "jdih@tangerangkota.go.id"],
    },
    {
        title: "Link Terkait",
        items: ["Website SiGanteng", "JDIH Pusat", "JDIH Kota Tangerang", "JDIH Provinsi Banten", "Kemendagri"],
    },
    {
        title: "Kunjungan",
        items: ["Hari ini", "Minggu ini", "Bulan ini", "Semua"],
    },
];

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="max-w-contentContainer text-white mx-auto relative w-full sm:w-[90%]">
            <div className="mx-auto w-full sm:pt-20 lg:pt-48 lg:mt-48 ">
                <div className="
                flex 
                lg:flex-row 
                sm:flex-col 
                justify-between 
                gap-4 
                md:grid-cols-
                ">
                    <div className="lg:w-[40%] sm:w-[100%] mr-8">
                        <p className="text-2xl font-semibold">JDIH PDAM</p>
                        <p className="text-md mt-4 mr-4 font-thin">
                            Merupakan wadah pendayagunaan bersama atas dokumen hukum secara
                            tertib dan terpadu.
                        </p>
                    </div>
                    <div className="w-full flex lg:flex-row sm:flex-col justify-between">
                        <div className="lg:w-[70%] sm:w-[100%]">
                            <p className="text-xl mb-4 font-semibold">Alamat</p>
                            <div className="flex flex-row mb-2">
                                <CgPin className='text-[#66B3F9] text-2xl' />
                                <p className="w-[60%] text-md ml-4 mb-4 font-extralight">Jl. Satria Sudirman, RT.002 / RW.001 Sukarasa, Kec. Tangerang, Kota Tangerang, Banten 15111</p>
                            </div>
                            <div className="flex flex-row mb-2">
                                <HiPhone className='text-[#66B3F9] text-2xl' />
                                <p className="text-md ml-4 mb-4 font-extralight">(021) 55764955 ext. 3100</p>
                            </div>
                            <div className="flex flex-row mb-2">
                                <MdOutlineMail className='text-[#66B3F9] text-2xl' />
                                <p className="text-md ml-4 mb-4 font-extralight">jdih@tangerangkota.go.id</p>
                            </div>
                        </div>
                        <div className="lg:w-[30%] mr-20 sm:w-[100%]">
                            <p className="text-xl mb-4 font-semibold">Link Terkait</p>
                            <p className="text-md mb-4 font-extralight">Website SiGanteng</p>
                            <p className="text-md mb-4 font-extralight">JDIH Pusat</p>
                            <p className="text-md mb-4 font-extralight">JDIH Kota Tangerang</p>
                        </div>
                        <div className="lg:w-[50%] sm:w-[100%]">
                            <p className="text-xl mb-4 font-semibold">Kunjungan</p>
                            <div className="flex flex-row mb-2 justify-between">
                                <div className="flex flex-row mr-20">
                                    <LuLineChart className='text-[#66B3F9] text-2xl mr-1' />
                                    <p className="text-md ml-4 font-extralight">Hari ini</p>
                                </div>
                                <p className="text-md ml-4 font-extralight">2.713</p>
                            </div>
                            <div className="flex flex-row mb-2 justify-between">
                                <div className="flex flex-row mr-20">
                                    <LuLineChart className='text-[#66B3F9] text-2xl mr-1' />
                                    <p className="text-md ml-4 font-extralight">Minggu ini</p>
                                </div>
                                <p className="text-md ml-4 font-extralight">2.713</p>
                            </div>
                            <div className="flex flex-row mb-2 justify-between">
                                <div className="flex flex-row mr-20">
                                    <LuLineChart className='text-[#66B3F9] text-2xl mr-1' />
                                    <p className="text-md ml-4 font-extralight">Bulan ini</p>
                                </div>
                                <p className="text-md ml-4 font-extralight">2.713</p>
                            </div>
                            <div className="flex flex-row mb-2 justify-between">
                                <div className="flex flex-row mr-20">
                                    <LuLineChart className='text-[#66B3F9] text-2xl mr-1' />
                                    <p className="text-md ml-4 font-extralight">Semua</p>
                                </div>
                                <p className="text-md ml-4 font-extralight">2.713</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-12 flex w-full sm:w-[100%] sm:pb-14 flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <p className='mx-auto'>Copyright &copy; {currentYear}{" "} JDIH PDAM Kota Tangerang</p>
                </div>
            </div>
        </footer>
    );
}
