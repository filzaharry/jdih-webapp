import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Footer } from "./Footer";
import { ayoTng } from "@/public";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { TbBrandGithubFilled } from "react-icons/tb";
import { useRouter } from "next/router";
import DataNavbar from "../components/constants/NavbarItems";

const Navbar = () => {
  const router = useRouter();
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const [navbarFilter, setNavbarFilter] = useState([]);
  const [profile, setProfile] = useState(false);
  const [profileStructure, setProfileStructure] = useState(false);

  const [burgerProfile, setBurgerProfile] = useState(false);
  const [burgerProfileStructure, setBurgerProfileStructure] = useState(false);

  // useEffect(() => {
  // console.log("DataNavbar");
  // console.log(DataNavbar);
  // }, [])

  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   e.preventDefault();
  //   setShowMenu(false);
  //   const href = e.currentTarget.href;
  //   const targetId = href.replace(/.*\#/, "");
  //   const elem = document.getElementById(targetId);
  //   elem?.scrollIntoView({ behavior: "smooth" });
  //   const links = document.querySelectorAll(".nav-link");
  //   links.forEach((link) => {
  //     link.classList.remove("active");
  //   });
  //   e.currentTarget.classList.add("active");
  // };

  function hamburgerClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }
  return (
    <div className=" w-full h-20 lg:h-[12vh] lg:pt-10 top-10 z-50 bg-transparent text-white px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        {/* free motion library */}
        <motion.div
          className="flex flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="
          xs:h-12 xs:w-12 
          sm:h-18 sm:w-20 
          mdl:h-20 mdl:w-32
          lg:h-28 lg:w-36
          mt-2
          "
          >
            <Image src={logo} alt="logo" />
          </div>
          <div
            className="
          xs:h-12 xs:w-12 
          sm:h-18 sm:w-18sm:mt-2 sm:ml-2 sm:mt-2 sm:bg-white sm:rounded-lg
          mdl:h-20 mdl:w-24 mdl:bg-transparent
          lg:h-28 lg:w-28
          "
          >
            <Image className="w-full h-full" src={ayoTng} alt="ayoTng" />
          </div>
        </motion.div>

        <div className="hidden xl:inline-flex items-center gap-7 ">
          <ul className="flex text-xl gap-7">
            {DataNavbar.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-1 text-textDark
        hover:text-textGreen cursor-pointer duration-300 nav-link"
                >
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div
                      
                      className="dropdown inline-block relative"
                    >
                      {item.submenu.length == 0 ? (
                        <span  onClick={() => router.push(item.route)}>{item.name}</span>
                      ) : (
                        <>
                          <button  className="flex flex-row items-center">
                            <span>{item.name}</span>
                            <IoIosArrowDown className="ml-2 mt-1 w-4 text-bold" />
                          </button>
                          <ul className="dropdown-content absolute hidden text-gray-600 lg:w-80 bg-white text-lg lg:rounded-lg space-y-2 p-2 shadow-bannerFormShadow ">
                            {item.submenu.map((sub_item, x) => {
                              return sub_item.submenu.length == 0 ? (
                                <li key={x} onClick={() => router.push(item.route+'/'+sub_item.route)}>
                                  <p className="  hover:bg-gray-200 rounded-sm py-2 px-4 block ">
                                    {sub_item.name}
                                  </p>
                                </li>
                              ) : (
                                <>
                                  <li key={x} className="dropdown">
                                    <p className=" hover:bg-gray-200 rounded-sm py-2 px-4 flex flex-row  justify-between ">
                                      <span>{sub_item.name}</span>
                                      <IoIosArrowDown className="ml-2 mt-1 w-4 text-bold" />
                                    </p>
                                    <ul className="dropdown-content ml-40 absolute hidden text-gray-600 lg:w-80 bg-white text-lg lg:rounded-lg space-y-2 p-2 shadow-bannerFormShadow ">
                                      {sub_item.submenu.map(
                                        (sub_sub_item, y) => {
                                          return (
                                            <li key={y} onClick={() => router.push(item.route+'/'+sub_item.route+'/'+sub_sub_item.route)}>
                                              <p className="  hover:bg-gray-200 rounded-sm py-2 px-4 block ">
                                                {sub_sub_item.name}
                                              </p>
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </div>
                  </motion.li>
                </div>
              );
            })}
          </ul>
        </div>

        {/* hamburger */}
        <div
          onClick={() => setShowMenu(true)}
          className="
          mt-4
          w-7 h-5 
          flex flex-col 
          justify-between 
          items-center 
          xl:hidden 
          text-4xl 
          text-textGreen 
          cursor-pointer 
          overflow-hidden 
          group
          "
        >
          <span className="w-full h-[4px] bg-white shadow-none inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[4px] bg-white shadow-none inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[4px] bg-white shadow-none inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>

        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={hamburgerClick}
            className="absolute xl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="sm:w-full lg:w-[50%] h-full overflow-y-scroll scrollbarHide bg-[#4D57F5] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-white cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="w-full flex flex-col mt-4 ">
                <ul className="flex flex-col">
                  {DataNavbar.map((item, i) => {
                    return (
                      <Link
                        key={i}
                        href="/"
                        className="flex text-textDark p-4 
                        hover:text-textGreen cursor-pointer duration-300 nav-link "
                      >
                        <motion.li
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.1 }}
                          className="w-full "
                        >
                          <div
                            onClick={() => router.push("/")}
                            className="dropdown "
                          >
                            {item.submenu.length == 0 ? (
                              <span>{item.name}</span>
                            ) : (
                              <>
                                <button className="flex flex-row items-center w-full justify-between  ">
                                  <span>{item.name}</span>
                                  <IoIosArrowDown className="ml-2 mt-1 w-4 text-bold" />
                                </button>
                                <ul className="dropdown-content hidden bg-[#7B83FF] px-2 py-2 w-full">
                                  {item.submenu.map((sub_item, x) => {
                                    return sub_item.submenu.length == 0 ? (
                                      <li key={x} className="text-md">
                                        <p className="hover:bg-white rounded-sm py-2 px-4 block text-white hover:text-[#7B83FF] cursor-pointer">
                                          {sub_item.route}
                                        </p>
                                      </li>
                                    ) : (
                                      <>
                                        <li key={x} className="dropdown text-md">
                                          <p className=" hover:bg-white rounded-sm py-2 px-4 text-white hover:text-[#7B83FF] cursor-pointer flex flex-row justify-between ">
                                            <span>{sub_item.name}</span>
                                            <IoIosArrowDown className="ml-2 mt-1 w-4 text-bold" />
                                          </p>
                                          <ul className="dropdown-content hidden text-gray-600 bg-[#969dff] text-md space-y-2 p-2 w-full ">
                                            {sub_item.submenu.map(
                                              (sub_sub_item, y) => {
                                                return (
                                                  <li key={y} className="">
                                                    <p className="  hover:bg-white rounded-sm py-2 px-4 block text-white hover:text-[#7B83FF] cursor-pointer ">
                                                      {sub_sub_item.name}
                                                    </p>
                                                  </li>
                                                );
                                              }
                                            )}
                                          </ul>
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                              </>
                            )}
                          </div>
                        </motion.li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
