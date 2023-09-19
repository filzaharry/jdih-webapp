import React from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import InformationCard from "./InformationCard";
import { useRouter } from "next/router";

const Information = () => {
    const router = useRouter();
    return (
        <div
            id="info"
            className="
            max-w-contentContainer mx-auto 
            sm:w-[90%] sm:mt-10
            flex flex-col gap-8
            lg:py-10
            ">
            <div className="flex justify-between items-end">
                <SectionTitle title="Informasi" />
                <p onClick={() => router.push("/informasi/berita_hukum")} className='text-colorSecondary inline-block align-bottom lg:text-lg sm:text-sm'>Lihat Semua</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <InformationCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
                <InformationCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
                <InformationCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
                <InformationCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
                <InformationCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
                <InformationCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
            </div>
        </div>
    );
};

export default Information;
