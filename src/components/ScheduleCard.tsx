import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { motion } from "framer-motion";

interface Props {
  date: string;
  title: string;
  theme: string;
  duration: string;
  member: string;
  desc: string;
  location: string;
  status: number;
}

const ScheduleCard = ({
  date,
  title,
  theme,
  duration,
  member,
  desc,
  location,
  status,
}: Props) => {
  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      id="home"
      className="
    sml:pt-20
    lg:py-10 
    lg:mt-40
    xl:mt-0 xl:pt-0
    sm:w-[90%] 
    mdl:w-[90%]
    lg:w-[70%]
  bg-white shadow-bannerFormShadow 
    rounded-2xl mt-10 mx-auto py-10 sm:mb-20 lg:mb-4"
    >
      <div className="w-full grid grid-cols-1 sm:px-8 lg:px-20 lg:pt-10">
        <div className="flex flex-row sm:mr-2 lg:mr-10">
          <AiFillInfoCircle className="dateIcon" />
          <p className="text-colorPrimary sm:text-sm lg:text-lg">{date}</p>
        </div>
        <p className="sm:text-xl lg:text-2xl sm:py-4 lg:py-2 lg:mb-8">
          {title}
        </p>

        <div className="">
          <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-4">
            <div className="flex flex-row sm:mb-4">
              <AiFillInfoCircle className="text-xl mr-4 mt-0.5" />
              <p className="">Tema</p>
            </div>
            <div className="col-span-3">
              <p>{theme}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-4">
            <div className="flex flex-row sm:mb-4">
              <AiFillInfoCircle className="text-xl mr-4 mt-0.5" />
              <p className="">Tanggal</p>
            </div>
            <div className="col-span-3">
              <p>{date}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-4">
            <div className="flex flex-row sm:mb-4">
              <AiFillInfoCircle className="text-xl mr-4 mt-0.5" />
              <p className="">Waktu</p>
            </div>
            <div className="col-span-3">
              <p>{duration}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-4">
            <div className="flex flex-row sm:mb-4">
              <AiFillInfoCircle className="text-xl mr-4 mt-0.5" />
              <p className="">Tempat</p>
            </div>
            <div className="col-span-3">
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-4">
            <div className="flex flex-row sm:mb-4">
              <AiFillInfoCircle className="text-xl mr-4 mt-0.5" />
              <p className="">Peserta</p>
            </div>
            <div className="col-span-3">
              <p>{member}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="sm:flex sm:flex-col lg:grid lg:grid-cols-4">
            <div className="flex flex-row sm:mb-4">
              <AiFillInfoCircle className="text-xl mr-4 mt-0.5" />
              <p className="">Isi</p>
            </div>
            <div className="col-span-3">
              <p>
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ScheduleCard;
