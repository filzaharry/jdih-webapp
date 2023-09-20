import { cardBoxes, infoPhoto } from '@/public'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import { FiFile } from 'react-icons/fi'

interface Props {
    id: string;
    title: string;
    subtitle: string;
    picture: string;
    created_at: string;
}

const InformationCard = ({ id, title, subtitle, picture, created_at }: Props) => {
    const router = useRouter()
    return (
        <div className='transition ease-in-out delay-100 duration-100 w-full bg-white border border-gray-200 rounded-xl hover:bg-colorPrimary hover:shadow-lg hover:shadow-colorPrimary/20 hover:border-colorPrimary  flex flex-col justify-center gap-6 hover:-translate-y-2 group'>
            <div className='items-center'>
            <Image
                className="w-full rounded-xl"
                src="https://www.perumdatirtabenteng.co.id/assets/uploads/post_20221223_1671769686.jpg"
                alt="profileImg"
                width={2670}
                height={80}
                crossOrigin='anonymous'
                />
                {/* <Image className="w-full rounded-xl" src={infoPhoto} alt="infoPhoto" /> */}
            </div>
            <div className='px-7'>
                <p className='text-sm text-gray-400 group-hover:text-white'>12-12-2023</p>
                <h2 className='text-xl font-titleFont font-semibold tracking-wide text-colorPrimary group-hover:text-white'>{title}</h2>
                <p className='text-sm mt-3 group-hover:text-white'>{subtitle}</p>
            </div>
            <div className="px-7 pb-4">
                <button onClick={()=>router.push('/informasi/berita_hukum/'+id)} className="text-left text-colorSecondary py-3 group-hover:text-yellow-200 rounded-full xl:w-48">
                    Lihat Detail
                </button>
            </div>
        </div>
    )
}

export default InformationCard