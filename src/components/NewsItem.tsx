import Image from 'next/image'
import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'


interface Props {
  id: string,
  title: string,
  subtitle: string
  path:string

}


const NewsItem = ({id, title, subtitle, path}: Props) => {
  const router = useRouter()
  return (
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    className="w-full flex sm:flex-col lg:flex-row sm:px-4 sm:mx-auto lg:ml-auto lg:px-10"
  >
    <Image
      className="object-cover w-[300px] h-[200px] rounded-2xl sm:mb-4 lg:mb-10"
      src="https://www.perumdatirtabenteng.co.id/assets/uploads/post_20221223_1671769686.jpg"
      alt="profileImg"
      width={2670}
      height={80}
    />
    <div className="sm:mx-2 lg:mx-10">
      <p className="text-2xl mb-2">
        {title}
      </p>

      <div className="flex flex-row">
        <div className="flex flex-row sm:mr-2 lg:mr-10">
          <AiFillInfoCircle className="sm:text-sm lg:text-md mr-2 mt-0.5 text-[#FF4E4E]" />
          <p className="text-colorPrimary sm:text-sm lg:text-md">Selasa, 18 Juli 2023</p>
        </div>
        <div className="flex flex-row">
          <AiFillInfoCircle className="sm:text-sm lg:text-md mr-2 mt-0.5 text-[#FF4E4E]" />
          <p className="text-colorPrimary sm:text-sm lg:text-md">Umum</p>
        </div>
      </div>
      <div className="py-4 sm:mt-0 sm:mb-4 lg:mt-4">
        <p className='sm:text-sm lg:text-md'>
          Peraturan Walikota Nomor 53 Tahun 2023 Perubahan Atas
          Peraturan Wali Kota Nomor 11 Tahun 2019 Tentang Pedoman
          Pelaksanaan Kegiatan Pembangunan Sarana dan Prasarana
          Kelurahan dan Pemberdayaan Masyarakat di Kelurahan.
        </p>
        <p onClick={()=>router.push('/informasi/berita_hukum/'+path)} className="text-red-400 mt-2 sm:text-sm lg:text-md">Lihat Selengkapnya ...</p>
      </div>
    </div>
  </motion.div>
  )
}

export default NewsItem