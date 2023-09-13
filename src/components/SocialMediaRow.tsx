import React from 'react'
import { RiFacebookCircleFill } from 'react-icons/ri'

const SocialMediaRow = () => {
    return (
        <div className="flex flex-row justify-end mt-28 pb-8">
            <div className="flex flex-row sm:px-4 lg:px-10 py-2 mr-2 rounded-full w-fit  bg-[#4A66AD] text-white">
                <RiFacebookCircleFill className="text-lg lg:hidden" />
                <p className="lg:block sm:hidden">Share</p>
            </div>
            <div className="flex flex-row sm:px-4 lg:px-10 py-2 mr-2 rounded-full w-fit  bg-[#6BAAE8] text-white">
                <RiFacebookCircleFill className="text-lg lg:hidden" />
                <p className="lg:block sm:hidden">Share</p>
            </div>
            <div className="flex flex-row sm:px-4 lg:px-10 py-2 mr-2 rounded-full w-fit  bg-[#65D072] text-white">
                <RiFacebookCircleFill className="text-lg lg:hidden" />
                <p className="lg:block sm:hidden">Share</p>
            </div>
            <div className="flex flex-row sm:px-4 lg:px-10 py-2 mr-2 rounded-full w-fit  bg-[#7D7D7D] text-white">
                <RiFacebookCircleFill className="text-lg lg:hidden" />
                <p className="lg:block sm:hidden">Share</p>
            </div>
        </div>
    )
}

export default SocialMediaRow