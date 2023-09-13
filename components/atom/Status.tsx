import React from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
interface Props {
  desc: string;
}

const Status = ({ desc }: Props) => {

  if (desc == '2') {
    return (
      <div className="p-2 mr-4 rounded-md w-fit flex flex-row border border-[#B7FEAC] bg-[#F2FFEF] text-[#65D072]">
        <BiSolidCheckCircle className="text-lg mt-0.5 mr-2" />
        <p className="text-md">Berlaku</p>
      </div>
    );
  } else {
    return (
      <div className="p-2 mr-4 rounded-md w-fit flex flex-row border border-[#feacac] bg-[#ffefef] text-[#feacac]">
        <FaTimesCircle className="text-lg mt-0.5 mr-2" />
        <p className="text-md">Dicabut</p>
      </div>
    )
    
  } 
  
};

export default Status;
