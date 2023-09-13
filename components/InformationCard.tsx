import { cardBoxes, infoPhoto } from '@/public'
import Image from 'next/image'
import React from 'react'
import { FiFile } from 'react-icons/fi'

interface Props {
    title: string,
    desc: string,
    listItem: string[],
    link: string

}
const InformationCard = ({ title, desc, listItem, link }: Props) => {
    return (
        <a href="">
            <div className='transition ease-in-out delay-100 duration-100 w-full bg-white border border-gray-200 rounded-xl hover:bg-colorPrimary hover:shadow-lg hover:shadow-colorPrimary/20 hover:border-colorPrimary  flex flex-col justify-center gap-6 hover:-translate-y-2 group'>
                <div className='items-center'>
                    <Image className="w-full rounded-xl" src={infoPhoto} alt="infoPhoto" />
                </div>
                <div className='px-7'>
                    <p className='text-sm text-gray-400 group:hover:text-white'>12-12-2023</p>
                    <h2 className='text-xl font-titleFont font-semibold tracking-wide text-colorPrimary group-hover:text-white'>Lorem, ipsum dolor.</h2>
                    <p className='text-sm mt-3 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, minima.</p>
                </div>
                <div className="px-7 pb-4">
                    <button className="text-left text-colorSecondary py-3 group-hover:text-white rounded-full xl:w-48">
                        Lihat Detail
                    </button>
                </div>
            </div>
        </a>
    )
}

export default InformationCard