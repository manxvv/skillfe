import React, { useState} from "react";
import Button from "./Button";
import InvestmentDiscoveryActions from "../store/actions/InvestmentDiscoveryActions";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import CommonForm from "./CommonForm";
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import Links from "./Links";
import { baseUrl } from "../utils/url";
import AuthActions from "../store/actions/auth-actions";
import { useSelector } from "react-redux";

const InvestorDetailsCard = ({ data, layoutGrid }) => {
  console.log("safasfasswertfdawerfdafsd", data);
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

    console.log("handleConnectorAddasdfasfd", dat)
    dat["rating"] = rating;
    dat["fundseekerCmpId"] = data?.uniqueId
    dat["cmpId"] = data?.uniqueId
    dispatch(InvestmentDiscoveryActions.postComment(dat, () => { setIsOpen(false) }))
  }
  const companyDetails = (uniqueId) => {
    // navigate("/investor/crm/details/" + uniqueId)
    // console.log("afsasfasfasdfnasfmasmfasm");
    // AuthActions.profile(uniqueId);
    navigate("/companyDetails/" + uniqueId)
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

  //Adding review Section
  const [rating, setRating] = useState(0); // State to store the selected rating

  const handleRatingChange = value => {
    setRating(value);
  };


  const renderStars = () => {
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

  console.log("ratingasdfasfas", rating);

  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
  return (
    <>
      {data?.cName &&
        <>
          <div
            className={`p-4   w-full investor-detail-card col-auto rounded-xl shadow-lg transition-all duration-700  ${!mode? "bg-gray-900 text-white":"bg-white border-solid border border-gray"}`}>
            {
              data?.clogo &&
              <>
                <img className="block mx-auto w-[100px] " src={baseUrl + '/' + data?.clogo} alt="Logo" />
              </>
            }


            <div className="text-heading text-center">
              {/* title */}
              <div className="font-oxygen text-2xl font-semibold py-2 ">{data?.cName}</div>
            </div>


            <div className={`flex flex-wrap ${(layoutGrid || isMobileView) ? "flex-col" : "flex-row justify-between"} lg:justify-between mb-2 items-center`}>
              {/* <div className={`flex flex-col pb-2 lg:pb-1 py-1 ${(layoutGrid || isMobileView) ? "items-center" : "items-start"} text-blue-1 font-medium`}> */}



              {/* Investor type */}
              <div className="rounded-full m-0.5 px-2 text-white text-center font-poppins py-1 flex flex-wrap justify-center   gap-1">
                {
                  data?.industryInterest.map((item) =>
                    (layoutGrid || isMobileView) ?
                      (<>
                        <p className="break-words min-w-fit w-[150px] sm:w-[200px] lg:w-[240px] bg-secLine p-1 rounded-md my-1">
                          {item}
                        </p>
                      </>) : (
                        <>
                          <span className="break-words mx-1 bg-secLine p-1 rounded-md ">
                            {item &&
                              <>
                                {item}
                              </>
                            }
                          </span>
                        </>
                      )
                  )
                }
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, beatae! */}
              </div>
              {/* Links Sections */}
              <div>
                <Links facebook={data?.companyFacebookLink} twitter={data?.companyTwitterLink} portfolio={data?.companyPortfolioLink} linkedin={data?.companyLinkedInLink} />
              </div>



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
                <div className="pt-3 pl-12">
                  {/* <div className="font-bold text-secLine ">
              Smart Card Number : {data.smartcardnumber}
            </div> */}
                  {/* {investments} */}
                  <div className="font-poppins">
                    {data?.investments?.map((investment) => (
                      <div>{`${investment?.name} - ${investment?.amount} - ${investment?.stage}`}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className={`flex flex-wrap justify-center items-center mb-4`}>
                {/* <Button onClick={(e) => { addtocrm(data?.uniqueId) }} classes='font-bold text-base p-1 w-48 mb-2 mr-2' name={"Add to Investor CRM"}></Button> */}
                <Button onClick={() => { setIsOpen(true) }} classes='font-bold text-base p-1 w-48 mb-2 mr-2' name={"Add Review"}></Button>
                <Button onClick={(e) => { companyDetails(data?.uniqueId) }} classes='font-bold text-base p-1 w-48 mb-2 mr-2' name={"View Details"}></Button>
              </div>
            </div>
            <Modal
              size={"lg"}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              modalHead={"Add Review"}
            >
              <div className="container flex justify-center pt-5 gap-5">
                <h1 className="text-secLine">
                  Provide Your Feedback
                </h1>
                <div className="flex text-2xl">
                  {
                    renderStars()
                  }
                </div>
              </div>
              <CommonForm
                classes={"grid-cols-1 gap-1"}
                Form={contactAddForm}
                errors={errors}
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
              <Button
                classes="w-1/3 d-block mx-auto p-10"
                name="Submit Review"
                onClick={handleSubmit(handleConnectorAdd)}
              />
            </Modal>
          </div>
        </>
      }
    </>
  );
};

export default InvestorDetailsCard;
