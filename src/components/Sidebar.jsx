import React, { useEffect, useMemo, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import UserManagement from "../pages/Admin/UserManagement/UserManagement";
import RoleManagement from "../pages/Admin/RoleManagement/RoleManagement";
import Cart from "../pages/Cart";
import InvestmentDiscovery from "../pages/Investment/InvestmentDiscovery";
import Profile from "../pages/Profile";
import PitchDeck from "../pages/PitchDeck/PitchDeck";
import InvestmentTransaction from "../pages/Investment/InvestmentTransaction";
import Details from "../pages/Details";
import InvestorCRMDetails from "../pages/InvestorCRMDetails";
import BlobFileViewer from "../pages/testing/BlobFile";
import SendEmail from "../pages/Admin/RoleManagement/SendEmail";
import KYCManagement from "../pages/KYCManagement/KYCManagement";
import PitchDeckAdmin from "../pages/PitchDeck/viewPitchDeckAdmin";
import InvestmentDetailsManagement from "../pages/InvestmentDetails/InvestmentDetails";
import FundSeekerDetails from "../pages/FundSeekerDetails/FundSeekerDetails";
import OperationManagement from "../pages/OperationManagement/OperationManagement";
import AgreementManagement from "../pages/Admin/AgreementManagement/AgreementManagement";
import EmployeeDetails from "../pages/EmployeeDetails/EmployeeDetails";
import CompanyProfile from "../pages/CompanyProfile";
import DocsAndTemplates from "../pages/DocsAndTemplates/DocsAndTemplates";
import Blog from "../pages/TrainingCenter/Blog/Blog";
import OnBoardingVideo from "../pages/TrainingCenter/OnboardingVideo/OnBoardingVideo";
import BlogsManagement from "../pages/Admin/BlogsUpload/Blogs";
import TranningVideoManagement from "../pages/Admin/TrainningCenter/TrainningCenter";
import VideoConfrencing from "../components/VideoConfrencing";
import AllPitches from "../pages/PitchDeck/AllPitches";
import InvestorInterestedPitch from "../pages/PitchDeck/InvestorInterestedPitch";
import CertificateGenerator from "../pages/CertificateGenerator";
import Faqs from "../pages/FAQs/Faqs";
import FaqManagement from "../pages/Admin/FaqsManagemenet/FaqManagement";
import { TiHome } from "react-icons/ti";
import { TbListDetails } from "react-icons/tb";
import { BiSolidUserDetail } from "react-icons/bi";
import { RiMailSendFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LuFileStack } from "react-icons/lu";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineModelTraining } from "react-icons/md";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";
import { BsBuildings } from "react-icons/bs";
import { AiOutlineFolderView } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiShieldCheck } from "react-icons/hi";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { GrBlog } from "react-icons/gr";
import { PiCertificateFill } from "react-icons/pi";
import { SiReadthedocs } from "react-icons/si";
import { AiOutlineFundView } from "react-icons/ai";
import { GiTeamIdea } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";
import { BsReplyFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import ChatWithFundSeeker from "../pages/ChatWithFundSeeker/ChatWithFundSeeker";
import { BsFillChatTextFill } from "react-icons/bs";
import MySubscriptions from "../pages/MySubscriptions";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { FaFilePowerpoint } from "react-icons/fa6";
import { TbDetails } from "react-icons/tb";
import DynamicDetails from "../pages/DynamicDetails";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { RxHamburgerMenu } from "react-icons/rx";
import MyMenteesDashboard from "./Important/MentorDashboard/MyMenteesDashboard";
import SubscriptionPage from "./Important/UserDashboard/SubscriptionPage";
import UserDashboard from "./Important/UserDashboard/UserDashboard";
import ScheduledSessionsDashboard from "./Important/MentorDashboard/ScheduledSessionsDashboard";
import Video from "./Important/Video";

const Sidebar = ({ sidebarOpen, setsidebarOpenn }) => {
  console.log(localStorage.getItem("permission"),"____permission__");
  // let permission = JSON.parse(localStorage.getItem("permission")) || {};

  let permissionString = localStorage.getItem("permission");
  let permission;
  
  if (permissionString) {
    try {
      permission = JSON.parse(permissionString);
    } catch {
      console.warn("Permission data corrupted, resetting.");
      permission = {}; 
      localStorage.setItem("permission", JSON.stringify(permission));
    }
  } else {
    permission = {};
  }




  console.log(permission,"_____permission_____t")
  const token = useSelector(state => state?.auth?.token)
  const user = useSelector(state => state.auth?.user)
  console.log(user,"___user")
  let rolename = user?.roleName;
  
  let freeTrail = user?.free_trial+
  console.log(token , 'addfsdfasfasdfsfa')


  const Roles = useMemo(() => {
    return  {
      temp: [],
      GlobalUrl: [
        {
          name: "Not Found",
          link: "*",
          subMenu: [
            {
              name: "dasdaas",
              link: "*",
              component: <h4 className="text-xl">Coming Soon</h4>,
              subMenu: [],
            },
            {
              name: "dasdaas",
              link: "/",
              component: <Cart />,
              subMenu: [],
            },
            {
              name: "dasdaas",
              link: "/upload",
              component: <Video />,
              subMenu: [],
            },
          ],
        },
      ],
      all_routes: [
        {
          name: "Dashboard",
          link: "/investment",
          subMenu: [
           
            // ...(user?.free_trial  ? [{
            //   name: "Analytical Dashboard",
            //   link: "/investment/dashboard",
            //   component: <Cart />,
            //   icon: <MdOutlineModelTraining className="" size={20} />,
            //   subMenu: [],
            // }]:[]),
            // {
            //   name: "Analytical Dashboard",
            //   link: "/investment/dashboard",
            //   component: <Cart />,
            //   icon: <MdOutlineModelTraining className="" size={20} />,
            //   subMenu: [],
            // },
            // {
            //   name: "Investment Transactions",
            //   link: "/investmentTransactions",
            //   component: <InvestmentTransaction />,
            //   icon: <FaMoneyBillTransfer className="" size={20} />,
            //   subMenu: [],
            // },
            // {
            //   name: "Chat with Funder",
            //   link: "/chatWithFundSeeker",
            //   component: <ChatWithFundSeeker />,
            //   icon: <BsFillChatTextFill className="" size={20} />,
            //   subMenu: [],
            // },
            // {
            //   name: "My Accounts",
            //   link: "/myAccount",
            //   subMenu: [],
            //   component: <MyAccount />,
            //   icon: <Unicons.UilReact className="" size={17} />,
            // },
            // {
            //   name: "My Subscriptions",
            //   link: "/mySubscriptions",
            //   subMenu: [],
            //   component: <MySubscriptions />,
            //   icon: <Unicons.UilReact className="" size={17} />,
            // },
            // {
            //   name: "My Account and Subsciptions",
            //   link: "/account",
            //   subMenu: [
            //     {
            //       name: "Account Details",
            //       link: "/account/details",
            //       subMenu: [],
            //       component: <MyAccount />,
            //       icon: <Unicons.UilReact className="" size={17} />,
            //     },
            //     {
            //       name: "Subscription Details",
            //       link: "/subscriptions/details",
            //       subMenu: [],
            //       component: <MySubscriptions />,
            //       icon: <Unicons.UilReact className="" size={17} />
            //     }
            //   ],
            //   icon: <MdOutlineModelTraining className="" size={20} />,
            // },
          ],
          icon: <TiHome className="" size={20} />,
        },
    
        ...(user?.free_trial ? [{
          name: "Project Discovery",
          link: "/investment/discovery",
          component: <InvestmentDiscovery />,
          icon: <MdOutlinePersonSearch className="" size={20} />,
          subMenu: [],
        }] : []),

            //   {
            //   name: "Project Discovery",
            //   link: "/investment/discovery",
            //   component: <InvestmentDiscovery />,
            //   icon: <MdOutlinePersonSearch className="" size={20} />,
            //   subMenu: [],
            // },
        // {
        //   name: "Project Discovery",
        //   link: "/investment/discovery",
        //   component: <InvestmentDiscovery />,
        //   icon: <MdOutlinePersonSearch className="" size={20} />,
        //   subMenu: [],
        // },
        // {
        //   name: "Investor crm",
        //   link: "/investor/crm",
        //   component: <InvestorCrm />,
        //   icon: <GiTakeMyMoney className="" size={20} />,
        //   subMenu: [],
        // },
    
        // {
        //     name: "Details",
        //     link: "/details",
        //     component: <Details/>,
        //     icon: <Unicons.UilReact />,
        //     subMenu: [],
        // },
        {
          name: "Courses",
          link: "/investor/crm/details",
          component: <InvestorCRMDetails />,
          icon: <BiDetail className="" size={20} />,
          subMenu: [],
        },
        // {
        //   name: "Details",
        //   link: "/investor/crm/details/:uid",
        //   component: <InvestorCRMDetails />,
        //   icon: <GiTakeMyMoney className="" size={20} />,
        //   subMenu: [],
        // },
    
        // {
        //   name: "Portfolio",
        //   link: "/portfolio",
        //   component: <Portfolio />,
        //   icon: <Unicons.UilReact />,
        //   subMenu: [],
        // },
    
        {
          name: "KYC Status",
          link: "/kyc-status",
          component: <KYCManagement />,
          icon: <HiShieldCheck className="" size={20} />,
          subMenu: [],
        },
    
        // rounak change
        // {
        //   name: "My Account",
        //   link: "/account",
        //   subMenu: [
    
        //     {
        //       name: "Fundseeker Details",
        //       link: "/fundseeker_details",
        //       component: <FundSeekerDetails />,
        //       icon: <TbListDetails className="" size={20} />,
        //       subMenu: [],
        //     },
        //     {
        //       name: "Employee Details",
        //       link: "/empdetails",
        //       component: <EmployeeDetails />,
        //       icon: <IoPeopleSharp className="" size={20} />,
        //       subMenu: [],
        //     },
        //     {
        //       name: "Transaction Details",
        //       link: "/investment-Details",
        //       component: <InvestmentDetailsManagement />,
        //       icon: <FaMoneyBillTrendUp className="" size={20} />,
        //       subMenu: [],
        //     },
        //   ],
        //   icon: <RiAccountPinBoxFill className="" size={20} />
        //   ,
        // },
    
        //rounak change
        // {
        //   name: "Contact Admin",
        //   link: "/send_email",
        //   component: <SendEmail />,
        //   icon: <RiMailSendFill className="" size={20} />,
        //   subMenu: [],
        // },
    
        {
          name: "My Pitch Deck",
          link: "/pitch",
          subMenu: [
            {
              name: "My Pitch Deck",
              link: "/pitch/deck",
              component: <PitchDeck />,
              icon: <LuFileStack className="" size={20} />,
              subMenu: [],
            },
            {
              name: "Investor Interested Pitches",
              link: "/investor-insterested-pitches",
              component: <InvestorInterestedPitch />,
              icon: <AiFillLike className="" size={20} />,
              subMenu: [],
            },
          ],
          icon: <FaFilePowerpoint className="" size={20} />,
        },
    
    
        {
          name: "Pitch Deck",
          link: "/VideoConfrencing",
          component: <VideoConfrencing />,
          icon: <MdOutlineVideoCameraFront className="" size={20} />,
          subMenu: [],
        },
    
        {
          name: "Pitch Deck",
          link: "/BlobFileViewer",
          component: <BlobFileViewer />,
          icon: <MdPreview className="" size={20} />,
          subMenu: [],
        },
    
        // {
        //   name: "My Details",
        //   link: "/details",
        //   subMenu: [
        //     {
        //       name: "User Profile",
        //       link: "/userProfile",
        //       component: <Profile />,
        //       icon: <CgProfile className="" size={20} />,
        //       subMenu: [],
        //     },
        //     {
        //       name: "Company Profile",
        //       link: "/company-profile",
        //       component: <CompanyProfile />,
        //       icon: <BsBuildings className="" size={20} />,
        //       subMenu: [],
        //     },
        //     {
        //       name: "Company Details",
        //       link: "/companyDetails",
        //       component: <Details />,
        //       icon: <BiSolidUserDetail className="" size={20} />,
        //       subMenu: [],
        //     },
        //     {
        //       name: "Company Details",
        //       link: "/companyDetails/:uid",
        //       component: <DynamicDetails />,
        //       icon: <BiSolidUserDetail className="" size={20} />,
        //       subMenu: [],
        //     },
    
        // {
        //   name: "Profile Setting",
        //   link: "/profileSetting",
        //   component: <ProfileSetting />,
        //   icon: <RiUserSettingsFill className="" size={20} />,
        //   subMenu: [],
        // },
    
        //   ],
        //   icon: <TbDetails className="" size={20} />
    
        // },
    
        {
          name: " Edit Profile",
          link: "/agreemenView",
          component: <MyMenteesDashboard />,
          icon: <TfiLayoutAccordionList className="" size={20} />,
          subMenu: [],
        },
        {
          name: "Create Courses",
          link: "/BlogsManagement",
          subMenu: [],
          component: <ScheduledSessionsDashboard />,
          icon: <GrBlog className="" size={20} />,
        },
        {
          name: "Classes",
          link: "/certificate",
          subMenu: [],
          component: <UserDashboard />,
          icon: <PiCertificateFill className="" size={20} />,
        },
    
        // {
        //   name: "Training Center",
        //   link: "/trainingCenter",
        //   subMenu: [
        //     {
        //       name: "Onboarding Video",
        //       link: "/trainingCenter/onBoardingVideo",
        //       subMenu: [],
        //       component: <OnBoardingVideo />,
        //       icon: <AiFillVideoCamera className="" size={17} />,
        //     },
        //     {
        //       name: "Blog",
        //       link: "/blog",
        //       subMenu: [],
        //       component: <Blog />,
        //       icon: <FaBlog className="" size={17} />,
        //     },
        //     // {
        //     //   name: "Podcast",
        //     //   link: "/trainingCenter/podcast",
        //     //   subMenu: [],
        //     //   component: <Podcast />,
        //     //   icon: <ImPodcast className="" size={17} />,
        //     // },
        //     // {
        //     //   name: "YouTube",
        //     //   link: "/trainingCenter/youtube",
        //     //   subMenu: [],
        //     //   component: <Youtube />,
        //     //   icon: <ImYoutube className="" size={17} />,
        //     // },
        //   ],
        //   icon: <MdOutlineModelTraining className="" size={20} />,
        // },
    
        // rounak changes
        {
          name: "Profile",
          link: "/profile",
          subMenu: [
            {
              name: "My Account",
              link: "/profile/account",
              subMenu: [
                {
                  name: "Fundseeker Details",
                  link: "/fundseeker_details",
                  component: <FundSeekerDetails />,
                  icon: <TbListDetails className="" size={20} />,
                  subMenu: [],
                },
                {
                  name: "Employee Details",
                  link: "/empdetails",
                  component: <EmployeeDetails />,
                  icon: <IoPeopleSharp className="" size={20} />,
                  subMenu: [],
                },
                {
                  name: "Transaction Details",
                  link: "/investment-Details",
                  component: <InvestmentDetailsManagement />,
                  icon: <FaMoneyBillTrendUp className="" size={20} />,
                  subMenu: [],
                },
    
                {
                  name: "Training Center",
                  link: "/trainingCenter",
                  subMenu: [
                    {
                      name: "Onboarding Video",
                      link: "/trainingCenter/onBoardingVideo",
                      subMenu: [],
                      component: <OnBoardingVideo />,
                      icon: <AiFillVideoCamera className="" size={17} />,
                    },
                    {
                      name: "Blog",
                      link: "/blog",
                      subMenu: [],
                      component: <Blog />,
                      icon: <FaBlog className="" size={17} />,
                    },
                  ],
                  icon: <MdOutlineModelTraining className="" size={20} />,
                },
              ],
              icon: <RiAccountPinBoxFill className="" size={20} />,
            },
    
            {
              name: "Contact Admin",
              link: "/profile/send_email",
              component: <SendEmail />,
              icon: <RiMailSendFill className="" size={20} />,
              subMenu: [],
            },
    
            {
              name: "My Details",
              link: "/profie/details",
              subMenu: [
                {
                  name: "User Profile",
                  link: "/userProfile",
                  component: <Profile />,
                  icon: <CgProfile className="" size={20} />,
                  subMenu: [],
                },
                {
                  name: "Company Profile",
                  link: "/company-profile",
                  component: <CompanyProfile />,
                  icon: <BsBuildings className="" size={20} />,
                  subMenu: [],
                },
                {
                  name: "Company Details",
                  link: "/companyDetails",
                  component: <Details />,
                  icon: <BiSolidUserDetail className="" size={20} />,
                  subMenu: [],
                },
                {
                  name: "Company Details",
                  link: "/companyDetails/:uid",
                  component: <DynamicDetails />,
                  icon: <BiSolidUserDetail className="" size={20} />,
                  subMenu: [],
                },
              ],
              icon: <TbDetails className="" size={20} />,
            },
          ],
          icon: <CgProfile className="" size={20} />,
        },
    
        {
          name: "Docs and Templates",
          link: "/docsAndTemplates",
          component: <DocsAndTemplates />,
          icon: <SiReadthedocs className="" size={20} />,
          subMenu: [],
        },
        // {
        //   name: "View Interested Pitches",
        //   link: "/view-pitches",
        //   component: <PitchDeckAdmin />,
        //   icon: <AiOutlineFolderView className="" size={20} />,
        //   subMenu: [],
        // },
        // {
        //   name: "View All Pitchess",
        //   link: "/view-all-pitchess",
        //   component: <AllPitches />,
        //   icon: <AiOutlineFundView className="" size={20} />,
        //   subMenu: [],
        // },
    
    
    
    
    
        //rounak changes
        {
          name: "Pitches",
          link: "/pitches",
          subMenu: [
            {
              name: "View Interested Pitches",
              link: "/view-pitches",
              component: <PitchDeckAdmin />,
              icon: <AiOutlineFolderView className="" size={20} />,
              subMenu: [],
            },
            {
              name: "View All Pitchess",
              link: "/view-all-pitchess",
              component: <AllPitches />,
              icon: <AiOutlineFundView className="" size={20} />,
              subMenu: [],
            },
          ],
          icon: <FaFilePowerpoint className="" size={20} />,
        },
    
    
    
    
        {
          name: "FAQs",
          link: "/faqs",
          subMenu: [],
          component: <Faqs />,
          icon: <FaQuestionCircle className="" size={20} />,
        },
      ],
      Admin: [
        {
          name: "Operational Team Management",
          link: "/operation-team",
          component: <OperationManagement />,
          icon: <GiTeamIdea className="" size={17} />,
          subMenu: [],
        },
        // {
        //   name: "linkedin",
        //   link: "/linkedin",
        //   component: <Linkedin />,
        //   icon: <ImLinkedin2 className="" size={17} />,
        //   subMenu: [],
        // },
    
        {
          name: "Admin",
          link: "/admin",
          subMenu: [
            {
              name: "User Management",
              link: "/admin/user-management",
              subMenu: [],
              component: <UserManagement />,
              icon: <MdManageAccounts className="" size={17} />,
            },
            {
              name: "Role Management",
              link: "/admin/role-management",
              subMenu: [],
              component: <RoleManagement />,
              icon: <MdOutlineManageAccounts className="" size={17} />,
            },
            {
              name: "Training Video",
              link: "/admin/tranning-video-management",
              subMenu: [],
              component: <TranningVideoManagement />,
              icon: <MdVideoSettings className="" size={17} />,
            },
            {
              name: "Reply FAQs",
              link: "/admin/faqsManagement",
              subMenu: [],
              component: <FaqManagement />,
              icon: <BsReplyFill className="" size={17} />,
            },
          ],
          icon: <RiAdminFill className="" size={20} />,
        },
      ],
    };
  } , [token])

  

  // const nestSidebar = (itm) => {
  //     return <li>
  //         <div class="flex">
  //             <a href={itm.link} class="flex-80 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
  //                 {itm.icon}
  //                 <span class="ms-3">{itm.name}</span>
  //             </a>
  //         </div>
  //         {
  //             itm.subMenu ?
  //                 <>
  //                     <span class="text-sm rotate-180" id="arrow">
  //                         <i class="bi bi-chevron-down"></i>
  //                     </span>
  //                     <ul class="space-y-2 font-medium">
  //                         {
  //                             itm?.subMenu.map((itm) => {
  //                                 return nestSidebar(itm)
  //                             })
  //                         }
  //                     </ul>
  //                 </> : <></>
  //         }
  //     </li>
  // }
  // let Roles = Sidebar_content;

  console.log("open", open);

  //rounak changes
  let mode = useSelector((state) => {
    console.log("adasfdsafasfasfasdfadsf", state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  });

  return (
    <>
      {/* 
        <div style={{backgroundImage:"linear-gradient(to right, #101c4c, #1b0027)"}} class={`flex justify-between h-16 ml-0 px-3 py-4 overflow-y-auto duration-150 bg-topbarLine dark:bg-topbarLine ${sidebarOpen ? 'sm:ml-64' : 'sm:ml-24'}`}>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" onClick={() => {console.log('sdfjhkhkjshd')
            setsidebarOpenn(prev => !prev)}} aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div className='w-20 pt-2 flex dark:text-white'><span className='text-white pr-1'>Logout</span><Unicons.UilSignout /></div>
        </div> */}

      {/* <Unicons.UilArrowCircleLeft size="36" style={{ color: "white" }} /> */}

      {/* <div
        className={`${
          !sidebarOpen && "w-0 md:w-24"
        } z-[2000]  duration-950 transition-all from-white to-black  fixed top-0 left-0 bottom-0 md:static  font-oxygen ${
          !mode ? " bg-gray-900 text-white" : "bg-white text-black"
        }`}
      > */}

<div
  className={`${
    !sidebarOpen ? "w-0 md:w-24" : "w-64"
  } z-[2000]  duration-500 transition-all ease-in-out fixed top-0 left-0 bottom-0 md:static font-oxygen ${
    !mode ? "bg-gray-900 text-white border-r-2 border-gray-700" : "bg-white text-black border-r-2 border-gray-300"
  } shadow-lg hover:shadow-2xl hover:shadow-indigo-500/50`}
>
        <button
          onClick={() => {
            setsidebarOpenn((prev) => !prev);
          }}
          className={`absolute top-4 right-4 md:hidden `}
        >
          {/* <Unicons.UilArrowLeft size="28" style={{ color: "white" }} /> */}
          {/* <img src="../burger.jpg" alt="" /> */}
          <RxHamburgerMenu size={20}/>
        </button>

        {/* <img className="mx-auto w-[240px] mb-4" src="/logo.png" alt="Datayog" /> */}
        {
          // sidebarOpen && <h3 class="text-center text-3xl mb-8 text-white font-bold ">Amansas</h3>
          sidebarOpen ? (
            <>
              <img
                className="block mx-auto w-[120px] my-2"
                src="/skillkronos_logo.png"
              ></img>
              <p className="text-sm  font-oxygen pb-3 text-center ps-1 font-semibold ml-2">
                {
                  rolename=="Admin" &&
                  <>
                  Admin Portal
                  </>
                }
                {
                  rolename=="Mentor" &&
                  <>
Mentor         </>
                } 
                {
                  rolename=="User" &&
                  <>
                  User
                  </>
                }  
              </p>
            </>
          ) : (
            <>
              <img
                className="block mx-auto w-[120px] my-2"
                src="/skillkronos_logo.png"
              />
            </>
          )
        }
       <ul className="space-y-2 border-y-2 h-[70vh] overflow-y-auto font-medium px-2 py-4">
  {Roles?.["all_routes"]?.map((itm) => {
    return (
      <li className="mx-1 transition-all duration-300 transform hover:scale-105 hover:bg-indigo-500 hover:text-white rounded-lg">
        <MenuItem
          setsidebarOpenn={setsidebarOpenn}
          sidebarOpen={sidebarOpen}
          itm={itm}
          value={6}
          size={0}
          checkp={true}
          permission={permission}
          parenting={itm.link}
        />
      </li>
    );
  })}


          {[...(rolename == "Admin" ? Roles?.[rolename] : [])]?.map((itm) => {
            return (
              <li className="mx-1">
                <MenuItem
                  setsidebarOpenn={setsidebarOpenn}
                  sidebarOpen={sidebarOpen}
                  itm={itm}
                  value={6}
                  size={0}
                  checkp={false}
                  permission={{}}
                  parenting={itm.link}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* <aside id="default-sidebar" className={`${sidebarOpen ? 'w-64 left-64' : 'w-24 left-24'} duration-650 transition-all from-white to-black fixed top-0 z-40 h-screen -translate-x-full sm:translate-x-0" aria-label="Sidebar`}>
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-primaryLine ">
                <div>
                    <img className="mx-auto h-20 w-auto mb-4" src="/logo.png" alt="Datayog" />
                </div>
                <ul class="space-y-2 font-medium"> */}

      {/* {
                        Roles["Administrator"].map((itm) => {
                            return nestSidebar(itm)
                        })
                    } */}
      {/* 
                    {
                        Roles["Administrator"].map((itm) => {
                            return <li><MenuItem sidebarOpen={sidebarOpen} itm={itm} value={6} size={0} /></li>
                        })
                    }




                </ul>
            </div>
        </aside> */}
    </>
  );
};

export default Sidebar;
