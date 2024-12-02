import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Mentot from "../MentorDashboard/Mentot";

function FileDetails() {
  const { fileId } = useParams();
  const [fileData, setFileData] = useState(null);
  const [fileType, setFileType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFileDetails = async () => {
      try {
        const response = await axios.get(`http://192.168.29.50:8081/get_file/${fileId}`, {
          responseType: "arraybuffer", // Set response type to arraybuffer for binary data
        });

        const contentType = response.headers["content-type"]; // Get content type from headers
        const blob = new Blob([response.data], { type: contentType }); // Create a Blob from the binary data
        const fileURL = URL.createObjectURL(blob); // Create an object URL for the Blob

        setFileData(fileURL); // Store the file URL for display
        setFileType(contentType); // Set the file type for conditional rendering
      } catch (error) {
        console.error("Error fetching file data:", error);
        setError("Error loading file.");
      }
    };

    fetchFileDetails();
    return () => {
      // Cleanup: Revoke the object URL to release memory
      if (fileData) {
        URL.revokeObjectURL(fileData);
      }
    };
  }, [fileId]);

  return (
    <>
    <Mentot />
    <div className="flex flex-col items-center p-6">
      {error ? (
        <p>{error}</p>
      ) : fileData ? (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md w-full space-y-4">
          <h1 className="text-2xl font-semibold">File Preview</h1>

          {/* Display file based on type */}
          {fileType.startsWith("image") ? (
            <img src={fileData} alt="Uploaded file" className="w-full h-auto rounded-lg" />
          ) : fileType.startsWith("video") ? (
            <video src={fileData} controls  autoPlay className="w-full h-auto rounded-lg" />
          ) : (
            <p className="text-gray-500">File format not supported for preview.</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}

export default FileDetails;
