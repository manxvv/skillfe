import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import DataPlusAnalytics from './pages/DataPlusAnalytics'
import LaverView from './pages/LaverView'
import RunQuery from './pages/CustomQuery/RunQuery'
import CommonForm from './components/CommonForm'
import DBConfig from './pages/CustomQuery/DBConfig'
import Modal from './components/Modal'
import TopBar from './components/TopBar'
import BIDashboard from './pages/BusinessIntelligence/BIDashboard'
import QueryBuilderComponent from './pages/CustomQuery/QueryBuilder'
import { PowerBIEmbed } from 'powerbi-client-react'
import { Sidebar_content } from './utils/sidebar_values'
import Navigation from './Navigation'
import SweetAlerts from './components/SweetAlerts'
import { useSelector } from 'react-redux'
import Loaders from './components/Loaders'
import WebSocketClient from './components/WebSocketClient'
import SetupPassword from './pages/SetupPassword'
import Kycregister from './pages/Kycregister'
import Agreement from './pages/Agreement'
import Otp from './pages/Otp'
import ViewPitchDeck from './pages/PitchDeck/ViewPitchDeck'
import PitchDeckAdmin from './pages/PitchDeck/viewPitchDeckAdmin'
import Sidebar from './components/Sidebar'
import Business_Registration from './pages/Business_Registration'
import SetUpRegistration from './pages/setupRegistration'
import Blog from './pages/Blog/Blog'
import OnBoardingVideo from './pages/TrainingCenter/OnboardingVideo/OnBoardingVideo'
import TrainingVideo from './pages/TrainingVideo/TrainingVideo'
import ForgotPassword from "./pages/ForgotPassword"
import confirmNewPassword from "./pages/confirmNewPassword"
import Thankyou from "./pages/landing/Thankyou"
//landing pages
import Overview from "./pages/landing/overview"
import PrivacyPolicy from './pages/landing/PrivacyPolicy'
import TermsOfService from './pages/landing/TermsOfService'
import LegalNotice from './pages/landing/LegalNotice'
import Courses from './components/Important/CoursePages/Courses'
import CertificationPage from './components/Important/FieldSection/CertificationPage'
import FieldSelection from './components/Important/FieldSection/FieldSelection'
import SkillsSelection from './components/Important/FieldSection/SkillsSelection'
import MentorDashboard from './components/Important/MentorDashboard/MentorDashboard'
import MentorProfile from './components/Important/MentorDashboard/MentorProfile'
import Mentot from './components/Important/MentorDashboard/Mentot'
import Message from './components/Important/MentorDashboard/Message'
import MyMenteesDashboard from './components/Important/MentorDashboard/MyMenteesDashboard'
import ScheduledSessionsDashboard from './components/Important/MentorDashboard/ScheduledSessionsDashboard'
import Setting from './components/Important/MentorDashboard/Setting'
import FileDetails from './components/Important/Upload/FileDetails'
import UploadFile from './components/Important/Upload/UploadFile'
import Callback from './components/Important/UserDashboard/Callback'
import InterviewPreparationPage from './components/Important/UserDashboard/InterviewPreparationPage'
import LearningPage from './components/Important/UserDashboard/LearningPage'
import SubscriptionPage from './components/Important/UserDashboard/SubscriptionPage'
import User from './components/Important/UserDashboard/User'
import UserDashboard from './components/Important/UserDashboard/UserDashboard'
import Test from './components/Important/Test'
import Zoom from './components/Important/Zoom'
import Chat from './components/Important/Chat'
import FileList from './components/Important/Upload/FileList'
import Mentors from './pages/landing/mentors'
import MentorCardPreview from './pages/landing/MentorCardPreview'
import ComingSoon from './pages/landing/ComingSoon'
function App() {
    const navigate = useNavigate()
    const unProtectedUrl = [
        {
            url: '/overview',
            component: <Overview/>
        },
        {
            url: '/mentors',
            component: <Mentors/>
        },
        {
            url: '/thankyou/',
            component: <Thankyou/>
        },
        {
            url: '/privacyPolicy',
            component: <PrivacyPolicy/>
        },
        {
            url: '/termsOfService',
            component: <TermsOfService/>
        },
        {
            url: '/legalNotice',
            component: <LegalNotice/>
        },
        
        {
            url: '/login1',
            component: <Login />
        },
        {
            url: '/forgot-password',
            component: <ForgotPassword />
        },
        {
            url: '/confirm-password',
            component: <confirmNewPassword />
        },
        {
            url: '/register',
            component: <Registration />
        },
        {
            url: '/setupRegistration/:uid',
            component: <SetUpRegistration />
        },
        {
            url: '/kycregister/:uid',
            component: <Kycregister />
        }, {
            url: '/agreement/:uid',
            component: <Agreement />
        }, {
            url: '/otp',
            component: <Otp />
        }, {
            url: '/setupPassword/:uid',
            component: <SetupPassword />
        }, {
            url: '/viewPitch/:pitchId',
            component: <ViewPitchDeck />
        }, {
            url: '/businessRegistration/:uid',
            component: <Business_Registration />
        }, {
            url: '/blog',
            component: <Blog />
        }, {
            url: '/courses',
            component: <Courses />
        }, {
            url: '/certifications',
            component: <CertificationPage /> 
        }, {
            url: '/fields',
            component: <FieldSelection />
        }, {
            url: '/skill',
            component: <SkillsSelection />
        }, {
            url: '/mentor-dashboard',
            component: <MentorDashboard />
        }, {
            url: '/mentor-profile',
            component: <MentorProfile />
        }, {
            url: '/mentor',
            component: <Mentot />
        }, {
            url: '/messages',
            component: <Message />
        }, {
            // url: '/my-mentees',
            component: <MyMenteesDashboard />
        }, {
            url: '/Scheduled-sessions',
            component: <ScheduledSessionsDashboard />
        },{
            url: '/setting',
            component: <Setting />
        }, {
            url: '/file-details',
            component: <FileDetails />
        }, {
            url: '/file-list',
            component: <FileList />
        }, {
            url: '/upload-file',
            component: <UploadFile />
        }, {
            url: '/callback',
            component: <Callback />
        }, {
            url: '/interview-prepration',
            component: <InterviewPreparationPage />
        }, {
            // url: '/my-learning',
            component: <LearningPage />
        }, {
            // url: '/subscription',
            component: <SubscriptionPage />
        }, {
            url: '/my-dashboard',
            component: <User />
        }, {
            // url: '/my-classes',
            component: <UserDashboard />
        }, {
            // url: '/create-meeting',
            component: <Test />
        }, {
            // url: '/zoom',
            component: <Zoom />
        }, 
        {   
            url: '/login',
            component: <ComingSoon />
        }, 
        {   
            url: '/profile/:name',
            component: <MentorCardPreview />
        }, '/profile/:name'
           
    ]

    const [sidebarOpen, setsidebarOpenn] = useState(true)
    let checkAuth = localStorage.getItem("auth")
    if (checkAuth == undefined || checkAuth == false) {
        localStorage.setItem("auth", false)
        navigate("/login")
        // navigate("/overview")
    }
    // let checkAuth = useSelector((state) => {
    //     let interdata=state?.auth?.authenticated
    //     return interdata
    // })
    let locdata = useLocation()
    console.log(locdata, "locdatalocdata")
    let unsecured = [
        "login", "register", "setupPassword"
    ]
    return (
        <main className='flex h-screen overflow-y-scroll  justify-center'>
            {
                locdata.pathname != "/login" && <WebSocketClient />
            }
            {/* 
            <div class="flex">
                <div class="w-1/4 bg-gray-200 p-4">
                    <h2 class="text-xl font-semibold mb-4">Sidebar</h2>
                    <ul>
                        <li><a href="#" class="text-blue-500 hover:underline">Link 1</a></li>
                        <li><a href="#" class="text-blue-500 hover:underline">Link 2</a></li>
                        <li><a href="#" class="text-blue-500 hover:underline">Link 3</a></li>
                    </ul>
                </div>
                <div class="flex-1 bg-white p-4">
                    <h1 class="text-2xl font-semibold mb-4">Main Content</h1>
                    <p>This is the main content of your page.</p>
                </div>
            </div> */}
            {/* <div class="flex"> */}
            {/* <div class="flex flex-1"> */}
            {/* <Layout sidebarOpen={sidebarOpen} child={<QueryBuilderComponent />} />  */}
            <Routes>
                {
                    unProtectedUrl.map((itm) => {
                        return <Route path={itm.url} element={itm.component} />
                    })
                }
            </Routes>
            {


                !locdata.pathname.includes("/login")  && !locdata.pathname.includes('/profile') && !locdata.pathname.includes("/forgot-password") && !locdata.pathname.includes("/confirm-password") && !locdata.pathname.includes("/register") && !locdata.pathname.includes("/setupPassword") && !locdata.pathname.includes("/agreement") && !locdata.pathname.includes("/kycregister") && !locdata.pathname.includes("/otp") && !locdata.pathname.includes("/viewPitch") && !locdata.pathname.includes("/companydetail") && !locdata.pathname.includes("/businessRegistration") && !locdata.pathname.includes("/setupRegistration") && !locdata.pathname.includes("/trainingVideoPage") && !locdata.pathname.includes("/blog") && !locdata.pathname.includes("/overview") && !locdata.pathname.includes("/privacyPolicy")&& !locdata.pathname.includes("/termsOfService")&& !locdata.pathname.includes("/legalNotice") && !locdata.pathname.includes("/thankyou") && !locdata.pathname.includes("/mentors")  ?
                    <div className='flex flex-row flex-1'>
                        <Sidebar sidebarOpen={sidebarOpen} setsidebarOpenn={setsidebarOpenn} />
                        <div className='flex relative flex-col flex-1'>
                            <TopBar sidebarOpen={sidebarOpen} setsidebarOpenn={setsidebarOpenn} />
                            <Navigation sidebarOpen={sidebarOpen} />
                        </div>
                    </div>
                    : <></>
            }
            {/* <div className='flex-1'>
                    <BIDashboard />
                </div> */}
            {/* </div> */}
            {/* <div class="flex-1 bg-white p-4"> */}
            {/* <Layout child={<DBConfig />} /> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className='grid grid-cols-12'>
                <div className='bg-red-900 col-span-2'>  
                </div>
                <div className='bg-blue-900 col-span-10'>
                    hiii
                </div>
            </div> */}
            {/* <Modal size={"xl"} children={<>Hello</>} isOpen={sidebarOpen} setIsOpen={setsidebarOpenn}/> */}
            {/* <Layout child={<RunQuery />}/> */}
            {/* <CommonForm/> */}
            {/* <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={1==2} >
                    <Route path='/' element={<Layout child={<DataPlusAnalytics />} />} />
                    <Route path='/dataPlusAnaltyics' element={<Layout child={<DataPlusAnalytics />} />} />
                    <Route path='/laverView' element={<Layout child={<LaverView />} />} />
                    <Route path='/custom_query/run_query' element={<Layout child={<RunQuery />} />} />
                </Route>

            </Routes> */}


            {/* <QueryBuilderComponent/> */}


            <SweetAlerts />

            <Loaders />
        </main>


        // <div className="min-h-screen min-w-screen">
        // <div>

        //     {/* <Login/> */}
        // </div>
    )
}

export default App
