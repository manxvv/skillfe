// import React from "react";
// import Navbar from "./Navbar";
// import { IoCallOutline } from "react-icons/io5";
// import Footer from "./Footer";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// // import Navbar from './Nav';

// const Overview = () => {
//   const features = [
//     {
//       icon: "/trend.png",
//       title: "Investment Experience",
//       description:
//         "Our team boasts a combined 30 years of experience in project funding across Africa and Europe.",
//     },
//     {
//       icon: "/hamburger.png",
//       title: "Verified Investors and Project Owners",
//       description:
//         "Our big data offers insights for smarter decisions, enhancing your experience and increasing your success.",
//     },
//     {
//       icon: "/cloud.png",
//       title: "Big Data",
//       description:
//         "Our Big Data Provides Insights to make Informed and Smarter Decisions, thereby enhancing your Overall Experience.",
//     },
//     {
//       icon: "/loop.png",
//       title: "Value-Added Services",
//       description:
//         "We offer personalized Services based on your specific requirements.",
//     },
//   ];

//   const pricingPlans = [
//     {
//       title: "Basic Project Owner",
//       features: [
//         {
//           para: "Smart Platform",
//         },
//         {
//           para: "Free Access for 3 months",
//         },
//         {
//           para: "Access to Funders",
//         },
//       ],
//     },
//     {
//       title: "Basic Investor",
//       features: [
//         { para: "Smart Platform" },
//         {
//           para: "Free Access for 3 months",
//         },
//         { para: "Unlimited Access to Project Database" },
//       ],
//     },
//     {
//       title: "Value-Added Services (VAS)",
//       features: [
//         {
//           para: "Financial Assessment (Budget Forecast)",
//           gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Financial-Assessment-Budget-Forecast-1",
//         },
//         {
//           para: "Financial Assessment (Budget DCF)",
//           gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Financial-Assessment-DCF-1",
//         },
//         {
//           para: "Business Plan/Teaser/Pitch Deck",
//           gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Business-Plan-Teaser-Picth-Deck",
//         },
//         {
//           para: "Due Diligence",
//           gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Due-Diligence",
//         },
//         {
//           para: "Market Analysis",
//           gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Market-Analysis",
//         },
//         {
//           para: "Organisation of Business Trip",
//           gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Organisation-Management-of-Business-Trip",
//         },
//         {
//           para: "Intercultural Training and Mediation",
//           gate: "https://checkout.reepay.com/#/signup/9c2d298f77c108befb62dab55440c7f0/email",
//         },
//         {
//           para: "Advice on Strategy",
//           gate: "https://checkout.reepay.com/#/signup/9c2d298f77c108befb62dab55440c7f0/email2",
//         },
//       ],
//       // button: "buy now",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Kwame Mensah",
//       project: "African Project",
//       role: "Owner",
//       testimonial:
//         "The AMANSAS Platform has been a game-changer for my agricultural project in Ghana. It provided us the necessary information and connected us with European investors who believe in our vision. Our community has seen tremendous growth thanks to this support.",
//     },
//     {
//       name: "Duduzile Ndlovu",
//       project: "African Project",
//       role: "Owner",
//       testimonial:
//         "Thanks to AMANSAS, my renewable energy project in South Africa secured the investment it needed to take off. The process was seamless, and the AMANSAS team was incredibly supportive throughout. This has opened up new opportunities for sustainable development in our region.",
//     },
//     {
//       name: "Lars Svensson",
//       project: "Investor",
//       role: "Investor",
//       testimonial:
//         "As an investor, I was looking for impactful projects in Africa, and the AMANSAS Platform made it easy to find and fund them. I've been impressed with the transparency and the positive impact my investments have had on local communities. It's a win-win situation.",
//     },
//     {
//       name: "Maria Rossi",
//       project: "Funder",
//       role: "Funder",
//       testimonial:
//         "The MAMAS Platform has revolutionized the way I invest in international projects. Supporting real African entrepreneurs through this platform has been fulfilling both financially and personally. The detailed project proposals and regular updates keep me informed.",
//     },
//   ];

