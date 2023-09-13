import React from 'react'
import SectionTitle from './SectionTitle'
import { profileImg } from '@/public'
import Image from 'next/image'
import { TbBrandGithub } from 'react-icons/tb'

const Projects = () => {
    return (
        <section id="project" className='max-w-container mx-auto lgl:px-20 py-24'>
            <SectionTitle title='Some Things I have Build' />
           <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
             {/* Project 1 */}
             <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className='flex flex-col xl:flex-row gap-6'>
                    <a href="" className='w-full xl:w-1/2 h-auto relative group'>
                        <div className="">
                            <Image className="w-full h-full object-contain" src={profileImg} alt="amazonImg" />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                        <p className='font-titleFont text-textGreen text-sm trackin-wide'>Featured Project</p>
                        <h3 className='text-2xl font-bold'>Amazon Clone 2.0</h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi, dolores vero praesentium unde amet nihil at. Ratione, facilis cumque, inventore minus minima atque voluptates quisquam, nulla ab repellendus ex odit? Possimus, minus ipsam magnam ratione quia commodi cumque! Accusamus dolorum dignissimos praesentium laboriosam tenetur totam sunt aspernatur ad placeat.</p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between'>
                            <li>Nextjs</li>
                            <li>Typescript</li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a href="" className='hover:text-textGreen duration-300'><TbBrandGithub/></a>
                            <a href="" className='hover:text-textGreen duration-300'><TbBrandGithub/></a>
                            <a href="" className='hover:text-textGreen duration-300'><TbBrandGithub/></a>
                        </div>
                    </div>
                </div>

            </div>
            {/* Project 2 */}
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className='flex flex-col xl:flex-row-reverse gap-6'>
                    <a href="" className='w-full xl:w-1/2 h-auto relative group'>
                        <div className="">
                            <Image className="w-full h-full object-contain" src={profileImg} alt="amazonImg" />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                        <p className='font-titleFont text-textGreen text-sm trackin-wide'>Featured Project</p>
                        <h3 className='text-2xl font-bold'>Amazon Clone 2.0</h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nisi, dolores vero praesentium unde amet nihil at. Ratione, facilis cumque, inventore minus minima atque voluptates quisquam, nulla ab repellendus ex odit? Possimus, minus ipsam magnam ratione quia commodi cumque! Accusamus dolorum dignissimos praesentium laboriosam tenetur totam sunt aspernatur ad placeat.</p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between'>
                            <li>Nextjs</li>
                            <li>Typescript</li>
                        </ul>
                        <div className="text-2xl flex gap-4">
                            <a href="" className='hover:text-textGreen duration-300'><TbBrandGithub/></a>
                            <a href="" className='hover:text-textGreen duration-300'><TbBrandGithub/></a>
                            <a href="" className='hover:text-textGreen duration-300'><TbBrandGithub/></a>
                        </div>
                    </div>
                </div>

            </div>
           </div>
        </section>
    )
}

export default Projects