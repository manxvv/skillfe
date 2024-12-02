import React, { useEffect, useState } from 'react';
import 'react-querybuilder/dist/query-builder.css'; // Import the library styles
import QueryBuilder from 'react-querybuilder';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { all_command_type, all_command_type_wise, kyc_doc_type, kyc_doc_type2, where_all_command_type } from '../utils/queryBuilder';
import CommonForm from '../components/CommonForm';
import AuthActions from '../store/actions/auth-actions';
import * as Unicons from '@iconscout/react-unicons';
import CustomQueryActions from '../store/actions/customQuery-actions';
import nokiaPrePostActions from '../store/actions/nokiaPrePost-actions';
import { Urls } from '../utils/url';
import UiTopBar from '../components/UiTopBar';
import { RxCross2 } from "react-icons/rx";
import {
  UilFacebookF,
  UilTwitter,
  UilGoogle,
  UilLinkedin,
  UilLinkAlt,
  UilEdit,
  UilSave,
} from "@iconscout/react-unicons";
import getCountriesName from './Countries';
import Button from '../components/Button';
import Webcam from 'react-webcam';
import { ALERTS } from '../store/reducers/component-reducer';
import IsValidWordCount from '../components/IsValidWordCount';
import IsValidWebsite from '../components/IsValidWebsite';
import IsValidName from '../components/IsValidName';

