
import React from 'react';
// import { Link } from 'react-router-dom';
import Comancarts from '../components/Comancarts';
import Linechart from '../components/Linechart';
//import Columnchart from '../components/Columnchart';
import Areabarchart from '../components/Areabarchart';
// import Doublelinechart from '../components/Doublelinechart';
import MultiLineChart from '../components/MultiLineChart';
import NewCommoncarts from '../components/NewCommonCarts';
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
// import { TbBrandNem } from "react-icons/tb";
import ProjectColumnChart from '../components/ProjectColumnChart';
import { useSelector } from 'react-redux';
import { AiFillDollarCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
// import { IoStar } from 'react-icons/io5';

const Cart = () => {
  let data = [
    {
      label: "Today Money",
      value: "$53k",
      img_src: "/myuser.png",
      background: "from-gc1 to-gc1 ",
      // classes: "bg-gradient-to-r from-yellow-200 to-green-300 ",
      classes: "rounded-lg shadow-md",
    },
    {
      label: "Today's Users",
      value: "218",
      img_src: "/Blogs.png",
      background: "from-gc2 to-gc2",
      // classes: "bg-gradient-to-r from-blue-300 to-yellow-600 ",
      classes: "rounded-lg shadow-md",
    },
    {
      label: "Appointment",
      value: "318",
      img_src: "/Appointment.png",
      background: "from-gc3 to-gc3",
      // classes: "bg-gradient-to-r from-purple-500 to-pink-200 ",
      classes: "rounded-lg shadow-md",

    }
  ]

  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

  
  return (
    <>
      <div className={`${!mode? "bg-darkBg":"bg-white"} font-oxygen`}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="md:col-span-1 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {/* {data.map((itm) => {
                return <Comancarts label={itm.label} value={itm.value} background={itm.background} img_src={itm.img_src} classes={itm.classes} ></Comancarts>
              })} */}
              <NewCommoncarts heading="Total users" data="5300" color="#FFE4AD" icon={<AiFillDollarCircle className="text-[var(--gc1)] w-10 h-10 mx-2 " />} barColor="var(--gc1)" />
              <NewCommoncarts heading="Total mentors" data="218" color="#98a9ec" icon={< FaUsers className="text-[var(--gc2)] w-8 h-12 mx-2" />} barColor="var(--gc2)" />
              {/* <NewCommoncarts heading="Appointments" data="318" color="#6fdacf" icon={<TbBrandNem className="text-[var(--gc3)] w-10 h-6" />} barColor="var(--gc3)"/> */}
              {/* <Comancarts label={data[0].label} value={data[0].value} background={data[0].background} img_src={data[0].img_src} classes={data[0].classes} ></Comancarts> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4  ">
          <div className="col-span-3 lg:col-span-2 text-white">
            <Linechart mode = {mode} data={[0, 10, 65, 2, 50, 5, 45, 30, 75]} />
          </div>
          {/* rounak change */}
        <div className={`col-span-3 lg:col-span-4 ${!mode? "bg-darkBg text-white":""} `}>
            {/* <MultiLineChart className="rounded-lg" /> */}
        <ProjectColumnChart className=""/>
          </div>
          {/* <div className="col-span-3 lg:col-span-4">
            <Columnchart />
          </div> */} 
    
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4"> */}
          {/* <div className="md:col-span-3 lg:col-span-3 bg-white">
            <MultiLineChart className="rounded-lg" />
          </div> */}
          {/* <div className="col-span-3 md:col-span-6 lg:col-span-6 "> */}
            {/* <Areabarchart /> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default Cart;
