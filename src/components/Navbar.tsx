import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
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
    <div className="navbarContainer">
      <div className="navbarContainerLayout">
        {/* free motion library */}
        <motion.div
          className="flex flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="navbarLayout">
            <Image src={logo} alt="logo" />
          </div>
          {/* <div className="navbarSubLayout">
            <Image className="w-full h-full" src={ayoTng} alt="ayoTng" />
          </div> */}
        </motion.div>

        <div className="hidden xl:inline-flex items-center gap-7 ">
          {DataNavbar.map((item, i) => {
            return (
              <ul key={i} className="flex text-xl gap-7">
                <div className="navbarMainDropdown">
                  <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="dropdown inline-block relative">
                      {item.submenu.length == 0 ? (
                        <Link href={item.route} replace>
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <>
                          <button className="flex flex-row items-center">
                            <span>{item.name}</span>
                            <IoIosArrowDown className="ml-2 mt-1 w-4 text-bold" />
                          </button>
                          <ul className="dropdown-content navbarSubDropdown">
                            {item.submenu.map((sub_item, x) => (
                              <div key={x}>
                                {sub_item.submenu.length == 0 ? (
                                  <Link
                                    href={item.route + sub_item.route} replace
                                  >
                                    <li>
                                      <p className="hover:bg-gray-200 rounded-sm py-2 px-4 block ">
                                        {sub_item.name}
                                      </p>
                                    </li>
                                  </Link>
                                ) : (
                                  <li className="dropdown">
                                    <p className=" hover:bg-gray-200 rounded-sm py-2 px-4 flex flex-row  justify-between ">
                                      <span>{sub_item.name}</span>
                                      <IoIosArrowDown className="ml-2 mt-1 w-4 text-bold" />
                                    </p>
                                    <ul className="dropdown-content navbarSubSubDropdown">
                                      {sub_item.submenu.map(
                                        (sub_sub_item, y) => {
                                          return (
                                            <Link
                                            key={y}
                                              href={
                                                item.route +
                                                // "/" +
                                                sub_item.route +
                                                // "/" +
                                                sub_sub_item.route
                                              } replace
                                            >
                                              <li >
                                                <p className="  hover:bg-gray-200 rounded-sm py-2 px-4 block ">
                                                  {sub_sub_item.name}
                                                </p>
                                              </li>
                                            </Link>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </li>
                                )}
                              </div>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </motion.li>
                </div>
              </ul>
            );
          })}
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
                      <div
                        key={i}
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
                            onClick={() =>
                              item.submenu.length == 0
                                ? router.push(item.route)
                                : null
                            }
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
                                      <li
                                        key={x}
                                        onClick={() =>
                                          router.push(
                                            item.route + sub_item.route
                                          )
                                        }
                                        className="text-md"
                                      >
                                        <p className="hover:bg-white rounded-sm py-2 px-4 block text-white hover:text-[#7B83FF] cursor-pointer">
                                          {sub_item.name}
                                        </p>
                                      </li>
                                    ) : (
                                      <>
                                        <li
                                          key={x}
                                          className="dropdown text-md"
                                        >
                                          <p className=" hover:bg-white rounded-sm py-2 px-4 text-white hover:text-[#7B83FF] cursor-pointer flex flex-row justify-between ">
                                            <span>{sub_item.name}</span>
                                            <IoIosArrowDown className="ml-2 mt-1 w-4 text-bold" />
                                          </p>
                                          <ul className="dropdown-content hidden text-gray-600 bg-[#969dff] text-md space-y-2 p-2 w-full ">
                                            {sub_item.submenu.map(
                                              (sub_sub_item, y) => {
                                                return (
                                                  <li
                                                    key={y}
                                                    onClick={() =>
                                                      router.push(
                                                        item.route +
                                                          "/" +
                                                          sub_item.route +
                                                          "/" +
                                                          sub_sub_item.route
                                                      )
                                                    }
                                                    className=""
                                                  >
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
                      </div>
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
