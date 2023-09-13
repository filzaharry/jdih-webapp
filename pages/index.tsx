import Navbar from "@/components/Navbar";
import Head from "next/head";

import Banner from "@/components/Banner";
import { Footer } from "@/components/Footer";
import BannerForm from "@/components/BannerForm";
import Statistic from "@/components/Statistic";
import Product from "@/components/Product";
import Information from "@/components/Information";
import VideoBanner from "@/components/VideoBanner";
import Certificate from "@/components/Certificate";
import MediaPartner from "@/components/MediaPartner";
import { Header } from "@/components/Header";


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
            {/* <Information /> */}
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
