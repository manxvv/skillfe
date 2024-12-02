import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaLinkedin } from "react-icons/fa";
import { MapPin, Star, Clock, MessageSquare, Heart } from 'lucide-react';
import MentorshipPlanCard from "./MentorCard";
import { useSelector } from "react-redux";

const MentorCardPreview = () => {
    const { name } = useParams();


    const profileData = [
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
            skills: [
                "JavaScript",
                "HTML",
                "CSS",
                "React",
                "React Native",
                "Interview Preparation",
            ],
            price: 60,
            buttonText: "View Profile",
        },
        {
            image: "https://via.placeholder.com/150",
            logo: "https://via.placeholder.com/30",
            name: "Aryan Sood",
            role: "Backend Developer",
            company: "Flipkart",
            tags: ["Node.js Expert", "Database Management", "API Design"],
            description:
                "Backend Developer with 4+ years of experience in designing scalable and efficient APIs for large-scale systems.",
            skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker"],
            price: 55,
            buttonText: "View Profile",
        },
        {
            image: "https://via.placeholder.com/150",
            logo: "https://via.placeholder.com/30",
            name: "Neha Gupta",
            role: "UI/UX Designer",
            company: "Adobe",
            tags: ["Design Systems", "Prototyping", "Figma Expert", "UI/UX Specialist"],
            description:
                "Creative UI/UX Designer with a strong background in building user-centered designs and interactive prototypes.",
            skills: ["Figma", "Sketch", "Photoshop", "UI Prototyping"],
            price: 70,
            buttonText: "Contact",
        },
        {
            image: "https://via.placeholder.com/150",
            logo: "https://via.placeholder.com/30",
            name: "Rohan Verma",
            role: "DevOps Engineer",
            company: "Amazon",
            tags: ["AWS Certified", "Kubernetes Expert", "CI/CD", "Infrastructure"],
            description:
                "Experienced DevOps Engineer specializing in cloud infrastructure, automation, and improving system reliability.",
            skills: ["AWS", "Terraform", "Kubernetes", "Jenkins", "CI/CD"],
            price: 80,
            buttonText: "View Profile",
        },
        {
            image: "https://via.placeholder.com/150",
            logo: "https://via.placeholder.com/30",
            name: "Priya Sharma",
            role: "Data Scientist",
            company: "Microsoft",
            tags: [
                "Machine Learning",
                "Data Visualization",
                "Predictive Analytics",
                "Python",
            ],
            description:
                "Data Scientist with expertise in turning data into actionable insights and developing predictive models.",
            skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Tableau"],
            price: 100,
            buttonText: "Connect",
        },
        {
            image: "https://via.placeholder.com/150",
            logo: "https://via.placeholder.com/30",
            name: "Ananya Roy",
            role: "Full Stack Developer",
            company: "Zomato",
            tags: [
                "Full Stack Developer",
                "JavaScript",
                "React",
                "Node.js",
                "Mentorship",
            ],
            description:
                "Full Stack Developer passionate about building performant and scalable web applications.",
            skills: ["React", "Node.js", "GraphQL", "TypeScript", "Docker"],
            price: 65,
            buttonText: "View Profile",
        },
        {
            image: "https://via.placeholder.com/150",
            logo: "https://via.placeholder.com/30",
            name: "Rahul Mehta",
            role: "Cloud Architect",
            company: "Google",
            tags: [
                "Cloud Infrastructure",
                "AWS",
                "GCP",
                "Scalable Systems",
                "Kubernetes",
            ],
            description:
                "Cloud Architect with 6+ years of experience in designing and implementing cloud infrastructure for large enterprises.",
            skills: ["AWS", "GCP", "Kubernetes", "Terraform", "DevOps"],
            price: 120,
            buttonText: "View Profile",
        },
    ];


    let mode = useSelector(state=>{
        console.log('___selected',state);
        let viewMode = state?.auth?.mode;
        return viewMode;
      })
      
    const profile = profileData.find((p) => p.name === name);

    if (!profile) {
        return <p className="text-center text-red-500">Profile not found!</p>;
    }

    return (
        <div className="flex min-h-screen my-16  flex-col w-full" >
            <Navbar />

            {/* Blue Background Section */}
            <div className="bg-blue-600 w-full  top-0 relative h-1/4 min-h-[50vh] ">
                <FaLinkedin size={40} className="text-white mt-2 float-end" />

                {/* Profile Card Positioned at Top Center */}
                <div className="absolute lg:flex-nowrap md:flex-nowrap flex-wrap flex justify-between top-40 left-10 mt-10">
                    <div className=" flex flex-col w-fit p-5 ">
                        {/* Profile Picture */}
                        <div className="relative">
                            <img
                                src={profile.image}
                                alt="Profile"
                                className="w-48 h-48  rounded-full border-4 border-white shadow-lg"
                            />
                            {/* <img
            src={profile.logo}
            alt="Company Logo"
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-2 border-white shadow-md"
          /> */}
                        </div>

                        {/* Name and Role */}
                        <h2 className="text-4xl font-bold text-gray-800 mt-6">{profile.name}</h2>
                        <p className="text-2xl text-gray-600 font-medium">
                            {profile.role} at <span className="text-blue-600">{profile.company}</span>
                        </p>

                        {/* Description */}
                        <p className="mt-2 text-xl text-start text-gray-700 max-w-xl">
                            {profile.description}
                        </p>
                        {/* Skills */}
                        <div className="flex flex-wrap justify-start gap-2 mt-5">
                            {profile.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 text-sm text-gray-700 py-1 px-3 rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="mt-2 max-w-xs space-y-3">
                            {/* Location */}
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700">India</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700">5.0</span>
                                <a href="#" className="text-gray-600 underline">(1 review)</a>
                            </div>

                            {/* Last Active */}
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700">Active last week</span>
                            </div>

                            {/* Response Time */}
                            <div className="flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700">Usually responds</span>
                                <a href="#" className="text-gray-600 underline">in half a day</a>
                            </div>

                            {/* Save Button */}
                            <button className="flex items-center gap-2 px-6 py-2 border rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
                                <Heart className="w-5 h-5" />
                                <span>Save</span>
                            </button>
                        </div>

                        {/* Button */}
                        {/* <button className="mt-8 bg-blue-600 w-fit text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-blue-700">
          {profile.buttonText}
        </button> */}
                                <div className="border-b-2 mt-3">

                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 ">About</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit, dolor sit accusantium quo suscipit officiis soluta id praesentium architecto debitis sint nostrum? Perspiciatis rem esse consectetur quasi consequatur aut dolorem laboriosam! Vero sequi labore, fugit optio error illum ut?</p>
                                </div>
                
                    <div className="mr-10 mt-10">
                        <MentorshipPlanCard />
                    </div>
                </div>

            </div>

            {/* White Background Content Section */}
            {/* <div className="min-h-screen justify-center bg-[#F6F6F2] flex flex-col items-center py-10">
            </div> */}

            {/* Footer */}
            {/* <Footer /> */}
        </div>

    );
};

export default MentorCardPreview;
