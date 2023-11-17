import Head from "next/head";
import React, { useEffect, useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { Header } from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import SocialMediaRow from "@/src/components/SocialMediaRow";
import { RiBox1Fill } from "react-icons/ri";
import Image from "next/image";
import { user } from "@/public";
// import { FooterComponent } from "@/src/components/Footer";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import moment from "moment";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import FooterComponent from "@/src/components/Footer";

interface ConsultationInterface {
  id: string;
  name: string;
  email: string;
  suggestion: string;
  responseDescription: string;
  created_at: string;
}

type Consultation = {
  statusCode: number;
  message: string;
  data: ConsultationInterface[];
};

const KonsultasiPengaduan = () => {
  const [dataResult, setDataResult] = useState<Consultation | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isRobot, setIsRobot] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "consultations";
  const apiUrlSend = process.env.NEXT_PUBLIC_API_URL + "consultation";
  const limit = process.env.NEXT_PUBLIC_LIMIT;
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const [msgFailed, setMsgFailed] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(apiUrl);
        // console.log("response", data.data.data);
        setDataResult(data.data);
        setSubmitted(false);
      } catch (error) {
        console.error("what error ?", error);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  const handleChangeUsername = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
    // console.log('value is:', event.target.value);
  };
  const handleChangeEmail = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
    // console.log('value is:', event.target.value);
  };
  const handleChangeMessage = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
    // console.log('value is:', event.target.value);
  };

  const handleSubmit = () => {
    const bodyFormData = new FormData();
    bodyFormData.append("name", username);
    bodyFormData.append("email", email);
    bodyFormData.append("suggestion", message);

    if (username == "") {
      setIsFailed(true);
      setTimeout(() => {
        setIsFailed(false);
      }, 3000);
      setMsgFailed("Anda belum mengisi kolom Nama");
    } else if (email == "") {
      setIsFailed(true);
      setTimeout(() => {
        setIsFailed(false);
      }, 3000);
      setMsgFailed("Anda belum mengisi kolom Email");
    } else if (message == "") {
      setIsFailed(true);
      setTimeout(() => {
        setIsFailed(false);
      }, 3000);
      setMsgFailed("Anda belum mengisi kolom Pesan");
    } else if (isRobot == false) {
      setIsFailed(true);
      setTimeout(() => {
        setIsFailed(false);
      }, 3000);
      setMsgFailed("Anda belum men check-list I'm not robot");
    } else {
      axios({
        method: "POST",
        url: apiUrlSend,
        data: bodyFormData,
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      })
        .then(function (response) {

          setUsername("");
          setEmail("");
          setMessage("");
          setIsRobot(false);

          //handle success
          setSubmitted(true);
          setIsSuccess(true);
          setMsgSuccess("Pesan konsultasi / pengaduan Anda telah terkirim");
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        })
        .catch(function (response) {
          //handle error
          setIsFailed(true);
          setMsgFailed(
            "Segera lakukan beberapa saat lagi, error : " + response.message
          );
          setTimeout(() => {
            setIsFailed(false);
          }, 3000);
        });
    }
  };

  if (isLoading) {
    return <p> Is Loading ...</p>;
  } else {
    return (
      <>
        {isSuccess && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="lg:w-[30%] sm:w-[90%] absolute bottom-4 right-4 bg-teal-100 border-t-4 border-teal-500 rounded-xl text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Pesan Berhasil dikirim!</p>
                <p className="text-sm">{msgSuccess}</p>
              </div>
            </div>
          </motion.div>
        )}

        {isFailed && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="lg:w-[30%] sm:w-[90%] absolute bottom-4 right-4 bg-red-100 border-t-4 border-red-500 rounded-xl text-red-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-red-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Pesan Gagal dikirim</p>
                <p className="text-sm">{msgFailed}</p>
              </div>
            </div>
          </motion.div>
        )}
        <Header />
        <main className="font-bodyFont w-full h-screen overflow-x-hidden">
          <div
            id="home"
            className="customHeader 
          "
          >
            <Navbar />
            <section className="customSection">
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="titlePage"
              >
                Konsultasi dan Pengaduan
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="breadcumbPage"
              >
                {`Beranda > Konsultasi dan Pengaduan`}
              </motion.p>
            </section>
            <section id="home" className="bannerLayout2">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="w-full grid grid-cols-1 sm:px-6 lg:px-10"
              >
                <div className="flex flex-row justify-between">
                  <p className="text-2xl pb-12">
                    Isi Konsultasi / Pengaduan Anda disini
                  </p>
                  <p></p>
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-4">
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Nama</p>
                    </div>
                    <input
                      className="textFilterInnerBox text-black placeholder-textPlaceholder"
                      type="text"
                      placeholder="Masukkan Nama"
                      onChange={handleChangeUsername}
                      value={username}
                    ></input>
                  </div>
                  <div className="">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Email</p>
                    </div>
                    <input
                      className="textFilterInnerBox text-black placeholder-textPlaceholder"
                      type="email"
                      placeholder="Masukkan Email"
                      onChange={handleChangeEmail}
                      value={email}
                    ></input>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="col-span-3">
                    <div className="flex">
                      <RiBox1Fill className="text-xl mr-2 mb-2" />
                      <p className="text-base">Pesan</p>
                    </div>
                    <input
                      className="textFilterInnerBox text-black placeholder-textPlaceholder"
                      type="text"
                      placeholder="Pesan yang ingin disampaikan"
                      onChange={handleChangeMessage}
                      value={message}
                    ></input>
                  </div>
                </div>
                <div className="flex flex-row justify-between my-10 ">
                  <div className="sm:hidden lg:block"></div>
                  <div className="flex flex-row items-center">
                    <div
                      className="flex flex-row items-center "
                      onClick={() => {
                        if (isRobot == true) {
                          setIsRobot(false);
                        } else if (isRobot == false) {
                          setIsRobot(true);
                        }
                      }}
                    >
                      {isRobot == true && (
                         <div className="flex-column">
                         <FaCheck className="bg-white text-xl" />
                         <div className="bg-btnPrimary w-4 h-4 rounded-md mr-2 mt-[-18px]"></div>
                       </div>
                      )}
                      {isRobot == false && (
                        <div className="bg-btnPrimary w-4 h-4 rounded-md mr-2"></div>
                      )}

                      <p>{`I'm not robot`}</p>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="rounded-xl bg-btnPrimary text-white px-10 py-4 ml-8"
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </motion.div>
            </section>
            <div
              className="
            max-w-contentContainer sm:mx-auto lg:mx-32
            sm:w-[90%] sm:mt-10
            flex flex-col gap-4"
            >
              {dataResult?.data?.map((val, i) => (
                <div
                  key={i}
                  className="flex flex-row lg:w-[80%] sm:w-[90%] sm:mx-auto "
                >
                  <Image
                    className="lg:w-10 lg:h-10 sm:w-8 sm:h-8"
                    src={user}
                    alt="user"
                    width={100}
                    height={100}
                    crossOrigin="anonymous"
                  />
                  <div className="mx-4">
                    <p className="text-xl text-colorPrimary">{val.name}</p>
                    <p className="text-sm text-red-500 italic">{val.email}</p>
                    <p className="textContent text-slate-500">
                      {val.suggestion}
                    </p>
                    <p className="mt-2 mb-4 text-sm text-slate-500">
                      {moment(val.created_at).format("LLL")}
                    </p>
                    {val.responseDescription != null && (
                      <div className="flex flex-row w-full mt-4">
                        <Image
                          className="lg:w-10 lg:h-10 sm:w-8 sm:h-8"
                          src={user}
                          alt="user"
                          width={100}
                          height={100}
                        />
                        <div className="ml-4">
                          <p className="text-xl text-colorPrimary">Tanggapan</p>
                          <p className="mb-4 textContent text-slate-500">
                            {val.responseDescription}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="
                bg-blackWaveBackground 
                lg:bg-blackWaveBackground 
                lg:bg-transparent
                sm:bg-[#141721] 
                bg-no-repeat bg-cover bg-center
                "
            >
              <FooterComponent />
            </div>
          </div>
        </main>
      </>
    );
  }
};
export default KonsultasiPengaduan;
