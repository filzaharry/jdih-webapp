import { cardBoxes, infoPhoto } from "@/public";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FiFile } from "react-icons/fi";

interface Props {
  id: string;
  title: string;
  subtitle: string;
  picture: string;
  path: string;
  created_at: string;
}

const InformationCard = ({
  id,
  title,
  subtitle,
  picture,
  path,
  created_at,
}: Props) => {
  const router = useRouter();
  return (
    <div className="transition ease-in-out delay-100 duration-100 w-full bg-white border border-gray-200 rounded-xl hover:bg-colorPrimary hover:shadow-lg hover:shadow-colorPrimary/20 hover:border-colorPrimary  flex flex-col justify-center gap-6 hover:-translate-y-2 group">
      <div className="items-center">
        <img className="w-full rounded-xl" src={picture} alt={picture} />
        {/* <Image
          className="w-full rounded-xl"
          src={picture}
          alt={picture}
          width={2670}
          height={80}
          crossOrigin="anonymous"
        /> */}
        {/* <Image className="w-full rounded-xl" src={infoPhoto} alt="infoPhoto" /> */}
      </div>
      <div className="px-7">
        <p className="text-sm text-gray-400 group-hover:text-white">
          {created_at}
        </p>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide text-colorPrimary group-hover:text-white">
          {title.length > 90 ? title.substring(0, 20) + "..." : title}
        </h2>
        <p className="text-sm mt-3 group-hover:text-white">
          {subtitle.length > 100
            ? subtitle.substring(0, 100) + "..."
            : subtitle}
        </p>
      </div>
      <div className="px-7 pb-4">
        <button
          onClick={() => router.push("/informasi/berita_hukum/" + path)}
          className="text-left text-colorSecondary py-3 group-hover:text-yellow-200 rounded-full xl:w-48"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default InformationCard;
