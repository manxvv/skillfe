import React, { useState } from "react";

import * as Unicons from "@iconscout/react-unicons";
import MenuItem from "./MenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommonActions from "../store/actions/common-actions";

import Notification from "./Notification";
import { FaBars } from "react-icons/fa";
import AuthActions from "../store/actions/auth-actions";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
// import ThemeToggle from "../Togglebutton/ThemeToggle.jsx";



const TopBar = ({ sidebarOpen, setsidebarOpenn }) => {
  const dispatch = useDispatch();

  // localStorag

  const { state } = useLocation();
  let user = JSON.parse(localStorage.getItem("user"));
  const name = user?.firstName;
  const surname = user?.surname;
  const navigate = useNavigate();
  console.log(useLocation(), "userloc", user, surname);

  const calllogout = () => {
    // localStorage.setItem("auth",false)
    // localStorage.removeItem("token")
    // localStorage.removeItem("user")
    // navigate("/login")

    dispatch(
      CommonActions.logoutCaller(() => {
        navigate("/login");
      })
    );
  };

 // rounak change
  const [tdata, setTdata] = useState(false);
  const handleToggle = () =>{
    console.log("asfdasfdsadffdsaasffdsa_onclick")
    setTdata(!tdata)
    dispatch(
      // console.log("afdsafasfasfddsfdfs_dispatch")
      AuthActions.toggleButton(tdata)
    )
  }

  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
  

  return (
    <>
      <div class={` flex justify-between ml-0 px-3 py-4 overflow-y-auto duration-150  ${!mode? "bg-gray-900 text-white":"bg-white text-black"}`}>
        {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" onClick={() => {
                console.log('sdfjhkhkjshd')
                setsidebarOpenn(prev => !prev)
            }} aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button> */}
        <div className="flex space-x-4 items-center">
          <button
            onClick={() => {
              setsidebarOpenn((prev) => !prev);
            }}
            className={` ${
              sidebarOpen && "rotate-180"
            }`}
          >
            {/* <Unicons.UilArrowCircleLeft size="36" style={{ color: "white" }} /> */}
            {/* <Unicons.UilArrowRight size="24" style={{ color: "black" }} /> */}
            {/* <img width={20} src="../burger.jpg" alt="" /> */}
            <RxHamburgerMenu size={20} />
          </button>
          {/* <h1 className="font-semibold text-white">{name || ""}</h1> */}
        </div>

        <div className="dark:text-white flex  cursor-pointer items-center pl-4">
          {/* <div >
            <label className="switch flex">
              <input onClick ={handleToggle} type="checkbox"/>
              <span className="slider round flex flex-row justify-between items-center bg-secLine" ><FaSun className="text-white h-[70%] w-7 text-secLine "/> <FaMoon className="text-white h-[70%] w-7  "/></span>
            </label>
          </div> */}

          <h1 className="mr-2 text-secLine font-oxygen font-semibold text-xs sm:text-sm md:text-lg pl-3">
            {"Welcome!     "}
            {name || ""} {surname || ""}
          </h1>

          <div className="pr-3 pl-1">
            <label className="switch flex">
              <input onClick ={handleToggle} type="checkbox"/>
              <span className="slider round flex flex-row justify-between items-center bg-secLine" ><FaSun className="text-white h-[70%] w-7 text-secLine "/> <FaMoon className="text-white h-[70%] w-7  "/></span>
            </label>
          </div>

          <span className="text-white mr-2">
            <Notification
              width={"30px"}
              color={`${!mode? " white":"black"}`}
              count={1}
              notifications={"nnddhdhdh"}
            />
          </span>
          <div
            onClick={() => {
              calllogout();
            }}
            className="dark:text-white flex space-x-1 cursor-pointer items-center"
          >
            <span className={`pr-1 font-poppins hover:text-heading transition-all duration-300 ${!mode? " text-white":"text-black"}`}>
              Logout
            </span>
            <Unicons.UilSignout className={`pr-1 font-poppins hover:text-heading transition-all duration-300"${!mode? " text-white":"text-black"}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
