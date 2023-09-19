import Image from 'next/image'
import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'

const NewsItem = () => {
  return (
    <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    className="w-full flex flex-row px-10"
  >
    <Image
      className="object-cover w-[300px] h-[200px] rounded-2xl mb-10"
      src="https://www.perumdatirtabenteng.co.id/assets/uploads/post_20221223_1671769686.jpg"
      alt="profileImg"
      width={2670}
      height={80}
    />
    <div className="mx-10">
      <p className="text-2xl mb-2">
        Verifikasi dan Validasi Lapangan PSU
      </p>

      <div className="flex flex-row">
        <div className="flex flex-row mr-10">
          <AiFillInfoCircle className="text-xl mr-2 mt-0.5 text-[#FF4E4E]" />
          <p className="text-colorPrimary">Selasa, 18 Juli 2023</p>
        </div>
        <div className="flex flex-row">
          <AiFillInfoCircle className="text-xl mr-2 mt-0.5 text-[#FF4E4E]" />
          <p className="text-colorPrimary">Umum</p>
        </div>
      </div>
      <div className="py-4 mt-4">
        <p>
          Peraturan Walikota Nomor 53 Tahun 2023 Perubahan Atas
          Peraturan Wali Kota Nomor 11 Tahun 2019 Tentang Pedoman
          Pelaksanaan Kegiatan Pembangunan Sarana dan Prasarana
          Kelurahan dan Pemberdayaan Masyarakat di Kelurahan.
        </p>
        <p className="text-red-400 mt-2">Lihat Selengkapnya ...</p>
      </div>
    </div>
  </motion.div>
  )
}

export default NewsItem