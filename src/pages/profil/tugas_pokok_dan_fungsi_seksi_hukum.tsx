import * as React from "react";
import { motion } from "framer-motion";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import FooterComponent from "@/src/components/Footer";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

export default function Tupoksi() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Header />
      <main className="font-bodyFont w-full h-screen overflow-x-hidden">
      <div id="home" className="customHeader">
          <Navbar />
          <section className="customSection">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="titlePage"
            >
              Tugas Pokok dan Fungsi Seksi Hukum
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="breadcumbPage"
            >
              {`Beranda > Profil > Tugas Pokok dan Fungsi Seksi Hukum`}
            </motion.p>
          </section>
          <section id="home" className="bannerLayout2">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 lg:px-10 lg:pt-10 sm:px-4"
            >
              <p className="titleContent text-center">
                Deskripsi Jabatan
              </p>
              <p className="lg:text-xl text-center mb-4">
                1. Identitas Jabatan
              </p>
              <div className="flex flex-row w-[80%] my-2 m-4 mx-auto">
                <div className="lg:w-[30%] md:w-[50%]">
                  <p className="lg:text-[16px] md:text-sm sm:text-sm">Nama Jabatan</p>
                </div>
                <div className="lg:w-[70%] md:w-[50%]">
                  <p className="lg:text-[16px] md:text-sm sm:text-sm">: Asisten Manager Hukum </p>
                </div>
              </div>
              <div className="flex flex-row w-[80%] my-2 m-4 mx-auto">
                <div className="lg:w-[30%] md:w-[50%]">
                  <p className="lg:text-[16px] md:text-sm sm:text-sm">Bagian / Sub Bagian</p>
                </div>
                <div className="lg:w-[70%] md:w-[50%]">
                  <p className="lg:text-[16px] md:text-sm sm:text-sm">: Umum , Hukum dan Pengembangan SDM</p>
                </div>
              </div>
              <div className="flex flex-row w-[80%] my-2 m-4 mx-auto">
                <div className="lg:w-[30%] md:w-[50%]">
                  <p className="lg:text-[16px] md:text-sm sm:text-sm">Jabatan Atasan Langsung</p>
                </div>
                <div className="lg:w-[70%] md:w-[50%]">
                  <p className="lg:text-[16px] md:text-sm sm:text-sm">: Manager Umum, Hukum dan Pengembangan SDM</p>
                </div>
              </div>
              <div className="flex flex-row w-[80%] my-2 m-4 mx-auto">
                <div className="lg:w-[30%] md:w-[50%]">
                  <p className="lg:text-[16px] md:text-sm sm:text-sm">Jabatan Bawahan Langsung</p>
                </div>
                <div className="lg:w-[70%] md:w-[50%]">
                  <p className="lg:text-[16px] md:text-sm sm:text-sm">: Staf</p>
                </div>
              </div>
              <br />
              <p className="lg:text-xl text-center mb-4">
                2. Fungsi Jabatan Ini
              </p>
              <div className="flex flex-row w-[80%] my-2 m-4 mx-auto">
                <ol className="list-decimal">
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Membantu Manager Umum, Hukum dan Pengembangan SDM dalam urusan yang berkaitan dengan kepetingan perusahaan dari aspek hukum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Menjaga dan memastikan kepatuhan dari setiap tindakan dan kegiatan perusahaan terhadap hukum yang berlaku</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Mewakili Direktur dalam menangani masalah hukum baik di dalam pengadilan maupun diluar pengadilan bersama Manager dan atau atas persetujuan Manager Umum, Hukum dan Pengembangan SDM</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Mewakili atau mengusulkan penunjukan advokasi kepada pihak ketiga atas permasalahan hukum yang dihadapi perusahaan</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Menyediakan dukungan hukum bagi Direktur, manajemen dan cabang</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab memeriksa, mengkaji dan memberikan pertimbangan terkait peraturan dan perundang-undangan yang berlaku. Mengkonsep surat-surat (perjanjian kerjasama, peraturan Direksi serta dokumen-dokumen hukum lainnya) memastikan sesuai dengan kaidah-kaidah hukum yang berlaku serta mendokumentasikannya. Mewakili perusahaan dalam kaitan dengan masalah hukum. Bertanggung jawab didalam mengkoordinasi serta menyelesaikan seluruh kebutuhan perijinan untuk mendukung terselenggaranya seluruh kegiatan proyek di lingkungan perusahaan</p></li>
                </ol>
              </div>
              <br />
              <p className="lg:text-xl text-center mb-4">
                3. Tugas Pokok
              </p>
              <div className="flex flex-row w-[80%] my-2 m-4 mx-auto">
                <ol className="list-decimal">
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Memimpin dan mengendalikan semua kegiatan-kegiatan yang terkait dengan aspek hukum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Memberikan saran dan pertimbangan kepada Manager dalam penyelesaian permasalahan prinsipil dan stratejik dibidang hukum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Menyusun rencana kerja dan anggaran Seksi Hukum lalu menyerahkannya ke Manager untuk diproses lebih lanjut</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Mempersiapkan perjanjian kerja sama (perikatan hukum) dengan Badan Hukum maupun masyarakat</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Memberikan konsultasi dan/atau pendampingan hukum yang dibutuhkan kepada Direktur, Dewan Pengawas, pegawai, mantan pegawai, mantan Direksi dan mantan Dewan Pengawas dalam proses penyelidikan, penyidikan, sampai dengan proses berperkara dipengadilan dalam urusan yang terkait dengan pelaksanaan tugas perusahaant</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Menyusun, memeriksa dan menandatangani kajian serta rekomendasi atas berbagai isu dan kasus yang terjadi yang berhubungan dengan peraturan perundang-undangan dan regulasi industri air minum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Menyampaikan informasi terkini dan/atau penerangan mengenai aspek-aspek hukum (baik peraturan perundang-undangan yang lama maupun baru) terhadap operasional Perumda Tirta Benteng Kota Tangerang kepada bagian terkait dan/atau Direktur</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Mengelola kebijakan, dan prosedur lainnya di bidang hukum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Memeriksa dan menandatangani laporan untuk seluruh aktivitas hukum baik untuk kepentingan internal maupun eksternal</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Melakukan kontak secara intensif dengan pihak eksternal (Firma Hukum, Hakim, Kepolisian, Notaris, Pengacara dan lain-lain) untuk berkoordinasi mengenai masalah hukum yang dihadapi perusahaan</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Memberikan nasihat, dukungan serta penjelasan mengenai perihal hukum dan kepatuhan kepada pihak manajemen mengenai masalah hukum, misalnya kepegawaian, komersial, kerjasama swasta, hukum perdata dan hukum/aturan industri yang berlaku, termasuk juga perihal negosiasi licensing dan kontrak layanan dengan pihak ketiga</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Memberikan informasi terkini kepada pihak manajemen mengenai semua aturan/ perundangan baru dari pemerintah dan lembaga terkait menyangkut semua draft dan kajian hukum atas semua perjanjian hukum dengan pihak ketiga dan mengusulkan perbaikan pada kebijakan, prosedur kerja serta dokumen yang sudah ada</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Merencanakan, mengembangkan serta mengelola bidang hukum sehingga mampu mengamankan kekayaan dan sumber daya Perumda Tirta Benteng dari potensi permasalahan hukum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Membuat langkah-langkah dalam rangka mendukung terciptanya budaya kepatuhan dan hukum pada seluruh kegiatan usaha Perumda Tirta Benteng pada setiap jenjang organisasi</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Melakukan identifikasi, pengukuran, monitoring dan pengendalian terhadap risiko hukum dan kepatuhan</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Menilai dan mengevaluasi efektifias, kecukupan dan kesesuaian kebijakan, ketentuan,sistem maupun prosedur yang dimiliki oleh Perumda Tirta Benteng dengan peraturan perundang-undangan yang berlaku</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Melakukan review dan/atau merekomendasikan pengkinian dan penyempurnaan kebijakan, ketentuan, sistem maupun prosedur agar sesuai dengan ketentuan perundang-undangan yang berlaku</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Memastikan bahwa kebijakan, ketentuan, sistem dan prosedur telah sesuai dengan peraturan perundang-undangan yang berlaku</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Melaksanakan tugas-tugas lain yang berhubungan dengan kegiatan perusahaan yang diberikan oleh Manager Umum, Hukum dan Pengembangan SDM</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Melaporkan kegiatan dan bertanggungjawab atas pelaksanaan tugas kepada Manager Umum, Hukum dan Pengembangan SDM</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Menyusun rencana kegiatan tahunan terkait dengan pengelolaan administrasi dan kesejahteraan pegawai dan menyerahkannya kepada Manager Umum, Hukum dan Pengembangan SDM untuk diproes lebih lanjut</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Melaporkan kegiatan dan bertanggungjawab atas pelaksanaan tugas kepada Manager Umum, Hukum dan Pengembangan SDM</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Menyusun rencana kerja dan anggaran Seksi Hukum dan menyerahkannya ke Manager untuk diproses lebih lanjut</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Melaporkan kegiatan dan bertanggungjawab atas pelaksanaan tugas Manager Umum, Hukum dan Pengembangan SDM</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Melaksanakan tugas-tugas lain yang berhubungan dengan aktifitas Perumda Tirta Benteng Kota Tangerang yang diberikan oleh Manager Umum, Hukum dan Pengembangan SDM</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab mendokumentasikan produk-produk hukum dalam bentuk perundang-undangan, peraturan pemerintah, peraturan daerah, peraturan perusahaan serta peraturan-peraturan lainya yang terkait dengan perusahaan, untuk dijadikan sebagai pusat pelayanan informasi produk hukum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab untuk melakukan sosialisasi produk-produk hukum Perusahaan antara lain terkait dengan peraturan-peraturan Perusahaan, SK, Peraturan Direksi, dalam upaya menerapkan seluruh ketentuan dan peraturan pada kegiatan Perusahaan</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggungjawab melakukan pengkajian, perumusan dan penyusunan produk-produk hukum dalam bentuk Surat Keputusan Direksi (SK Direksi), Peraturan Direksi, Keputusan Perjanjian Kerjasama, dan Surat-Surat Lainnya, untuk mencegah terjadinya kesalahan dari aspek hukum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab medampingi karyawan dalam menghadapi persoalan hukum terkait dengan pelaksanaan pekerjaan di Perusahaan. Mewakili Perusahan dalam menangani permasalahan hukum. Untuk menjamin karyawan Perusahaan mendapatkan pendampingan dalam menghadapi persoalan hukum</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab mengurus perizinan pelaksanaan pekerjaan ke instansi terkait. Untuk memastikan pekerjaan tersebut sudah mendapatkan persetujuan dari instansi terkait</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab mengusulkan kebutuhan pengadaan karyawan Seksi Hukum. Untuk meningkatkan efektifitas pengelolaan Seksi Hukum </p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab mengkomunikasikan pekerjaan berkaitan dengan prosedur, informasi tentang pekerjaan, jadwal rapat, tujuan dan sasaran kerja Seksi Hukum serta kinerja bawahan, untuk meyakinkan bahwa bawahan memahami apa yang seharusnya dilakukan</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab untuk menyusun kesepakatan kerja terkait dengan penetapan target kinerja antara Asisten Manager dengan staf-staf dibawahnya, untuk memudahkan Asisten Manager dalam mengelola kinerja bawahan</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggungjawab memantau, mengevaluasi kinerja staff, mengkonfimasikan hasil evaluasi kepada staff yang bersangkutan, untuk meningkatkan prestasi karyawan</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab untuk memberikan penjelasan mengenai tugas dan tanggung jawab yang akan dijalankan oleh pegawai dilingkungan Seksi Hukum serta membuat laporan evaluasi selama masa orientasi dan induksi pegawai dan di serahkan kepada manager Umum, untuk menjadi masukan manager Umum dalam memutuskan status pegawai</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab untuk memberi pelatihan di internal PERUMDA Tirta Benteng. Untuk memberi kesempatan kepada bawahan maupun karyawan perusahaan dalam meningkatkan kompetensi teknis maupun non teknis. untuk menjamin kelayakan kemampuan dan sikap kerja para bawahan dalam menjalankan fungsi dan memenuhi tuntutan tugasnya masing-masing</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Memonitor kinerja bawahan dan menilai prestasi bawahan, serta mengarahkan, membina (memberikan sanksi atau penghargaan) dan mengembangkan bawahan di lingkungan Seksi Hukum, untuk menjamin kelayakan kemampuan dan sikap kerja para bawahan dalam menjalankan fungsi dan memenuhi tuntutan tugasnya masing-masing</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab untuk memimpin rapat koordinasi dengan bawahan minimal 1 (satu) bulan sekali, untuk mengevaluasi pelaksanaan pekerjaan dan pencapaian target serta perubahan-perubahan yang perlu dilakukan</p></li>
                  <li>
                    <p className="lg:text-[16px] md:text-sm sm:text-sm">Bertanggung jawab meyusun dan menyampaikan laporan bulanan atas progress kerja dan pencapaian Asisten Manager Hukum, untuk menyediakan informasi atau bahan kajian bagi perencanaan program atau tindakan di tingkat yang lebih strategis di masa selanjutnya</p></li>
                </ol>
              </div>
              
              {/* <SocialMediaRow /> */}
            </motion.div>
          </section>
          <div
            className="
              customFooter
              "
          >
            <FooterComponent />
          </div>
        </div>
      </main>
    </>
  );
};

