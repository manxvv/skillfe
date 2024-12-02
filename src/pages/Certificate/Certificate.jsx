// import React, { useState } from 'react';
// import html2canvas from 'html2canvas'; // Import html2canvas library

// const Certificate = () => {
//   const [donorName, setDonorName] = useState('');
//   const [donationAmount, setDonationAmount] = useState('');

//   const handleSubmit = async (e) => {
//     console.log("fadfafasdfadsfasfd");
//     e.preventDefault();

//     // Generate certificate
//     const certificateData = {
//       donorName,
//       donationAmount,
//       date: new Date().toLocaleDateString(),
//     };

//     const certificate = generateCertificate(certificateData);
//     console.log("asdfasfasfasdfcertificate",certificate);

//     // Display or download the certificate
//     // For simplicity, let's just open it in a new tab
//     const image = await html2canvas(certificate);
//     const imageURL = image.toDataURL('image/png');
//     window.open(imageURL, '_blank');
//   };

//   const generateCertificate = (data) => {
//     return (
//       <div className="certificate">
//         <h2>Certificate of Donation</h2>
//         <p>This certifies that</p>
//         <h3>{data.donorName}</h3>
//         <p>has generously donated ${data.donationAmount} on {data.date}.</p>
//       </div>
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={donorName}
//         onChange={(e) => setDonorName(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Donation Amount"
//         value={donationAmount}
//         onChange={(e) => setDonationAmount(e.target.value)}
//       />
//       <button onClick={handleSubmit} type="submit">Submit</button>
//     </form>
//   );
// };

// export default Certificate;








// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas'; // Import html2canvas library

// const Certificate = () => {
//   const [donorName, setDonorName] = useState('');
//   const [donationAmount, setDonationAmount] = useState('');
//   const [certificateImage, setCertificateImage] = useState(null);

//   const handleSubmit = async (e) => {
//     console.log("fasfdafafasdfjojljl");
//     e.preventDefault();

//     // Generate certificate
//     const certificateData = {
//       donorName,
//       donationAmount,
//       date: new Date().toLocaleDateString(),
//     };

//     const certificate = generateCertificate(certificateData);

//     // Convert certificate to image
//     const image = await html2canvas(certificate);
//     setCertificateImage(image);
//   };

//   useEffect(() => {
//     if (certificateImage) {
//       // Display or download the certificate
//       // For simplicity, let's just open it in a new tab
//       const imageURL = certificateImage.toDataURL('image/png');
//       window.open(imageURL, '_blank');
//     }
//   }, [certificateImage]);

//   const generateCertificate = (data) => {
//     return (
//       <div className="certificate">
//         <h2>Certificate of Donation</h2>
//         <p>This certifies that</p>
//         <h3>{data.donorName}</h3>
//         <p>has generously donated ${data.donationAmount} on {data.date}.</p>
//       </div>
//     );
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={donorName}
//         onChange={(e) => setDonorName(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Donation Amount"
//         value={donationAmount}
//         onChange={(e) => setDonationAmount(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Certificate;



// import React, { useState, useRef } from 'react';
// import html2canvas from 'html2canvas'; // Import html2canvas library

// const Certificate = () => {
//   const [donorName, setDonorName] = useState('');
//   const [donationAmount, setDonationAmount] = useState('');
//   const certificateRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Generate certificate
//     const certificateData = {
//       donorName,
//       donationAmount,
//       date: new Date().toLocaleDateString(),
//     };

//     // Render certificate
//     renderCertificate(certificateData);
//   };

//   const renderCertificate = (data) => {
//     const certificateContent = (
//       <div className="certificate" ref={certificateRef}>
//         <h2>Certificate of Donation</h2>
//         <p>This certifies that</p>
//         <h3>{data.donorName}</h3>
//         <p>has generously donated ${data.donationAmount} on {data.date}.</p>
//       </div>
//     );

//     // Capture certificate
//     html2canvas(certificateContent).then((canvas) => {
//       // Display or download the certificate
//       // For simplicity, let's just open it in a new tab
//       const imageURL = canvas.toDataURL('image/png');
//       window.open(imageURL, '_blank');
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Your Name"
//         value={donorName}
//         onChange={(e) => setDonorName(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Donation Amount"
//         value={donationAmount}
//         onChange={(e) => setDonationAmount(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Certificate;





import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas'; // Import html2canvas library

const Certificate = () => {
  const [donorName, setDonorName] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const certificateRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate certificate
    const certificateData = {
      donorName,
      donationAmount,
      date: new Date().toLocaleDateString(),
    };

    // Render certificate
    renderCertificate(certificateData);
  };

  const renderCertificate = (data) => {
    const certificateContent = (
      <div className="certificate" ref={certificateRef}>
        <h2>Certificate of Donation</h2>
        <p>This certifies that</p>
        <h3>{data.donorName}</h3>
        <p>has generously donated ${data.donationAmount} on {data.date}.</p>
      </div>
    );

    // Capture certificate
    html2canvas(certificateRef.current).then((canvas) => {
      // Display or download the certificate
      // For simplicity, let's just open it in a new tab
      const imageURL = canvas.toDataURL('image/png');
      window.open(imageURL, '_blank');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={donorName}
        onChange={(e) => setDonorName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Donation Amount"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Certificate;
