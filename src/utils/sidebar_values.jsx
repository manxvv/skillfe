import * as Unicons from "@iconscout/react-unicons";
import RunQuery from "../pages/CustomQuery/RunQuery";
import QueryBuilderComponent from "../pages/CustomQuery/QueryBuilder";
import BIDashboard from "../pages/BusinessIntelligence/BIDashboard";
import AdvancedQueryBuilderComponent from "../pages/CustomQuery/AdvancedQueryBuilder";
import TestTable from "../pages/DataPlusAnalytics/TestTable";
import CommonPowerBI from "../pages/CommonPowerBI";

import DataPlusAnalytics from "../pages/DataPlusAnalytics";
import LaverView from "../pages/LaverView";
import DBConfig from "../pages/CustomQuery/DBConfig";
import SavedQueries from "../pages/CustomQuery/SavedQueries";
import AlertConfigure from "../pages/AlertMonitoringSystem/AlertConfigure";
import ViewMtandaoComplaints from "../pages/MtandaoComplaints/ViewMtandaoComplaints";
import AlertScheduler from "../pages/AlertMonitoringSystem/AlertScheduler";
import UserManagement from "../pages/Admin/UserManagement/UserManagement";
import RoleManagement from "../pages/Admin/RoleManagement/RoleManagement";
import Registration from "../pages/Registration";
import Cart from "../pages/Cart";
import Carts from "../pages/Carts";
import Home from "../pages/Home";
import InvestmentDiscovery from "../pages/Investment/InvestmentDiscovery";
import Kycregister from "../pages/Kycregister";
import NokiaToolManagementQuery from "../pages/NokiaToolManagement/NokiaToolManagementQuery";
// import NetworkAnalyticsPro from '../pages/DataPlusAnalytics/NetworkAnalyticsPro';
import SiteAnalyticsPro from "../pages/DataPlusAnalytics/SiteAnalyticsPro";
import ProRulesQuery from "../pages/ProRules/ProRulesQuery";
import Portfolio from "../pages/Portfolio";
import Profile from "../pages/Profile";
import PitchDeck from "../pages/PitchDeck/PitchDeck";
import InvestmentTransaction from "../pages/Investment/InvestmentTransaction";
import InvestorCrm from "../pages/Investment/InvestorCrm";
import Details from "../pages/Details";
import InvestorCRMDetails from "../pages/InvestorCRMDetails";
import ViewPitchDeck from "../pages/PitchDeck/ViewPitchDeck";
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
import Podcast from "../pages/TrainingCenter/Podcast/Podcast";
import Youtube from "../pages/TrainingCenter/Youtube/Youtube";
import OnBoardingVideo from "../pages/TrainingCenter/OnboardingVideo/OnBoardingVideo";
import BlogsManagement from "../pages/Admin/BlogsUpload/Blogs";
import TranningVideoManagement from "../pages/Admin/TrainningCenter/TrainningCenter";
import VideoConfrencing from "../components/VideoConfrencing";
import Linkedin from "../pages/Admin/Crowling/lindedin";
import AllPitches from "../pages/PitchDeck/AllPitches";
import InvestorInterestedPitch from "../pages/PitchDeck/InvestorInterestedPitch";
// import Certificate from "../pages/Certificate/Certificate";
// import Certificate from '../view/Certificate'
import CertificateGenerator from "../pages/CertificateGenerator";
import Faqs from "../pages/FAQs/Faqs";
// import FaqsReply from "../pages/Admin/FaqsReply/FaqsReply";
import FaqManagement from "../pages/Admin/FaqsManagemenet/FaqManagement";
import { TiHome } from "react-icons/ti";
import { TbListDetails } from "react-icons/tb";
import { BiSolidUserDetail } from "react-icons/bi";
import { RiMailSendFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LuFileStack } from "react-icons/lu";
import { FcManager } from "react-icons/fc";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineModelTraining } from "react-icons/md";
import { AiFillVideoCamera } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { ImPodcast } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
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
import { ImLinkedin2 } from "react-icons/im";
import { GiTeamIdea } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdVideoSettings } from "react-icons/md";
import { BsReplyFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import ProfileSetting from "../pages/ProfileSetting";
import { RiUserSettingsFill } from "react-icons/ri";
import ChatWithFundSeeker from "../pages/ChatWithFundSeeker/ChatWithFundSeeker";
import { BsFillChatTextFill } from "react-icons/bs";
import MyAccount from "../pages/MyAccount";
import MySubscriptions from "../pages/MySubscriptions";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { FaFilePowerpoint } from "react-icons/fa6";
import { TbDetails } from "react-icons/tb";
import DynamicDetails from "../pages/DynamicDetails";
import { AiFillFilePpt } from "react-icons/ai";
import { useSelector } from "react-redux";
import MyMenteesDashboard from "../components/Important/MentorDashboard/MyMenteesDashboard";
import SubscriptionPage from "../components/Important/UserDashboard/SubscriptionPage";
import UserDashboard from "../components/Important/UserDashboard/UserDashboard";
import ScheduledSessionsDashboard from "../components/Important/MentorDashboard/ScheduledSessionsDashboard";
import Test from "../components/Important/Test";
import Zoom from "../components/Important/Zoom";
import Video from "../components/Important/Video";

let user = JSON.parse(localStorage.getItem("user"));


export const Sidebar_content = {
  
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
          link: "/create-meeting",
          component: <Test />,
          subMenu: [],
        },
        {
          name: "dasdaas",
          link: "/zoom",
          component: <Zoom />,
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
        {
          name: "Analytical Dashboard",
          link: "/investment/dashboard",
          component: <Cart />,
          icon: <MdOutlineModelTraining className="" size={20} />,
          subMenu: [],
        },
        {
          name: "Investment Transactions",
          link: "/investmentTransactions",
          component: <InvestmentTransaction />,
          icon: <FaMoneyBillTransfer className="" size={20} />,
          subMenu: [],
        },
        {
          name: "Chat with Funder",
          link: "/chatWithFundSeeker",
          component: <ChatWithFundSeeker />,
          icon: <BsFillChatTextFill className="" size={20} />,
          subMenu: [],
        },
        // {
        //   name: "My Accounts",
        //   link: "/myAccount",
        //   subMenu: [],
        //   component: <MyAccount />,
        //   icon: <Unicons.UilReact className="" size={17} />,
        // },
        {
          name: "My Subscriptions",
          link: "/mySubscriptions",
          subMenu: [],
          component: <MySubscriptions />,
          icon: <Unicons.UilReact className="" size={17} />,
        },
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

          {
          name: "Project Discovery",
          link: "/investment/discovery",
          component: <InvestmentDiscovery />,
          icon: <MdOutlinePersonSearch className="" size={20} />,
          subMenu: [],
        },
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
      name: "Details",
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
      name: "Management",
      link: "/agreemenView",
      component: <MyMenteesDashboard />,
      icon: <TfiLayoutAccordionList className="" size={20} />,
      subMenu: [],
    },
    {
      name: "Subscription",
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
