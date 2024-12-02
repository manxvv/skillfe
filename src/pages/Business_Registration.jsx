import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import CommonForm from "../components/CommonForm";
import AuthActions from "../store/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SelectDropDown from "../components/FormElements/SelectDropDown";
import { baseUrl } from "../utils/url";
import WithSideImage from "../components/WithSideImage";
import getCountries from "./CountryCode";
import getCountriesName from "./Countries";
import getRegionCountriesName from "./countryRegion";
import getIndustryInterest from "./IndustryInterest";
import getIndustryInterestMultiple from "./industryInterestMultiselect";

import { ALERTS } from "../store/reducers/component-reducer";
import IsValidName from "../components/IsValidName";
const field = [
  {
    logo: baseUrl + "/logo.png",
    funderType: "funderType",
    companyName: "CompanyName",
    telephone: "telephone",
    email: "email",
    countryCode: "countryCode",
    mobile: "mobile",
    website: "website",
    address: "address",
    industryInterest: "industryInterest",
    projectType: "projectType",
    fundingStage: "fundingStage",
    countryInterest: "countryInterest",
    // phonenumber: "Phone Number",
    // aregister: "Already Register",
    // regiter: "Register",
    // roleName: "roleName"
  },
];
const countries = getCountries();
const countriesName = getCountriesName();
let AllContinentCountries = getRegionCountriesName();
console.log("AllContinentCountries", AllContinentCountries, countriesName);

