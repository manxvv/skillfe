
import React from 'react';
import { useSelector } from 'react-redux';


const TextArea = ({ itm, errors, handleSubmit, setValue, getValues, register, rowNo }) => {

    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
  console.log("afdasdfasfasfasfdasfdadsf",mode)

    console.log(itm, 'sgdfgdfgs')
    return <>
        <textarea {...register(itm.name, {
            required: itm.required ? "This " + " Field is required" : false,
            ...itm.props
        })} defaultValue={itm?.defaultValue} rows={itm.rowNo} className={`text-black-600 ${!mode ? "bg-darkBg text-white":""} border block w-full rounded-md py-1.5 p-2 shadow-sm focus:ring-2 sm:text-sm sm:leading-6 border-gray-400`}></textarea>

        <p className='text-xs text-red-700 '>{errors[itm.name]?.message}</p>
    </>
};

export default TextArea;
