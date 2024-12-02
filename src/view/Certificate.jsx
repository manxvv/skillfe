import React from 'react';
import moment from 'moment';
import styles from '../assets/styles/certificateGenerator.module.scss';
import jsPDF from 'jspdf';

const Certificate = ({ name, charityOrg, amount, dateOfConductStart, dateOfConductEnd, signature, signatureDetails }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Set font styles
    doc.setFont("times", "italic");

    // Amansas heading
    doc.setTextColor("green");
    doc.setFont("times", "bold");
    doc.setFontSize(40);
    const amansasText = "Amansas";
    const amansasWidth = doc.getStringUnitWidth(amansasText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const amansasX = (doc.internal.pageSize.getWidth() - amansasWidth) / 2;
    doc.text(amansasText, amansasX, 20);

    // Certificate title
    doc.setFontSize(30);
    doc.setTextColor("black");
    const titleText = "CERTIFICATE OF DONATION";
    const titleWidth = doc.getStringUnitWidth(titleText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
    doc.setFont("times", "bold");
    doc.text(titleText, titleX, 40);


    // Reset font color and size
    doc.setTextColor("black");
    doc.setFont("times", "italic");
    doc.setFontSize(20);

    // Other details
    doc.text(`This certificate is proudly awarded to`, 50, 60);



    doc.setFont("times", "italic");
    doc.setTextColor("green");
    doc.setFontSize(30);
    doc.text(`${name}`, 60, 75);

    // Reset font styles
    doc.setTextColor("black");
    doc.setFont("times", "italic");
    doc.setFontSize(20);

    doc.text(`for their generous donation to`, 50, 85);

    doc.setFont("times", "italic");
    doc.setTextColor("green");
    doc.setFontSize(25);
    doc.text(`${charityOrg}`, 60, 95);


    doc.setFont("times", "normal");
    doc.setTextColor("black");
    doc.setFontSize(20);
    doc.text(`Date of Donation: ${dateOfConductStart ? moment(dateOfConductStart).format('MMMM YYYY') : '-'}`, 20, 120);
    // doc.text(`to  ${dateOfConductEnd ? moment(dateOfConductEnd).format('MMMM YYYY') : '-'}`, 20, 110);
    doc.setFont("times", "italic");
    doc.text(`${signatureDetails}`, 130, 140);

    // Save the PDF
    doc.save('certificate.pdf');
  };



  return (
    <div className={styles?.certificateWrapper}>
      <div className={styles?.certificateContainer}>
        {/* <div>Logo Here</div> */}

        <h1>CERTIFICATE OF DONATION</h1>

        <span className={styles?.smallText}>This certificate is proudly awarded to</span>

        <p className={styles?.primaryItalicText}>{name}</p>

        <span className={styles?.smallText}>for their generous donation to</span>

        <h2>{charityOrg}</h2>
        <span>with Amount</span>
        <h4>{amount}</h4>
        <span className='d-inline'>Certificate Issue Date:</span>

        <span className='d-inline'>{`${dateOfConductStart ? moment(dateOfConductStart).format('DD MMMM YYYY') : '-'}`}</span>
        {/* <span className={styles?.smallText}>{`conducted from ${dateOfConductStart ? moment(dateOfConductStart).format('MMMM YYYY') : '-'
          } to ${dateOfConductEnd ? moment(dateOfConductEnd).format('MMMM YYYY') : '-'}`}</span> */}

        <div className={styles?.signatureBlock}>
          <img className={styles?.signatureImage + 'd-block mx-auto h-12'} src={signature?.preview} alt='' />

          {/* <span className={styles?.horizontalBar} /> */}

          <span className={styles?.smallText}>{signatureDetails}</span>
        </div>
      </div>

      <button className={styles.certBtn} style={{ marginTop: ' 3rem' }} onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  );
};

export default Certificate;
