import React, { useState,useEffect } from "react";
import Button from "./Button";
import InvestmentDiscoveryActions from "../store/actions/InvestmentDiscoveryActions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import CommonForm from "./CommonForm";
import { useNavigate } from "react-router-dom";
import CstmButton from "./CstmButton";
import ToggleButton from "./ToggleButton";
import AlertConfigurationActions from "../store/actions/alertConfiguration-actions";
import {
  UilCheckCircle,
  UilTimesCircle,
  UilEnvelopeAlt,
  UilEye,
} from "@iconscout/react-unicons";
import DeckManagementActions from "../store/actions/deckManagement-actions";
import { ALERTS } from "../store/reducers/component-reducer";
import ChatMsg from "./ChatMsg";
import Links from "./Links";
import { baseUrl } from "../utils/url";
const FundseekerAllPitch = ({ data, layoutGrid }) => {
  // const buttonContainerClasses = layoutGrid
  const isMobileView = window.screen.availWidth < 768
  const buttonContainerClasses = (layoutGrid && isMobileView)
    ? "flex-row flex-wrap"
    : "flex-col justify-between";

  let navigate = useNavigate()
  let dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)



  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();



  const handleConnectorAdd = (dat) => {

    console.log("handleConnectorAdd", dat)

    dat["fundseekerCmpId"] = data?.uniqueId
    dispatch(InvestmentDiscoveryActions.postComment(dat, () => { setIsOpen(false) }))

  }
  const companyDetails = (uniqueId) => {
    navigate("/investor/crm/details/" + uniqueId)
  }


  const addtocrm = (uniqueId) => {

    let dtaa = {
      fundseekerCmpId: uniqueId
    }

    dispatch(InvestmentDiscoveryActions.postinvestorCrmlist(dtaa))
  }


  // const contactAddForm = [
  //   {
  //     label: "Comment",
  //     value: "",
  //     name: "comment",
  //     required: true,
  //     type: "textarea",
  //   }
  // ]

  const contactAddForm = [
    {
      label: "Comment",
      value: "",
      name: "comment",
      required: true,
      type: "textarea",
    },
    {
      label:
        "What is your best piece of advice for approaching, pitching, or closing this Investor?",
      value: "",
      name: "advice",
      required: true,
      type: "textarea",
    },
  ];


  //implementing the chat section
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);


  let getUserId = useSelector((state) => {
    let interdata = state?.auth?.user?.id;
    return interdata;
  });


  const handleModalButtonClick = (investorId, investorName) => {
    // alert("dsaasasaas")
    const updatedModalBody = (
      <ChatMsg investorId={investorId} />
    );
    setValue("rId", investorId);
    setValue("sId", getUserId);
    setValue("fId", "fundSeeker");
    setmodalBody(updatedModalBody);
    setmodalOpen((prev) => !prev);
  };
  console.log("asfasdfasdfasfasdsdfsdfasdf", data?.clogo);
  console.log("adsfsafsafsafsafdsadf_asfasfasf", data)

  //rounak changes
  let mode = useSelector(state => {
    console.log('adasfdsafasfasfasdfadsf', state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

  let currUserData = useSelector((state) => {
    let dattta = state?.deckManagement?.alldeckList;
    let currDatt = dattta[dattta.length - 1];
    return currDatt;
  })
  console.log("afsaasfdsafdsfasfdsffdsafds", currUserData);
  let userKycStatus = currUserData.kycStatus;
  let userId = currUserData.kycId;
  useEffect(() => {
    if (userKycStatus === 0) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Please complete your KYC Registration to access all Pitches",
      };
      dispatch(ALERTS(msgdata))
      navigate('/kycregister/'+userId)
    }
  }, [userKycStatus, dispatch, history]);
  return (
    <>
      {
        userKycStatus !== 0 &&
        <div>
          {
            data?.pitchDeckName &&
            <div className="">
              <div
                className={`px-8 py-4   w-full investor-detail-card col-auto rounded-xl shadow-lg transition-all duration-700  ${!mode ? "bg-gray-900 text-white" : "border-solid border border-gray"}`}
              >
                {
                  data?.clogo &&
                <img width={150} className="block mx-auto rounded-lg mt-4 size-32" src={baseUrl + "/" + data?.clogo} alt="Logo" />
                }
                <div className={"grid grid-cols-1 "} >
                  <div className="flex items-center justify-center ">
                    <h1 className="text-center text-2xl font-poppins text-secLine md:pt-2">
                      {/* {
                data?.fundseekerBusiness &&
                <>
                  <div className="text-secLine text-3xl font-semibold">
                    {data?.fundseekerBusiness}
                  </div>
                </>
              }
              {
                data?.cName &&
                <>
                  <div className="text-secLine text-3xl font-semibold">
                    {data?.cName}
                  </div>
                </>
              } */}
                      {
                        data?.pitchDeckName &&
                        <>
                          <div className="text-secLine text-center text-3xl font-semibold">
                            {data?.pitchDeckName}
                          </div>
                        </>
                      }
                      {/* {
                data?.fundseekercmpName &&
                <>
                  <div className="text-txt-neavy">
                    {data?.fundseekercmpName}
                  </div>
                </>
              } */}
                    </h1>
                  </div>
                  <div className={`flex flex-col  items-center font-medium `}
                  >
                    {/* title */}
                    {/* <div className="ml-2 flex items-center text-secLine text-lg">
            <div>

            </div>
          </div> */}
                    {/* Investor type rounak change */}
                    {/* <div className="rounded-full m-0.5 px-4 bg-[var(--mainsec)] text-white w-fit">
              {data?.fundseekercmpInterest}
            </div>
          </div> */}
                    <div className={`flex flex-wrap ${(layoutGrid || isMobileView) ? "flex-col" : "flex-row justify-between"} lg:justify-between mb-2 items-center`}>
                      {/* <div className={`flex flex-col pb-2 lg:pb-1 py-1 ${(layoutGrid || isMobileView) ? "items-center" : "items-start"} text-blue-1 font-medium`}> */}



                      {/* Investor type */}
                      {/* <div className="rounded-full m-0.5 px-2 text-white text-center font-poppins py-1 flex flex-wrap  justify-center   gap-1"> */}
                      {
                        // data?.fundseekercmpInterest?.map((item) =>
                        //   (layoutGrid || isMobileView) ?
                        //     (<>
                        //       <p className="break-words min-w-fit w-[150px] sm:w-[200px] lg:w-[240px] bg-secLine p-1 rounded-md my-1">
                        //         {item}
                        //       </p>
                        //     </>) : (
                        //       <>
                        //         <span className="break-words mx-1 bg-secLine p-1 rounded-md ">
                        //           {item &&
                        //             <>
                        //               {item}
                        //             </>
                        //           }
                        //         </span>
                        //       </>
                        //     )
                        // )
                      }
                      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, beatae! */}
                      {/* </div> */}




                      {/* </div> */}
                    </div>
                    <div
                      className={`w-full flex ${(layoutGrid || isMobileView) ? `flex-col` : `flex-row justify-between`
                        }`}
                    >
                      <div className={`${(layoutGrid || isMobileView) ? "" : ""}`}>
                        <div className="pb-1 font-poppins text-justify text-md px-4">
                          {/* description */}
                          {
                            data?.description &&
                            data?.description
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="my-3 text-center w-full">
            <Links classes={"md:justify-end justify-center"} website="https://www.google.com" facebook="https://www.facebook.com" twitter="https://www.twitter.com" portfolio="https://www.google.com" linkedin="https://www.linkedin.com" />
          </div> */}
                </div>

                {/* list section done */}
                <div
                  className={"grid grid-cols-1"}
                >
                  <div className={`col-span-5 sm:col-span-4 `}>
                    <div className="pb-1 font-poppins text-justify text-md ">
                      {/* description */}
                      {data?.fundseekerCompanyDescription}
                    </div>

                    <div className="pt-3 pl-4 lg:pl-12 font-poppins ">
                      {
                        data?.fundseekerName &&
                        <>
                          <div className="text-txt-neavy grid sm:grid-cols-2  md:grid-cols-4 py-0.5">
                            <span className="text-lg md:col-span-2 lg:col-span-1 text-heading">
                              FundSeeker Name
                            </span>
                            <span className="text-lg font-semibold font-poppins text-secLine md:col-span-2 lg:col-span-3">
                              {data?.fundseekerName}
                            </span>

                          </div>
                        </>
                      }
                      {/* {
                data?.fundseekercmpName &&
                <>
                  <div className="text-txt-neavy grid sm:grid-cols-2  md:grid-cols-4 py-0.5">
                    <span className="text-lg md:col-span-2 lg:col-span-1 text-heading">
                      Company Name
                    </span>
                    <span className="text-lg font-semibold font-poppins text-secLine md:col-span-2 lg:col-span-3">
                      {data?.fundseekercmpName}
                    </span>
                  </div>
                </>
              } */}
                      {
                        data?.amount &&
                        <>
                          <div className="text-txt-neavy grid sm:grid-cols-2  md:grid-cols-4 py-0.5">
                            <span className="text-lg md:col-span-2 lg:col-span-1 text-heading">
                              Asked Amount
                            </span>
                            <span className="text-lg font-semibold font-poppins text-secLine md:col-span-2 lg:col-span-3">
                              {data?.amount}{data?.amountRaisedCurr}
                            </span>

                          </div>
                        </>
                      }
                      {
                        data?.projectCurrentStage &&
                        <>
                          <div className="text-txt-neavy grid sm:grid-cols-2  md:grid-cols-4 py-0.5 cols">
                            <span className="text-lg md:col-span-2 lg:col-span-1 text-heading">
                              Project Current Stage
                            </span>
                            <span className="text-lg font-semibold font-poppins text-secLine md:col-span-2 lg:col-span-3">
                              {data?.projectCurrentStage}
                            </span>

                          </div>
                        </>
                      }
                      {
                        data?.pitchDeckName &&
                        <>
                          <div className="text-txt-neavy grid sm:grid-cols-2  md:grid-cols-4 py-0.5">
                            <span className="text-lg md:col-span-2 lg:col-span-1 text-heading">
                              Pitch Deck Name
                            </span>
                            <span className="text-lg font-semibold font-poppins text-secLine md:col-span-2 lg:col-span-3">
                              {data?.pitchDeckName}
                            </span>
                          </div>
                        </>
                      }
                      {/* {investments} */}
                      <div className="font-poppins">
                        {data?.investments?.map((investment) => (
                          <div>{`${investment?.name} - ${investment?.amount} - ${investment?.stage}`}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className={`flex ${buttonContainerClasses} pt-2 w-fit justify-center my-4`}> */}
                  {/* rounak change <div className={`col-span-5 sm:col-span-1`}> */}
                  <div className={`flex justify-center flex-col sm:flex-row pt-4`}>
                    {/* accept:  */}
                    <CstmButton
                      child={
                        <Button
                          name={"Show Interest"}
                          // icon={<UilCheckCircle size="25" className={"hello"} />}
                          classes="lg:w-2/2 "
                          onClick={() => {
                            console.log("chdhdhhdhdh", data);
                            let datass = {
                              fundSeekerId: data.fundseekerId,
                            };
                            dispatch(
                              DeckManagementActions.postInterest(datass, data.uniqueId)
                            );
                            // let msgdata = {
                            //   show: true,
                            //   icon: "success",
                            //   buttons: [],
                            //   type: 1,
                            //   text: "Status Approved Successfully \n \t Now You can view pitch",
                            // };
                            // dispatch(ALERTS(msgdata));
                          }}
                        ></Button>
                      }
                    />

                    {/* decline:  */}

                    {/* <CstmButton
            child={
              <Button
                name={"Decline"}
                // icon={<UilTimesCircle size="25" className={"hello "} />}
                classes=" h-10 "
                onClick={() => {
                  let datass = {
                    status: "disapprove",
                  };
                  dispatch(
                    DeckManagementActions.postStatus(datass, data.uniqueId)
                  );
                  let msgdata = {
                    show: true,
                    icon: "success",
                    buttons: [],
                    type: 1,
                    text: "Status Declined Successfully",
                  };
                  dispatch(ALERTS(msgdata));
                }}
              ></Button>
            }
          /> */}


                    {/* view:  */}

                    <CstmButton
                      child={
                        <Button
                          name={"View Pitches"}
                          // icon={<UilEye size="25" className={"hello"} />}
                          classes="lg:w-2/2"
                          onClick={() => {
                            let msgdata = {
                              show: true,
                              icon: "error",
                              buttons: [],
                              type: 1,
                              text: "You have not Permission to view this \n First you have to Show Interest on it",
                            };
                            data?.status === "approve"
                              ? window.open(backendassetUrl + data?.files)
                              : dispatch(ALERTS(msgdata));
                          }}
                        ></Button>
                      }
                    />


                    {/* chat:  */}

                    {/* <CstmButton
              child={
                <Button
                  name={"Chat with Us"}
                  // icon={<UilEnvelopeAlt size="25" className={"hello"} />}
                  classes="lg:w-2/3"
                  onClick={() => {
                    handleModalButtonClick(
                      data?.fundseekerId,
                      data?.fundseekerName
                    );
                  }}
                ></Button>
              }
            /> */}

                    {/* <Button onClick={(e) => { addtocrm(data?.uniqueId) }} classes='font-bold text-base p-1 w-48 mb-2 mr-2' name={"Add to Investor CRM"}></Button>
          <Button onClick={() => { setIsOpen(true) }} classes='font-bold text-base p-1 w-48 mb-2 mr-2' name={"Add Review"}></Button>
          <Button onClick={(e) => { companyDetails(data?.uniqueId) }} classes='font-bold text-base p-1 w-48 mb-2 mr-2' name={"View Details"}></Button> */}


                  </div>
                </div>
                {/* <Chat/> */}
                <Modal
                  size={"sm"}
                  modalHead={"Chat with Us"}
                  children={modalBody}
                  isOpen={modalOpen}
                  setIsOpen={setmodalOpen}
                />
                {/* <Modal
        size={"lg"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalHead={"modalHead"}
      >
        <CommonForm
          classes={"grid-cols-1 gap-1"}
          Form={contactAddForm}
          errors={errors}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />
        <Button
          classes="w-full d-block mx-auto p-10"
          name="Submit"
          onClick={handleSubmit(handleConnectorAdd)}
        />
      </Modal> */}
              </div>
            </div>
          }
        </div>
      }

    </>
  );
};

export default FundseekerAllPitch;
