import React, { useEffect, useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({ child }) => {
    const [sidebarOpen, setsidebarOpenn] = useState(true)
    // SELECT dbConfig.*,'**********' AS A ,'**********' AS B,'**********' AS C,'**********' AS D,'**********' AS E,'**********' AS F,'**********' AS G FROM dbConfig;
    const navigate = useNavigate()
    // const [Width, setWidth] = useState(window.innerWidth)
    const handleResize = () => {
        console.log(window, "windowwindow");
        setWidth(window.innerWidth, "windowwindow");
        console.log(window.innerHeight, "windowwindow");
    };
    // console.log(Boolean(checkauth), "checkAuthcheckAuth")
    // if(checkAuth==false){
    //     navigate("/login")
    // }
    let checkAuth = localStorage.getItem("auth")
    console.log(checkAuth, "statestatestatestate")
    // let checkauth;
    useEffect(() => {
        if (checkAuth == "false") {
            navigate('/overview')
        }

        window.addEventListener('resize', handleResize);
    }, [checkAuth])

    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

    return <>
        {/* <Sidebar sidebarOpen={sidebarOpen} setsidebarOpenn={setsidebarOpenn}/> */}
        {/* <div style={{width:Width}} className={`flex-1 h-full bg-white p-2 overflow-y-scroll`}> */}
        <div className={`flex-1 h-[100vh] overflow-y-scroll  ${!mode? "bg-darkBg":" bg-white"}`}>
            {/* <div class="flex-1 bg-white p-4"> */}
            {child}
        </div>
    </>
};

export default Layout;
