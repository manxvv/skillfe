import React from 'react'
import ProfileCard from './ProfileCard'
import Marquee from "react-fast-marquee";
import { useParams } from 'react-router-dom';
export default function Center() {
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
      
    
  return (
    <div className='min-h-screen bg-[#F6F6F2] mt-20'>
                    <div className="text-center">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mt-10 lg:mt-36">
          You are in Safe Hands with our
        </h2>
        <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mt-2">
          Instructors & Mentors
        </h3>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mt-4">
          Rated highly by Working Professionals Upskilling with us, these
          Instructors and Mentors are working in Top Tech Companies and are
          familiar with the best ways to crack these companies.
        </p>
      </div>


<div className='w-full ] flex flex-wrap gap-4 justify-center pb-10 items-center'>

<Marquee pauseOnHover={true} gradient={false} className="gap-x-4">
          {profileData.map((profile, index) => (
            <div key={index} className="mx-4">
              <ProfileCard profile={profile}
                              onViewProfile={() => navigate(`/profile/${profile.name}`)}

                              />
            </div>
          ))}
        </Marquee>
</div>
    </div>
  )
}
