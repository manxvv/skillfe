import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Urls } from '../../utils/url';
import Api from '../../utils/api';

function Thanku() {


  const fetchData = async () => {
    try {
      const response = await Api.post({url:Urls.fetchdata}) 
      if (response.status === 200) {
        response.data.data
      }
    } catch (err) {
      // setError(err.message); 
      // setLoading(false); // Update loading state
    }
  };
  useEffect(() => {

fetchData();

  }, []); 



  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <img
          src="mail.jpg"
          alt="Mail Confirmation"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          Subscription Successful!
        </h4>
        <p className="text-gray-600 mb-6">
          We are thrilled to have you on board. You will receive a confirmation
          email shortly with all the details.
        </p>
        <Link to='/'>
        <button
          onClick={fetchData}  // Call the API on button click
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
        >
          Go to Dashboard
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Thanku;
