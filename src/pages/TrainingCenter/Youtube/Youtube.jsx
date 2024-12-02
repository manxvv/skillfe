import React from 'react'
import { useSelector } from 'react-redux';

const Youtube = () => {
  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
  return (
    //rounak change
    <div className={`font-poppins ${!mode ? "bg-darkBg text-white ": ""} `}>
      This is youtube page for the company.
    </div>
  )
}

export default Youtube
