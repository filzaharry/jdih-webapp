import React from 'react'

interface Props {
    title: string
}

const SectionTitle = ({ title }: Props) => {
    return (
        <h2 className='
        sm:text-2xl 
        lg:text-4xl 
        lg:font-titleFont 
        lg:font-medium 
        flex 
        items-center
        '>
            {title}
        </h2>
    )
}


export default SectionTitle