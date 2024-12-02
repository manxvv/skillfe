import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/url';

const Test = () => {
  const [courseData, setCourseData] = useState({
    course_name: '',
    course_price: '',
    course_description: '',
    course_days_of_week: [],
    course_timing: '',
    course_start_date: '',
    course_video: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCourseData({ ...courseData, course_video: file });
  };

  const handleDaysChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setCourseData({ ...courseData, course_days_of_week: options });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedUser = JSON.parse(localStorage.getItem('user')); 
      const { id, email } = storedUser || {};

      if (!id || !email) {
        alert("User ID or email is missing in localStorage.");
        return;
      }

      const formData = new FormData();

      Object.keys(courseData).forEach((key) => {
        if (courseData[key] && key !== 'course_video') { 
          formData.append(key, courseData[key]);
        }
      });

      if (courseData.course_video) {
        formData.append('course_video', courseData.course_video);
      }

      formData.append('id', id);
      formData.append('email', email);

      const response = await axios.post(`${baseUrl}/create_course`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle response
      alert(response.data.message);
      navigate('/zoom');
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Error creating course");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="m-20 w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          Create a New Course
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="course_name"
            placeholder="Course Name"
            value={courseData.course_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-700"
            required
          />
          <input
            type="number"
            name="course_price"
            placeholder="Course Price"
            value={courseData.course_price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-700"
            required
          />
          <textarea
            name="course_description"
            placeholder="Course Description"
            value={courseData.course_description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-700"
            required
          />
          <select
            name="course_days_of_week"
            multiple
            value={courseData.course_days_of_week}
            onChange={handleDaysChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-700"
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <input
            type="text"
            name="course_timing"
            placeholder="Course Timing (e.g., 10:00 AM)"
            value={courseData.course_timing}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-700"
            required
          />
          <input
            type="date"
            name="course_start_date"
            placeholder="Start Date"
            value={courseData.course_start_date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-gray-700"
            required
          />
          <input
            type="file"
            name="course_video"
            onChange={handleFileChange}
            accept="video/*"
            className="w-full px-4 py-2 border rounded-lg text-gray-700"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-indigo-600 transition-transform transform hover:scale-105"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Test;
