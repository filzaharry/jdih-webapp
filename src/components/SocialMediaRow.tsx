import React from 'react'
import { RiFacebookCircleFill, RiMailFill, RiTwitterFill, RiWhatsappFill } from 'react-icons/ri'

const SocialMediaRow = () => {
    return (
        <div className="flex flex-row justify-end mt-8">
            <div className="flex flex-row sm:px-4 lg:px-10 py-2 mr-2 rounded-full w-fit  bg-[#4A66AD] text-white items-center">
                <RiFacebookCircleFill className="text-lg mr-2" />
                <p className="lg:block sm:hidden">Share</p>
            </div>
            <div className="flex flex-row sm:px-4 lg:px-10 py-2 mr-2 rounded-full w-fit  bg-[#6BAAE8] text-white items-center">
                <RiTwitterFill className="text-lg mr-2" />
                <p className="lg:block sm:hidden">Share</p>
            </div>
            <div className="flex flex-row sm:px-4 lg:px-10 py-2 mr-2 rounded-full w-fit  bg-[#65D072] text-white items-center">
                <RiWhatsappFill className="text-lg mr-2" />
                <p className="lg:block sm:hidden">Share</p>
            </div>
            <div className="flex flex-row sm:px-4 lg:px-10 py-2 mr-2 rounded-full w-fit  bg-[#7D7D7D] text-white items-center">
                <RiMailFill className="text-lg mr-2" />
                <p className="lg:block sm:hidden">Share</p>
            </div>
        </div>
    )
}

export default SocialMediaRow