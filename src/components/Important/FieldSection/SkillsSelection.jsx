import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SkillsSelection = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const handleSkillChange = (skill) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = () => {
    const field = sessionStorage.getItem('field');
    sessionStorage.setItem('skills', JSON.stringify(skills));
    navigate('/certifications');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <h1 className="text-3xl font-bold text-white mb-6">Select Your Skills</h1>
      <div className="space-y-4">
        {['Android Development', 'Backend Development', 'Frontend Development', 'DevOps', 'Data Engineering'].map(
          (skill) => (
            <label key={skill} className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                value={skill}
                onChange={() => handleSkillChange(skill)}
                className="rounded-full"
              />
              <span>{skill}</span>
            </label>
          )
        )}
      </div>
      <button
        className="mt-6 bg-white text-indigo-500 px-6 py-2 rounded-full shadow-md hover:bg-indigo-100 transition"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default SkillsSelection;
