import React, { useState, useEffect } from 'react';
import { Document, Page } from '@react-pdf/renderer';

const PDFViewer = ({ pdfBlob }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(0);


  

  useEffect(() => {
    if (pdfBlob) {
      // Use Blob URL to display PDF
      // const url = URL.createObjectURL(pdfBlob);
      // setPdfUrl  (url);
    }
  }, [pdfBlob]);

  useEffect(() => {
    // Cleanup function to revoke the URL when component unmounts or pdfBlob changes
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl, pdfBlob]);

  useEffect(() => {
    // Update number of pages when pdfBlob changes
    if (pdfBlob) {
      setNumPages(pdfBlob.numPages);
    }
  }, [pdfBlob]);

  return (
    <div>
      {pdfBlob && pdfUrl && (
        <Document file={pdfUrl}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      )}
    </div>
  );
};

export default PDFViewer;
