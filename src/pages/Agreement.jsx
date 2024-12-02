import React, { useEffect } from 'react'
import Button from "../components/Button";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ALERTS } from '../store/reducers/component-reducer';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from '../store/actions/auth-actions';
import { baseUrl } from '../utils/url';
function Agreement() {
    const [printDisplay, setPrintDisplay] = useState(true)
    const { uid } = useParams();
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    let agreementText = useSelector((state) => {
        return state?.auth?.agreementText || {}
    })
    console.log("amarnathqwertyuioasdfgwerhjkwer", agreementText);
    const handleIAgreeButtonClick = () => {
        if (isChecked) {
            let msgdata = {
                show: true,
                icon: "success",
                buttons: [
                ],
                type: 1,
                text: "Profile Created Successfully"
            }
            dispatch(ALERTS(msgdata))
            navigate('/login')
        } else {
            let msgdata = {
                show: true,
                icon: "error",
                buttons: [
                ],
                type: 1,
                text: "Please check the checkbox."
            }
            dispatch(ALERTS(msgdata))
            console.log('You need to check the checkbox first');
        }
    };
    useEffect(() => {
        dispatch(AuthActions.getAgreement(uid))
    }, [])



    //printing the page
    const handlePrint = () => {
        window.print();
    };


    return (

        <>
            <style>
                {`
          @media print {
            body {
              visibility: hidden;
            }
            .print-content {
              visibility: visible;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        `}
            </style>
            <div className='h-full w-full print-content bg-white'>
                {/* Topbar Section */}
                <div className="flex justify-between bg-white top-0 z-10 h-30 pb-5 ">
                    {/* <h1 className='font-bold text-center text-txt-neavy text-5xl mt-10'>Amansas</h1> */}
                    <div className="mx-auto font-kat text-txt-neavy text-5xl text-center  transition-all duration-500 hover:scale-110 flex justify-center items-center">
                        <img src='../../../Amansas_logo.png' className='w-3/5 ' />
                    </div>
                    <h2 className=" text-2xl font-bold pt-5 tracking-tight text-txt-neavy mt-10  pe-10">{agreementText?.roleName} Agreement</h2>
                </div>
                {/* Personal Information Section */}
                <div className='break-words bg-white'>
                    <h2 className="ps-4 md:ps-10 text-2xl py-3 text-heading font-oxygen font-semibold">Personal Details</h2>
                    <img className='w-72 d-block mx-auto' src={baseUrl + '/' + agreementText.profileImg} alt="" />
                    <div className="lg:grid md:grid md:grid-rows-1 lg:grid-cols-4 gap-2 px-10 md:px-20 mt-4 font-poppins ">
                        {(agreementText.firstName) &&
                            <>
                                <div className='font-semibold py-1'>
                                    First Name
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.firstName}
                                </div>
                            </>
                        }
                        {(agreementText.surname) &&
                            <>
                                <div className='font-semibold py-1'>
                                    SurName
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.surname}
                                </div>
                            </>
                        }
                        {(agreementText.email) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Email
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.email}
                                </div>
                            </>
                        }
                        {(agreementText.mobile) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Mobile No.
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.countryCode} {agreementText.mobile}
                                </div>
                            </>
                        }
                        {(agreementText.address) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Address
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.address}
                                </div>
                            </>
                        }
                        {(agreementText.dob) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Date of Birth
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.dob}
                                </div>
                            </>
                        }
                        {(agreementText.roleName) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Your Role
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.roleName}
                                </div>
                            </>
                        }
                        {(agreementText.briefYourself) &&
                            <>
                                <div className='font-semibold col-span-4 py-2'>
                                    Your Brief Description
                                </div>
                                <div className='py-1 break-words overflow-hidden text-justify col-span-4'>
                                    {agreementText.briefYourself}
                                </div>
                            </>
                        }
                    </div>
                    <h2 className="ps-4 md:ps-10 text-2xl py-3 text-heading font-oxygen font-semibold">Company/Business Details</h2>
                    <img className='w-72 d-block mx-auto' src={baseUrl + '/' + agreementText.clogo} alt="" />
                    <div className="lg:grid md:grid md:grid-rows-1 lg:grid-cols-4 gap-4 md:px-20 mt-4  font-poppins px-10 ">
                        {(agreementText.cName) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Company Name
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.cName}
                                </div>
                            </>
                        }

                        {(agreementText.website) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Company Website
                                </div>
                                <div className='py-1 break-words overflow-hidden'>
                                    <a className='text-blue-600' href={agreementText.website}>{agreementText.website}</a>
                                </div>
                            </>
                        }
                        {(agreementText.cAddress) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Company Address
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.cAddress}
                                </div>
                            </>
                        }
                        {(agreementText.cIdNo) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Company Id No.
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.cIdNo}
                                </div>
                            </>
                        }
                        {(agreementText.position) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Your Position
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.position}
                                </div>
                            </>
                        }
                        {(agreementText.CustomAreSolo) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Solo Owner
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.CustomAreSolo}
                                </div>
                            </>
                        }
                        {(agreementText.mandatoryBusiness) &&
                            <>
                                <div className='font-semibold py-1 me-12'>
                                    Are you mandated to raise capital for the project/business?
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.mandatoryBusiness}
                                </div>
                            </>
                        }
                        {(agreementText.contactPerson) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Contact Person
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.contactPerson}
                                </div>
                            </>
                        }
                        {(agreementText.countryInterest) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Country Interest
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.countryInterest}
                                </div>
                            </>
                        }
                        {(agreementText.funderType) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Funder Type
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.funderType.map((item) =>
                                        <>
                                            {item},&nbsp;&nbsp;
                                        </>)}
                                </div>
                            </>
                        }
                        {(agreementText.industryInterest) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Industry Interest
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.industryInterest.map((item) =>
                                        <>
                                            {item},&nbsp;&nbsp;
                                        </>)}
                                </div>
                            </>
                        }
                        {(agreementText.description) &&
                            <>
                                <div className='font-semibold py-2 col-span-4'>
                                    About Your Company
                                </div>
                                <div className='py-1 break-words overflow-hidden text-justify col-span-4'>
                                    {agreementText.description}
                                </div>
                            </>
                        }
                    </div>
                    <h2 className="ps-4 md:ps-10 text-2xl py-3 text-heading font-oxygen font-semibold">Links Details</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-10 md:px-20 font-poppins ">
                        {(agreementText.portfolioLink) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Personal Portfolio Link
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.portfolioLink}
                                </div>
                            </>
                        }
                        {(agreementText.linkedInLink) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Personal LinkedIn Link
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.linkedInLink}
                                </div>
                            </>
                        }
                        {(agreementText.twitterLink) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Personal Twitter Link
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.twitterLink}
                                </div>
                            </>
                        }
                        {(agreementText.facebookLink) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Personal Facebook Link
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.facebookLink}
                                </div>
                            </>
                        }
                        {(agreementText.companyPortfolioLink) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Company Portfolio Link
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.companyPortfolioLink}
                                </div>
                            </>
                        }
                        {(agreementText.companyLinkedInLink) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Company LinkedIn Link
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.companyLinkedInLink}
                                </div>
                            </>
                        }
                        {(agreementText.companyTwitterLink) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Company Twitter Link
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.companyTwitterLink}
                                </div>
                            </>
                        }
                        {(agreementText.companyFacebookLink) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Company Facebook Link
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.companyFacebookLink}
                                </div>
                            </>
                        }
                    </div>
                    <h2 className="ps-4 md:ps-10 text-2xl py-3 text-heading font-oxygen font-semibold">Project Details</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-10 md:px-20 font-poppins ">
                        {(agreementText.businessName) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Business/Project Name
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.businessName}
                                </div>
                            </>
                        }
                        {(agreementText.fundingStage) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Funding Stage
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.fundingStage}
                                </div>
                            </>
                        }
                        {(agreementText.projectType) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Project Type
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.projectType}
                                </div>
                            </>
                        }
                    </div>
                    <h2 className="ps-4 md:ps-10 text-2xl py-3 text-heading font-oxygen font-semibold">KYC Details</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-10 md:px-20 font-poppins ">
                        {(agreementText.fullLegalName) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Full Legal Name
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.fullLegalName}
                                </div>
                            </>
                        }
                        {(agreementText.gender) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Gender
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.gender}
                                </div>
                            </>
                        }
                        {(agreementText.accountHolderName) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Account Holder Name
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.accountHolderName}
                                </div>
                            </>
                        }
                        {(agreementText.accountNumber) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Account Number
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.accountNumber}
                                </div>
                            </>
                        }
                        {(agreementText.bankAddress) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Bank Address
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.bankAddress}
                                </div>
                            </>
                        }
                        {(agreementText.bankName) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Bank Name
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.bankName}
                                </div>
                            </>
                        }
                        {(agreementText.bicCode) &&
                            <>
                                <div className='font-semibold py-1'>
                                    SWIFT / BIC Code
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.bicCode}
                                </div>
                            </>
                        }
                        {(agreementText.fundSource) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Funding Source
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.fundSource}
                                </div>
                            </>
                        }
                        {(agreementText.tin) &&
                            <>
                                <div className='font-semibold py-1'>
                                    TAX Identification Number
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.tin}
                                </div>
                            </>
                        }


                    </div>
                    {
                        (agreementText.businessRN) &&
                        <h2 className="ps-4 md:ps-10 text-2xl py-3 text-heading">Business Information</h2>
                    }
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-10 md:px-20  font-poppins ">
                        {(agreementText.businessRN) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Business Registration Number
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.businessRN}
                                </div>
                            </>
                        }
                        {(agreementText.businessDesc) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Description of Business Type
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.businessDesc}
                                </div>
                            </>
                        }
                        {(agreementText.customBusinessDesc) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Custom Business Description
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.customBusinessDesc}
                                </div>
                            </>
                        }
                        {(agreementText.businessplan) &&
                            <>
                                <div className='font-semibold py-1'>
                                    Do you have a Business Plan
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.businessplan}
                                </div>
                            </>
                        }
                        {(agreementText.collateralFund) &&
                            <>
                                <div className='font-semibold py-1 me-12'>
                                    Do you have any collateral / guarantee for the funding sought?
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.collateralFund}
                                </div>
                            </>
                        }
                        {(agreementText.customCollateralFund) &&
                            <>
                                <div className='font-semibold py-1 me-12'>
                                    your collateral / guarantee for the funding sought
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.customCollateralFund}
                                </div>
                            </>
                        }
                        {(agreementText.clientInfoSheet) &&
                            <>
                                <div className='font-semibold py-1 me-12'>
                                    Do you have a client Information Sheet?
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.clientInfoSheet}
                                </div>
                            </>
                        }
                        {(agreementText.existingFunds) &&
                            <>
                                <div className='font-semibold py-1 me-12'>
                                    Do you have existing funding/loans?
                                </div>
                                <div className='py-1 break-words overflow-hidden '>
                                    {agreementText.existingFunds}
                                </div>
                            </>
                        }
                    </div>

                    {/* {
                        (agreementText.existingFunds==='Yes') &&
                        <>
                            <h2 className="ps-10 text-2xl py-3 text-heading">Existing Funds Info</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-20 mt-4 font-poppins ">
                            </div>
                        </>
                    } */}

                    {
                        (agreementText.existingFunds === 'Yes') &&
                        <>
                            <h2 className="ps-10 text-2xl py-3 text-heading">Existing Funds Info</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-20 mt-4 font-poppins ">
                            </div>
                        </>
                    }
                </div>
                {/* Content Section */}
                <div className="bg-white">
                    <h2 className="ps-4 md:ps-10 text-2xl py-3 text-heading ">Agreement</h2>
                    {/* <p className=' text-txt-neavy px-10 md:px-20 mt-4 overflow-y-scroll h-[700px] w-full text-justify scrollbar-thin scrollbar-thumb-gray-300 '> */}
                    <p className=' text-txt-neavy px-10 md:px-20 mt-4 w-full text-justify'>
                        <div className={'font-poppins tracking-wider '} dangerouslySetInnerHTML={{ __html: agreementText?.htmlData }}></div>
                    </p>
                    {/* Agreement Section */}

                    <div class="grid grid-cols-1 md:grid-cols-2 md:py-8">
                        <div className='flex gap-8 ps-12 md:ps-24'>
                            <input id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="mt-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onChange={handleCheckboxChange}
                            />
                            <div className='inline md:block'>
                                <p className='font-poppins mt-1'>
                                    By using the AMANSAS platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-evenly py-4 md:py-0'>
                            <div className="w-1/4">
                                <Button onClick={handleIAgreeButtonClick} name="I Agree" disabled={!isChecked} />
                            </div>
                            <div className="w-1/4">
                                <Button onClick={() => { navigate("/kycregister/" + uid) }} classes='' name={"Back"}></Button>
                            </div>
                            <div className="w-1/4">
                                <Button onClick={handlePrint} name="Print" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Agreement

