import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AuthActions from '../../../store/actions/auth-actions'
import { useDispatch } from 'react-redux'
import { backendassetUrl } from '../../../utils/url'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OnBoardingVideo = () => {
    const dispatch = useDispatch()
    // const videoUrl = "../../testing_video.mp4"
    useEffect(() => {
        dispatch(AuthActions.getTranningVideo())
    }, [])
    let videoUrl = useSelector((state) => {
        console.log(state, 'jhhjggg')
        let video = state?.auth?.tranning_video?.dataAll[0]
        console.log(video, 'hhhdhbhhhdhhhhfh')
        return {
            video
        }
    })


    console.log(videoUrl, "sdfasdfasdfasdfasfasf");
    console.log('videoUrl', videoUrl?.video?.file)
    let videoData = {
        heading: videoUrl?.video?.trainningVideoHeading,
        desc: videoUrl?.video?.trainningVideoDescription,
        roleName: videoUrl?.video?.roleName
    }

    let userRole = useSelector((state) => {
        console.log(state, 'jhsfsdfsfsfsfsddfghjkhjggg')
        let user_role = state?.auth?.user?.roleName
        return user_role
    })

    console.log("adfasfadsdghjhbsfdsuserafsdas", userRole);
    useEffect(() => {
        console.log("ghjklasdfasdfas");
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }, [])
    useEffect(() => {
        return () => {
            AOS.refresh();
        };
    }, []);

    let vdata = videoUrl?.video?.file;
    // let nvdata = \ -- /
    let nvData = vdata?.replace('\\', '/')
    console.log("asfasfasfasdfvideo", backendassetUrl + nvData);
    console.log("asfasfasdfvidia", videoUrl?.video);

    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })



    return (
        // <>
        //     <div className='dark:bg-darkBg dark:text-white font-poppins'>
        //         {/* <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-poppins text-secLine pt-2 font-semibold">Training Video for {videoData.roleName}</h1> */}
        //         <h1 className="text-xl md:text-2xl lg:text-3xl font-poppins text-secLine pt-5 font-semibold px-4">{videoData.heading}</h1>
        //         <p
        //             className="capitalize leading-7 font-poppins pt-4 px-4 text-justify ">{videoData.desc}
        //         </p>
        //         <div className='flex justify-center items-center h-[30vh] sm:h-[40vh] md:h-[55vh] lg:h-[60vh] overflow-hidden'>
        //             {/* <video src="../testing_video.mp4" controls>
        //         </video> */}
        //             {/* <iframe className="w-3/4 md:w-2/3 lg:w-2/4 aspect-video rounded-xl overflow-hidden" src={backendassetUrl + nvData}></iframe> */}
        //             {/* <iframe className="w-3/4 md:w-2/3 lg:w-2/4 aspect-video rounded-xl overflow-hidden" src={backendassetUrl + nvData}></iframe> */}
        // {
        //     (videoUrl?.video === undefined) ?
        //         (
        //             <>
        //                 <div className='text-center text-2xl font-poppins font-semibold'>
        //                     Currently! There is no Training Video
        //                 </div>
        //             </>
        //         ) :
        //         (
        //             <>
        //                 <video className='rounded-lg w-[clamp(250px,50%,500px)] lg:my-4' controls src={backendassetUrl + '/' + nvData}></video>
        //             </>
        //         )
        // }
        //         </div>
        //     </div>
        // </>
        <>
            <div className={`text-center full ${!mode? "bg-darkBg text-white":""}`}>
                {/* <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-poppins text-secLine pt-2 font-semibold">Training Video for {videoData.roleName}</h1> */}
                {/* <img className='block mx-auto' width={100} src="../../Amansas_logo.png" alt="" /> */}
                <h1 data-aos="zoom-out" className="text-xl md:text-2xl lg:text-3xl font-poppins text-secLine pt-2 pb-4 font-semibold px-4">
                    {/* {videoData.heading} */}
                    Welcome to AMANSAS!
                </h1>
                {/* <p className="font-poppins pt-4 px-4 text-justify dark:text-white">
                    {videoData?.desc}
                </p> */}
                {
                    (userRole == 'Investor') &&
                    <>
                        <div data-aos="fade-left" className='text-center'>
                            <div className='font-poppins mx-auto w-3/4 text-lg text-justify'>
                                <div className="py-1">
                                    Ready to invest in Africa? Looking for credible project owners? Do you want to save time and resources and close deals in a few steps? Look no further… AMANSAS gives you access to verified, reliable projects addressing the perceived risks and difficulties of investing in Africa.
                                </div>
                                {/* <div className="py-1">
                                    <ul className='list-disc pl-5'>
                                        <li>
                                            Are you an investor seeking meaningful projects with trustworthy project
                                            owners in Africa that align with your vision and values?
                                        </li>
                                    </ul>
                                </div> */}
                                {/* <div className="py-1">
                                    Look no further!
                                </div> */}
                                {/* <div className="py-1">
                                    Go to <a className='text-blue-400 cursor-pointer' href="https://www.amansas.com">www.amansas.com</a>  or download the AMANSAS App on  or Google Playstore, create your profile, and discover high-potential projects on the go. Invest confidently with AMANSAS.
                                </div> */}
                                {/* <div className="py-1">
                                    Your investment journey begins here: Gain access to exclusive projects and
                                    reputable partners through our platform, allowing you to invest your time and
                                    resources confidently in projects that matter.
                                </div>
                                <div className="py-1">
                                    Join us today, register, and create your tailored investment profile. Explore our
                                    portfolio of impactful projects that perfectly match your financing criteria, and
                                    embark on a journey towards sustainable growth and positive change.
                                </div>
                                <div className="py-1">
                                    Together, let's make a difference and build a brighter future for Africa and
                                    beyond.
                                </div> */}
                                <div className='text-2xl py-1 text-center text-heading'>
                                    AMANSAS – your gateway to secure investments.
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    (userRole == 'Fund Seeker') &&
                    <>
                        <div data-aos="fade-left" className='text-center'>
                            <div className='font-poppins mx-auto w-3/4 text-lg text-justify'>
                                <div className="py-1">
                                    Do you have a project in need of funds? Are you ready to showcase your project to a world of funders? At AMANSAS, we connect your projects to a world of reputable investors ready to fund your project.
                                </div>
                                {/* <div className="py-1">
                                    Go to <a className='text-blue-400 cursor-pointer' href="https://www.amansas.com">www.amansas.com</a> or download the AMANSAS App on IOS Appstore or Google Playstore, create your profile, upload your projects, and access funders on the go. Don’t let your project go unnoticed join us and transform your ideas into reality.
                                </div> */}
                                {/* <div className="py-1">
                                    <ul className='list-disc pl-5'>
                                        <li>
                                            Do you have a visionary project ready to make a difference?
                                        </li>
                                        <li>
                                            Are you a dedicated project owner seeking trustworthy and reputable
                                            investors with a proven track record?
                                        </li>
                                        <li>
                                            Or perhaps you&#39;re looking for an investor, eager to find impactful projects
                                            and reliable partners on the African continent that align with his
                                            investment goals?
                                        </li>
                                    </ul>
                                </div>
                                <div className="py-1">
                                    Look no further!
                                </div>
                                <div className="py-1">
                                    We connect dreamers with doers, ensuring that your project finds the support it
                                    deserves. Our platform boasts a diverse pool of investors, each meticulously
                                    vetted to guarantee authenticity and credibility. Say goodbye to wasted time and
                                    energy chasing after false promises – we&#39;ve done the groundwork for you.
                                </div>
                                <div className="py-1">
                                    Your time is precious: That&#39;s why we provide access to a curated selection of
                                    investors with robust financial backing, empowering you to focus your efforts
                                    on bringing your vision to life.
                                </div>
                                <div className="py-1">
                                    Join us today, share the details of your project, and open the door to endless
                                    possibilities. Our investors are ready and waiting to explore your unique
                                    projects that match their investment criteria.
                                </div>
                                <div className="py-1">
                                    Let&#39;s embark on this journey together, turning dreams into reality and making a
                                    lasting impact on the world.
                                </div> */}
                                <div className='text-2xl pt-2 text-center text-heading'>
                                    AMANSAS – where your vision finds its champion.
                                </div>
                            </div>
                        </div>
                    </>
                }
                <div className='flex justify-center items-center  overflow-hidden py-1 md:py-4'>
                    {
                        (videoUrl?.video === undefined) ?
                            (
                                <>
                                    <div className='text-center text-2xl font-poppins font-semibold'>
                                        Currently! There is no Training Video
                                    </div>
                                </>
                            ) :
                            (
                                <>
                                    <video className='rounded-lg w-[clamp(250px,50%,500px)] lg:my-4' controls src={backendassetUrl + '/' + nvData}></video>
                                </>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default OnBoardingVideo
