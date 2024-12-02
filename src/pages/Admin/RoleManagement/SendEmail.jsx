import React from 'react';
import Table from '../../../components/Table';
import 'react-quill/dist/quill.snow.css';
import ComposeButton from '../../../components/ComposeButton/ComposeButton';
import { useSelector } from 'react-redux';


const SendEmail = () => {

  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

  return (
    <div className={`p-4 h-full ${!mode? "bg-darkBg text-white":""}`}>
      {/* compass Container */}
      <>
        <div className="w-1/3 sm:w-1/6 xl:w-1/12 float-right my-8 me-12">
          <div className=''>
            <ComposeButton name="Compose?" to={"support@amansas.com"} />
          </div>
        </div>
      </>
      {/* table section */}
      <div className="">
        <Table classes={` ${!mode? "bg-darkBg text-white":""}`} headers={[]} columns={[["Subject", "Created On", "Sent By", "Send Status", "Sent", "Email Opened"]]} commonCols={false} />
      </div>
    </div>
  );
};

export default SendEmail;
