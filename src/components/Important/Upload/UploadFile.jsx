import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Mentot from "../MentorDashboard/Mentot";

function UploadFile() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoType, setVideoType] = useState("free");
  const [uploadedBy, setUploadedBy] = useState("");

  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);  
    formData.append("video_type", videoType);
    formData.append("uploaded_by", uploadedBy);

    try {
      await axios.post("http://192.168.29.50:8081/upload_file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully!");
      navigate("/file-details");
    } catch (err) {
      alert("Error uploading file.");
      console.error(err);
    }
  };

  return (
    <>
    <Mentot />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      <div className="max-w-lg w-full p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-white mb-6 animate-fadeIn">
          Upload a Video File
        </h1>

        <form className="space-y-5" onSubmit={handleFileUpload}>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium text-white">Select File</label>
            <input
              type="file"
              className="file-input text-white"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium text-white">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              className="input-field bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 rounded-md p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium text-white">Description</label>
            <textarea
              placeholder="Enter description"
              className="input-field h-24 bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 rounded-md p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium text-white">Video Type</label>
            <select
              value={videoType}
              className="input-field bg-gray-800 bg-opacity-50 text-white rounded-md p-2"
              onChange={(e) => setVideoType(e.target.value)}
              required
            >
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium text-white">Uploaded By</label>
            <input
              type="text"
              placeholder="Uploader's name"
              className="input-field bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 rounded-md p-2"
              value={uploadedBy}
              onChange={(e) => setUploadedBy(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 rounded-md text-lg font-semibold text-white transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Upload Video
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default UploadFile;
