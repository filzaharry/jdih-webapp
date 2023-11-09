import Image from 'next/image'
import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import moment from 'moment'
import { MdDateRange } from 'react-icons/md'
import { BiSolidLabel } from 'react-icons/bi'


interface Props {
  id: string,
  title: string,
  subtitle: string,
  picture: string,
  path:string,
  created_at: string

}


const NewsItem = ({id, title, subtitle, picture, path, created_at}: Props) => {
  const router = useRouter()
  return (
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    className="w-full flex sm:flex-col lg:flex-row sm:px-4 sm:mx-auto lg:ml-auto lg:px-10"
  >
    <img className="object-cover w-[300px] h-[200px] rounded-2xl sm:mb-4 lg:mb-10" 
    src={picture}
    alt="profileImg"
    width={2670}
    height={80}
     />
    {/* <Image
      className="object-cover w-[300px] h-[200px] rounded-2xl sm:mb-4 lg:mb-10"
      src={picture}
      alt="profileImg"
      width={2670}
      height={80}
    /> */}
    <div className="sm:mx-2 lg:mx-10">
      <p className="text-2xl mb-2">
        {
        title.length > 90 ? title.substring(0,90)+'...' : title
        }
      </p>

      <div className="flex flex-row">
        <div className="flex flex-row sm:mr-2 lg:mr-10">
          <MdDateRange className="sm:text-sm lg:text-lg mr-2 text-[#FF4E4E]" />
          <p className="text-colorPrimary sm:text-sm lg:text-md">{moment(created_at).format("LLL")}</p>
        </div>
        {/* <div className="flex flex-row">
          <BiSolidLabel className="sm:text-sm lg:text-lg mr-2 text-[#FF4E4E]" />
          <p className="text-colorPrimary sm:text-sm lg:text-md">category not found</p>
        </div> */}
      </div>
      <div className="py-4 sm:mt-0 sm:mb-4 lg:mt-4">
        <p className='sm:text-sm lg:text-md'>
          { subtitle.length > 140 ? subtitle.substring(0,140)+'...' : subtitle}
        </p>
        <p onClick={()=>router.push('/informasi/berita_hukum/'+path)} className="text-red-400 mt-2 sm:text-sm lg:text-md cursor-pointer">Lihat Selengkapnya ...</p>
      </div>
    </div>
  </motion.div>
  )
}

export default NewsItem