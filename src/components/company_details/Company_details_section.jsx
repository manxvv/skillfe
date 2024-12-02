import React, { useState } from 'react'
import Table from '../Table'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';


const Company_details_section = ({ reviews, purpose, projectSummary, roleName, name, intro, address, data, industry_focus, relevant_investments }) => {
    const [showAll, setShowAll] = useState(false);
    const initialRelevantInvestments = relevant_investments.data.slice(0, 3);
    const [relevantInvestments, setRelevantInvestments] = useState(initialRelevantInvestments);

    const handleToggleShow = () => {
        if (showAll) {
            setRelevantInvestments(initialRelevantInvestments);
        } else {
            setRelevantInvestments(relevant_investments.data);
        }
        setShowAll(!showAll);
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    onClick={() => handleRatingChange(i)}
                    style={{ cursor: 'pointer', color: i <= rating ? '#ffc107' : '#e4e5e9' }}
                />
            );
        }
        return stars;
    };
    return (
        <>
            <div className='sm:col-span-2 md:order-3 xl:order-2 px-8 xl:px-2 order-3'>
                <p className='text-3xl text-secLine pt-8 pb-2'>
                    {name}
                </p>
                <p className='text-sm font-poppins py-4 flex gap-2'>
                    <FaMapMarkerAlt />
                    <span className='font-semibold' >
                        {address}
                    </span>
                </p>
                {/* <hr className='my-2' /> */}
                <Table classes='' headers={[]} columns={data} commonCols={false} />
                {/* <div className="grid grid-cols-2">
                        <div className='uppercase font-poppins text-sm'>
                            investor type
                        </div>
                        <div className='capitalize text-sm'>
                            {company_details.type}
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className="grid grid-cols-2">
                        <div className='uppercase font-poppins text-sm'>
                            stage focus
                        </div>
                        <div className='capitalize text-sm'>
                            {company_details.stage_focus}
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className="grid grid-cols-2">
                        <div className='uppercase font-poppins text-sm'>
                            Geography focus
                        </div>
                        <div className='capitalize text-sm'>
                            {company_details.geography_focus}
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className="grid grid-cols-2">
                        <div className='uppercase font-poppins text-sm'>
                            fund size / aum
                        </div>
                        <div className='capitalize text-sm'>
                            {company_details.fund_size}
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className="grid grid-cols-2">
                        <div className='uppercase font-poppins text-sm'>
                            investment range
                        </div>
                        <div className='capitalize text-sm'>
                            {company_details.investment_range}
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className="grid grid-cols-2">
                        <div className='uppercase font-poppins text-sm'>
                            sweet spot
                        </div>
                        <div className='capitalize text-sm'>
                            {company_details.sweet_spot}
                        </div>
                    </div> */}
                {/* <hr className='my-2' /> */}



                {
                    roleName == 'Investor' &&
                    <>
                        <div className="grid grid-cols-1 my-3">
                            <div className='uppercase font-poppins text-sm font-bold'>
                                industry focus
                            </div>
                        </div>
                        <div className='flex flex-wrap text-white'>
                            {
                                industry_focus.map((item) => (
                                    <div className="bg-secLine p-1 m-0.5 rounded-md font-poppins">{item}</div>
                                ))
                            }
                        </div>
                    </>
                }
                {/* {
                    roleName == 'Fund Seeker' &&
                    <>
                        <div className="grid grid-cols-1 my-3">
                            <div className='uppercase font-poppins text-sm font-bold'>
                                industry focus
                            </div>
                        </div>
                        <div className='flex flex-wrap text-white'>
                            {
                                industry_focus.map((item) => (
                                    <div className="bg-secLine p-1 m-0.5 rounded-md font-poppins">{item}</div>
                                ))
                            }
                        </div>
                    </>
                } */}

                <div>
                    <p className='font-oxygen text-heading text-2xl font-bold pt-6 pb-2'>About Us</p>
                    <p className='font-poppins text-justify'>
                        {intro}
                    </p>
                </div>
                {
                    roleName == 'Fund Seeker' &&
                    <>
                        <div>
                            <p className='font-oxygen text-heading text-2xl font-bold py-2'>Our Projects Summary</p>
                            <p className='font-poppins text-justify'>
                                {projectSummary}
                            </p>
                        </div>
                        <div className='pb-4 lg:pb-8'>
                            <p className='font-oxygen text-heading text-2xl font-bold py-2'>Our Purpose</p>
                            <p className='font-poppins text-justify'>
                                {purpose}
                            </p>
                        </div>
                    </>
                }
                {
                    roleName == "Investor" &&
                    <>
                        <hr className='mt-2 mb-4' />
                        <p className='font-oxygen text-2xl font-bold py-4 text-heading'>
                            Relevant Investments
                        </p>

                        <Table classes='text-center border border-s-0 border-e-0' headers={relevant_investments.headers} columns={relevantInvestments} commonCols={false} />
                        <div className="text-center">
                            {(
                                <p className="text-sm font-poppins my-2 cursor-pointer" onClick={handleToggleShow}>
                                    {showAll ? 'Show less' : 'Show more'} &gt;
                                </p>
                            )}
                        </div>
                    </>
                }
                {/* Review Sections */}
                <hr />
                {
                    reviews?.length > 0 &&
                    <>
                        <div>
                            <p className="text-heading font-oxygen font-bold text-2xl py-2">Reviews</p>
                            {
                                reviews?.slice().reverse().map((item) =>
                                    <>
                                        <div className='shadow-md p-2 rounded-lg my-2'>
                                            <div className="flex text-2xl justify-center">
                                                {
                                                    renderStars(item?.rating)
                                                }
                                            </div>
                                            
                                            <h3 className="text-md font-poppins font-bold text-secLine py-1">Comment</h3>
                                            <p className='text-sm pl-8 font-poppins text-justify'>
                                                {item?.comment}
                                            </p>
                                            <h3 className="text-md font-poppins font-bold text-secLine py-1">Advice</h3>
                                            <p className='pl-8 text-justify text-sm font-poppins'>
                                                {item?.advice}
                                            </p>
                                        </div>
                                    </>
                                )
                            }

                        </div>
                    </>
                }
                {/* <Table classes='text-center border border-s-0 border-e-0' headers={relevant_investments.headers} columns={relevant_investments.data} commonCols={false} />
                <p className="text-sm text-center font-poppins my-2">
                    Show more  &gt;
                </p> */}
                {/* <div className="grid grid-cols-4 my-2">
                        <div className='col-span-1 sm:col-span-2 pl-4'>
                            Company
                        </div>
                        <div>
                            Cost
                        </div>
                        <div>
                            Round
                        </div>

                    </div> */}
                {/* {
                        relevant_investments.map((item) => (
                            <div className="grid grid-cols-4 my-2 bg-[#f5f4f2] py-2 font-poppins">
                                <div className='col-span-1 sm:col-span-2 pl-4 capitalize'>
                                    {item.company}
                                </div>
                                <div>
                                    {item.cost}
                                </div>
                                <div>
                                    {item.round}
                                </div>
                            </div>
                        ))
                    } */}
            </div>
        </>
    )
}

export default Company_details_section
