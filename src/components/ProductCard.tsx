import { cardBoxes } from '@/public'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { FiFile } from 'react-icons/fi'

interface Props {
    id: string,
    title: string,
    subtitle: string

}
const ProductCard = ({id, title, subtitle}: Props) => {
    const router = useRouter()
    return (
        <div className='
        w-full 
        h-full 
        bg-white border 
        border-gray-200 
        rounded-xl 
        p-7 
        flex 
        flex-col 
        justify-center 
        gap-6 
        hover:shadow-lg 
        hover:bg-colorPrimary  
        hover:shadow-colorPrimary/20 
        hover:-translate-y-2 
        transition 
        ease-in-out 
        delay-100 
        duration-100 
        group
        '>
            <div className='flex justify-between items-center'>
                <div className="bg-colorPrimary p-4 rounded-full border border-white">
                    <FiFile className='text-4xl sm:text-xl text-white' />
                </div>
                <Image className="w-24 " src={cardBoxes} alt="cardBoxes" />
            </div>
            <div>
                <h2 className='text-xl font-titleFont font-semibold tracking-wide text-colorPrimary group-hover:text-white'>{
                title.length > 90 ? title.substring(0,90)+'...' : title
                }</h2>
                <p className='text-sm mt-3 group-hover:text-white'>{
                subtitle.length > 140 ? subtitle.substring(0,140)+'...' : subtitle
                }</p>
            </div>
            <button onClick={()=>router.push('/produk_hukum/'+id)} className="group-hover:bg-colorSecondary border border-colorSecondary bg-white text-colorSecondary px-10 py-3 group-hover:text-white rounded-full xl:w-48">
                Lihat Detail
            </button>
        </div>
    )
}

export default ProductCard