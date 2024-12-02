import React from 'react'
import InvestmentCard from '../../components/InvestmentCard'
import { useSelector } from 'react-redux'

const InvestmentTransaction = () => {


    // rounak change
    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

    return (
        <div className={`${!mode? "bg-darkBg text-white":"bg-white"}`}>
            {/* heading section */}
            <div className="hidden sm:grid sm:grid-cols-6 sm:pt-8 sm:mx-4 sm:text-sm md:text-md lg:text-lg sm:font-bold sm:font-poppins text-heading">
                <div className="text-center">

                </div>
                <div className="text-center">
                    Business
                </div>
                <div className="text-center">
                    Investment
                </div>
                <div className="text-center">
                    Share issue Date
                </div>
                <div className="text-center">
                    Type
                </div>
                <div className="text-center">
                    Status
                </div>
            </div>
            {/* card section */}
            <div>
                {
                    (false) ?
                        (<>
                            <InvestmentCard src="../../../logo1.png" business="Puresport" investment="$20.26" date="13/04/2023" type="EIS" status="Submission in Review" />
                            <InvestmentCard src="../../../logo1.png" business="Puresport" investment="$20.26" date="13/04/2023" type="EIS" status="Submission in Review" />
                            <InvestmentCard src="../../../logo1.png" business="Puresport" investment="$20.26" date="13/04/2023" type="EIS" status="Submission in Review" />
                            <InvestmentCard src="../../../logo1.png" business="Puresport" investment="$20.26" date="13/04/2023" type="EIS" status="Submission in Review" />
                        </>) :
                        (<>
                            <div className="flex justify-center items-center h-[70vh]">
                                <p className='font-poppins text-2xl text-heading text-secLine'>
                                    Currently! There is no any Investment Transtacion Detail.
                                </p>
                            </div>
                        </>)
                }

            </div>
        </div>
    )
}

export default InvestmentTransaction











// import React, { useState } from 'react';
// import InvestmentCard from '../../components/InvestmentCard';
// // import { Button } from '@material-ui/core';
// import Button from '../../components/Button';

// const InvestmentTransaction = () => {
//     // State variables for pagination
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10; // Number of cards per page

//     // Dummy data for investment cards (replace with your actual data)
//     const investmentData = [
//         { src: "../../../logo1.png", business: "Puresport1", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport11", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport21", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         { src: "../../../logo1.png", business: "Puresport", investment: "$20.26", date: "13/04/2023", type: "EIS", status: "Submission in Review" },
//         // Add more investment data as needed
//     ];

//     // Calculate index of the first and last item to be displayed on the current page
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = investmentData.slice(indexOfFirstItem, indexOfLastItem);

//     // Function to handle page change
//     const paginate = (pageNumber) => {
//         console.log("asdfasfafasdfdfas", pageNumber);
//         setCurrentPage(pageNumber);
//     }

//     return (
//         <div className='dark:text-white dark:bg-darkBg'>
//             {/* heading section */}
//             <div className="hidden sm:grid sm:grid-cols-6 sm:pt-8 sm:mx-4 sm:text-sm md:text-md lg:text-lg sm:font-bold sm:font-poppins text-secLine">
//                 <div className="text-center"></div>
//                 <div className="text-center">Business</div>
//                 <div className="text-center">Investment</div>
//                 <div className="text-center">Share issue Date</div>
//                 <div className="text-center">Type</div>
//                 <div className="text-center">Status</div>
//             </div>
//             {/* Render Investment Cards */}
//             {currentItems.map((investment, index) => (
//                 <InvestmentCard
//                     key={index}
//                     src={investment.src}
//                     business={investment.business}
//                     investment={investment.investment}
//                     date={investment.date}
//                     type={investment.type}
//                     status={investment.status}
//                 />
//             ))}
//             {/* Pagination */}
//             {/* <div className="pagination">
//                 <button onClick={() => paginate(currentPage - 1)} >Previous</button>
//                 <button onClick={() => paginate(currentPage + 1)} >Next</button>
//             </div> */}
//             <div className="">
//                 <Button classes='w-1/10 float-left m-1' name={"Previous"} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}></Button>
//                 <Button classes='w-1/10 float-right m-1' name={"Next"} onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= investmentData.length}>Next</Button>
//             </div>

//         </div>
//     );
// };

// export default InvestmentTransaction;
