import * as React from "react";
import { motion } from "framer-motion";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SocialMediaRow from "@/components/SocialMediaRow";

export default function Tupoksi() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Header />
      <main className="font-bodyFont w-full h-screen overflow-x-hidden">
        <div
          id="home"
          className="
         w-full 
        h-screen 
        bg-contain
        bg-heroResponsiveBg 
        bg-no-repeat 
        sm:bg-cover
        lg:bg-contain
        lg:bg-top
        lg:bg-heroBackground2   
        "
        >
          <Navbar />
          <section
            className="
          max-w-contentContainer mx-auto py-10 flex flex-col gap-4
          sm:w-[90%]
          mdl:w-[90%]
          lg:py-24 
          xl:px-4 
          xl:mt-20
          lgl:gap-8 
          "
          >
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-4xl lgl:text-5xl font-titleFont font-semibold text-white"
            >
              Tugas Pokok dan Fungsi Seksi Hukum
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg md:max-w-[630px] font-medium text-white"
            >
              {`Beranda > Informasi > Tugas Pokok dan Fungsi Seksi Hukum`}
            </motion.p>
          </section>
          <section
            id="home"
            className="
            max-w-contentContainer
            sml:pt-20
            lg:py-10 
            lg:mt-40
            xl:mt-0 xl:pt-0
            lgl:py-32 
            sm:w-[90%] 
            mdl:w-[90%]
          bg-white shadow-bannerFormShadow 
            rounded-3xl mt-10 mx-auto py-10 sm:mb-20"
          >
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full grid grid-cols-1 sm:px-8 lg:px-20 lg:pt-20"
            >
              {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
                <div
                  style={{
                    height: "750px",
                    width: "900px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Viewer
                    fileUrl="/other/tupoksi.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker> */}
              <object data="http://localhost:3000/other/tupoksi.pdf" type="application/pdf" width="100%" height="900"></object>
              {/* <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="900"></object> */}
              <br /><br /><br />
              <hr className="w-full h-0.5 mt-8 bg-[#D9D9D9]" />
              <SocialMediaRow />
            </motion.div>
          </section>
          <div
            className="
              bg-blackWaveBackground 
              lg:bg-blackWaveBackground 
              lg:bg-transparent
              sm:bg-[#141721] 
              bg-no-repeat bg-cover bg-center
              "
          >
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

