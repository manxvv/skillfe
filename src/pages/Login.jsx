import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import AuthActions from '../store/actions/auth-actions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import WithSideImage from '../components/WithSideImage';
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Button } from '@material-ui/core';
import axios from 'axios';
import Api from '../utils/api';
import { Urls } from '../utils/url';
// import ButtonWithTooltip from '../components/ButtonWithTooltip';


// import logo from '../../public/Amansas_logo.png'


const Login = () => {
    //Addeing password view functionality
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);  
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()
    let checkauth;
    // let user;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        dispatch(AuthActions.signIn(data, () => {
            
            // localStorage.setItem('response', JSON.stringify(response.data.response));
            navigate('/')
        }))
    }

    // useEffect(() => {
    //     checkauth = localStorage.getItem("auth")
    //     user = localStorage.getItem('user')
    //     console.log(checkauth == "true", "amarnathcheckauthcheckauthcheckafauth")
    //     if (checkauth == "true"  && user == "true") {
    //         navigate('/')
    //     }
    // }, [checkauth , user])

    // useEffect(() => {
    //     const checkauth = localStorage.getItem("auth");
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     console.log(checkauth === "true", "amarnathcheckauthcheckauthcheckafauth");
        
    //     // Update state
    //     setAuth(checkauth);
    //     setUser(user);
    
    //     // Check if user is authenticated
    //     if (checkauth === "true" && user === "true") {
    //       navigate('/');
    //     }
    //   }, []);
    
    // const onSubmit = async (data) => {
    //     dispatch(AuthActions.signIn(data, async () => {
    //         try {

    //             const response = await Api.get({url : Urls.freeTrail +  `?user_id=${JSON.parse(localStorage.getItem('user'))?.id}`}) 
    //             console.log('API Response:', response.data);
    //             localStorage.setItem('response', JSON.stringify(response.data.response));
    //             if (response.data.status === 'active') {
    //                 navigate('/');
    //             } 
    //             else {
    //                 // alert('Free trial expired. Please contact support.');
    //             }
    //             console.log('dkjkdkkdkk')
    //         } catch (error) {
    //             console.error('Error fetching free trial status:', error);
    //         }
    //     }));
    // };

    // useEffect(() => {
    //     checkauth = localStorage.getItem("auth");

    //     if (checkauth === "true") {
    //         navigate('/');
    //     }
    // }, [navigate, checkauth]);



    //     <>
    //     <div className='flex md:w-1/2 bg-sideimage' >

    //     </div>
    //     {/* <div className='h-screen w-screen bg-login' style={{ backgroundPosition: "0% 0%", backgroundSize: "cover" }}> */}
    //     <div className='h-screen    sm:w-1/2'>
    //         <div className="flex flex-col h-[100%] justify-center lg:px-4 p-4">
    //             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //                 <div className="mx-auto font-bold font-kat text-txt-neavy text-4xl text-center font-kat">Amansas</div>
    //                 <h2 className="mt-10 text-center ext-txt-neavy  text-2xl leading-9 tracking-tight font-semibold  font-poppins">Sign in to your account</h2>
    //             </div>


    //         </div>
    //     </div>
    // </>
    return checkauth  ? <></> :
        <>
            <WithSideImage sideImage={"bg-sideimage"} formclass={" h-[60vh]"} labeling={"Sign in to your account"} form={<div className="mt-10 w-full sm:mx-auto sm:w-full sm:max-w-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black" action="" method="POST">
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="email" className="block text-md font-medium leading-6 ">Email<span className="text-red-500">*</span> {/*rounak change*/}</label>
                        </div>
                        <div className="mt-2 flex">
                            <input id="username" name="username" type="email" autoComplete="username" {...register("email", { required: "This Field is required" })} className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 bg-opacity-50 rounded-md  text-black font-poppins outline-none border-gray-400 focus:border-blue-500 shadow-lg focus:shadow-indigo-500/30  rounded-4" />
                            <div className='relative right-5 top-3'>
                                {
                                    <>
                                        <MdEmail />
                                    </>
                                }
                            </div>
                            <p className='text-xs text-red-700 font-poppins'>{errors?.email?.message}</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block font-medium leading-6 ">Password<span className="text-red-500">*</span> {/*rounak change*/}</label>
                        </div>
                        <div className="mt-2 flex">
                            <input id="password" onChange={(e) => setPassword(e.target.value)} name={password} type={showPassword ? 'text' : 'password'} autoComplete="current-password" {...register("password", { required: "This Field is required" })} className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 rounded-md   bg-opacity-50 text-black font-poppins outline-none border-gray-400 focus:border-blue-500 shadow-lg focus:shadow-indigo-500/30" />
                            <div className='relative right-5 top-3' onClick={togglePasswordVisibility}>
                                {
                                    (!showPassword) ? (<><FaEyeSlash className='cursor-pointer' /></>) : (<><IoEye className='cursor-pointer' /></>)
                                }
                            </div>
                            <p className='text-xs text-red-700'>{errors.password?.message}</p>
                        </div>
                        <button className="btn text-sm float-right pt-2  hover:text-secLine transition-all duration-500"><Link to="/forgot-password">Forgot Password?</Link></button>
                    </div>
                    <div className='flex w-full pt-6 flex-wrap gap-4'>
                        {/* <button onClick={() => {
                navigate('/register')
            }} type="button" className="flex w-full justify-center rounded-full bg-pbutton px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:outline-bg-pbutton hover:animate-pulse buttonAnim border-2 hover:border-2 border-gray-700 hover:border-gray-700">Register</button> */}
           
                        <button onClick={()=>{
                            navigate('/overview')
                        }} type="submit" className="bg-pbutton  flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-onHoverButton transition-colors duration-500 w-[45%] ">Back</button>

                        <button  type="submit" className="bg-pbutton  flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-onHoverButton transition-colors duration-500 w-[45%]">Login</button>
                    </div>
                </form>
                <div className="p-0 m-2 flex justify-center items-center">
                    <div>
                        <p className=" text-sm"> </p>
                    </div>
                    <div onClick={() => {
                        navigate('/register')
                    }} >
                        <button className="btn text-sm ml-2 hover:text-secLine transition-all duration-500">Don't have an account? Sign Up</button>

                    </div>
                </div>
            </div>} />
        </>




};

export default Login;
