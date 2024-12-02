import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import CommonForm from "../components/CommonForm";
import AuthActions from "../store/actions/auth-actions";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SelectDropDown from "../components/FormElements/SelectDropDown";
import { baseUrl } from "../utils/url";
import WithSideImage from "../components/WithSideImage";
import getCountries from "./CountryCode";
import { useSelector } from "react-redux";
import { ALERTS } from "../store/reducers/component-reducer";
const countries = getCountries();
// import { useSelector } from "react-redux";
   
console.log(countries, "amarnathjsjsjsjsjjs");

export default function SetUpRegistration() {
  const [extra, setExtra] = useState("");
  const { uid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showUploadField, setShowUploadField] = useState(false);
  const [showSpecifyBusinessField, setShowSpecifyBusinessField] =
    useState(false);
  const [developer, setDeveloper] = useState(false);
  const [chooseNO, setChooseNo] = useState(false);
  let roleList = useSelector((state) => {
    let interdata = state?.auth?.userRole;
    return interdata;
  });
  console.log("afsadfadsffddsaafds_amar", chooseNO);
  console.log(roleList, "hhshhhshsh");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  //rounak changes.................
  useEffect(() => {
    const savedFormData = sessionStorage.getItem("formData2");
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
    sessionStorage.setItem("formData2", JSON.stringify(currentData));
  };
  //till here..................

  const kyc_doc_type = [
    { label: "OWNER", value: "OWNER" },
    { label: "DEVELOPER", value: "DEVELOPER" },
  ];
  const businessOptions = [
    { label: "YES", value: "YES" },
    { label: "NO", value: "NO" },
  ];
  let Form = [
    {
      label: "Position in the company",
      value: "",
      name: "position",
      option: kyc_doc_type,
      type: "select",
      required: true,
      props: {
        onChange: (e) => {
          setShowSpecifyBusinessField(e.target.value === "OTHER");
          setDeveloper(e.target.value === "DEVELOPER");

          if (e.target.value === "OWNER") {
            setExtra(e.target.value);
          } else {
            setExtra("");
          }
          //rounak change.............
          handleFormChange();
          //till here................
        },
      },
      classes: "col-span-1",
    },
    ...(extra === "OWNER"
      ? [
          {
            label: "Are you a Sole owner",
            value: "",
            name: "CustomAreSolo",
            type: "select",
            option: [
              { label: "YES", value: "YES" },
              { label: "NO", value: "NO" },
            ],
            required: false,
            props: {
              //   onChange: ((e) => {
              //   }),
              
            },
          },
        ]
      : []),
    {
      label: "Are you mandated to raise capital for the project/business?",
      value: "",
      name: "mandatoryBusiness",
      option: businessOptions,
      type: "select",
      required: true,
      props: {
        onChange: (e) => {
          setShowUploadField(e.target.value === "YES");
          setChooseNo(e.target.value === "NO");

          //rounak change.............
          handleFormChange();
          //till here................
        },
      },
      classes: "col-span-1",
    },
  ];

  if (showSpecifyBusinessField) {
    Form.push({
      label: "Specify Position",
      name: "specifyPosition",
      value: "specifyPosition",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      classes: "col-span-1",
    });
  }
  if (showUploadField) {
    Form.push({
      label: "Upload the signed mandate letter or resolution",
      name: "mandateLetter",
      value: "",
      type: "file",
      required: true,
      props: {},
      classes: "col-span-1",
    });
  }
  let Form2 = [
    {
      label: "Position in Company",
      value: "",
      name: "position",
      option: kyc_doc_type,
      type: "select",
      required: true,
      props: {
        onChange: (e) => {
          setShowSpecifyBusinessField(e.target.value === "OTHER");
        },
      },
      classes: "col-span-1",
      onChange:{handleFormChange}
    },
  ];
  if (showSpecifyBusinessField) {
    Form2.push({
      label: "Specify Position",
      name: "specifyPosition",
      value: "specifyPosition",
      type: "text",
      props: "",
      required: true,
      placeholder: "",
      classes: "col-span-1",
      onChange:{handleFormChange}
    });
  }

  
  const onTableViewSubmit = (data) => {
    //rounak changes...................
    sessionStorage.setItem("formData2", JSON.stringify(data));
    //till here......................

    let CustomAreSolo = data["CustomAreSolo"];
    if (CustomAreSolo == "Select") {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        // text: res?.data?.msg,
        text: "Please Select Your Position",
      };
      dispatch(ALERTS(msgdata));
      return;
    }

    let position = data["position"];
    if (position == "Select") {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        // text: res?.data?.msg,
        text: "Please Select Your Position",
      };
      dispatch(ALERTS(msgdata));
      return;
    }

    let mandatoryBusiness = data["mandatoryBusiness"];
    if (mandatoryBusiness == "Select") {
      let msgdata = {
        show: true,
        icon: "error",
        buttons: [],
        type: 1,
        // text: res?.data?.msg,
        text: "Please Select Are you mandated to raise capital?",
      };
      dispatch(ALERTS(msgdata));
      return;
    }

    console.log(data, "knuyb");
    data["uid"] = uid;
    console.log(data, "shhhhshshhsh");
    dispatch(
      AuthActions.postsetupRegistration(true, data, () => {
        navigate("/businessRegistration/" + uid);
      })
    );
  };
  // console.log("adsfsafasfafd_amar")
  console.log(chooseNO, "bhtsdfsfsfsfdjv");

  return (
    <WithSideImage
      sideImage={"bg-regsideimage"}
      formclass={" h-[75vh]"}
      form={
        <>
          <CommonForm
            classes={"grid-cols-1 gap-0 font-body"}
            Form={roleList == "Investor" ? Form2 : Form}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            //rounak change
            onChange={handleFormChange}
          />

          <div className="flex justify-around items-center pt-4">
            <Button
              onClick={() => {
                navigate("/trainingVideoPage/" + uid);
              }}
              classes="me-4"
              name={"Back"}
            ></Button>
            {chooseNO ? (
              <span className="tetx-gray-500 text-center ">
                You can't proceed ahead...
              </span>
            ) : (
              <Button
                classes={"ms-4"}
                onClick={handleSubmit(onTableViewSubmit)}
                name="Save and Continue"
              />
            )}
          </div>
        </>
      }
      labeling={""}
    />
  );
}
