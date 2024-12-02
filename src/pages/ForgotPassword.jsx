import React, { useState } from 'react'
import WithSideImage from '../components/WithSideImage'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import AuthActions from '../store/actions/auth-actions'
import { useDispatch } from 'react-redux'
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

const ForgotPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const [otp, setOtp] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const validatePassword = (password) => {
        const missingCriteria = [];

        if (password.length < 8) {
            missingCriteria.push("at least 8 characters long");
        }
        if (!/(?=.*[a-z])/.test(password)) {
            missingCriteria.push("small letter");
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            missingCriteria.push("capital letter");
        }
        if (!/(?=.*\d)/.test(password)) {
            missingCriteria.push("number");
        }
        if (!/(?=.*[@$!%*?&])/.test(password)) {
            missingCriteria.push("special character");
        }

        return missingCriteria.length === 0 ? true : missingCriteria.join(", ");
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data, "jhbjuy")
        if (!otp) {
            dispatch(AuthActions.postOTP(data, () => {
                navigate('/')
            }))
            setOtp(true)
        }
        else {
            console.log(data, "amarnathjhbjuy")
            dispatch(AuthActions.verifyOTP(data, () => {
                navigate('/login')
            }))
            // setOtp(false)

        }
    }

    return (
        <>
            <WithSideImage sideImage={""} formclass={" h-[60vh]"} labeling={""} form={<div className="mt-10 w-full sm:mx-auto sm:w-full sm:max-w-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black" action="" method="POST">
                    <div>
                        {!otp && (<>
                            <div className="flex items-center justify-between">
                                <label htmlFor="email" className="block text-md leading-6  ">Enter Your Email</label>
                            </div>
                            <div className="mt-2 ">
                                <input id="username" name="username" type="email" autoComplete="username" {...register("email", { required: "This Field is required" })} className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 bg-opacity-50 rounded-md  text-black font-poppins outline-none border-gray-400 focus:border-blue-500 shadow-lg focus:shadow-indigo-500/30  rounded-4" />
                                <p className='text-xs text-red-700 font-poppins'>{errors?.email?.message}</p>
                            </div>
                        </>)}

                        {otp && (<>
                            <div className="flex items-center justify-between">
                                <label htmlFor="otp" className="block text-md leading-6  py-1">Enter OTP</label>
                            </div>
                            <div className="">
                                <input id="otp" name="otp" type="text" autoComplete="otp" {...register("otp", { required: "This Field is required" })} className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 bg-opacity-50 rounded-md  text-black font-poppins outline-none border-gray-400 focus:border-blue-500 shadow-lg focus:shadow-indigo-500/30  rounded-4" />
                                <p className='text-xs text-red-700 font-poppins'>{errors?.email?.message}</p>
                            </div>

                            {/* password */}
                            <div className="flex items-center justify-between mt-2">
                                <label htmlFor="password" className="block text-md  leading-6  py-1">Password</label>
                            </div>
                            <div className="flex">
                                <input
                                    id="password"
                                    name={password}
                                    type={showPassword ? "text" : "password"} // Change type to password
                                    onChange={() => { setPassword(e.target.value) }}
                                    autoComplete="off" // Disable autocomplete
                                    {...register("password", {
                                        required: "This Field is required",
                                        validate: value => validatePassword(value)
                                    })}
                                    className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 bg-opacity-50 rounded-md text-black font-poppins outline-none border-gray-400 focus:border-blue-500 shadow-lg focus:shadow-indigo-500/30 rounded-4"
                                />
                                <div className='relative right-5 top-3' onClick={togglePasswordVisibility}>
                                    {
                                        (!showPassword) ? (<><FaEyeSlash className='cursor-pointer' /></>) : (<><IoEye className=' cursor-pointer' /></>)
                                    }
                                </div>
                                <p className='text-xs text-red-700 font-poppins'>{errors?.password?.message}</p>
                            </div>

                            {/* Confirm password */}
                            <div className="flex items-center justify-between mt-2">
                                <label htmlFor="confirmPassword" className="block text-md  leading-6 py-1">Confirm Password</label>
                            </div>
                            <div className="flex">
                                <input
                                    id="confirmPassword"
                                    name={confirmpassword}
                                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="off"
                                    {...register("confirmPassword", {
                                        required: "This Field is required",
                                        validate: value => value === watch('password') || "Passwords do not match"
                                    })}
                                    className="p-2 block w-full border-b-2 py-1.5 text-black-900 sm:text-sm sm:leading-6 bg-opacity-50 rounded-md text-black font-poppins outline-none border-gray-400 focus:border-blue-500 shadow-lg focus:shadow-indigo-500/30 rounded-4"
                                />
                                <div className='relative right-5 top-3' onClick={togglePasswordVisibility}>
                                    {
                                        (!showPassword) ? (<><FaEyeSlash className=' cursor-pointer' /></>) : (<><IoEye className=' cursor-pointer' /></>)
                                    }
                                </div>
                                <p className='text-xs text-red-700 font-poppins'>{errors?.confirmPassword?.message}</p>
                            </div>
                        </>)}
                    </div>


                    <div className='flex w-full pt-2 gap-8 md:gap-36'>
                        {/* <button onClick={() => {
                navigate('/register')
            }} type="button" className="flex w-full justify-center rounded-full bg-pbutton px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:outline-bg-pbutton hover:animate-pulse buttonAnim border-2 hover:border-2 border-gray-700 hover:border-gray-700">Register</button> */}
                        <button onClick={() => { navigate("/login") }} type="submit" className="bg-pbutton  flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-onHoverButton transition-colors duration-500 w-full">Back</button>
                        <button type="submit" className="bg-pbutton  flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-onHoverButton transition-colors duration-500 w-full">{!otp ? "Send OTP" : "Submit"}</button>
                    </div>
                </form>
                <div className="p-0 m-2 flex justify-center items-center">
                    <div>
                        <p className=" text-sm"> </p>
                    </div>

                </div>
            </div>} />
        </>
    )
}

export default ForgotPassword