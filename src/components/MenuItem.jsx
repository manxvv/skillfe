import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MenuItem = ({ itm, value, sidebarOpen, setsidebarOpenn, size, permission="", checkp, parenting }) => {
    console.log("asfasfasfasfjkasdfghjddfkla", sidebarOpen);
    const sizeArr = ["md", "sm", "sm"]
    const [open, SetOpen] = useState(false)
    const { pathname } = useLocation()
    // const [open,SetOpen] = useState(true)
    // console.log(checkp,"permissionpermission")
    // if(checkp){
    //     console.log("29",permission,itm.link,parenting ? permission[parenting] : permission[parenting] && permission[parenting].indexOf(itm.link)!=-1 ,itm.link , "permissionpermission")
    // }

    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
    return <>
        {
            itm.subMenu.length > 0 ?

                ((!checkp) || (checkp != {} && itm?.link == parenting ? permission[parenting] : permission[parenting] && permission[parenting]?.indexOf(itm.link) != -1)) &&
                <>
                    <div  >
                        <button onClick={((prev) => { SetOpen(!open), console.log(!open) })} type="button" class={`pl-5 pe-2 flex items-center w-full p-2 text-base transition duration-75 rounded-lg group  font-semibold ${!mode? " text-white":""} `} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            {itm.icon}
                            {sidebarOpen &&
                                <>
                                    <span class={"text-" + sizeArr[size] +  `flex-1 ml-3 text-left whitespace-nowrap hover:underline transition-all duration-300 ${!mode? " text-white":""} `} sidebar-toggle-item>{itm.name}
                                    </span>
                                </>
                            }
                            {open ? <Unicons.UilAngleUp /> : <Unicons.UilAngleDown />}
                        </button>
                    </div>
                </>
                :
                ((!checkp) || (checkp && itm.link == parenting ? permission[parenting] : permission[parenting] && permission[parenting].indexOf(itm.link) != -1)) &&
                <div onClick={() => {
                    let mwidth = window.screen.width;
                    console.log("asfsasfdfgasfasdfkllmk", mwidth);
                    if (mwidth <= 768) {
                        setsidebarOpenn(false)
                        console.log("asdfasfasfasfasdfdaf", sidebarOpen);
                    }

                }} className={`pl-5 flex items-center w-full py-3 h-10 first-letter ${itm.link == pathname && " bg-secLine rounded-lg "} ${!mode? " text-white":""}`}>
                    {itm.icon}
                    {
                        sidebarOpen &&
                        <>
                            <Link to={itm.link} state={{ name: itm.name }} class={`text-${sizeArr[size]} pl-3 pe-2 text-base font-semibold  transition-all duration-300 rounded-lg group hover:underline ${!mode? " text-white":""} ${itm.link == pathname && "text-white "}`}>
                                {itm.name}
                            </Link>
                        </>
                    }
                </div>
            // permission[itm?.link] && permission[itm?.link].indexOf(itm?.link) && <>
            //     
            // </> :
            //     permission[parenting] && permission[parenting].indexOf(itm?.link) &&
            //     <div className={`pl-2 flex items-center w-full p-2 first-letter  ${itm.link == pathname && "text-orange-400"}`}>
            //         {itm.icon}
            //         {
            //             sidebarOpen &&
            //             <Link to={itm.link} state={{ name: itm.name }} class={`text-${sizeArr[size]} pl-3 text-base font-normal  transition duration-75 rounded-lg group ${itm.link == pathname && "text-orange-400"}`}>
            //                 {itm.name}
            //             </Link>
            //         }
            //     </div>
        }
        {
            itm.subMenu.length > 0 && open && <ul className='text-black py-2 pl-3 space-y-2' id="dropdown-example">
                {
                    itm.subMenu.map((nestItm) => {
                        return <MenuItem
                            setsidebarOpenn={setsidebarOpenn}
                            itm={nestItm}
                            value={value + 10}
                            sidebarOpen={sidebarOpen}
                            size={size + 1}
                            checkp={checkp}
                            permission={permission}
                            parenting={itm.link}
                        />
                    })
                }
            </ul>
        }
    </>
}
export default MenuItem