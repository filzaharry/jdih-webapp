import React, { useEffect } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidCheckCircle } from "react-icons/bi";
import Status from "./atom/Status";
import Link from "next/link";

interface Props {
    title: string,
    desc: string,
    status: number
}

export const DetailProductList = ({ title, desc, status }: Props) => {

  useEffect(() => {
    
    console.log();
    
  }, [])
  
  return (
    <div className="my-4">
      <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-2">
        <div className="flex flex-row sm:mb-4">
          <AiFillInfoCircle className="text-xl mr-4 mt-0.5" />
          <p className="text-colorPrimary">{title}</p>
        </div>
        <div className="">
            {status == 1 && ( <p>{desc}</p>)}
            {status == 2 && ( 
            <Status desc={desc} />
            )}
            {status == 3 && ( 
              <Link href={desc} target="_blank" download>
                <div className="p-2 px-8 py-3 rounded-full w-fit  bg-[#FF4E4E] text-white">
                    <p>Download</p>
                </div>
              </Link>
            )}
        </div>
      </div>
      {status != 3 && ( <hr className="w-full h-0.5 mt-8 bg-[#D9D9D9]" /> )}
    </div>
  );
};