const KycRegister = () => {
  const [customBusinessDesc, setCustomBusinessDesc] = useState(false)
  const [customBusinessPlan, setCustomBusinessPlan] = useState("")
  const [customcollateralFund, setCustomcollateralFund] = useState("")
  const [customExistingFunds, setCustomExistingFunds] = useState("")
  const [customClientInfoSheet, setCustomClientInfoSheet] = useState("")
  const [extra, setExtra] = useState("");
  const dispatch = useDispatch()
  const { uid } = useParams();
  const [age, setAge] = useState('');
  const [oneLoad, setOneLoad] = useState(false)
  const [UserLyp, seteUserLyp] = useState("")
  const [nestfilter, setnestfilter] = useState({})
  const [onestfilter, setonestfilter] = useState({})
  const [gopen, SetgOpen] = useState([])
  const [dataQuery, SetdataQuery] = useState("Select * from values;")
  const [filtering, setFiltering] = useState("Select * from values;")
  const [managingFilter, setManagingFilter] = useState([])
  const [upmanagingFilter, setupManagingFilter] = useState([])
  const [countform, setcountform] = useState([1])
  const [conditioncountform, setconditioncountform] = useState([1])
  const [lastFinancialform, setlastFinancialform] = useState([1])
  const [projectSpecificform, setProjectSpecificform] = useState([1])
  const [outstandingFundform, setOutstandingFundform] = useState([1])
  const [biosInfoform, setBiosInfoform] = useState([1])
  const [countformtwo, setcountformtwo] = useState([])
  // console.log(filtering, "filteringfiltering")
  const navigate = useNavigate()
  const [dataValue, setDataValue] = useState([])
  const [showSocialMediaOther, setshowSocialMediaOther] = useState(false);
  const [showOtherAddressProof, setshowOtherAddressProof] = useState(false);
  const [showBusinessRegistered, setshowBusinessRegistered] = useState(false);
  const countriesName = getCountriesName();
  useSelector((state) => {
    console.log(state, "state")
  })



  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  //rounak changes.................
  useEffect(() => {
    const savedFormData = sessionStorage.getItem("formData4");
    console.log("adfadfsafasdafdssadfasdf", savedFormData);
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  const handleFormChange = () => {
    const currentData = getValues();
    sessionStorage.setItem("formData4", JSON.stringify(currentData));
  };
  //till here..................

  let users_email = useSelector((state) => {
    return state?.auth?.users_email
  })
  let users_mobile = useSelector((state) => {
    let interdata = state?.auth?.users_mobile
    return interdata
  })
  console.log(users_mobile, 'djjjjdjdjdj')
  let userRole = useSelector((state) => {
    console.log('satate', state, state?.auth?.userRole)
    return state?.auth?.userRole
  })
  console.log("amarnathfghjkghjkghjuse", userRole);
  let searchForm = [
    {
      label: "Table Name",
      name: "searchTablename",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: {
        onChange: ((e) => {
          // console.log(managingFilter, "managingFilter dataValuedataValue")
          let dtew = managingFilter.filter(itm => itm.name.toLowerCase().includes(e.target.value.toLowerCase()))
          setupManagingFilter(dtew)
          // console.log(dtew, "dtew dataValuedataValue")
          // console.log(dataValue, "dataValuedataValue")
        }),
      },
    },
  ]
  let contype = [
    {
      label: UserLyp != "Investor" ? UserLyp + " Name" : " Name",
      value: "text",
      type: UserLyp != "Investor" ? "text" : "hidden",
      name: "cmpName",
      required: false,
      classes: UserLyp != "Investor" ? "col-span-1" : "",
    },
    {
      label: UserLyp != "Investor" ? UserLyp + " Reg. No." : "Id No.",
      value: "text",
      type: "text",
      name: "RegNo",
      required: false,

    },
    {
      label: UserLyp != "Investor" ? UserLyp + " Address" : "Address",
      value: "text",
      type: "textarea",
      name: "cAddress",
      required: false,

    },
  ]
  let optionsList = {
    "Investor": [{
      "label": "Company",
      "value": "Company"
    }, {
      "label": "Individual",
      "value": "Individual"
    }, {
      "label": "Government Entity ",
      "value": "Government Entity"
    }],
    "Fund Seeker": [{
      "label": "Company",
      "value": "Company"
    }, {
      "label": "Individual",
      "value": "Individual"
    }],

    // "Charitable Organisation": [{
    //   "label": "Company",
    //   "value": "Company"
    // }]
  }
  let conDet = [
    // {
    //   label: "Reg Type",
    //   value: "Select",
    //   option: optionsList[userRole] || [],
    //   type: "select",
    //   name: "regType",
    //   required: false,
    //   props: {
    //     onChange: ((e) => {
    //       seteUserLyp(e.target.value)
    //     })
    //   },
    //   classes: "col-span-1"
    // }
  ]
  let conditionmultiForm = [
    // {
    // type:'heading',
    // label:"Identification Documents",
    // classes: "col-span-1 text-black-900 text-center",
    //   },
    {
      label: "File ('jpg,jpeg,png') ",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "file",
      type: "file",
      onChanging: ((e) => {

      }),
      props: {
        onSelect: (e, a, b, c) => { console.log({ e, a, b, c }) }
      },
      required: true,
      subClasses: "text-sm text-heading",
    },
    {
      label: "Document Type",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "document",
      option: kyc_doc_type2,
      type: "select",
      required: true,
      props: {
        onChange: ((e) => {
          // console.log(e.target.name, "e geeter")
          let tar = e.target.name
          let val = e.target.value
          setnestfilter(prev => ({
            ...prev,
            [tar]: val
          }));
          // nestfilter[e.target.name]= e.target.value
          // setOneLoad(true)
          // dispatch(CustomQueryActions.getTablesList(e.target.value, () => { }))
        }),
      },

      subClasses: "text-sm text-heading",
    },
    {
      label: "Document Number", name: "docNumber", value: "", classes: "col-span-2 md:col-span-1", type: "number", props: "", required: true, placeholder: "",
      subClasses: "text-sm text-heading",
    },
    {
      label: "Document Expiry Date", name: "docExpire", type: "datetime", formattype: "date", format: "yyyy-MM-dd", formatop: "yyyy-MM-DD", required: true, classes: "z-100",
      subClasses: "text-sm text-heading",
    },
  ]






  let biosInfoForm = [
    {
      label: "Member Name",
      name: "memberName",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Member Email",
      name: "memberEmailId",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "email",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Member Designation",
      name: "memberDesignation",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Member ID Number",
      name: "memberIdNo",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Member Identification Document",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "memberIdDocs",
      type: "file",
      onChanging: ((e) => {
      }),
      props: {
        onSelect: (e, a, b, c) => { }
      },
      required: true,
      subClasses: "text-heading text-sm"
    },
  ]






  let outstandingFundForm = [
    {
      label: "Lender Name",
      name: "lenderName",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Principal Amount",
      name: "principalAmount",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "outstanding balance",
      name: "outstandngBalance",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Tenor",
      name: "tenor",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Interest Rate",
      name: "interestRate",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Disbursement Date",
      name: "disbursementDate",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "datetime",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Purpose",
      name: "purpose",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },



  ]




  let projectSpecificForm = [
    {
      label: "Project Name",
      name: "projectName",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      subClasses: "text-heading text-sm"
    },
    {
      label: "Project Specific Organizational Chart ",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "projectChart",
      type: "file",
      onChanging: ((e) => {

      }),
      props: {
        onSelect: (e, a, b, c) => { console.log({ e, a, b, c }) }
      },
      required: true,

      subClasses: "text-heading text-sm"

    },
    {
      label: "Project Specific Shareholding Structure",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "projectShareStructure",
      type: "file",
      onChanging: ((e) => {

      }),
      props: {
        onSelect: (e, a, b, c) => { console.log({ e, a, b, c }) }
      },
      required: true,

      subClasses: "text-heading text-sm"

    },
  ]







  let lastFinancialForm = [
    // {
    // type:'heading',
    // label:"Identification Documents",
    // classes: "col-span-1 text-black-900 text-center",
    //   },
    {
      label: "File ",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "financialFile",
      type: "file",
      onChanging: ((e) => {

      }),
      props: {
        onSelect: (e, a, b, c) => { console.log({ e, a, b, c }) }
      },
      required: false,

      subClasses: "text-sm text-heading",
    },
    {
      label: "Document Type",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "financialDocument",
      option: kyc_doc_type,
      type: "select",
      required: false,
      props: {
        onChange: ((e) => {
          // console.log(e.target.name, "e geeter")
          let tar = e.target.name
          let val = e.target.value
          setnestfilter(prev => ({
            ...prev,
            [tar]: val
          }));
          // nestfilter[e.target.name]= e.target.value
          // setOneLoad(true)
          // dispatch(CustomQueryActions.getTablesList(e.target.value, () => { }))
          console.log(e.target, "rtyuihnjmbnghj");
          if (e.target.value === "other") {
            setExtra(e.target.value);
          } else {
            setExtra("");
          }
        }),

      },

      subClasses: "text-sm text-heading",
    },
    { label: "Document Link", name: "financialDocLink", value: "", classes: "col-span-2 md:col-span-1", type: "text", props: "", required: false, placeholder: "", subClasses: "text-sm text-heading", },
    // { label: "Doc. Expire", name: "docExpire", type: "datetime", formattype: "date", format: "yyyy-MM-dd", formatop: "yyyy-MM-DD", required: false, classes: "z-100" },
    ...(extra === "other"
      ? [
        {
          label: "Type your justification.",
          value: "", classes: "col-span-2 md:col-span-1",
          name: "CustomJustification",
          type: "text",
          required: false,
          props: {
            //   onChange: ((e) => {
            //   }),
          },
        },
      ]
      : []),
  ]

  // useEffect(()=> {
  //   setlastFinancialform()
  // } , [])










  let PersonalInformation = [{
    type: 'heading',
    label: "Personal Information ",
    classes: "col-span-2 text-lg md:text-xl font-extra-bold text-black-900 text-center dark:text-black font-oxygen font-semibold ",
  },
  {
    label: "Full Legal Name",
    name: "fullLegalName",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: true,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  {
    label: "Date Of Birth",
    name: "dob",
    type: "datetime",
    formattype: "date",
    format: "yyyy-MM-dd",
    formatop: "yyyy-MM-DD",
    props: '',
    required: true,
    subClasses: "block text-sm font-medium text-heading ml-3 ",
    classes: "col-span-2 md:col-span-1",
  },
  {
    label: "Gender", name: "gender", value: "", classes: "col-span-2 md:col-span-1", type: "radio", props: {}, required: true, option: [
      { "label": "Male", "value": "Male" },
      { "label": "Female", "value": "Female" },
      { "label": "Other", "value": "Other" }],
    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },

  {
    label: "Upload Company logo",
    value: "",
    classes: "col-span-2 md:col-span-1",
    name: "clogo",
    type: "file",
    required: false,
    props: {},
    multiple: false,
    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },
  {
    label: "Brief Yourself (atleast 50 words)",
    value: "",
    classes: "col-span-2 md:col-span-1 font-poppins ",
    name: "briefYourself",
    type: "textarea",
    required: true,
    props: {},
    subClasses: "block text-sm font-bold text-heading ml-3 ",
    rowNo: 6
  },
  {
    label: "About Your Company (atleast 100 words) ",
    value: "",
    classes: "col-span-2 md:col-span-1 font-poppins  ",
    name: "description",
    type: "textarea",
    required: true,
    props: {},
    subClasses: "block text-sm font-bold text-heading ml-3 ",
    rowNo: 6
  },
  {
    label: "Upload Proof of Business Address",
    value: "", classes: "col-span-2 md:col-span-1",
    name: "busiessAddressFile",
    type: "file",
    required: false,
    props: {},

    multiple: false,
    subClasses: "block text-sm font-medium text-heading  ml-3 my-0"
  },
  ]

  // required: false and from Lable remove (Optional) rounak change

  let PersonalLinkInformation = [{
    type: 'heading',
    label: "Personal Link Details  (Optional) ",
    classes: "col-span-2 text-lg md:text-xl font-extra-bold text-black-900 text-center dark:text-black font-oxygen font-semibold ",
  },
  {
    label: "Portfolio Link",
    name: "portfolioLink",
    value: "",
    classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: false,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  {
    label: "LinkedIn",
    name: "linkedInLink",
    value: "",
    classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: false,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  {
    label: "Facebook",
    name: "facebookLink",
    value: "",
    classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: false,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  {
    label: "Twitter",
    name: "twitterLink",
    value: "",
    classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: false,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  ]
  
  let CompanyLinkInformation = [{
    type: 'heading',
    label: "Company Links Details (Optional)",
    classes: "col-span-2 text-lg md:text-xl font-extra-bold text-black-900 text-center dark:text-black font-oxygen font-semibold ",
  },
  {
    label: "Company Website", //rounak change
    name: "companyPortfolioLink",
    value: "",
    classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: false,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  {
    label: "Company LinkedIn",
    name: "companyLinkedInLink",
    value: "",
    classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: false,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  {
    label: "Company Facebook",
    name: "companyFacebookLink",
    value: "",
    classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: false,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  {
    label: "Company Twitter",
    name: "companyTwitterLink",
    value: "",
    classes: "col-span-2 md:col-span-1",
    type: "text",
    props: "",
    required: false,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading ml-3 ",
  },
  ]



  let ContactInformation = [{
    type: 'heading',
    label: "Contact Information",
    classes: "col-span-2 font-extrabold text-black-900 text-center dark:text-black",
  },
    // {
    //   label: "E-mail", name: "email", value: users_email, type: "hdisabled", props: {
    //     defaultValue: users_email,
    //   }, required: false
    // },
    // { label: "Phone Number", name: "mobile", value: "",classes:"col-span-2 md:col-span-1", type: "number", props: "", required: false, placeholder: "" },
    // {
    //   label: "Phone Number", name: "mobile", value: users_mobile, type: "hdisabled", props: {
    //     defaultValue: users_mobile,
    //   },
    //   required: false,
    //   placeholder: "",
    // },
    // { label: "Website", name: "website", value: "",classes:"col-span-2 md:col-span-1", type: "text", props: "", required: false, placeholder: "" },
    // {
    //   label: "Social Media", name: "socialMedia", value: "",classes:"col-span-2 md:col-span-1", type: "select", props: {
    //     onChange: (e) => {
    //       setshowSocialMediaOther(e.target.value === "Other");
    //     },
    //   }, required: false, option: [
    //     { "label": "Facebook", "value": "Facebook" },
    //     { "label": "Instagram", "value": "Instagram" },
    //     { "label": "Pinterest", "value": "Pinterest" },
    //     { "label": "X", "value": "X" },
    //     { "label": "Other", "value": "Other" },
    //   ],
    // },
  ]
  // if (showSocialMediaOther) {
  //   ContactInformation.push({
  //     label: "Please Specify Social Media Type",
  //     name: "otherSocialMediaType",
  //     value: "",classes:"col-span-2 md:col-span-1",
  //     type: "text",
  //     required: false,
  //     props: {},
  //     
  //   });
  // }






  let TaxInformation = [{
    type: 'heading',
    label: "Financial Information and Tax Information (Optional)",
    classes: "col-span-2 text-lg md:text-xl font-extrabold text-black-900 text-center dark:text-black font-oxygen font-semibold mt-4",
  },
    // {
    //   label: "Country of Interest",
    //   value: "",classes:"col-span-2 md:col-span-1",
    //   name: "countryInterest",
    //   option: countriesName,
    //   type: "select",
    //   required: true,
    //   props: {
    //     //   onChange: ((e) => {
    //     //   }),
    //   },
    // },
  ]




  let BusinessInformation = [{
    type: 'heading',
    label: "Business Information",
    classes: "col-span-2 text-lg md:text-xl font-extrabold text-black-900 text-center dark:text-black font-oxygen font-semibold mt-4",
  },
  {
    label: "Business Registration Number",
    name: "businessRN",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "number",
    props: "",
    required: true,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },
  {
    label: "Business Registration Document",
    name: "businessRD",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "file",
    props: "",
    required: true,
    placeholder: "",
    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },
  {
    label: "Business Type",
    name: "businessDesc",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "select",
    option: [
      { "label": "Operations", "value": "Operations" },
      { "label": "Main Suppliers", "value": "Main Suppliers" },
      { "label": "Competitors", "value": "Competitors" },
      { "label": "Distribution Channels", "value": "Distribution Channels" },
      { "label": "Logistics", "value": "Logistics" },
      { "label": "Marketing", "value": "Marketing" },
      { "label": "Sales", "value": "Sales" },
      { "label": "Finance", "value": "Finance" },
      { "label": "Human Resources", "value": "Human Resources" },
      { "label": "Research and Development", "value": "Research and Development" },
      { "label": "Legal", "value": "Legal" },
      { "label": "Quality Control", "value": "Quality Control" },
      { "label": "Supply Chain Management", "value": "Supply Chain Management" },
      { "label": "Information Technology", "value": "Information Technology" },
      { "label": "Production", "value": "Production" },
      { "label": "Procurement", "value": "Procurement" },
      { "label": "Inventory Management", "value": "Inventory Management" },
      { "label": "Risk Management", "value": "Risk Management" },
      { "label": "Customer Service", "value": "Customer Service" },
      { "label": "Public Relations", "value": "Public Relations" },
      { "label": "Facilities Management", "value": "Facilities Management" },
      { "label": "Environmental Sustainability", "value": "Environmental Sustainability" },
      { "label": "Corporate Social Responsibility", "value": "Corporate Social Responsibility" },
      { "label": "Training and Development", "value": "Training and Development" },
      { "label": "Other", "value": "Other" }
    ],
    required: true,
    props: {
      onChange: ((e) => {
        setCustomBusinessDesc(e.target.value === 'Other')
      })
    },

    subClasses: "block text-sm font-medium text-heading  ml-3"
  },
  ...(customBusinessDesc === true ?
    [
      {
        label: "Describe Your Business Type",
        value: "", classes: "col-span-2 md:col-span-1",
        name: "customBusinessDesc",
        type: "text",
        required: true,
        props: {

        },

        subClasses: "text-sm text-heading"
      },
    ] :
    []),

  {
    label: "Do you have a Business Plan",
    name: "businessplan",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "select",
    option: [
      { "label": "Yes", "value": "Yes" },
      { "label": "No", "value": "No" },
    ],
    required: true,
    props: {
      onChange: ((e) => {
        if (e.target.value) {
          setCustomBusinessPlan(e.target.value)
        } else {
          setCustomBusinessPlan("")
        }
      })
    },

    subClasses: "block text-sm font-medium text-heading  ml-3"
  },
  ...(customBusinessPlan === 'Yes' ?
    [{
      label: "Upload Business Plan Document",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "customBusinessPlanFile",
      type: "file",
      required: true,
      props: {

      },

      subClasses: "text-sm text-heading"
    },] :
    []),


  ...(
    customBusinessPlan === 'No' ?
      [{
        label: "Kindly provide a detailed project Summary",
        value: "", classes: "col-span-2 md:col-span-1",
        name: "customProjectSummary",
        type: "text",
        required: true,
        props: {

        },

        subClasses: "text-sm text-heading"
      },]
      : []),



  {
    label: "Do you have any collateral / guarantee for the funding sought?",
    name: "collateralFund",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "select",
    option: [
      { "label": "Yes", "value": "Yes" },
      { "label": "No", "value": "No" },
    ],
    required: true,
    props: {
      onChange: ((e) => {
        if (e.target.value) {
          setCustomcollateralFund(e.target.value)
        } else {
          setCustomcollateralFund("")
        }
      })
    },

    subClasses: "block text-sm font-medium text-heading  ml-3"
  },
  ...(customcollateralFund === 'Yes' ?
    [{
      label: "Kindly Specify your collateral / guarantee for the funding sought",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "customCollateralFund",
      type: "text",
      required: true,
      props: {

      },

      subClasses: "text-sm text-heading"
    },] :
    []),


  // ...(customExistingFunds === 'Yes' ?
  //   [{
  //     label: "Kindly Provide list of collaterals pledged in favour of existing lenders/funders",
  //     value: "",classes:"col-span-2 md:col-span-1",
  //     name: "customCollateralFund",
  //     type: "text",
  //     required: true,
  //     props: {
  //     },
  //     
  //     subClasses: "text-sm text-heading"
  //   },] :
  //   []),

  {
    label: "Do you have a client Information Sheet?",
    name: "clientInfoSheet",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "select",
    option: [
      { "label": "Yes", "value": "Yes" },
      { "label": "No", "value": "No" },
    ],
    required: true,
    props: {
      onChange: ((e) => {
        if (e.target.value) {
          setCustomClientInfoSheet(e.target.value)
        } else {
          setCustomClientInfoSheet("")
        }
      })
    },

    subClasses: "block text-sm font-medium text-heading  ml-3"
  },
  ...(customClientInfoSheet === 'Yes' ?
    [{
      label: "Kindly Upload Client Information Sheet",
      value: "", classes: "col-span-2 md:col-span-1",
      name: "customClientInfoSheetFile",
      type: "file",
      required: true,
      props: {

      },

      subClasses: "text-sm text-heading"
    },] :
    []),

  {
    label: "Do you have existing funding/loans?",
    name: "existingFunds",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "select",
    option: [
      { "label": "Yes", "value": "Yes" },
      { "label": "No", "value": "No" },
    ],
    required: true,
    props: {
      onChange: ((e) => {
        if (e.target.value) {
          setCustomExistingFunds(e.target.value)
        } else {
          setCustomExistingFunds("")
        }
      })
    },

    subClasses: "block text-sm font-medium text-heading  ml-3"
  },














    // {
    //   label: "Is Business Registered", name: "businessRegistered", value: "",classes:"col-span-2 md:col-span-1", type: "radio", props: {
    //     onChange: (e) => {
    //       setshowBusinessRegistered(e.target.value === "YES");
    //     },
    //   }, required: false, option: [
    //     { "label": "YES", "value": "YES" },
    //     { "label": "NO", "value": "NO" }]
    // },
  ]
  // if (showBusinessRegistered) {
  //   BusinessInformation.push(
  //     {
  //       label: "Business Name",
  //       name: "businessName",
  //       value: "",classes:"col-span-2 md:col-span-1",
  //       type: "text",
  //       required: false,
  //       props: {},
  //       
  //     },
  //     {
  //       label: "Business Registration Number",
  //       name: "businessRegistrationNumber",
  //       value: "",classes:"col-span-2 md:col-span-1",
  //       type: "number",
  //       required: false,
  //       props: {},
  //       

  //     },
  //     {
  //       label: "Date Of Business Registrated",
  //       name: "dateBusinessRegistrated",
  //       type: "datetime",
  //       required: false,
  //       formattype: "date",
  //       format: "yyyy-MM-dd",
  //       formatop: "yyyy-MM-DD",
  //     },
  //     {
  //       label: "Business Address",
  //       name: "businessAddress",
  //       value: "",classes:"col-span-2 md:col-span-1",
  //       type: "text",
  //       required: false,
  //       props: {},
  //       
  //     }
  //   );
  // }










  let Financialinformation = [{
    type: 'heading',
    label: "",
    classes: "col-span-2 text-xl font-extrabold text-black-900 text-center dark:text-black",
  }, {
    label: "Account Holder Name",
    name: "accountHolderName",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "text",
    required: false,
    props: {},

    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },
  {
    label: "Account Number",
    name: "accountNumber",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "number",
    required: false,
    props: {},

    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },
  {
    label: "Bank Name",
    name: "bankName",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "text",
    required: false,
    props: {},

    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },
  {
    label: "Bank Address",
    name: "bankAdress",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "text",
    required: false,
    props: {},

    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },
  {
    label: "SWIFT/BIC Code",
    name: "bicCode",
    value: "", classes: "col-span-2 md:col-span-1",
    type: "text",
    required: false,
    props: {},

    subClasses: "block text-sm font-medium text-heading  ml-3 "
  },
    // {
    //   label: "Source Of Funds",
    //   name: "fundSource",
    //   value: "",classes:"col-span-2 md:col-span-1",
    //   type: "select",
    //   required: false,
    //   props: {},
    //   option: [
    //     { "label": "Employment Income", "value": "EmploymentIncome" },
    //     { "label": "Business Profits", "value": "BusinessProfits" }],
    //   
    //   subClasses: "block text-sm font-medium text-heading  ml-3 "
    // },

  ]










  if (userRole === "Investor") {
    TaxInformation.push({
      label: "TAX Identification Number ( TIN )", name: "tin", value: "", classes: "col-span-2 md:col-span-1", type: "number", props: "", required: false, placeholder: "", subClasses: "block text-sm font-medium text-heading  ml-3 "
    })
    Financialinformation.push({
      label: "Source Of Funds",
      name: "fundSource",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "select",
      required: false,
      props: {},
      option: [
        { "label": "Employment Income", "value": "EmploymentIncome" },
        { "label": "Business Profits", "value": "BusinessProfits" }],

      subClasses: "block text-sm font-medium text-heading  ml-3 "
    })
  }




  let PurposeOfFunding = [
    {
      type: 'heading',
      label: "Purpose of Seeking Funds",
      classes: "col-span-1 font-extrabold text-black-900 text-center dark:text-black font-oxygen font-semibold text-xl",
    },
    {
      label: "Brief Projects Summary (atleast 100 words)",
      name: "descriptionFundSeeking",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "textarea",
      icon: <UilEdit className={"text-black"} />,
      props: "",
      required: true,
      placeholder: "",
      rowNo: 8,
      subClasses: "block text-sm font-medium text-heading  ml-3 "
    },



    {
      label: "Use Of Funds (atleast 100 words)",
      name: "descriptionUsageFund",
      value: "", classes: "col-span-2 md:col-span-1",
      type: "textarea",
      icon: <UilEdit className={"text-black"} />,
      props: "",
      required: true,
      placeholder: "",
      rowNo: 8,
      subClasses: "block text-sm font-medium text-heading bg-white  ml-3  "
    },]

  let fileUForm = [
    {
      label: "Profile Picture ",
      value: "",
      name: "userProfile",
      type: "file",
      onChanging: ((e) => {
      }),
      props: {
        onSelect: (e, a, b, c) => { console.log({ e, a, b, c }) }
      },
      classes: " text-heading col-span-2 md:col-span-1",
      subClasses: "block text-sm font-medium text-heading ml-3 dark:text-black",
      required: true,

    },
    // {
    //   type: "fileAll",
    //   accept: "image/*",
    //   multiple: false,
    //   required: true,
    //   capture: true,
    //   label: "Profile Picture ",
    //   value: "",classes:"col-span-2 md:col-span-1",
    //   name: "userProfile",
    //   onChanging: (e) => {},
    //   props: {
    //     onSelect: (e, a, b, c) => {
    //       console.log({ e, a, b, c });
    //     },
    //   },
    //   
    //   require: false,
    // },
  ]


  console.log(lastFinancialform, 'dfgskdfjgslkdfjg')


  // let [description, setDescription] = useState('');
  // let [briefYourself, setBriefYourself] = useState('');
  // let [descriptionFundSeeking, setdescriptionFundSeeking] = useState('');
  // let [descriptionUsageFund, setdescriptionUsageFund] = useState('');

  const onTableViewGenerateSubmit = (data) => {

    //rounak changes...................
    sessionStorage.setItem("formData4", JSON.stringify(data));
    //till here......................


    //Validation applied
    console.log("amarnathafdsasfasfasfdasddatafasdfasdfasdf", data);
    // let fullLegalName = data['fullLegalName']
    // if (!IsValidName(fullLegalName)) {
    //   let msgdata = {
    //     show: true,
    //     icon: "error",
    //     buttons: [],
    //     type: 1,
    //     text: "Invalid Your Full Legal Name",
    //   };
    //   dispatch(ALERTS(msgdata));
    //   return;
    // }

    // let accountHolderName = data['accountHolderName']
    // if (!IsValidName(accountHolderName)) {
    //   let msgdata = {
    //     show: true,
    //     icon: "error",
    //     buttons: [],
    //     type: 1,
    //     text: "Invalid Account Holder Name",
    //   };
    //   dispatch(ALERTS(msgdata));
    //   return;
    // }

    // let bankAdress = data['bankAdress']
    // if (!IsValidName(bankAdress)) {
    //   let msgdata = {
    //     show: true,
    //     icon: "error",
    //     buttons: [],
    //     type: 1,
    //     text: "Invalid Bank Address",
    //   };
    //   dispatch(ALERTS(msgdata));
    //   return;
    // }


    // useEffect(() => {
    //   setDescription(data['description']);
    //   setBriefYourself(data['briefYourself']);
    // }, [description, briefYourself]); // Only include if necessary




    let description = data['description'] ? data['description'] : ""
    if (!IsValidWordCount(description, 100)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Provide Company Descripton more than 100 words",
      };
      dispatch(ALERTS(msgdata));
      return;
    }
    let briefYourself = data['briefYourself'] ? data['description'] : ""
    if (!IsValidWordCount(briefYourself, 50)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Brief Your Self in atleast 50 words",
      };
      dispatch(ALERTS(msgdata));
      return;
    }

    let portfolioLink = data['portfolioLink']
    if (portfolioLink != '' && !IsValidWebsite(portfolioLink)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Personal Portfolio Link use format like (amansas.fourbrick.in), don't include https or / in url",
      };
      dispatch(ALERTS(msgdata));
      return;
    }
    let twitterLink = data['twitterLink']
    if (twitterLink != '' && !IsValidWebsite(twitterLink)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Personal Twitter Link use format like (amansas.fourbrick.in), don't include https or / in url",
      };
      dispatch(ALERTS(msgdata));
      return;
    }
    let facebookLink = data['facebookLink']
    if (facebookLink != '' && !IsValidWebsite(facebookLink)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Personal facebook Link use format like (amansas.fourbrick.in), don't include https or / in url",
      };
      dispatch(ALERTS(msgdata));
      return;
    }
    let linkedInLink = data['linkedInLink']
    if (linkedInLink != '' && !IsValidWebsite(linkedInLink)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Personal LinkedIn Link use format like (amansas.fourbrick.in), don't include https or / in url",
      };
      dispatch(ALERTS(msgdata));
      return;
    }
    let companyPortfolioLink = data['companyPortfolioLink']
    if (companyPortfolioLink != '' && !IsValidWebsite(companyPortfolioLink)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Company Website Link use format like (amansas.fourbrick.in), don't include https or / in url",
      };
      dispatch(ALERTS(msgdata));
      return;
    }
    let companyLinkedInLink = data['companyLinkedInLink']
    if (companyLinkedInLink != '' && !IsValidWebsite(companyLinkedInLink)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Company LinkedIn Link use format like (amansas.fourbrick.in), don't include https or / in url",
      };
      dispatch(ALERTS(msgdata));
      return;
    }
    let companyFacebookLink = data['companyFacebookLink']
    if (companyFacebookLink != '' && !IsValidWebsite(companyFacebookLink)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Company Facebook Link use format like (amansas.fourbrick.in), don't include https or / in url",
      };
      dispatch(ALERTS(msgdata));
      return;
    }

    let companyTwitterLink = data['companyTwitterLink']
    if (companyTwitterLink != '' && !IsValidWebsite(companyTwitterLink)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        text: "Invalid Company Twitter Link use format like (amansas.fourbrick.in), don't include https or / in url",
      };
      dispatch(ALERTS(msgdata));
      return;
    }


    //validation on select



    // let financialDocument_1_form = data['financialDocument_1_form']
    // if (financialDocument_1_form == "Select") {
    //   let msgdata = {
    //     show: true,
    //     icon: "error",
    //     buttons: [],
    //     type: 1,
    //     // text: res?.data?.msg,
    //     text: "Please Select Your Business Plan",
    //   };
    //   dispatch(ALERTS(msgdata));
    //   return;
    // }

    let document_1_form = data['document_1_form']
    if (document_1_form == "Select") {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        // text: res?.data?.msg,
        text: "Please Select Your Identification Document",
      };
      dispatch(ALERTS(msgdata));
      return;
    }


    if (userRole == 'Fund Seeker') {
      let descriptionUsageFund = data['descriptionUsageFund'] ? data['descriptionUsageFund'] : ""
      if (!IsValidWordCount(descriptionUsageFund, 100)) {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          text: "Describe your use of funds in atleast 100 words",
        };
        dispatch(ALERTS(msgdata));
        return;
      }
      let descriptionFundSeeking = data['descriptionFundSeeking'] ? data['descriptionFundSeeking'] : ""
      if (!IsValidWordCount(descriptionFundSeeking, 100)) {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          text: "Brief Your Project Summary in atleast 100 words",
        };
        dispatch(ALERTS(msgdata));
        return;
      }
      let businessDesc = data['businessDesc']
      if (businessDesc == "Select") {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          // text: res?.data?.msg,
          text: "Please Select Your Business Type",
        };
        dispatch(ALERTS(msgdata));
        return;
      }

      let businessplan = data['businessplan']
      if (businessplan == "Select") {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          // text: res?.data?.msg,
          text: "Please Select Your Business Plan",
        };
        dispatch(ALERTS(msgdata));
        return;
      }

      let collateralFund = data['collateralFund']
      if (collateralFund == "Select") {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          // text: res?.data?.msg,
          text: "Please Select Your collateral Fund",
        };
        dispatch(ALERTS(msgdata));
        return;
      }

      let clientInfoSheet = data['clientInfoSheet']
      if (clientInfoSheet == "Select") {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          // text: res?.data?.msg,
          text: "Please Select Your clientInfo Sheet",
        };
        dispatch(ALERTS(msgdata));
        return;
      }

      let existingFunds = data['existingFunds']
      if (existingFunds == "Select") {
        let msgdata = {
          show: true,
          icon: "error",
          buttons: [],
          type: 1,
          // text: res?.data?.msg,
          text: "Please Select Your existing Funds",
        };
        dispatch(ALERTS(msgdata));
        return;
      }

    }





    //validation on dob
    const dateString = data.dob;
    const dob = new Date(dateString);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 18) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        // text: res?.data?.msg,
        text: "Sorry, you must be 18 years or older to proceed with KYC registration.",
      };
      dispatch(ALERTS(msgdata));
      return;
    }
    //validate expire date
    function validateExpiryDate(expiryDate) {
      var currentDate = new Date();
      var expiryDateObj = new Date(expiryDate);
      if (isNaN(expiryDateObj.getTime())) {
        return false;
      }
      if (expiryDateObj < currentDate) {
        return false;
      }
      return true;
    }
    // Test the function with the provided expiry date
    var docExpire_1_form = data['docExpire_1_form'] ? data['docExpire_1_form'] : "";
    if (!validateExpiryDate(docExpire_1_form)) {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        // text: res?.data?.msg,
        text: "Sorry, Your Indentity Document has expired",
      };
      dispatch(ALERTS(msgdata));
      return;
    }




    data["uid"] = uid
    console.log("amarnathasfasdfasddftypeasfasf", typeof (imageSrc));
    let withoutPrefix = imageSrc?.replace(/^data:image\/jpeg;base64,/, '');
    data["userProfile[]"] = withoutPrefix
    dispatch(nokiaPrePostActions?.postSubmit(Urls.KycRegister, data, () => {
      navigate("/agreement/" + uid)
    }))
  }



  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList, selectedItem, "datadata")
    // dispatch(AuthActions.signIn(data, () => {
    //     navigate('/authenticate')
    // }))
  }

  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList, removedItem, "datadata")
    // dispatch(AuthActions.signIn(data, () => {
    //     navigate('/authenticate')
    // }))
  }

  useEffect(() => {
    dispatch(AuthActions.getcountries())
  }, [])


  //Adding functionality to take picture by using camera
  const [imageSrc, setImageSrc] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    setShowCamera(false); // Close camera after capturing
  };
  console.log("amarnathasdfiimageafasd", imageSrc);
  const openCamera = () => {
    setShowCamera(true);
  };
  const closeCamera = () => {
    setShowCamera(false);
  };
  const closePicture = () => {
    setImageSrc(null);
  };

 



  return <>

    <div className='w-full h-full dark:text-black bg-newLogin overflow-auto '>
      <div className='flex flex-col xl:px-[300px] lg:px-[200px] md:px-[150px] sm:px-[100px] px-8'>
        <UiTopBar />
        <div className='w-full mt-3  bg-white'>
          <div class="grid grid-cols-12 gap-2 m-2">
            <div className='col-span-12'>
              <div className='grid grid-cols-1 md:grid-cols-1'>

                {/* Adding Camera Functionality */}
                <div className='grid grid-cols-1  md:grid-cols-3 mb-5'>
                  <CommonForm classes={"w-full"} errors={errors} Form={fileUForm}
                    register={register} setValue={setValue} getValues={getValues} />
                  <span className='text-center md:mt-12 dark:text-black block md:inline font-oxygen font-semibold'>
                    OR
                  </span>
                  <div className='mt-2 md:mt-5 text-center' style={{}}>
                    {showCamera && (
                      <>
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                        />
                        <div className="flex gap-4 justify-evenly">
                          <Button classes='w-1/3 mt-4 text-sm sm:text-md' name={"Take Picture"} onClick={capture}></Button>
                          <Button classes='w-1/3 mt-4 text-sm sm:text-md' name={"Close Camera"} onClick={closeCamera}></Button>
                        </div>
                      </>
                    )}
                    {!showCamera && (
                      <Button classes='w-full md:w-5/6 md:mt-4' name={"Open Camera"} onClick={openCamera}></Button>
                    )}
                    {imageSrc && (
                      <div>
                        <div className='flex justify-between mt-3'>
                          <h2 className='dark:text-black'>Captured Image:</h2>
                          <Button classes='w-1/10 text-sm sm:text-md border bg-secLine mb-1' name={<RxCross2 size={18} />} onClick={closePicture}>

                          </Button>
                        </div>
                        <img src={imageSrc} alt="Captured" />
                      </div>
                    )}
                  </div>
                </div>
                <CommonForm classes={"grid-cols-2 gap-x-4 gap-y-1 w-full "} errors={errors} Form={PersonalInformation}
                  register={register} setValue={setValue} getValues={getValues} />
                <p className='font-poppins text-heading text-sm ps-4 pt-4'>
                  use link format like (amansas.fourbrick.in), don't include https or / in url
                </p>
                <CommonForm classes={"grid-cols-2 gap-x-4 gap-y-1 w-full "} errors={errors} Form={PersonalLinkInformation}
                  register={register} setValue={setValue} getValues={getValues} />
                <CommonForm classes={"grid-cols-2 gap-x-4 gap-y-1 w-full mt-6"} errors={errors} Form={CompanyLinkInformation}
                  register={register} setValue={setValue} getValues={getValues} />
                {/* <CommonForm classes={"grid-cols-2 gap-x-4 gap-y-1 w-full"} errors={errors} Form={ContactInformation}
                  register={register} setValue={setValue} getValues={getValues} /> */}
                {/* <CommonForm classes={"grid-cols-2 gap-x-4 gap-y-1 w-full"} errors={errors} Form={TaxInformation}
                  register={register} setValue={setValue} getValues={getValues} /> */}
                <CommonForm classes={"grid-cols-2 gap-x-4 gap-y-1 w-full mt-4"} errors={errors} Form={TaxInformation}
                  register={register} setValue={setValue} getValues={getValues} />

                <CommonForm classes={"grid-cols-2 gap-x-4 gap-y-1 w-full"} errors={errors} Form={Financialinformation}
                  register={register} setValue={setValue} getValues={getValues} />

                <div className="flex justify-center items-center mt-4 mb-9">
                  <div class="grid h-fit w-full px-3 grid-cols-1 gap-2  bg-white">
                    <div className='col-span-1 h-full pt-0 overflow-scroll relative border-primaryLine rounded-lg shadow-md'>
                      <div className='flex w-full sticky top-0 justify-between bg-primaryLine  p-2'>
                        <h1 className='text-black'>
                          <p className="mt-2 font-poppins font-semibold text-white">
                            Upload Last 3 Years Financial Report (Optional)
                          </p>
                        </h1>
                        <button onClick={() => {
                          let finval = 0
                          setlastFinancialform((prev) => {
                            let val = [...prev]

                            let sval = val.pop()

                            if (isNaN(sval)) {
                              finval = 1
                            } else {
                              finval = sval + 1
                            }

                            return [...prev, finval]
                          })
                          setnestfilter(newprev => ({
                            ...newprev,
                            ["wherecondition" + "_" + finval + "_form"]: "blank"
                          }));
                        }}
                          className='bg-pbutton text-black rounded-full mt-2 h-fit'>
                          <Unicons.UilPlus size="24" className={'text-white'} />
                        </button>
                      </div>
                      <div className='flex flex-col justify-between px-2 py-2'>
                        <p className="font-oxygen font-semibold text-center">
                          Click on <span className='text-xl text-heading'> &#x2A01; </span> to upload more files
                        </p>
                        <div class="overflow-scroll">
                          {lastFinancialform.map((val, index) => {
                            return <>
                              <CommonForm classes={"grid-cols-1 md:grid-cols-2 lg:gap-8 w-full"} errors={errors} Form={lastFinancialForm.map((itm) => {
                                return {
                                  ...itm,
                                  type: itm.name == "formovalue" ? nestfilter["wherecondition" + "_" + val + "_form"] == "joins" ? "muitiSelect" : "text" : itm.type,
                                  props: itm.label == "Select Column" || (itm.label == "Value" && nestfilter["wherecondition" + "_" + val + "_form"] == "joins") ? {
                                    ...itm.props, onSelect: (a, b) => {
                                      console.log("gamecall", a, b, "column" + "_" + val + "_form")
                                      setValue(itm.label == "Select Column" ? "wherecolumn" + "_" + val + "_form" : "formovalue" + "_" + val + "_form", b.category + "smartGame" + b.name)
                                    }
                                  } : { ...itm.props },
                                  option: itm.label == "Expression" ? all_command_type_wise[nestfilter["wherecondition" + "_" + val + "_form"]] : itm.option,
                                  name: itm.name + "_" + val + "_form"
                                }
                              })}
                                register={register} setValue={setValue} getValues={getValues} />
                            </>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  (userRole != 'Investor') &&
                  <>
                    <CommonForm classes={"grid-cols-2 gap-x-4 gap-y-1 w-full"} errors={errors} Form={BusinessInformation}
                      register={register} setValue={setValue} getValues={getValues} />
                  </>
                }



                {
                  (customExistingFunds === 'Yes') ? (
                    <>
                      <div className="flex justify-center items-center mb-9 ">
                        <div class="grid h-fit w-full px-3 grid-cols-1 gap-2  bg-white">
                          <div className='col-span-1 h-full pt-0 overflow-scroll relative border-primaryLine rounded-lg shadow-md'>
                            <div className='flex w-full sticky top-0 justify-between bg-primaryLine  p-2'>
                              <h1 className='text-black'>
                                <p className="mt-2 font-poppins font-semibold text-white">
                                  {/* Upload Document */}
                                  List of Outstanding Funding
                                </p>
                              </h1>
                              <button onClick={() => {
                                let finval = 0
                                setOutstandingFundform((prev) => {
                                  let val = [...prev]
                                  let sval = val.pop()
                                  if (isNaN(sval)) {
                                    finval = 1
                                  } else {
                                    finval = sval + 1
                                  }
                                  console.log(finval, "finval", val, prev)
                                  return [...prev, finval]
                                })
                                setnestfilter(newprev => ({
                                  ...newprev,
                                  ["wherecondition" + "_" + finval + "_form"]: "blank"
                                }));
                              }}
                                className='bg-pbutton text-black rounded-full mt-2 h-fit'>
                                <Unicons.UilPlus size="24" className={'text-white'} />
                              </button>
                            </div>
                            <div className='flex flex-col justify-between px-2 py-2'>
                              <p className="font-oxygen font-semibold text-center">
                                Click on <span className='text-xl text-heading'> &#x2A01; </span> to upload more files
                              </p>
                              <div class="overflow-scroll">

                                {outstandingFundform.map((val, index) => {
                                  return <>
                                    <CommonForm classes={"grid-cols-1 md:grid-cols-2 lg:gap-8 w-full"} errors={errors} Form={outstandingFundForm.map((itm) => {
                                      return {
                                        ...itm,
                                        type: itm.name == "formovalue" ? nestfilter["wherecondition" + "_" + val + "_form"] == "joins" ? "muitiSelect" : "text" : itm.type,
                                        props: itm.label == "Select Column" || (itm.label == "Value" && nestfilter["wherecondition" + "_" + val + "_form"] == "joins") ? {
                                          ...itm.props, onSelect: (a, b) => {
                                            console.log("gamecall", a, b, "column" + "_" + val + "_form")
                                            setValue(itm.label == "Select Column" ? "wherecolumn" + "_" + val + "_form" : "formovalue" + "_" + val + "_form", b.category + "smartGame" + b.name)
                                          }
                                        } : { ...itm.props },
                                        option: itm.label == "Expression" ? all_command_type_wise[nestfilter["wherecondition" + "_" + val + "_form"]] : itm.option,
                                        name: itm.name + "_" + val + "_form"
                                      }
                                    })}
                                      register={register} setValue={setValue} getValues={getValues} />
                                  </>
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (<>
                  </>)
                }




                {
                  (userRole != 'Investor') &&
                  <>
                    <div className="flex justify-center items-center mb-9">
                      <div class="grid  h-fit w-full px-3 grid-cols-1 gap-2  bg-white">
                        <div className='col-span-1 h-full pt-0 overflow-scroll relative border-primaryLine rounded-lg shadow-md'>
                          <div className='flex w-full sticky top-0 justify-between bg-primaryLine  p-2'>
                            <h1 className='text-black'>
                              <p className="mt-2 font-poppins font-semibold text-white">
                                {/* Upload Document */}
                                Project Specific Information
                              </p>
                            </h1>
                            <button onClick={() => {
                              let finval = 0
                              setProjectSpecificform((prev) => {
                                let val = [...prev]
                                let sval = val.pop()
                                if (isNaN(sval)) {
                                  finval = 1
                                } else {
                                  finval = sval + 1
                                }
                                console.log(finval, "finval", val, prev)
                                return [...prev, finval]
                              })
                              setnestfilter(newprev => ({
                                ...newprev,
                                ["wherecondition" + "_" + finval + "_form"]: "blank"
                              }));
                            }}
                              className='bg-pbutton text-black rounded-full mt-2 h-fit'>
                              <Unicons.UilPlus size="24" className={'text-white'} />
                            </button>
                          </div>
                          <div className='flex flex-col justify-between px-2 py-2'>
                            <p className="font-oxygen font-semibold text-center">
                              Click on <span className='text-xl text-heading'> &#x2A01; </span> to upload more files
                            </p>
                            <div class="overflow-scroll">

                              {projectSpecificform.map((val, index) => {
                                return <>
                                  <CommonForm classes={"grid-cols-1 md:grid-cols-2 lg:gap-8 w-full"} errors={errors} Form={projectSpecificForm.map((itm) => {
                                    return {
                                      ...itm,
                                      type: itm.name == "formovalue" ? nestfilter["wherecondition" + "_" + val + "_form"] == "joins" ? "muitiSelect" : "text" : itm.type,
                                      props: itm.label == "Select Column" || (itm.label == "Value" && nestfilter["wherecondition" + "_" + val + "_form"] == "joins") ? {
                                        ...itm.props, onSelect: (a, b) => {
                                          console.log("gamecall", a, b, "column" + "_" + val + "_form")
                                          setValue(itm.label == "Select Column" ? "wherecolumn" + "_" + val + "_form" : "formovalue" + "_" + val + "_form", b.category + "smartGame" + b.name)
                                        }
                                      } : { ...itm.props },
                                      option: itm.label == "Expression" ? all_command_type_wise[nestfilter["wherecondition" + "_" + val + "_form"]] : itm.option,
                                      name: itm.name + "_" + val + "_form"
                                    }
                                  })}
                                    register={register} setValue={setValue} getValues={getValues} />
                                </>
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }





                <CommonForm classes={"grid-cols-1 gap-4 w-full"} errors={errors} Form={userRole != "Investor" ? PurposeOfFunding : []}
                  register={register} setValue={setValue} getValues={getValues} />
                <CommonForm classes={"grid-cols-1 gap-4 w-full"} errors={errors} Form={conDet}
                  register={register} setValue={setValue} getValues={getValues} />

                <div className="flex justify-center items-center mb-9 pt-8">
                  <div class="grid h-fit w-full px-3 grid-cols-1 gap-2  bg-white">
                    <div className='col-span-1 h-full pt-0 overflow-scroll relative border-primaryLine rounded-lg shadow-md'>
                      <div className='flex w-full sticky top-0 justify-between bg-primaryLine  p-2'>
                        <h1 className='text-black'>
                          <p className="mt-2 font-poppins font-semibold text-white">
                            Identification Document
                            {/* Upload Last 3 Years Financial Report */}
                          </p>
                        </h1>
                        <button onClick={() => {
                          let finval = 0
                          setconditioncountform((prev) => {
                            let val = [...prev]
                            let sval = val.pop()
                            if (isNaN(sval)) {
                              finval = 1
                            } else {
                              finval = sval + 1
                            }
                            console.log(finval, "finval", val, prev)
                            return [...prev, finval]
                          })
                          setnestfilter(newprev => ({
                            ...newprev,
                            ["wherecondition" + "_" + finval + "_form"]: "blank"
                          }));
                        }}
                          className='bg-pbutton text-black rounded-full mt-2 h-fit'>
                          <Unicons.UilPlus size="24" className='text-white' />
                        </button>
                      </div>
                      <div className='flex flex-col justify-between px-2 py-2'>
                        <p className="font-oxygen font-semibold text-center">
                          Click on <span className='text-xl text-heading'> &#x2A01; </span> to upload more files
                        </p>
                        <div class="overflow-scroll">

                          {conditioncountform.map((val, index) => {
                            return <>
                              <CommonForm classes={"grid-cols-1 md:grid-cols-2 lg:gap-8 w-full"} errors={errors} Form={conditionmultiForm.map((itm) => {
                                return {
                                  ...itm,
                                  type: itm.name == "formovalue" ? nestfilter["wherecondition" + "_" + val + "_form"] == "joins" ? "muitiSelect" : "text" : itm.type,
                                  props: itm.label == "Select Column" || (itm.label == "Value" && nestfilter["wherecondition" + "_" + val + "_form"] == "joins") ? {
                                    ...itm.props, onSelect: (a, b) => {
                                      console.log("gamecall", a, b, "column" + "_" + val + "_form")
                                      setValue(itm.label == "Select Column" ? "wherecolumn" + "_" + val + "_form" : "formovalue" + "_" + val + "_form", b.category + "smartGame" + b.name)
                                    }
                                  } : { ...itm.props },
                                  option: itm.label == "Expression" ? all_command_type_wise[nestfilter["wherecondition" + "_" + val + "_form"]] : itm.option,
                                  name: itm.name + "_" + val + "_form"
                                }
                              })}
                                register={register} setValue={setValue} getValues={getValues} />
                            </>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                {
                  (userRole != 'Investor') &&
                  <>
                    <div className="flex justify-center items-center mb-9">
                      <div class="grid h-fit w-full px-3 grid-cols-1 gap-2  bg-white">
                        <div className='col-span-1 h-full pt-0 overflow-scroll relative border-primaryLine rounded-lg shadow-md'>
                          <div className='flex w-full top-0 sticky justify-between bg-primaryLine  p-2'>
                            <h1 className='text-black'>
                              <p className="mt-2 font-poppins font-semibold text-white">
                                Bios of Management Team
                                {/* Upload Last 3 Years Financial Report */}
                              </p>
                            </h1>
                            <button onClick={() => {
                              let finval = 0
                              setBiosInfoform((prev) => {
                                let val = [...prev]
                                let sval = val.pop()
                                if (isNaN(sval)) {
                                  finval = 1
                                } else {
                                  finval = sval + 1
                                }
                                console.log(finval, "finval", val, prev)
                                return [...prev, finval]
                              })
                              setnestfilter(newprev => ({
                                ...newprev,
                                ["wherecondition" + "_" + finval + "_form"]: "blank"
                              }));
                            }}


                              className='bg-pbutton text-black rounded-full mt-2 h-fit'>
                              <Unicons.UilPlus size="24" className='text-white' />
                            </button>
                          </div>
                          <div className='flex flex-col justify-between px-2 py-2'>
                            <p className="font-oxygen font-semibold text-center">
                              Click on <span className='text-xl text-heading'> &#x2A01; </span> to upload more files
                            </p>
                            <div class="overflow-scroll">

                              {biosInfoform.map((val, index) => {
                                return <>
                                  <CommonForm classes={"grid-cols-1 md:grid-cols-2 lg:gap-8 w-full"} errors={errors} Form={biosInfoForm.map((itm) => {
                                    return {
                                      ...itm,
                                      type: itm.name == "formovalue" ? nestfilter["wherecondition" + "_" + val + "_form"] == "joins" ? "muitiSelect" : "text" : itm.type,
                                      props: itm.label == "Select Column" || (itm.label == "Value" && nestfilter["wherecondition" + "_" + val + "_form"] == "joins") ? {
                                        ...itm.props, onSelect: (a, b) => {
                                          console.log("gamecall", a, b, "column" + "_" + val + "_form")
                                          setValue(itm.label == "Select Column" ? "wherecolumn" + "_" + val + "_form" : "formovalue" + "_" + val + "_form", b.category + "smartGame" + b.name)
                                        }
                                      } : { ...itm.props },
                                      option: itm.label == "Expression" ? all_command_type_wise[nestfilter["wherecondition" + "_" + val + "_form"]] : itm.option,
                                      name: itm.name + "_" + val + "_form"
                                    }
                                  })}
                                    register={register} setValue={setValue} getValues={getValues} />
                                </>
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }




              </div>








              {
                UserLyp != "" && <CommonForm classes={"grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full pt-4"} errors={errors} Form={contype}
                  register={register} setValue={setValue} getValues={getValues} onChange={handleFormChange}/>
              }
              <div className='flex gap-4 md:gap-8'>

                <button onClick={() => { navigate("/businessRegistration/" + uid) }} className='mt-6 w-full justify-center rounded-md  px-3 text-sm font-semibold leading-6 shadow-sm transition-all duration-500 border-[1px] bg-heading text-white'>Back</button>
                <button onClick={() => { navigate("/agreement/" + uid) }} className='mt-6 w-full justify-center rounded-md  px-3 text-sm font-semibold leading-6 shadow-sm  bg-white dark:text-black hover:text-secLine transition-all duration-500 border-[1px] hover:border-secLine'>Skip</button>
                <button onClick={(handleSubmit(onTableViewGenerateSubmit))} className='mt-6 w-full justify-center rounded-md px-3 bg-secLine py-1.5 text-sm font-semibold leading-6 shadow-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
};
export default KycRegister;


