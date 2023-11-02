// import { Typography } from "@material-tailwind/react";

import { HiPhone } from 'react-icons/hi';
import { MdOutlineMail } from 'react-icons/md';
import { CgPin } from 'react-icons/cg'
import { LuLineChart } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import axios from 'axios';

const currentYear = new Date().getFullYear();

interface VisitorInterface {
    daily: number,
    weekly: number,
    monthly: number,
    all: number
}

type Visitor = {
    statusCode: number;
    message: string;
    data: VisitorInterface;
    daily: number,
    weekly: number,
    monthly: number,
    all: number
};

export function Footer() {
    const [data, setData] = useState<Visitor | null>(null);
    const [daily, setDaily] = useState<string | null | number >(0);
    const [weekly, setWeekly] = useState<string | null | number >(0);
    const [monthly, setMonthly] = useState<string | null | number >(0);
    const [all, setAll] = useState<string | null | number >(0);
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let url: string;
    let urlPost: string;

    useEffect(() => {
        // insertVisitor();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
        setIsLoading(false);
      }, [isLoading]);
    
      const insertVisitor = async () => {
        try {
            urlPost = `${apiUrl}visitor`;
            const browser = navigator.userAgent
            const ip  = await axios.get("https://api.ipify.org/?format=json").then(()=> {
            });
            const res = await axios.post(urlPost, {
                ip,
                browser
            });
            console.log(res);
        } catch (error) {
             console.error("what error ?", error);
        }
      }
      const fetchData = async () => {
        try {
        url = `${apiUrl}allVisitor`;
        const { data: response } = await axios.get(url);
        setData(response.data);
        setDaily(data!.daily!)
        setWeekly(data!.weekly!)
        setMonthly(data!.monthly!)
        setAll(data!.all)
        console.log('');
        
        
        
      } catch (error) {
        console.error("what error ?", error);
      }
    };

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
                                <p className="w-[60%] text-md ml-4 mb-4 font-extralight">Jalan Komp. Pu Prosida o.10, RT.001/RW.002, Mekarsari, Kec. Neglasari, Kota Tangerang, Banten 15129</p>
                            </div>
                            <div className="flex flex-row mb-2">
                                <HiPhone className='text-[#66B3F9] text-2xl' />
                                <p className="text-md ml-4 mb-4 font-extralight">(021)-5587234</p>
                            </div>
                            {/* <div className="flex flex-row mb-2">
                                <MdOutlineMail className='text-[#66B3F9] text-2xl' />
                                <p className="text-md ml-4 mb-4 font-extralight">jdih.harmonidigital.id</p>
                            </div> */}
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
                                {isLoading == false && (
                                <p className="text-md ml-4 font-extralight">{daily}</p>)}
                            </div>
                            <div className="flex flex-row mb-2 justify-between">
                                <div className="flex flex-row mr-20">
                                    <LuLineChart className='text-[#66B3F9] text-2xl mr-1' />
                                    <p className="text-md ml-4 font-extralight">Minggu ini</p>
                                </div>
                                {isLoading == false && (
                                <p className="text-md ml-4 font-extralight">{weekly}</p> )}
                            </div>
                            <div className="flex flex-row mb-2 justify-between">
                                <div className="flex flex-row mr-20">
                                    <LuLineChart className='text-[#66B3F9] text-2xl mr-1' />
                                    <p className="text-md ml-4 font-extralight">Bulan ini</p>
                                </div>
                                {isLoading == false && (
                                <p className="text-md ml-4 font-extralight">{monthly}</p> )}
                            </div>
                            <div className="flex flex-row mb-2 justify-between">
                                <div className="flex flex-row mr-20">
                                    <LuLineChart className='text-[#66B3F9] text-2xl mr-1' />
                                    <p className="text-md ml-4 font-extralight">Semua</p>
                                </div>
                                {isLoading == false && (
                                <p className="text-md ml-4 font-extralight">{all}</p> )}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-12 flex w-full sm:w-[100%] sm:pb-14 flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <p className='mx-auto'>Perumda Tirta Benteng Kota Tangerang</p>
                    {/* <p className='mx-auto'>Copyright &copy; {currentYear}{" "} JDIH PDAM Kota Tangerang</p> */}
                </div>
            </div>
        </footer>
    );
}
