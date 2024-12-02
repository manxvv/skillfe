
import React, {useState, useEffect} from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import CommonForm from "../components/CommonForm";
import AuthActions from "../store/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../utils/url";
import { ALERTS } from "../store/reducers/component-reducer";
import WithSideImage from "../components/WithSideImage";


const field = [{
    logo: baseUrl + "/logo.png",
    firstname: "Name",
    surname: "surname",
    email: "E-mail",
    password: "Password",
    confirmPassword: "confirmPassword",
    phonenumber: "Phone Number",
    aregister: "Already Register",
    regiter: "Register"
}]
export default function SetupPassword() {
    
    const { uid } = useParams();
    console.log(uid, "dynamicValuedyamarnathnamicValuedynamicValue")
    const dispatch = useDispatch()
    let userRole = useSelector((state) => {
        return state?.auth?.userRole
    })
    console.log("dababaselist", userRole)
    const navigate = useNavigate()

    let Form = [
        {
            label: "Password",
            name: "password",
            value: "password",
            type: "password",
            props: "",
            required: true
        },
        {
            label: "Confirm password",
            name: "confirmPassword",
            value: "confirmPassword",
            type: "password",
            props: "",
            required: true
        },
        // { label: "Smart Card No", name: "smartcardnumber", value: "smartcardnumber", type: "number", props: "", required: false },
    ]

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()
     //rounak changes.................
  useEffect(() => {
    const savedFormData = sessionStorage.getItem("formData3");
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
    sessionStorage.setItem("formData3", JSON.stringify(currentData));
  };
  //till here..................


    const onTableViewSubmit = (data) => {
        //rounak changes...................
        sessionStorage.setItem("formData3", JSON.stringify(data));
    //till here......................

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
        if (!passwordRegex.test(data.password)) {
            let missingCriteria = [];
            if (data.password.length < 8) {
                console.log("asgdfsdadfasfa")
                missingCriteria.push("at least 8 characters long");
            }
            if (!/(?=.*[a-z])/.test(data.password)) {
                console.log("basdfsafdasfasdf")
                missingCriteria.push("small letter");
            }
            if (!/(?=.*[A-Z])/.test(data.password)) {
                console.log("casdfasfasfasfa")
                missingCriteria.push("capital letter");
            }
            if (!/(?=.*\d)/.test(data.password)) {
                console.log("dafdsasfdasfafds")
                missingCriteria.push("number");
            }
            if (!/(?=.*[@$!%*?&#])/.test(data.password)) {
                console.log("easfasfsafsafsafd")
                missingCriteria.push("special character");
            }
            let msgdata = {
                show: true,
                icon: "error",
                buttons: [],
                type: 1,
                text: `Password is missing: ${missingCriteria.join(", ")}.`,
            };
            dispatch(ALERTS(msgdata));
            return;
        }
        if (data.password !== data.confirmPassword) {
            let msgdata = {
                show: true,
                icon: "error",
                buttons: [],
                type: 1,
                text: "Password and Confirm Password do not match",
            };
            dispatch(ALERTS(msgdata));
            return;
        }
        data["userid"] = uid;
        dispatch(
            AuthActions.setuppassword(
                data, userRole,
                // () => navigate("/setupRegistration/" + uid),
                // () => navigate("/trainingVideoPage/" + uid),
                () => navigate("/login")
            )
        );
    };
    return <>
        <WithSideImage sideImage={"bg-setuppassword"} formclass={" h-[75vh]"} form={<>
            <CommonForm classes={"grid-cols-1 gap-1 font-body"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} onChange={handleFormChange}/>
            <Button classes={"mt-4 mx-auto bg-neavycolor"} onClick={(handleSubmit(onTableViewSubmit))} name="Set Password and Continue" />
        </>} labeling={""} />
    </>
}


