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
import NewLookAlert from "../components/AlertsManagement/NewLookAlert";
import NewLookBadge from "../components/Badge";
import { useNavigate } from "react-router-dom";
import { backendassetUrl, baseUrl } from "../utils/url";
function CompanyProfile(isOpen, closeButton = false) {
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

  //rounak change

  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };





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
    if (one && completeData.email) {
      setshowAlert(completeData?.kycStatus === 0);
      // Form.map((itm) => {
      //   setValue(itm.name, completeData[itm.value]);
      // });
      setone(false);
    }
    return completeData;
  });
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
    console.log(data, "dhhdhdhdhhd");
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

  let companyPortfolioLink = profileData?.companyPortfolioLink;
  let companyLinkedInLink = profileData?.companyLinkedInLink;
  let companyTwitterLink = profileData?.companyTwitterLink;
  let companyFacebookLink = profileData?.companyFacebookLink;

  //rounak changes
  let mode = useSelector((state) => {
    console.log("adasfdsafasfasfasdfadsf", state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  });

  let Form = [
    {
      label: "Company Website",
      name: "companyPortfolioLink",
      value: "",
      type: editing ? "text" : "hdisabled",
      icon: <UilLinkAlt className={"text-white"} />,
      props: "",
      required: false,
      placeholder: "",
      subClasses: ` ${!mode ? "bg-darkBg text-white" : ""} `,
    },
    {
      label: "Linkdin Link",
      name: "companyLinkedInLink",
      value: "",
      type: editing ? "text" : "hdisabled",
      icon: <UilLinkedin className={"text-white"} />,
      props: "",
      required: false,
      placeholder: "",
      subClasses: ` ${!mode ? "bg-darkBg text-white" : ""} `,
    },
    {
      label: "Twitter Link",
      name: "companyTwitterLink",
      value: "",
      type: editing ? "text" : "hdisabled",
      icon: <UilTwitter className={"text-white"} />,
      props: "",
      required: false,
      placeholder: "",
      subClasses: ` ${!mode ? "bg-darkBg text-white" : ""} `,
    },
    {
      label: "Facebook Link",
      name: "companyFacebookLink",
      value: "",
      type: editing ? "text" : "hdisabled",
      icon: <UilFacebookF className={"text-white"} />,
      props: "",
      required: false,
      placeholder: "",
      subClasses: ` ${!mode ? "bg-darkBg text-white" : ""} `,
    },

    // {
    //   label: "Google",
    //   name: "companygoogle",
    //   value: "companygoogle",
    //   type: editing ? "text" : "hdisabled",
    //   icon: <UilGoogle className={"text-white"} />,
    //   props: "",
    //   required: false,
    //   placeholder: "",
    // },
  ];
  useEffect(() => {
    setValue("companyPortfolioLink", companyPortfolioLink);
    setValue("companyLinkedInLink", companyLinkedInLink);
    setValue("companyTwitterLink", companyTwitterLink);
    setValue("companyFacebookLink", companyFacebookLink);
  }, [editing]);

  const desc = profileData?.description;
  let AboutusForm = [
    {
      label: "About Company Description",
      name: "description",
      value: "",
      type: aboutediting ? "textarea" : "hdisabled",
      icon: <UilLinkAlt className={"text-white"} />,
      defaultValue: desc ? desc : "",
      required: false,
      placeholder: "",
      rowNo: 6,
      subClasses: "font-bold",
    },
  ];
  // //fixing the problem of the editing sections
  // const [originalAboutUs, setOriginalAboutUs] = useState(profileData?.description);
  // const [editedAboutUs, setEditedAboutUs] = useState(profileData?.description);
  // // Function to handle saving the edited content
  // const handleSave = () => {
  //   // Perform save operation, for example, send the editedAboutUs data to the server
  //   // After saving, set aboutediting to false to exit edit mode
  //   setaboutediting(false);
  //   // You may also update the originalAboutUs state if needed
  //   setOriginalAboutUs(editedAboutUs);
  // };
  let cInterest = profileData?.industryInterest || [];
  // console.log("asfasfsfafasfasddfghf",profileData?.industryInterest);

 

  return (
    <div className={`p-6 ${!mode ? "bg-darkBg text-white" : "bg-white "}`}>
      {/* <NewLookAlert
        text="Your Profile KYC is Pending"
        notifyType="alert"
        notifyCat={"New"}
        showAlert={showAlert}
        setshowAlert={setshowAlert}
      /> */}

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
        <div class="border-2 rounded-xl shadow-lg p-8">
          {/* <img
            width={200}
            className="mx-auto rounded-md mb-4"
            src={baseUrl + '/' + profileData?.clogo}
            alt="Amansas"
          /> */}

          {!imageError ? (
            <img
              width={200}
              className="mx-auto rounded-md mb-4"
              src={baseUrl + "/" + profileData?.clogo}
              alt="Amansas"
              onError={handleError}
            />
          ) : (
            <img
              width={140}
              className="mx-auto rounded-md mb-4"
              src="../../../building.jpg"
              alt="building"
            />
          )}

          <p className="text-lg text-heading font-oxygen font-semibold">
            Company Profile
          </p>
          <div className="flex gap-4 ">
            <div className="font-oxygen font-semibold">
              <div className="grid grid-cols-2 gap-5">
                {profileData?.cName && (
                  <>
                    <p className="text-md  mt-6">Company Name:</p>
                    <p className="text-md font-bold mt-6">
                      {profileData?.cName}
                    </p>
                  </>
                )}
              </div>
              <div className="grid grid-cols-2 gap-5">
                {profileData?.cIdNo && (
                  <>
                    <p className="text-md mt-6">Company Id</p>
                    <p className="text-md font-bold mt-6">
                      {profileData?.cIdNo}
                    </p>
                  </>
                )}
              </div>
              <div className="grid grid-cols-2 gap-5">
                {profileData?.website && (
                  <>
                    <p className="text-md mt-6">Website</p>
                    <p className="text-md font-bold mt-6">
                      {profileData?.website}
                    </p>
                  </>
                )}
              </div>
              <div className="grid grid-cols-2 gap-5">
                {profileData?.roleName == "Investor" && cInterest && (
                  <>
                    <p className="text-md mt-6">Company Interests</p>
                    <p className="text-md font-normal font-oxygen mt-6 break-words">
                      {cInterest.map((item) => (
                        <>
                          <p>{item}</p>
                        </>
                      ))}
                    </p>
                  </>
                )}
                {profileData?.roleName == "Fund Seeker" &&
                  profileData?.projectType && (
                    <>
                      <p className="text-md mt-6">Project Types</p>
                      <p className="text-md font-normal font-oxygen mt-6 break-words">
                        {/* {cInterest.map(item => <>
                    <p>{item}</p>
                  </>
                  )} */}
                        {profileData?.projectType}
                      </p>
                    </>
                  )}
              </div>
              <div className="grid grid-cols-2 gap-5">
                <p className="text-md mt-6">KYC Status</p>
                <p className="text-md font-bold mt-6">
                  <NewLookBadge
                    text={kycS[profileData?.kycStatus]?.[0] || ""}
                    notifyType={kycS[profileData?.kycStatus]?.[1] || "alert"}
                  />
                </p>
              </div>
            </div>
            {/* <div>
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
                <p className="text-md font-bold mt-6">{profileData?.website}</p>
              </div>
              <div>
                <p className="text-md font-bold mt-6">{profileData?.industryInterest}</p>
              </div>
              <div>
                <p className="text-md font-bold mt-6">
                  <NewLookBadge
                    text={
                      kycS[profileData?.kycStatus]?.[0] || ""
                    }
                    notifyType={
                      kycS[profileData?.kycStatus]?.[1] || "alert"
                    }
                  />
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div
          class={` border-2 rounded-lg shadow-lg ${
            !mode ? "bg-darkBg text-white" : ""
          }`}
        >
          <div className="flex justify-between p-4">
            <p className="text-heading font-oxygen font-semibold text-lg">
              Social Connects
            </p>
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
          <div className=" sm:w-full sm:max-w-sm md:max-w-xl p-4">
            {editing ? (
              <CommonFormTwo
                classes={"grid-cols-1 gap-1 w-full font-body"}
                Form={Form}
                errors={errors}
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
            ) : (
              <>
                <div className="grid grid-cols-2 text-sm  font-poppins font-semibold py-1">
                  <div className="flex gap-2">
                    <UilLinkAlt className="bg-secLine rounded-full text-white " />
                    <p className="font-normal lg:py-1">Company Website</p>
                  </div>
                  <p className="font-poppins tracking-wide text-justify lg:py-1 break-words">
                    {companyPortfolioLink}
                  </p>
                </div>
                <div className="grid grid-cols-2 text-sm  font-poppins font-semibold py-1">
                  <div className="flex gap-2">
                    <UilLinkedin className="bg-secLine rounded-full text-white " />
                    <p className="font-normal lg:py-1">LinkedIn Link</p>
                  </div>
                  <p className="font-poppins tracking-wide text-justify lg:py-1 break-words">
                    {companyLinkedInLink}
                  </p>
                </div>
                <div className="grid grid-cols-2 text-sm  font-poppins font-semibold py-1">
                  <div className="flex gap-2">
                    <UilTwitter className="bg-secLine rounded-full text-white " />
                    <p className="font-normal lg:py-1">Twitter Link</p>
                  </div>
                  <p className="font-poppins tracking-wide text-justify lg:py-1 break-words">
                    {companyTwitterLink}
                  </p>
                </div>
                <div className="grid grid-cols-2 text-sm  font-poppins font-semibold py-1">
                  <div className="flex gap-2">
                    <UilFacebookF className="bg-secLine rounded-full text-white " />
                    <p className="font-normal lg:py-1">Facebook Link</p>
                  </div>
                  <p className="font-poppins tracking-wide text-justify lg:py-1 break-words">
                    {companyFacebookLink}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* <div class="grid grid-cols-1  gap-4 mt-4">
        <div class=" border-2 rounded-lg shadow-lg pl-2">
          {profileData?.cName ? (
            <div>
              <p className="text-center">Company Profile</p>
              <div className="flex gap-4 ">
                <div>
                  <div>
                    <p className="text-md  mt-6">Company Name:</p>
                  </div>
                  <div>
                    <p className="text-md mt-6">Company Id:</p>
                  </div>
                  <div>
                    <p className="text-md mt-6">Company Adress:</p>
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
          ) : (
            ""
          )}
        </div>
      </div> */}

      {/* <div class="grid grid-cols-1  gap-4 mt-4">
        <div class=" border-2 rounded-lg shadow-lg">
          <div className="flex justify-between p-4">
            <p>Description</p>
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
          <div className=" sm:w-full sm:max-w-full md:max-w-full p-4">
            {aboutediting ? (
              <CommonForm
                classes={"grid-cols-1 gap-1 w-full font-body"}
                Form={AboutusForm}
                errors={errors}
                register={register}
                setValue={setValue}
                getValues={getValues}
              />
            ) : (
              <p className="text-md mt-2">{profileData?.aboutUs}</p>
            )}
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-1  gap-4 mt-4">
        <div className="border-2 rounded-lg shadow-lg">
          <div className="flex justify-between p-4">
            <p className="text-heading font-oxygen font-semibold text-lg">
              Company Description
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
                {desc}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg p-8 shadow-lg mt-4">
        <div className="flex justify-between">
          <p className="text-lg text-heading">Document</p>
          {/* <UilSave size="18" /> */}
          {documentsediting ? (
            <>
              <Modal
                size={"l"}
                modalHead={"Upload Document"}
                children={
                  <>
                    <div class="grid grid-cols-1  gap-4 mt-4 w-full h-full">
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
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {profileData?.userDocument?.map((itm) => {
            return (
              <div
                className="border-2 rounded-lg gap-4 bg-gray-300 p-4  lg:w-3/4 cursor-pointer text-black"
                onClick={() => {
                  window.open(
                    backendassetUrl + '/' + itm.file,
                    "_blank",
                    "noreferrer"
                  );
                }}
              >
                <img width={100} className="mx-auto" src="../../../document.png" alt="" />
                <p className="text-center text-md mt-2 font-oxygen text-sm break-words font-semibold">{
                  itm?.document?.replace(/\[|\]/g, '')
                }</p>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
