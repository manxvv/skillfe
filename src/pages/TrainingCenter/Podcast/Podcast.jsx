import React from 'react'
import { useSelector } from 'react-redux';

const Podcast = () => {
  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
  return (
    <div className={`font-poppins ${!mode ? "bg-darkBg text-white ": ""} `}>
      This is the podcast page.
    </div>
  )
}

export default Podcast
