import React from "react";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import CertificateCard from "./CertificateCard";

const Certificate = () => {
    return (
        <div
            id="certificate"
            className="max-w-contentContainer mx-auto 
            sm:w-[90%] sm:mt-10
            flex flex-col gap-8
            py-10"
        >
            <div className="flex justify-between items-end">
                <SectionTitle title="Piagam Penghargaan" />
                <p className='text-colorSecondary inline-block align-bottom sm:text-sm lg:text-lg'>Lihat Semua</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <CertificateCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
                <CertificateCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
                <CertificateCard
                    title="Peraturan Walikota Nomor 63 Tahun 2023"
                    listItem={["ReactJs", "TailwindCSS", "Typescript"]}
                    link="www.google"
                    desc="Tentang Perubahan Kedua Atas Peraturan Wali Kota Nomor 113 Tahun 2021 Tentang Pendelegasian Wewenang Perizinan Berusaha Berbasis Risiko, Perizinan Non Berusaha dan Non Perizinan."
                />
            </div>
        </div>
    );
};

export default Certificate;
