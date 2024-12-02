import React from 'react';
import { useNavigate } from 'react-router-dom';

const FieldSelection = () => {
  const navigate = useNavigate();
  const handleSubmit = (field) => {
    sessionStorage.setItem('field', field);
    navigate('/skill');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-3xl font-bold text-white mb-6">Select Your Field</h1>
      <div className="space-y-4">
        {['Software Development', 'Data Analysis', 'Information Technology'].map((field) => (
          <button
            key={field}
            className="bg-white text-blue-500 px-6 py-2 rounded-full shadow-md hover:bg-blue-100 transition"
            onClick={() => handleSubmit(field)}
          >
            {field}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FieldSelection;
