import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Mentot from "../MentorDashboard/Mentot";

function FileList() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://192.168.29.50:8081/get_all_files");
        setFiles(response.data.files);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    fetchFiles();
  }, []);

  return (
    <>
      <Mentot />
      <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
        <h1 className="text-4xl font-bold text-white mb-6 animate-fadeIn">Available Videos</h1>

        {/* Upload Video Button */}
        <button
          onClick={() => navigate("/upload-file")}
          className="mb-10 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Upload Video
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl p-4">
          {files.map((file) => (
            <Link
              key={file.file_id}
              to={`/file/${file.file_id}`}
              className="p-6 bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Video Preview */}
              <video
                src={file.preview_url || file.video_url} // Use preview URL or fallback to full video URL
                className="w-full h-48 object-cover rounded-md mb-4"
                controls={false}
                muted
                loop
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                onError={(e) => console.error("Video load error:", e)} // Log if video fails to load
              />

              <h2 className="text-xl font-semibold text-indigo-900">{file.title}</h2>
              <p className="text-gray-600 mt-2">{file.description}</p>
              <p className="text-sm text-gray-500 mt-4">Uploaded by: {file.uploaded_by}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default FileList;