//   return (
//     <>
//       <div className="overflow-x-hidden">
//         <Navbar />
//         {/* <Nav/> */}
//         <div className="bg-[url('/bg.png')] bg-cover bg-center min-h-screen lg:mt-20 flex flex-col lg:px-10 text-justify">
//           <section id="about">
//             <div className="container mt-24 px-4 sm:px-6 lg:px-10">
//               <div className="grid lg:grid-cols-2 items-center gap-8">
//                 {/* Left Section: Text */}
//                 <div className=" text-white space-y-6">
//                   <h1 className="text-md text-start  bg-clip-text text-transparent bg-custom-gradient sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight font-poppins mt-5 sm:mt-3">
//                     Welcome to AMANSAS. An investment platform where real
//                     investors and projects owners meet & close deal.
//                   </h1>
//                   <p className="text-base text-start sm:text-lg lg:text-xl text-gray-300 font-oxygen">
//                     Eliminating all obstacles to funding projects and ventures
//                     in Africa by mitigating risks for all stakeholders using a
//                     blend of proprietary market insights, Artificial
//                     Intelligence, and Blockchain technology.
//                   </p>
//                   <button>
//                     <Link
//                       className="bg-red-500 text-white mt-4 py-3 px-6 rounded-full font-semibold hover:bg-red-600 transition font-poppins duration-300"
//                       to={"/register"}
//                     >
//                       Create free account
//                     </Link>
//                   </button>
               
//                   <div className="flex gap-1">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <svg
//                         key={i}
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6 text-gray-300"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//                         />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Right Section: Images */}
//                 <div className="grid grid-cols-1 gap-4 lg:gap-6 justify-items-center">
//                   <img
//                     className="rounded-lg transform transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl hover:scale-105"
//                     src="/side-img.png"
//                     alt="ESG"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>
//           <div className="   mt-20 px-6 lg:px-10">
//             <div>
//               <h1 className="text-white font-poppins text-start">
//                 Trusted by industry leaders:
//               </h1>

//               <section id="features">
//                 <div className="h-32 sm:h-40">
//                   <div className="relative overflow-hidden max-h-32 sm:max-h-40">
//                     <div className="flex  animate-marquee py-4 sm:py-10 whitespace-nowrap">
//                       <img
//                         src="/partner-1.png"
//                         alt="partner"
//                         className="h-12 sm:h-16 px-4 sm:px-8"
//                       />
//                       <img
//                         src="/partner-2.png"
//                         alt="partner"
//                         className="h-12 sm:h-16 px-4 sm:px-8"
//                       />
                    
//                       <img
//                         src="/partner-4.png"
//                         alt="partner"
//                         className="h-12 sm:h-16 px-4 sm:px-8"
//                       />
//                       <img
//                         src="/partner-5.png"
//                         alt="partner"
//                         className="h-12 sm:h-16 px-4 sm:px-8"
//                       />
//                       <img
//                         src="/partner-7.png"
//                         alt="partner"
//                         className="h-12 sm:h-16 px-4 sm:px-8"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>
//             <section id=" ">
//               <h1 className="text-[#58db14] font-poppins  text-start">
//                 FEATURES AND BENEFITS
//               </h1>
//               <div className="text-white flex flex-col items-center py-8 sm:py-12">
//                 <div className="w-full px-4 sm:px-6 lg:px-4 flex flex-row flex-wrap lg:flex-nowrap gap-4 sm:gap-8 justify-center">
//                   {features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="space-y-3 sm:space-y-4 text-center sm:text-start w-full sm:w-1/2 lg:w-auto lg:flex-1 lg:max-w-xs"
//                     >
//                       <div className="text-green-400 text-3xl sm:text-4xl flex justify-center sm:justify-start">
//                         <img
//                           src={feature.icon}
//                           alt={feature.title}
//                           className="w-8 h-8 sm:w-10 sm:h-10"
//                         />
//                       </div>
//                       <h3 className="text-base sm:text-lg font-poppins font-semibold">
//                         {feature.title}
//                       </h3>
//                       <p className="text-xs sm:text-sm font-oxygen">
//                         {feature.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>

