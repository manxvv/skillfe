import React, { useState, useEffect, useRef } from 'react';
const WithSideImage = ({ form, labeling, formclass, sideImage }) => {
    return <>
        <div className='w-screen flex bg-newLogin bg-cover bg-repeat-y text-black'>
            {/* <div className={"md:w-1/2 flex bg-no-repeat bg-center overflow-hidden bg-contain " + sideImage}>
            </div> */}
            <div className="md:w-1/2 flex flex-col items-center m-auto " >
                <div className=" my-auto sm:w-full sm:max-w-sm md:max-w-xl p-4 h-screen overflow-auto">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* <img className="mx-auto w-[240px]" src="/logo.png" alt="Datayog" /> */}
                        <div className="mx-auto font-kat text-txt-neavy text-5xl text-center transition-all duration-500 hover:scale-110 flex justify-center items-center">
                            <img src='/removed.png' className='w-2/5 ' />
                        </div>
                        <h2 className="mt-4 text-center text-2xl font-body leading-9 tracking-tight">{labeling}</h2>
                    </div>
                    <div className={`overflow-scroll nobar mb-4 ${formclass}`}>
                        {form}
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default WithSideImage;