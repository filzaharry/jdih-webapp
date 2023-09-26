import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
interface Props {
  desc: string;
}

const Status = ({ desc }: Props) => {

  if (desc == '1') {
    return (
      <div className="lg:text-md sm:text-sm px-2 py-1 mr-4 items-center rounded-md w-fit flex flex-row border border-[#B7FEAC] bg-[#F2FFEF] text-[#65D072]">
        <BiSolidCheckCircle className="text-sm mr-2" />
        <p className="text-md">Berlaku</p>
      </div>
    );
  } else {
    return (
      <div className="lg:text-md sm:text-sm px-2 py-1 mr-4 items-center rounded-md w-fit flex flex-row border border-[#feacac] bg-[#ffefef] text-[#feacac]">
        <FaTimesCircle className="text-sm mr-2" />
        <p className="text-md">Dicabut</p>
      </div>
    )
    
  } 
  
};

export default Status;
