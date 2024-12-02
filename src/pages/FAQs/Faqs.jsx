import React, { useEffect } from 'react'
import CommonForm from '../../components/CommonForm'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import AuthActions from '../../store/actions/auth-actions'
import ComposeButton from '../../components/ComposeButton/ComposeButton'

const Faqs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AuthActions.getFaqs());
    }, [])

    const faqsData = useSelector((state) => {
        console.log("amarnathasdfafdasfasfadsf", state);
        let fdata = state?.auth?.faqs
        return fdata
    }) || []

    console.log("aasfasdafsasdf", faqsData);


     //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

    //form implementation section
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()
    let Form = [
        { name: "query", value: "query", type: "text", props: "", required: false, placeholder: "Write Your Query......", classes:`${!mode? " text-black":""}`,},
    ]
    const onTableViewSubmit = (data) => {
        console.log(data, "sdfsdterwertyuiffsdsf")
        // data["uid"] = uid
        dispatch(AuthActions.postFaqs(data))
        reset({ query: '' });
        dispatch(AuthActions.getFaqs());
    }
    

   

    return (
        <div className={`${!mode? "bg-darkBg text-white":""}`}>
            <div className='flex justify-between my-4'>
                <h1 className="text-secLine text-xl sm:text-2xl m-4 font-poppins font-semibold ms-5">
                    Frequently Asked Questions
                </h1>
                <div className='w-[125px] sm:w-[120px] me-5'>
                    <ComposeButton name={"Contact Us"} to={""} />
                </div>
            </div>

            {/* subscribe section */}
            <div className="col-span-2 ">
                <div className='rounded-sm px-4 sm:px-16 md:px-24'>
                    {/* <div className='border border-gray-100 rounded-sm px-4 sm:px-16 sm:py-12 md:px-24 md:py-16'> */}
                    {/* <p className='font-poppins text-xl sm:text-2xl lg:text-3xl p-2 text-center text-secLine font-semibold'>Welcome to Amansas FAQs Section</p> */}
                    <p className='font-poppins text-lg sm:text-xl lg:text-2xl text-center'>Get the Reply of Your Query</p>
                    <div className='flex justify-center flex-wrap'>
                        <CommonForm classes={"w-full md:w-1/2 dark:text-black"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
                        <Button classes={"w-1/10 h-1/2 mt-2 md:mt-5"} onClick={(handleSubmit(onTableViewSubmit))} name="Add Query" />
                    </div>
                </div>
            </div>
            {/* Question Answer section */}
            {/* <div className='border-b-2 border-secLine shadow-md mx-10 py-4 rounded-md hover:shadow-lg hover:rounded-lg hover:scale-[102%] transition-all duration-700 my-4'>
                
                <div>
                    <p className="font-poppins ps-10 py-1">
                        <span className='font-semibold'>1 - </span>Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                
                <div>
                    <p className="font-poppins text-gray-500 dark:text-gray-300 ps-10 py-1">
                        <span className='text-black dark:text-white font-semibold'>Reply - </span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex natus ipsa nam rem dolor optio eligendi minima officia eos accusamus eaque aliquam, repellendus voluptate dolores quod sequi consequatur aperiam est. Commodi blanditiis soluta incidunt fugit ex, sapiente, aut, neque asperiores explicabo quasi voluptatibus consectetur animi architecto eaque vel expedita reiciendis.
                    </p>
                </div>
            </div> */}
            {
                faqsData?.slice().reverse().map((item, index) =>
                    <>
                        <div className='shadow-md mx-4 sm:mx-10 py-4 rounded-md hover:shadow-lg hover:rounded-lg hover:scale-[102%] transition-all duration-700 my-4'>
                            {/* questions */}
                            <div>
                                <p className="font-poppins ps-5 sm:ps-10 py-1 dark:text-white text-justify px-2">
                                    <span className='font-semibold '>
                                        {/* {index + 1} -  */}
                                    </span>
                                    {item?.query}
                                </p>
                            </div>
                            {/* answers */}
                            {
                                (item?.answer) ?
                                    (<>
                                        <p className="font-poppins ps-5 sm:ps-10 py-1 text-secLine text-justify px-2">
                                            <span className={`text-black font-semibold ${!mode? " text-white":""}`}>Answer - </span> {item?.answer}
                                        </p>
                                    </>) :
                                    (<>
                                        <div>
                                            <p className='font-poppins text-gray-500 dark:text-gray-300 ps-10 py-1'>
                                                Please wait for Response.......
                                            </p>
                                        </div>
                                    </>)
                            }
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Faqs