//         <section id="project">
//           <div className="bg-[url('/bg.png')] bg-cover bg-center py-10 flex flex-col items-center px-4 lg:px-10">
//             <h1 className="text-md sm:text-3xl lg:text-4xl text-center mt-5 font-bold leading-tight font-poppins text-white">
//               Ready to meet Verified Funders &<br /> Project Owners?
//             </h1>
//             <p className="text-sm sm:text-base lg:text-lg  text-center mt-5 font-oxygen leading-tight text-gray-400 max-w-4xl">
//               AMANSAS gives you access to Verified, Reliable Projects and
//               Funders, addressing the perceived risks and difficulties of
//               investing in Africa.
//             </p>
//             <div className="flex justify-center mt-6">
//               <Link
//                 className="bg-red-500 font-poppins text-white py-3 px-6 rounded-full font-semibold hover:bg-red-600 transition duration-300"
//                 to="/register"
//               >
//                 Create free account
//               </Link>
//             </div>
//           </div>
//         </section>
//         <div className="bg-[url('/bg.png')]  bg-cover bg-center py-10 flex flex-col lg:px-10 ">
//           <section id="pricing">
//             <div className="text-center mb-8">
//               <h2 className="text-[#58db14] font-semibold uppercase font-poppins tracking-wide">
//                 Pricing
//               </h2>
//               <h3 className="text-3xl text-white font-bold font-poppins mt-2">
//                 3-Month Free Basic Access
//               </h3>
//               <p className="mt-2 text-white font-oxygen text-lg">
//                 Choose the right plan for your business
//               </p>
//             </div>
//           </section>
//           <div className="flex-wrap flex flex-row justify-center gap-8">
//             {pricingPlans.map((plan, index) => (
//               <div
//                 key={index}
//                 className="bg-[#03071240] p-6 rounded-lg text-center shadow-lg"
//               >
//                 <h4 className="text-xl text-white font-semibold font-poppins mb-4">
//                   {plan.title}
//                 </h4>
//                 <ul className="text-left space-y-2 text-gray-400 mb-6">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex font-oxygen items-center">
//                       <span className="text-gray-400 mr-2">✔</span>{" "}
//                       {feature.para}
//                       {plan.button && (
//                         <div className="">
//                           <button className=" hover:text-red-600 ml-5 text-white font-bold py-1 px-2 rounded-full">
//                             <a href={feature.gate}>{plan.button}</a>
//                           </button>
//                         </div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>

//                 {index === 0 && (
//                   <Link
//                     className="px-6 py-3 font-poppins bg-red-500 hover:bg-red-600 rounded-full font-semibold text-white"
//                     to={"/register"}
//                   >
//                     {" "}
//                     Create Your Free Account{" "}
//                   </Link>
//                 )}
//                 {index === 1 && (
//                   <Link
//                     className="px-6 py-3 font-poppins bg-red-500 hover:bg-red-600 rounded-full font-semibold text-white"
//                     to={"/register"}
//                   >
//                     {" "}
//                     Create Your Free Account{" "}
//                   </Link>
//                 )}
//                 {index === 2 && (
//                   <Link
//                     className="px-6 font-poppins py-3 bg-red-500 hover:bg-red-600 rounded-full font-semibold text-white"
//                     to={"/register"}
//                   >
//                     Select Your VAS
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-[url('/bg.png')]  bg-cover bg-center py-10 flex flex-col px-20 ">
//           <div className="text-start mb-8">
//             <section id="testimonials">
//               <h2 className="text-[#58db14] font-semibold uppercase font-poppins tracking-wide">
//                 TESTIMONIALS
//               </h2>
//             </section>

