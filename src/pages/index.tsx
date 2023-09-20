import Navbar from "@/src/components/Navbar";
import Head from "next/head";

import Banner from "@/src/components/Banner";
import { Footer } from "@/src/components/Footer";
import BannerForm from "@/src/components/BannerForm";
import Statistic from "@/src/components/Statistic";
import Product from "@/src/components/Product";
import Information from "@/src/components/Information";
import VideoBanner from "@/src/components/VideoBanner";
import Certificate from "@/src/components/Certificate";
import MediaPartner from "@/src/components/MediaPartner";
import { Header } from "@/src/components/Header";


export default  function Home() {


  return (
    <>
      <Header />
      <main className="font-bodyFont w-full h-screen overflow-x-hidden">
        <div
          id="home"
          className="
        w-full 
        h-screen 
        bg-cover
        bg-heroResponsiveBg 
        bg-no-repeat 
        bg-center
        lg:bg-heroBackground  
        "
        >
          <Navbar />
          <div className="xl:mt-48">
            <Banner
              titleStart="Produk Hukum "
              pov="Perumda Tirta Benteng "
              titleEnd="Kota Tangerang "
              subtitle="Website yang berisikan produk hukum terkait dokumentasi dari Perumda Tirta Benteng Kota Tangerang."
            />
          </div>
          <BannerForm />
          <div className="mt-20">
            <Statistic />
          </div>
          
          <Product />

          <div className="h-screen bg-no-repeat bg-cover bg-center">
          {/* <div className="h-screen bg-blueWaveBackground bg-no-repeat bg-cover bg-center"> */}
            <Information />
            {/* <VideoBanner /> */}
            {/* <Certificate /> */}
            <MediaPartner />
            <div
              className="
              bg-blackWaveBackground 
              lg:bg-blackWaveBackground 
              lg:bg-transparent
              sm:bg-[#141721] 
              bg-no-repeat bg-cover bg-center
              xl:-mt-60
              "
            >
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
