import React, { useEffect, useState } from "react";
import CommonForm from "../components/CommonForm";

import {
  UilFacebookF,
  UilTwitter,
  UilGoogle,
  UilLinkedin,
  UilLinkAlt,
  UilEdit,
  UilSave,
} from "@iconscout/react-unicons";
import { useForm } from "react-hook-form";
import CommonFormTwo from "../components/CommonFormTwo";
import RoundedButton from "../components/RoundedButton";
import Button from "../components/Button";
import AuthActions from "../store/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { kyc_doc_type } from "../utils/queryBuilder";
import DeckManagementActions from "../store/actions/deckManagement-actions";
import Modal from "../components/Modal";
//import NewLookAlert from "../components/AlertsManagement/NewLookAlert";
import NewLookBadge from "../components/Badge";
import { useNavigate } from "react-router-dom";
import { backendassetUrl, baseUrl } from "../utils/url";
import NewProjectForm from "./NewProjectForm";

function Profile(isOpen, closeButton = false) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState(<></>);
  const [showAlert, setshowAlert] = useState(false);
  const [editing, setediting] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);
  const [aboutediting, setaboutediting] = useState(false);
  const [one, setone] = useState(true);
  const [documentsediting, setdocumentsediting] = useState(false);
  // let profileData = useSelector((state) => {
  //     console.log(state, "state state")
  //     return state?.auth?.profile
  // })
  let DocumentsForm = [
    // {
    //     label: "Document Title",
    //     value: "",
    //     name: "documentTitle",
    //     type: "select",
    //     required: true,
    //     props: {
    //         onChange: ((e) => {
    //             // console.log(e.target.value, "e geeter")
    //             setValue("queries", e.target.name)
    //         }),
    //     }
    // },
    {
      label: "Document Type",
      value: "",
      name: "document",
      option: kyc_doc_type,
      type: "select",
      required: true,
      props: {
        //   onChange: ((e) => {
        //   }),
      },
      classes: "col-span-1 text-black",
    },
    {
      label: "Upload Document",
      value: "",
      name: "file",
      type: "file",
      required: false,
      props: {},
      classes: "col-span-1 sm:col-span-1 flex justify-between text-black",
      multiple: false,
    },
  ];

  let profileData = useSelector((state) => {
    let completeData = state?.auth?.profile;
    if (one && completeData?.email) {
      setshowAlert(completeData?.kycStatus === 0);
      // Form.map((itm) => {
      //   setValue(itm?.name, completeData[itm?.value]);
      // });
      setone(false);
    }
    return completeData;
  });
  console.log("asdfsfsfsdfghjfsdfasfd", profileData);
  let briefYou = profileData?.briefYourself;
  let portFolioLink = profileData?.portfolioLink;
  let linkedInLink = profileData?.linkedInLink;
  let facebookLink = profileData?.facebookLink;
  let twitterLink = profileData?.twitterLink;
  console.log("asdfasfasfasfasdfasdf", portFolioLink);




  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })

  console.log("afdasdfasfasfasfdasfdadsf",mode)
  let Form = [
    {
      label: "Portfolio Link",
      name: "portfolioLink",
      value: "",
      type: editing ? "text" : "hdisabled",
      icon: <UilLinkAlt className={"text-white"} />,
      props: "",
      required: false,
      placeholder: "",
      subClasses: ` ${!mode ? "bg-darkBg text-white":""} `,
      classes:""
    },
    {
      label: "Linkdin",
      name: "linkedInLink",
      value: "",
      type: editing ? "text" : "hdisabled",
      icon: <UilLinkedin className={"text-white"} />,
      props: "",
      required: false,
      placeholder: "",
      subClasses: ` ${!mode ? "bg-darkBg text-white":""} `,
    },

    {
      label: "Twitter",
      name: "twitterLink",
      value: "",
      type: editing ? "text" : "hdisabled",
      icon: <UilTwitter className={"text-white"} />,
      props: "",
      required: false,
      placeholder: "",
      subClasses: ` ${!mode ? "bg-darkBg text-white":""} `,
    },
    {
      label: "Facebook",
      name: "facebookLink",
      value: "",
      type: editing ? "text" : "hdisabled",
      icon: <UilFacebookF className={"text-white"} />,
      props: "",
      required: false,
      placeholder: "",
      subClasses: ` ${!mode ? "bg-darkBg text-white":""} `,
    },
    // {
    //   label: "Google",
    //   name: "google",
    //   value: "google",
    //   type: editing ? "text" : "hdisabled",
    //   icon: <UilGoogle className={"text-white"} />,
    //   props: "",
    //   required: false,
    //   placeholder: "",
    // },
  ];
  useEffect(() => {
    setValue("portfolioLink", portFolioLink);
    setValue("twitterLink", twitterLink);
    setValue("facebookLink", facebookLink);
    setValue("linkedInLink", linkedInLink);
  }, [editing]);

  let AboutusForm = [
    {
      label: "Your Brief Description",
      name: "briefYourself",
      value: "",
      type: aboutediting ? "textarea" : "hdisabled",
      icon: <UilLinkAlt className={"text-white"} />,
      defaultValue: briefYou ? briefYou : "",
      required: false,
      placeholder: "",
      rowNo: 6,
      subClasses: "text-poppins font-bold",
      classes:"text-green"
    },
  ];

  let userRole = useSelector((state) => {
    console.log("amarnathsfsdfadsfafsdfastate", state);
    let user_role = state?.auth?.user?.roleName;
    return user_role;
  });
  console.log("amarnathasfasfdsfasdfasdfasd", userRole);
  const onTableViewSubmit = (data) => {
    console.log(data, "datadata");
    dispatch(
      AuthActions.register(data, () => {
        navigate("/register");
      })
    );
  };
  const OnDocumentsSubmit = (data) => {
    const formData = new FormData();
    console.log(data, "kskkskks");
    // if (data.uniqueId) {
    //     dispatch(AuthActions.postProfileDocuments(true, data, () => {
    //         setIsOpen(false)
    //         dispatch(AuthActions.profile())
    //     }, data.uniqueId))
    // } else {
    //     dispatch(AuthActions.postProfileDocuments(true, data, () => {
    //         setIsOpen(false)
    //         dispatch(AuthActions.profile())
    //     }))
    // }
    if (data.uniqueId) {
      // dispatch(AuthActions.postProfile(true, formData, () => {
      dispatch(
        AuthActions.postProfileDocuments(
          data,
          () => {
            console.log(data, "jhdhdgdgdbjkbhjbhddg");
            setIsOpen(false);
            dispatch(AuthActions.profile());
            setdocumentsediting(false);
            setmodalOpen(false);
            dispatch(AuthActions.profile());
          },
          data.uniqueId
        )
      );
    } else {
      dispatch(
        AuthActions.postProfileDocuments(data, () => {
          console.log(data, "jhdhdgdgdg");
          setaboutediting(false);
          setdocumentsediting(false);
          setmodalOpen(false);
          dispatch(AuthActions.profile());
        })
      );
    }
  };
  const companyProfile = (data) => {
    console.log(data, "dhhdhdhdhhd");
    if (data.uniqueId) {
      dispatch(
        AuthActions.postProfile(
          data,
          () => {
            setIsOpen(false);
            dispatch(AuthActions.profile());
            setaboutediting(false);
            setediting(false);
            dispatch(AuthActions.profile());
          },
          data.uniqueId
        )
      );
    } else {
      dispatch(
        AuthActions.postProfile(data, () => {
          console.log(data, "jhdhdgdgdg");
          setaboutediting(false);
          setediting(false);
          dispatch(AuthActions.profile());
        })
      );
    }
  };

  let kycS = {
    0: ["Pending", "info"],
    1: ["Submitted", "warning"],
    2: ["Verified", "success"],
    3: ["Rejected", "error"],
  };
  const profileSubmit = (data) => {
    console.log(data, "dhhdhdfdfdfdsgdhdhhd");

    const formData = new FormData();
    // console.log(data, "datadata")
    // // dispatch(AuthActions.profile(data))
    // // setediting(false)
    // dispatch(AuthActions.postProfile(true, formData, () => {
    //     console.log("CustomQueryActions.postDBConfig")
    //     setIsOpen(false)
    //     dispatch(AuthActions.profile())
    // }))
    if (data.uniqueId) {
      // dispatch(AuthActions.postProfile(true, formData, () => {
      dispatch(
        AuthActions.postProfile(
          data,
          () => {
            setIsOpen(false);
            dispatch(AuthActions.profile());

            setediting(false);
            dispatch(AuthActions.profile());
            setaboutediting(false);
          },
          data.uniqueId
        )
      );
    } else {
      dispatch(
        AuthActions.postProfile(data, () => {
          console.log(data, "jhdhdgdgdg");
          setaboutediting(false);
          setediting(false);
          dispatch(AuthActions.profile());
        })
      );
    }
  };
  useEffect(() => {
    dispatch(AuthActions.profile());
    // if (resetting) {
    //     reset({})
    //     Form.map((fieldName) => {
    //         setValue(fieldName["name"], fieldName["value"]);
    //     });
    // } else {
    //     reset({})
    //     console.log(Object.keys(formValue), "Object.keys(formValue)")
    //     Object.keys(formValue).forEach((key) => {
    //         if (["endAt", "startAt"].indexOf(key) != -1) {
    //             console.log("date formValuekey", key, formValue[key])
    //             const momentObj = moment(formValue[key]);
    //             setValue(key, momentObj.toDate());
    //         } else {
    //             // console.log("formValuekey",key,key)
    //             setValue(key, formValue[key]);
    //         }
    //     })
    // }
    // }, [formValue, resetting])
  }, []);
  let memberData = profileData?.finalMemberData || [];


  // //rounak changes
  // let mode = useSelector(state=>{
  //   console.log('adasfdsafasfasfasdfadsf',state);
  //   let viewMode = state?.auth?.mode;
  //   return viewMode;
  // })
  console.log("afdasdfasfasfasfdasfdadsf",mode)
  return (
    <div className={`p-6 ${!mode ? "bg-darkBg text-white":"bg-white"} `}>
      {
        // rounak change
        /* <NewLookAlert
        text="Your Profile KYC is Pending"
        notifyType="alert"
        notifyCat={"New"}
        showAlert={showAlert}
        setshowAlert={setshowAlert}
      /> */
      }
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
        <div className="border-2 rounded-xl shadow-lg p-8 font-oxygen font-semibold">
          {}

          {
            <img
            width={150}
            className="mx-auto rounded-md my-4"
            // src={(userRole !== 'Admin')?(baseUrl + '/' + profileData?.profileImg):("../../../logoa.png")}
            // alt="Datayog"
            src="../../../logoa.png" alt="logoa"
          /> 
          }

          {/* {userRole !== "Admin" && profileData?.profileImg && (
            <img
              width={150}
              className="mx-auto rounded-md my-4"
              src={`${baseUrl}/${profileData.profileImg}`}
              alt="Datayog"
            />
          )} */}

          <p className="text-lg text-heading">Profile</p>
          <div className="">
            <div>
              {profileData?.firstName && (
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-md  mt-6">First Name</p>
                  </div>
                  <div>
                    <p className="text-md font-bold mt-6">
                      {profileData?.firstName}
                    </p>
                  </div>
                </div>
              )}
              {profileData?.surname && (
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-md  mt-6">Surname</p>
                  </div>
                  <div>
                    <p className="text-md font-bold mt-6">
                      {profileData?.surname}
                    </p>
                  </div>
                </div>
              )}
              {profileData?.email && (
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-md  mt-6 pe-2">Email Adress</p>
                  </div>
                  <div>
                    <p className="text-md font-bold mt-6 break-words">
                      {profileData?.email}
                    </p>
                  </div>
                </div>
              )}
              {profileData?.mobile && (
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-md  mt-6">Mobile Number</p>
                  </div>
                  <div>
                    <p className="text-md font-bold mt-6">
                      {profileData?.mobile}
                    </p>
                  </div>
                </div>
              )}
              {profileData?.firstName && (
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-md  mt-6">KYC Status</p>
                  </div>
                  <div>
                    <p className="text-md font-bold mt-6">
                      <NewLookBadge
                        text={kycS[profileData?.kycStatus]?.[0] || ""}
                        notifyType={
                          kycS[profileData?.kycStatus]?.[1] || "alert"
                        }
                      />
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" border-2 rounded-lg shadow-lg font-oxygen font-semibold text-xl">
          <div className="flex justify-between p-4 ">
            <p className="text-heading">Social Connects</p>

            {editing ? (
              <>
                <Button
                  classes={"w-14"}
                  onClick={handleSubmit(profileSubmit)}
                  icon={<UilSave size="18" className={"hello"} />}
                ></Button>
              </>
            ) : (
              <RoundedButton
                onClick={() => {
                  setediting(true);
                }}
                icon={<UilEdit size="18" className={"hello"} />}
              />
            )}
          </div>

          <div className="p-4">
            {editing ? (
              <CommonFormTwo
                classes={"gap-1 w-full font-body break-words"}
                Form={Form}
                errors={errors}
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
            ) : (
              <>
                <div className="grid grid-cols-2 text-sm gap-8 font-poppins font-semibold py-1">
                  <div className="flex gap-2">
                    <UilLinkAlt className="bg-secLine rounded-full text-white " />
                    <p className="font-normal lg:py-1 ">Portfolio Link</p>
                  </div>
                  <p className="font-poppins tracking-wide text-justify lg:py-1 break-words">
                    {portFolioLink}
                  </p>
                </div>
                <div className="grid grid-cols-2 text-sm gap-8 font-poppins font-semibold py-1">
                  <div className="flex gap-2">
                    <UilLinkedin className="bg-secLine rounded-full text-white " />
                    <p className="font-normal lg:py-1">LinkedIn Link</p>
                  </div>
                  <p className="font-poppins tracking-wide text-justify lg:py-1 break-words">
                    {linkedInLink}
                  </p>
                </div>
                <div className="grid grid-cols-2 text-sm gap-8 font-poppins font-semibold py-1">
                  <div className="flex gap-2">
                    <UilTwitter className="bg-secLine rounded-full text-white " />
                    <p className="font-normal lg:py-1">Twitter Link</p>
                  </div>
                  <p className="font-poppins tracking-wide text-justify lg:py-1 break-words">
                    {twitterLink}
                  </p>
                </div>
                <div className="grid grid-cols-2 text-sm gap-8 font-poppins font-semibold py-1">
                  <div className="flex gap-2">
                    <UilFacebookF className="bg-secLine rounded-full text-white " />
                    <p className="font-normal lg:py-1">Facebook Link</p>
                  </div>
                  <p className="font-poppins tracking-wide text-justify lg:py-1 break-words">
                    {facebookLink}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 gap-4 mt-4">
        <div className=" border-2 rounded-lg shadow-lg ps-4 pb-4 font-oxygen font-semibold">
          {profileData?.cName && (
            <div>
              <p className="text-center text-heading lg:py-1">Company Profile</p>
              <div className="flex gap-4 ">
                <div>
                  <div>
                    <p className="text-md  mt-6">Company Name:</p>
                  </div>
                  <div>
                    {profileData?.cIdNo &&
                      <p className="text-md mt-6">Company Id:</p>
                    }
                  </div>
                  <div>
                    {profileData?.cAddress &&
                      <p className="text-md mt-6">Company Adress:</p>
                    }
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-md font-bold mt-6">
                      {profileData?.cName}
                    </p>
                  </div>
                  <div>
                    <p className="text-md font-bold mt-6">
                      {profileData?.cIdNo}
                    </p>
                  </div>
                  <div>
                    <p className="text-md font-bold mt-6">
                      {profileData?.cAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> */}

      <div className="grid grid-cols-1  gap-4 mt-4">
        <div className=" border-2 rounded-lg shadow-lg">
          <div className="flex justify-between p-4">
            <p className="text-center text-heading font-oxygen font-semibold text-lg">
              Brief Description
            </p>
            {aboutediting ? (
              <>
                <Button
                  classes={"w-14"}
                  onClick={handleSubmit(profileSubmit)}
                  icon={<UilSave size="18" className={"hello"} />}
                ></Button>
              </>
            ) : (
              <RoundedButton
                onClick={() => {
                  setaboutediting(true);
                }}
                icon={<UilEdit size="18" className={"hello"} />}
              />
            )}
          </div>
          <div className=" sm:w-full sm:max-w-full md:max-w-full px-4 pb-4">
            {aboutediting ? (
              <CommonForm
                classes={
                  "grid-cols-1 gap-1 w-full font-body font-oxygen tracking-wide"
                }
                Form={AboutusForm}
                errors={errors}
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
            ) : (
              <p className="text-md font-oxygen tracking-wide text-justify">
                {briefYou}
              </p>
            )}
          </div>
        </div>
      </div>

      {userRole == "Fund Seeker" && (
        <>
          <div className=" border-2 rounded-lg shadow-lg my-2 text-xs sm:text-sm">
            <p className="text-heading font-oxygen font-semibold text-lg pt-4 ps-4">
              BIOS Of Management Team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 Lg:grid-cols-3 font-poppins gap-4 p-4">
              {memberData.map((item) => (
                <>
                  <div className="p-4 shadow-md rounded-lg ">
                    <div className="grid grid-cols-2 py-1">
                      <span className="text-gray-500">Name</span>
                      <span className="break-words">
                        {item?.memberName_$_form}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 py-1">
                      <span className="text-gray-500">Email</span>
                      <span className="break-words">
                        {item?.memberEmailId_$_form}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 py-1">
                      <span className="text-gray-500">Position</span>
                      <span className="break-words">
                        {item?.memberDesignation_$_form}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 py-1">
                      <span className="text-gray-500">Member Id</span>
                      <span className="break-words">
                        {item?.memberIdNo_$_form}
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="border-2 rounded-lg p-2 sm:p-8 shadow-lg mt-4">
        <div className="flex justify-between flex-wrap">
          <p className="text-md sm:text-lg text-heading font-oxygen font-semibold">
            Document
          </p>
          {/* <UilSave size="18" /> */}
          {documentsediting ? (
            <>
              <Modal
                size={"l"}
                modalHead={"Upload Document"}
                children={
                  <>
                    <div className="grid grid-cols-1  gap-4 mt-4 w-full h-full justify-center items-center">
                      <div className="border-2 rounded-lg gap-4 bg-gray-300 p-4 w-full">
                        <CommonForm
                          classes={"grid-cols-1 gap-1 w-full font-body"}
                          Form={DocumentsForm}
                          errors={errors}
                          register={register}
                          setValue={setValue}
                          getValues={getValues}
                        />
                        <Button
                          className="mt-0"
                          onClick={handleSubmit(OnDocumentsSubmit)}
                          name="Submit"
                        />
                      </div>
                    </div>
                  </>
                }
                isOpen={documentsediting}
                setIsOpen={setdocumentsediting}
              />
            </>
          ) : (
            <RoundedButton
              onClick={() => {
                setdocumentsediting(true);
              }}
              icon={<UilEdit size="18" className={"hello"} />}
            />
          )}

          {userRole == "Fund Seeker" && (
            <Button
              classes={"w-1/2 text-xs sm:w-1/3 sm:text-sm lg:w-1/6 font-oxygen"}
              onClick={(e) => {
                setmodalOpen((prev) => !prev);
                setmodalHead("Upload New Project");
                setmodalBody(
                  <NewProjectForm
                    isOpen={modalOpen}
                    setIsOpen={setmodalOpen}
                    resetting={true}
                    formValue={{}}
                  />
                );
              }}
              name={"Add New Project"}
            ></Button>
          )}
        </div>

        {/* Added New Project Functionality */}

        <Modal
          size={"sm"}
          modalHead={modalHead}
          children={modalBody}
          isOpen={modalOpen}
          setIsOpen={setmodalOpen}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-4 mt-4 justify-center items-center">
          {profileData?.userDocument?.map((itm) => {
            return (
              <div
                className="border-2 rounded-lg gap-4 bg-gray-300 p-4 lg:w-3/4 cursor-pointe justify-center items-center text-black"
                onClick={() => {
                  window.open(
                    backendassetUrl + "/" + itm.file,
                    "_blank",
                    "noreferrer"
                  );
                }}
              >
                <div className="mx-auto">
                  <img
                    width={100}
                    className="block mx-auto justify-center"
                    src="../../../document.png"
                    alt=""
                  />
                  <p className="text-center text-md mt-2 font-oxygen text-sm break-words font-semibold">
                    {itm?.document?.replace(/\[|\]/g, "")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
