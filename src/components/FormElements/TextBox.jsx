import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

const TextBox = ({
  itm,
  errors,
  handleSubmit,
  setValue,
  getValues,
  register,
}) => {
  //Addeing password view functionality
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {
        itm.type != "password" ? <>
          <input
            type={itm.type}
            disabled={itm.disabled ? true : false}
            {...register(itm.name, {
              required: itm.required ? "This " + " Field is required" : false,
              ...itm.props,
            })}
            placeholder={itm.placeholder ? itm.placeholder : ""}
            className="p-2 block w-full border-b-2 py-1.5 text-white-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
            {...itm.props}
          />
          {console.log(errors, [itm.name], itm.required, "errors?.itm?")}
          <p className="text-xs text-red-700 pt-2">{errors[itm.name]?.message}</p>

        </> : <>
          <div className="flex">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              disabled={itm.disabled ? true : false}
              {...register(itm.name, {
                required: itm.required ? "This " + " Field is required" : false,
                ...itm.props,
              })}
              placeholder={itm.placeholder ? itm.placeholder : ""}
              className="p-2 block w-full border-b-2 py-1.5 text-white-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400  shadow-lg focus:shadow-indigo-500/30"
              {...itm.props}
            />
            <div className='relative right-5 top-3' onClick={togglePasswordVisibility}>
              {
                (!showPassword) ? (<><FaEyeSlash className="cursor-pointer" /></>) : (<><IoEye className="cursor-pointer" /></>)
              }
            </div>
          </div>
          {console.log(errors, [itm.name], itm.required, "errors?.itm?")}
          <p className="text-xs text-red-700 pt-2">{errors[itm.name]?.message}</p>


        </>
      }
    </>
  );
};

export default TextBox;
