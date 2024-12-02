import React, { useState } from 'react';
import axios from 'axios';

const CertificationPage = () => {
  const [certifications, setCertifications] = useState([]);
  
  const handleCertChange = (cert) => {
    setCertifications((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );
  };

  const handleSubmit = async () => {
    const field = sessionStorage.getItem('field');
    const skills = JSON.parse(sessionStorage.getItem('skills'));

    const data = { field, skills, certifications };

    try {
      const response = await axios.post('http://192.168.29.50:8081/user_data', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Data submitted successfully!');
        window.location.href = '/my-dashboard';
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Submission failed!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-green-500">
      <h1 className="text-3xl font-bold text-white mb-6">Are you interested in Certifications?</h1>
      <div className="space-y-4">
        {['CCNA', 'AWS', 'PMP'].map((cert) => (
          <label key={cert} className="flex items-center space-x-2 text-white">
            <input
              type="checkbox"
              value={cert}
              onChange={() => handleCertChange(cert)}
              className="rounded-full"
            />
            <span>{cert}</span>
          </label>
        ))}
      </div>
      <button
        className="mt-6 bg-white text-green-500 px-6 py-2 rounded-full shadow-md hover:bg-green-100 transition"
        onClick={handleSubmit}
      >
        Start Learning
      </button>
    </div>
  );
};

export default CertificationPage;
