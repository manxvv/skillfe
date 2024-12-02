import React from "react";

const InterviewPreparationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Interview Preparation Categories
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Technical Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Coding & Algorithms</li>
              <li>Data Structures</li>
              <li>Database Management</li>
              <li>System Design</li>
              <li>Web Development</li>
              <li>Cloud Computing & DevOps</li>
              <li>Machine Learning & AI</li>
            </ul>
          </div>

          {/* Behavioral Skills */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Behavioral Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Common HR Questions</li>
              <li>STAR Method (Situation, Task, Action, Result)</li>
              <li>Communication Skills</li>
              <li>Teamwork and Collaboration</li>
              <li>Leadership Skills</li>
              <li>Problem-solving and Critical Thinking</li>
            </ul>
          </div>

          {/* Industry-Specific Preparation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Industry-Specific Preparation</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>IT & Software</li>
              <li>Finance & Accounting</li>
              <li>Marketing & Sales</li>
              <li>Healthcare</li>
              <li>Engineering</li>
            </ul>
          </div>

          {/* Role-Specific Preparation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Role-Specific Preparation</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Software Engineer/Developer</li>
              <li>Data Scientist</li>
              <li>Project Manager</li>
              <li>Business Analyst</li>
              <li>Designer (UX/UI, Graphic Design)</li>
            </ul>
          </div>

          {/* Aptitude and Logical Reasoning */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Aptitude and Logical Reasoning</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Numerical Aptitude</li>
              <li>Logical Reasoning</li>
              <li>Verbal Ability</li>
            </ul>
          </div>

          {/* Mock Interviews and Practice */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Mock Interviews and Practice</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mock Interview Simulations</li>
              <li>Coding Challenges and Practice Tests</li>
              <li>Behavioral Interview Practice Questions</li>
              <li>Role-Playing Scenarios for Real-World Situations</li>
            </ul>
          </div>

          {/* Resume and LinkedIn Profile Building */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Resume and LinkedIn Profile Building</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Resume Writing Tips</li>
              <li>LinkedIn Profile Optimization</li>
              <li>Cover Letter Writing Tips</li>
            </ul>
          </div>

          {/* Interview Tips and Tricks */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Interview Tips and Tricks</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dress Code and Body Language</li>
              <li>Researching the Company</li>
              <li>Time Management during Interviews</li>
              <li>Following Up After the Interview</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPreparationPage;