//             <h3 className="text-2xl text-white font-bold font-poppins mt-2">
//               Hear what people are saying about us
//             </h3>
//             <div className=" my-20 px-auto sm:px-6 lg:px-8">
//               <div className="flex flex-row  lg:flex-nowrap	 flex-wrap justify-center gap-8">
//                 {testimonials.map((testimonial, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-800 border border-transparent hover:border-red-500 hover:shadow-lg transition-all duration-300 p-6 rounded-lg shadow-lg"
//                   >
//                     <div className="flex items-center mb-4">
//                       <div className="text-red-700 text-xl">
//                         {/* Stars (static) */}
//                         {Array(5)
//                           .fill("")
//                           .map((_, i) => (
//                             <svg
//                               key={i}
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="currentColor"
//                               viewBox="0 0 24 24"
//                               strokeWidth="2"
//                               stroke="currentColor"
//                               className="w-5 h-5 inline"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M12 4.354l1.528 3.09 3.394.492-2.461 2.399.581 3.384L12 12.597l-3.043 1.622.581-3.384-2.461-2.399 3.394-.492L12 4.354z"
//                               />
//                             </svg>
//                           ))}
//                       </div>
//                     </div>
//                     <p className="text-gray-400 text-sm font-poppins break-words mb-2">
//                       "{testimonial.testimonial}"
//                     </p>
//                     <p className="text-white font-poppins font-semibold hover:text-red-600 transition-all duration-300">
//                       {testimonial.name} – {testimonial.project}
//                     </p>
//                     <p className="font-oxygen text-gray-400">
//                       {testimonial.role}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <section id="contact">
//             <div className="text-white flex flex-col items-center justify-center gap-4 px-6 sm:px-8 md:px-10 lg:px-12">
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins">
//                 Contact Info
//               </h1>
//               <p className="text-gray-400 text-sm sm:text-base font-oxygen text-center">
//                 Let's connect and create something amazing together.
//               </p>
//               <div className="flex flex-col lg:flex-row justify-center mt-8 lg:mt-16 w-full gap-10 lg:gap-16">
//                 <div className="flex items-center  gap-3 sm:gap-8 lg:gap-10">
//                   <div className="border-2 rounded-full p-2 hover:border-red-600 transition duration-300">
//                     <MdOutlineEmail size={30} />
//                   </div>
//                   <div>
//                     <h2 className="font-poppins text-lg sm:text-xl lg:text-2xl">
//                       Email
//                     </h2>
//                     <p className="text-sm sm:text-base font-oxygen text-gray-400">
//                       support@amansas.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 sm:gap-8 lg:gap-10">
//                   <div className="border-2 rounded-full p-2 hover:border-red-600 transition duration-300">
//                     <IoCallOutline size={30} />
//                   </div>
//                   <div>
//                     <h2 className="font-poppins text-lg sm:text-xl lg:text-2xl">
//                       Phone
//                     </h2>
//                     <p className="text-sm sm:text-base font-oxygen text-gray-400">
//                       +49/23819438708
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 sm:gap-8 lg:gap-10">
//                   <div className="border-2 rounded-full p-2 hover:border-red-600 transition duration-300">
//                     <IoLocationOutline size={30} />
//                   </div>
//                   <div>
//                     <h2 className="font-poppins text-lg sm:text-xl lg:text-2xl">
//                       Address
//                     </h2>
//                     <p className="text-sm sm:text-base font-oxygen text-gray-400">
//                       Werler. 96
//                       <br />
//                       59063 Hamm, Germany
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Overview;


import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Accordion from './Accordian'
import SubscriptionCard from './SubscriptionCard'
import FeaturesGrid from './FeaturesGrid'
import { Typewriter } from "react-simple-typewriter";
import ProfileCard from './ProfileCard'
import FormLanding from './FormLanding'

