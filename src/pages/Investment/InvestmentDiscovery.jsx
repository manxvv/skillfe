
import React, { useEffect, useState } from "react";
import InvestorDetailsCard from "../../components/InvestorDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import InvestmentDiscoveryActions from "../../store/actions/InvestmentDiscoveryActions";
const InvestmentDiscovery = () => {
  let dispatch = useDispatch();
  const datae = useSelector((state) => {
    let interstatedata = state?.investmentDiscovery?.company_list || [];
    console.log(interstatedata, 'judhbdelet');
    return interstatedata;
  }) || [];
  console.log(datae, "fasdfagresdvsd");

  const [layoutGrid, setLayoutGrid] = useState(false);
  const layoutClasses = layoutGrid
    ? "xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"
    : "grid-cols-1";

  const setLayout = () => {
    if (window.innerWidth < 600) {
      setLayoutGrid(true);
    }
  };
  useEffect(() => {
    dispatch(InvestmentDiscoveryActions.getinvestmentDiscoverylist())
    dispatch(InvestmentDiscoveryActions.getinvestorCrmlist())
    window.addEventListener("resize", setLayout);
    return () => {
      window.removeEventListener("resize", setLayout);
    };
  }, []);

  //Adding fileteration funtinality
  const [typeFilter, setTypeFilter] = useState('');
  const [companyNameFilter, setCompanyNameFilter] = useState('');

  const handleTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
  };

  const handleCompanyNameFilterChange = (e) => {
    setCompanyNameFilter(e.target.value);
  };
  console.log("4567hj8fghjklcvbn", datae.length);
  console.log("4567hj8ffghjkghjklcvbn", datae);
  const filteredData = datae?.filter(item => {
    let stringifiedArray = JSON.stringify(item?.industryInterest);
    const matchesType = stringifiedArray?.toLowerCase()?.includes(typeFilter?.toLowerCase());
    const matchesCompanyName = item?.cName?.toLowerCase()?.includes(companyNameFilter?.toLowerCase());
    return matchesType && matchesCompanyName;

  });
  console.log("asdfasfasfasffielsteer", filteredData);
  console.log("asdfasfasfasffhjkielsteer", filteredData.length);

  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
  return (
    <div className={`p-4 bg-cover ${!mode ? "bg-darkBg ": ""} `}>
      {/* <Investment_Discovery_Filters /> */}
      <div className="w-full justify-end pb-2 hidden sm:flex">
        <div className="w-full justify-end pb-2 hidden sm:flex px-2">
          <input
            type="text"
            placeholder="Filter by Company Name"
            value={companyNameFilter}
            onChange={handleCompanyNameFilterChange}
            className= {`bg-gray-100 px-2 py-1 border border-gray-300 rounded-md mr-2 font-poppins ${!mode ? "bg-darkBg  ": ""} `}
          />
          <input
            type="text"
            placeholder="Filter by Type"
            value={typeFilter}
            onChange={handleTypeFilterChange}
            className={`bg-gray-100 px-2 py-1 border border-gray-300 rounded-md font-poppins ${!mode ? "bg-darkBg  ": ""} `}
          />
        </div>
        <button
          className={`${layoutGrid ? "bg-secLine text-white" : ""
            } font-light border border-gray-300 px-2 rounded-md text-md font-poppins  ${!mode? " text-white":""}`}
          onClick={() => setLayoutGrid(true)}
        >
          Grid
        </button>
        <button
          className={`${layoutGrid ? "" : "bg-secLine text-white"
            } font-light border border-gray-300 px-2 rounded-md text-md font-poppins  ${!mode? " text-white":""}`}
          onClick={() => setLayoutGrid(false)}
        >
          List
        </button>
      </div>
      <div className={`grid ${layoutClasses} gap-4 overflow-auto`}>
        {

          (filteredData.length > 0) ?
            (
              filteredData.map((cur, index) => {
                return (
                  <InvestorDetailsCard
                    key={index}
                    data={cur}
                    layoutGrid={layoutGrid}
                  />
                );
              })
            ) :
            (
              <>
                <div className="flex justify-center items-center h-[70vh]">
                  <p className='font-poppins text-2xl text-heading'>
                    Currently! There is no record Available!.
                  </p>
                </div>
              </>
            )


        }
      </div>
    </div>
  );
};

export default InvestmentDiscovery;




