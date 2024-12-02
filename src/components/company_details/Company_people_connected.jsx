import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";

const Company_people_connected = ({ connected_people, people_type }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div>
        {/* people connected */}
        <p className='text-heading pt-4'>{people_type}</p>
        {connected_people?.slice(0, showAll ? connected_people?.length : 3).map((item) => (
          <div className="grid grid-cols-4 px-4 py-2" key={item?.id}>
            <div>
              <CgProfile size={40}/>
            </div>
            <div className="col-span-3 my-auto mx-1">
              {/* <p className="text-sm capitalize">{item?.memberName_$_form}</p>
              <p className="lowercase font-poppins text-xs">{item?.memberEmailId_$_form}</p> */}
              <p className="text-sm capitalize">{item?.employeeName}</p>
              <p className="lowercase font-poppins text-xs">{item?.email}</p>
            </div>
          </div>
        ))}
        <hr className="my-2 w-3/4 mx-auto" />
        <p onClick={toggleShowAll} className="text-sm text-center font-poppins cursor-pointer">
          {showAll ? 'Show less' : 'Show more'} &gt;
        </p>
      </div>
    </>
  );
};

export default Company_people_connected;