export default function Overview() {


  const profileData = [{
    image: "https://via.placeholder.com/150", 
    logo: "https://via.placeholder.com/30", 
    name: "Kartik Kapoor",
    role: "Software Engineer",
    company: "Coinbase",
    tags: [
      "JavaScript and React Expert",
      "Interview Expert",
      "Roadmap",
      "Pair Programming",
    ],
    description:
      "Hello! I am a Frontend Engineer with 5+ years of experience currently working at Coinbase. I have extensive experience in building enterprise-level web applications.",
    skills: ["JavaScript", "HTML", "CSS", "React", "React Native", "Interview Preparation"],
    price: 60,
    buttonText: "View Profile",
  },
  {
    image: "https://via.placeholder.com/150", 
    logo: "https://via.placeholder.com/30", 
    name: "Kartik Kapoor",
    role: "Software Engineer",
    company: "Coinbase",
    tags: [
      "JavaScript and React Expert",
      "Interview Expert",
      "Roadmap",
      "Pair Programming",
    ],
    description:
      "Hello! I am a Frontend Engineer with 5+ years of experience currently working at Coinbase. I have extensive experience in building enterprise-level web applications.",
    skills: ["JavaScript", "HTML", "CSS", "React", "React Native", "Interview Preparation"],
    price: 60,
    buttonText: "View Profile",
  },
  {
    image: "https://via.placeholder.com/150", 
    logo: "https://via.placeholder.com/30", 
    name: "Kartik Kapoor",
    role: "Software Engineer",
    company: "Coinbase",
    tags: [
      "JavaScript and React Expert",
      "Interview Expert",
      "Roadmap",
      "Pair Programming",
    ],
    description:
      "Hello! I am a Frontend Engineer with 5+ years of experience currently working at Coinbase. I have extensive experience in building enterprise-level web applications.",
    skills: ["JavaScript", "HTML", "CSS", "React", "React Native", "Interview Preparation"],
    price: 60,
    buttonText: "View Profile",
  }
  ]


                              {/* <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                                SkillKronos: <br />
                                <span className="text-blue-600">Revolutionizing
                                    Career <br/>

                                    </span>
                               <Typewriter
          words={[
            "Development",
            "Growth",
            "Boost",
            "Defined Individual",
          ]}
          loop={true}
          
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
          />
          </h1>    */}
                         
                            {/* <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                                SkillKronos targets early-career professionals, recent graduates, and
                                career changers in the career development industry. Our innovative
                                platform addresses the critical need for soft skills training in today's
                                competitive job market.
                            </p> */}

                            {/* Buttons */}
                            {/* <div className="mt-8 font-semibold flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                                    Sign Up
                                </button>
                                <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-100">
                                    <span className="inline-flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                        Download Syllabus
                                    </span>
                                </button>
                            </div> */}



    return (
        <>
            <div className='w-full ' id="contact">

                <Navbar />
                {/* <div className='min-h-screen'> */}
                <section id="home" className=" mt-10  min-h-screen">
                <div className="mx-auto">
    {/* Text Content */}
    <div
      className="text-center bg-[#813588] px-6 sm:px-8 md:px-10 py-5 bg-[url('/bannerl.jpg')] bg-no-repeat bg-cover min-h-screen flex flex-col lg:flex-row-reverse justify-between items-center"
    >
      {/* Form Section */}
      <div className="w-full lg:w-[45%] lg: z-20 mt-8 lg:mt-0">
        <FormLanding />
      </div>


                        </div>
<div id="features">

                        <FeaturesGrid />
</div>

                       
                        <div className="mt-16 w-full">
                            <div className="bg-gradient-to-b mx-auto w-[75%]  rounded-xl from-black to-gray-900  text-white py-12 ">
                                <div className="text-center max-w-4xl mx-auto">
                                    <h2 className="text-2xl font-semibold uppercase tracking-wide">
                                        Move Over traditional courses
                                    </h2>
                                    <h1 className="text-3xl md:text-xl font-bold mt-4">
                                        Start Making Progress with 1:1 Long Term Mentorship
                                    </h1>
                                </div>

                                <div className="mt-12 px-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <h2 className="text-5xl font-bold text-blue-400">30%</h2>
                                        <p className="text-lg font-semibold mt-4">Cost Effective</p>
                                        <p className="text-gray-400 mt-2">Compared to any 6-month course</p>
                                    </div>
                                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <h2 className="text-5xl font-bold text-blue-400">4x</h2>
                                        <p className="text-lg font-semibold mt-4">Results</p>
                                        <p className="text-gray-400 mt-2">As compared to any online course</p>
                                    </div>
                                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                                        <h2 className="text-5xl font-bold text-blue-400">50%</h2>
                                        <p className="text-lg font-semibold mt-4">Faster</p>
                                        <p className="text-gray-400 mt-2">
                                            Get results within 6 months instead of years
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h2 className="text-xl mt-10 sm:text-2xl font-bold text-center text-gray-800">
                                Our Highly Rated
                            </h2>
                            <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mt-2">
                                Outcome-based Programme
                            </h3>

                        <div className='w-full flex flex-wrap gap-4 justify-center items-center'>
                        
                        {profileData.map((profile, index) => (
                          <ProfileCard key={index} profile={profile} />
                        ))}
                        </div>
                        <div className="  ">
                            {/* Header Section */}
                            {/* <div className="text-center max-w-3xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                    Why Choose Our <br/>
                                    <span className='text-blue-600'>
                                       Mentorship Program?
                                      </span>
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    Unlock your potential with personalized mentorship tailored for your growth.
                                </p>
                            </div> */}

                            {/* Features Section */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                                {/* Feature 1 */}
                                {/* <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition">
                                    <div className="text-blue-400 text-5xl mb-4">
                                        <i className="fas fa-user-graduate"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">One-on-One Mentorship</h3>
                                    <p className="text-gray-400">
                                        Personalized guidance from industry experts.
                                    </p>
                                </div> */}
                                {/* Feature 2 */}
                                {/* <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition">
                                    <div className="text-green-400 text-5xl mb-4">
                                        <i className="fas fa-sync-alt"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Real-time Feedback</h3>
                                    <p className="text-gray-400">
                                        Immediate insights for continuous improvement.
                                    </p>
                                </div> */}
                                {/* Feature 3 */}
                                {/* <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition">
                                    <div className="text-yellow-400 text-5xl mb-4">
                                        <i className="fas fa-chalkboard-teacher"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Role-playing Exercises</h3>
                                    <p className="text-gray-400">
                                        Practical scenarios for skill application.
                                    </p>
                                </div> */}
                                {/* Feature 4 */}
                                {/* <div className="bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition">
                                    <div className="text-purple-400 text-5xl mb-4">
                                        <i className="fas fa-industry"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Industry Insights</h3>
                                    <p className="text-gray-400">
                                        Up-to-date knowledge from various sectors.
                                    </p>
                                </div> */}
                            </div>
                        </div>

                        <div className="bg-gray-50 py-10 my-10">
                            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
                                Our Highly Rated
                            </h2>
                            <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mt-2">
                                Outcome-based Programme
                            </h3>

                            <div className="flex min-w-full flex-wrap justify-center gap-4 mt-6">
                                {/* Program Cards */}
                                <div className="bg-orange-500 text-white rounded-lg shadow-lg   p-6">
                                    <h4 className="text-lg font-bold">Transformer</h4>
                                    <p className="text-sm font-semibold mt-1">For Up to 6 Years of Experience</p>
                                    <div className="mt-4">
                                        <h5 className="text-white font-semibold">Program Highlights</h5>
                                        <ul className="list-disc list-inside text-sm text-white mt-2">
                                            <li>Join Top Product-Based Companies</li>
                                            <li>Personal Mentorship</li>
                                            <li>Live Interactive Sessions</li>
                                            <li>Industry Relevant Projects</li>
                                        </ul>
                                    </div>
                                    <button className="mt-4 bg-white text-orange-500 font-bold px-4 py-2 rounded-md shadow hover:bg-gray-100">
                                        Learn More
                                    </button>
                                </div>

                                <div className="bg-gray-800 text-white rounded-lg shadow-lg  p-6">
                                    <h4 className="text-lg font-bold">Evolve</h4>
                                    <p className="text-sm font-semibold mt-1">For 7+ Years of Experience</p>
                                    <div className="mt-4">
                                        <h5 className="text-white font-semibold">Program Highlights</h5>
                                        <ul className="list-disc list-inside text-sm text-white mt-2">
                                            <li>Join Top Product-Based Companies</li>
                                            <li>Personal Mentorship</li>
                                            <li>Advanced DSA & System Design</li>
                                            <li>Leadership Skills Training</li>
                                        </ul>
                                    </div>
                                    <button className="mt-4 bg-white text-gray-800 font-bold px-4 py-2 rounded-md shadow hover:bg-gray-100">
                                        Learn More
                                    </button>
                                </div>

                                <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
                                    <h4 className="text-lg font-bold">Accelerator</h4>
                                    <p className="text-sm font-semibold mt-1">For College Students</p>
                                    <div className="mt-4">
                                        <h5 className="text-white font-semibold">Program Highlights</h5>
                                        <ul className="list-disc list-inside text-sm text-white mt-2">
                                            <li>Command over Problem-Solving in DS & Algo</li>
                                            <li>Computer Science Fundamentals</li>
                                            <li>Industry-Relevant Projects</li>
                                            <li>24/7 Doubt Support</li>
                                        </ul>
                                    </div>
                                    <button className="mt-4 bg-white text-blue-600 font-bold px-4 py-2 rounded-md shadow hover:bg-gray-100">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div  id="pricing">

<SubscriptionCard/>
                        </div>
                       
<Accordion/>
                    </div>
                </section >
<Footer/>
            </div >
            




        </>
    )
}