const industryInterest = getIndustryInterest();
const industryInterestMultiple = getIndustryInterestMultiple();
const continents = Object.keys(AllContinentCountries);
let continentsArray = [
  { label: "SouthAmerica", value: "SouthAmerica" },
  { label: "Africa", value: "Africa" },
  { label: "NorthAmerica", value: "NorthAmerica" },
  { label: "Asia", value: "Asia" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
  { label: "Antartica", value: "Antartica" },
];

//rounak change
const fundingStage = [
  { name: "Pre Seed", id: "pre_seed" },
  { name: "Seed", id: "seed" },
  { name: "Other", id: "other" },
];

const projectOption = [
  { label: "Greenfield", value: "Greenfield" },
  { label: "Brownfield", value: "Brownfield" },
];
export default function Business_Registration() {
  const [extra, setExtra] = useState("");
  const dispatch = useDispatch();
  const [oneLoad, setOneLoad] = useState(true);
  const { uid } = useParams();
  const [selectedContinent, setSelectedContinent] = useState("");

  console.log(
    "amarnathddjjdjdj",
    selectedContinent,
    "amarnathdhhhhhd",
    AllContinentCountries[selectedContinent]
  );
  let roleList = useSelector((state) => {
    let interdata = state?.auth?.userRole;
    return interdata;
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  let users_email = useSelector((state) => {
    return state?.auth?.users_email;
  });
  let users_mobile = useSelector((state) => {
    let interdata = state?.auth?.users_mobile;
    return interdata;
  });

  console.log(extra, "roleListroleListroleList");
  const navigate = useNavigate();

  //rounak changes.................
  useEffect(() => {
        const savedFormData = sessionStorage.getItem("formData");
        console.log("adfadfsafasdafdssadfasdf",savedFormData)
        if (savedFormData) {
          const parsedData = JSON.parse(savedFormData);
          Object.keys(parsedData).forEach((key) => {
            setValue(key, parsedData[key]);
          });
        }
      }, [setValue]);
  
  const handleFormChange = () => {
    const currentData = getValues();
    sessionStorage.setItem("formData", JSON.stringify(currentData));
  };
  //till here..................
  let Form = [
    {
      label: "Type of Funder",
      name: "funderType",
      value: "",
      type: "muitiSelect",
      props: {},
      required: true,
      option: [
        { name: "Equity Investor", id: "equity_investor" },
        { name: "Lender", id: "lender" },
        { name: "Grant Funder", id: "grant_funder" },
      ],
      onChange:{handleFormChange}  
    },


    {
      label: "Select Interested Continent",
      value: "",
      name: "continent",
      option: continentsArray,
      type: "select",
      required: true,
      props: {
        onChange: (e) => {
          console.log(e?.target?.value, "amarnathhdhhdhdhhd");
          const continentValue = e?.target?.value;
          setSelectedContinent(continentValue);
          //rounak change
          handleFormChange();
        },
      },
    },


    {
      label: "Select Interested Country",
      value: "",
      name: "countryInterest",
      option: AllContinentCountries[selectedContinent],
      type: "muitiSelect",
      required: true,
      props: {},
      onChange:{handleFormChange}
    },
    {
      label: "Industry of Interest",
      name: "industryInterest",
      value: "",
      type: "muitiSelect",
      props: {},
      required: true,
      option: industryInterestMultiple,
      classes: "mb-5",
      onChange:{handleFormChange}
    },
    {
      label: "Company Name",
      name: "cName",
      value: "cName",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    // {
    //     label: "Country Code",
    //     value: "",
    //     name: "countryCode",
    //     option: countries,
    //     type: "select",
    //     required: true,
    //     props: {
    //         //   onChange: ((e) => {
    //         //   }),
    //     },
    // },
    // {
    //     label: "Phone Number", name: "mobile", value: users_mobile, type: "hdisabled", props: {
    //         defaultValue: users_mobile,
    //     },
    //     required: false,
    //     placeholder: "",
    //     amp: [{
    //         type: "select",
    //         name: "currency",
    //         styling: "w-25",
    //         option: countries,
    //         value: "currency"
    //     }]
    // },
    // {
    //     label: "E-mail", name: "email", value: users_email, type: "hdisabled", props: {
    //         defaultValue: users_email,
    //     }, required: false
    // },
    {
      label: "Contact Person",
      name: "contactPerson",
      value: "contactPerson",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    // {
    //   label: "Website",
    //   name: "website",
    //   value: "website",
    //   type: "text",
    //   props: "",
    //   required: true,
    //   placeholder: "",
    // },
    {
      label: "Company Address",
      name: "address",
      value: "address",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },


    // rounak change
    // {
    //   label: "Funding Stage of Interest",
    //   value: "",
    //   name: "fundingStage",
    //   option: fundingStage,
    //   type: "select",
    //   required: true,
    //   props: {
    //     onChange: (e) => {
    //       console.log(e.target, "rtyuihnjmbnghj");
    //       if (e.target.value === "other") {
    //         setExtra(e.target.value);
    //       } else {
    //         setExtra("");
    //       }
    //     },
    //   },
    // },
    // ...(extra === "other"
    //   ? [
    //     {
    //       label: "Enter Funding Stage",
    //       value: "",
    //       name: "CustomfundingStage",
    //       type: "text",
    //       required: true,
    //       props: {
    //         //   onChange: ((e) => {
    //         //   }),
    //       },
    //     },
    //   ]
    //   : []),


    //rounak change
     {
      label: "Funding Stage of Interest",
      value: "",
      name: "fundingStage",
      option: fundingStage,
      type: "muitiSelect",
      required: true,
      props: {
        onChange: (e) => {
          console.log(e.target, "rtyuihnjmbnghj");
          if (e.target.value === "other") {
            setExtra(e.target.value);
          } else {
            setExtra("");
          }
          //rounak change.............
          handleFormChange();
          //till here................
        },
      },
    },
    // ...(extra === "other"
    //   ? [
    //     {
    //       label: "Enter Funding Stage",
    //       value: "",
    //       name: "CustomfundingStage",
    //       type: "text",
    //       required: true,
    //       props: {
    //         //   onChange: ((e) => {
    //         //   }),
    //       },
    //     },
    //   ]
    //   : []),

    // {
    //   label: "Industry of Interest",
    //   name: "industryInterest",
    //   value: "",
    //   type: "muitiSelect",
    //   props: {},
    //   required: true,
    //   option: fundingStageOfIntrest,
    //   classes: "mb-5"
    // },

  


  ];
  let Form2 = [
    // {
    //     label: "Type of Funder", name: "funderType", value: "", type: "muitiSelect", props: {}, required: true,
    //     option: [
    //         { name: "Equity Investor", id: "equity_investor" },
    //         { name: "Lender", id: "lender" },
    //         { name: "Grant Funder", id: "grant_funder" }
    //     ]
    // },
    {
      label: "Type of Project",
      name: "projectType",
      value: "",
      type: "muitiSelect",
      props: {},
      required: true,
      option: [
        { name: "Greenfield", id: "greenfield" },
        { name: "Brownfield", id: "brownfield" },
        { name: "Startup", id: "startup" },
        { name: "Going Concern", id: "goingConcern" },

      ],
    },
    {
      label: "Business Name",
      name: "cName",
      value: "businessName",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    // {
    //     label: "Mobile", name: "mobile", value: "users_mobile", props: {
    //         defaultValue: users_mobile,
    //     }, required: false, type: "hdisabled"
    // },
    // {
    //     label: "E-mail", name: "email", value: users_email, type: "hdisabled", props: {
    //         defaultValue: users_email,
    //     }, required: false
    // },
    // {
    //     label: "Country Code",
    //     value: "",
    //     name: "countryCode",
    //     option: countries,
    //     type: "select",
    //     required: true,
    //     props: {
    //         //   onChange: ((e) => {
    //         //   }),
    //     },
    // },
    // {
    //   label: "Website",
    //   name: "website",
    //   value: "website",
    //   type: "text",
    //   props: "",
    //   required: true,
    //   placeholder: "",
    // },
    {
      label: "Contact Person",
      name: "contactPerson",
      value: "contactPerson",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    {
      label: "Address",
      name: "address",
      value: "address",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
    },
    // {
    //     label: "Country of Interest",
    //     value: "",
    //     name: "countryInterest",
    //     option: countriesName,
    //     type: "select",
    //     required: true,
    //     props: {

    //     },
    // },
  ];
  const onTableViewSubmit = (data) => {

//rounak changes...................
sessionStorage.setItem("formData", JSON.stringify(data));
//till here......................
    


    let contactPerson = data['contactPerson']
    if (!IsValidName(contactPerson)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Contact Person Name",
      };
      dispatch(ALERTS(msgdata));
      return;
    }

    let cName = data['cName']
    if (!IsValidName(cName)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Company Name",
      };
      dispatch(ALERTS(msgdata));
      return;
    }

    // let address = data['address']
    // if (!IsValidName(address)) {
    //   let msgdata = {
    //     show: true,
    //     icon: "error",
    //     buttons: [],
    //     type: 1,
    //     text: "Invalid Company Address",
    //   };
    //   dispatch(ALERTS(msgdata));
    //   return;
    // }



    if (roleList == "Fund seeker") {
      let projectType = data['projectType']
      if (projectType == undefined) {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          text: "Please Select Your Project Type",
        };
        dispatch(ALERTS(msgdata));
        return;
      }
    }
    if (roleList == "Investor") {
      let continent = data['continent']
      let fundingStage = data['fundingStage']
      let industryInterest = data['industryInterest']
      let funderType = data['funderType']
      let countryInterest = data['countryInterest']
      if (industryInterest == undefined) {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          text: "Please Select Your Industry Interest",
        };
        dispatch(ALERTS(msgdata));
        return;
      }
      if (funderType == undefined) {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          text: "Please Select Funder Type",
        };
        dispatch(ALERTS(msgdata));
        return;
      }


      if (continent == "Select") {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          // text: res?.data?.msg,
          text: "Please Select Your Continent",
        };
        dispatch(ALERTS(msgdata));
        return;
      }

      if (countryInterest == undefined) {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          text: "Please Select Your Country Interest",
        };
        dispatch(ALERTS(msgdata));
        return;
      }
      if (fundingStage == "Select") {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          // text: res?.data?.msg,
          text: "Please Select Your Funding Stage",
        };
        dispatch(ALERTS(msgdata));
        return;
      }
    }

    


    console.log(data, "sdfsdsfffghjksdsf");
    data["uid"] = uid;
    dispatch(
      AuthActions.businessRegister(data, () => {
        navigate("/kycregister/" + uid);
        //navigate("/kycregister")
      })
    );
  };

  return (
    <>
      <WithSideImage
        sideImage={"bg-sideimage"}
        formclass={" h-[75vh]"}
        form={
          <>
            <CommonForm
              classes={"grid-cols-1 gap-0 font-body"}
              // Form={roleList == "Investor" ? Form : Form2} //real
              Form={roleList == "Investor" ? Form : Form}
              errors={errors}
              register={register}
              setValue={setValue}
              getValues={getValues}
              //rounak changes
              onChange={handleFormChange}

             
            />
            <div className="flex justify-around items-center mb-12">
              <Button onClick={() => { navigate("/setupRegistration/" + uid) }} classes='me-8' name={"Back"}></Button>
              <Button
                classes={"ms-8"}
                onClick={handleSubmit(onTableViewSubmit)}
                name="Save and Continue"
              />
            </div>

          </>
        }
        labeling={""}
      />
    </>
  );
};




