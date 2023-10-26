import React from 'react'
import {motion} from 'framer-motion'

interface Props  {
  titleStart:string,
  titleEnd:string,
  pov:string,
  subtitle:string,
}

const Banner = ({titleStart,titleEnd, pov, subtitle}: Props) => {
// const Banner = () => {
  return (
    <section className='
    max-w-contentContainer mx-auto py-10 flex flex-col gap-4
    sm:w-[90%]
    mdl:w-[90%]
    lg:py-24 
    xl:px-4 
    xl:mt-20
    lgl:gap-8 
    '>
      <div className="lg:w-[60%]">
          <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='sm:mt-4 titlePage'>{titleStart}<span className='text-textStabilo mt-2 lgl:mt-4'>{pov}</span>{titleEnd}
          </motion.h1>
          <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='sm:mt-4 text-lg md:max-w-[630px] font-medium text-white'>{subtitle}
          </motion.p>
      </div>
    </section>
  )
}

export default Banner