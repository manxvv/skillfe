// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import IsValidName from "../components/IsValidName";
// import IsValidPhoneNumber from "../components/IsValidPhoneNumber";
// import { ALERTS } from "../store/reducers/component-reducer";

// const RegisterPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   const isValidMail = (email) => {
//     const pattern = /^[\w\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/;
//     return pattern.test(email);
//   };


//   const onSubmit = async (data) => {

//     if (!isValidMail(data.email)) {
//       dispatch(
//         ALERTS({
//           show: true,
//           icon: "error",
//           buttons: [],
//           type: 1,
//           text: "Please enter a valid email address.",
//         })
//       );
//       return;
//     }
//     if (!IsValidName(data.firstName)) {
//       dispatch(
//         ALERTS({
//           show: true,
//           icon: "error",
//           buttons: [],
//           type: 1,
//           text: "Invalid first name.",
//         })
//       );
//       return;
//     }
//     if (!IsValidName(data.surname)) {
//       dispatch(
//         ALERTS({
//           show: true,
//           icon: "error",
//           buttons: [],
//           type: 1,
//           text: "Invalid surname.",
//         })
//       );
//       return;
//     }
//     if (!IsValidPhoneNumber(data.mobile)) {
//       dispatch(
//         ALERTS({
//           show: true,
//           icon: "error",
//           buttons: [],
//           type: 1,
//           text: "Invalid phone number.",
//         })
//       );
//       return;
//     }

//     try {
//       const response = await axios.post("http://192.168.29.50:8081/register", data);
//       console.log(response.data);
//       navigate("/overview");
//     } catch (err) {
//       console.error("Registration failed", err);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6">Register</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
//           <div>
//             <label className="block text-sm font-medium">First Name</label>
//             <input
//               type="text"
//               {...register("firstName", { required: "First Name is required" })}
//               className="w-full p-2 border rounded"
//             />
//             {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Surname</label>
//             <input
//               type="text"
//               {...register("surname", { required: "Surname is required" })}
//               className="w-full p-2 border rounded"
//             />
//             {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">E-mail</label>
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               className="w-full p-2 border rounded"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Phone Number</label>
//             <input
//               type="text"
//               {...register("mobile")}
//               className="w-full p-2 border rounded"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Role</label>
//             <div className="flex flex-col">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   value="User"
//                   {...register("roleName", { required: "Role is required" })}
//                   className="mr-2"
//                 />
//                USER
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   value="Mentor"
//                   {...register("roleName")}
//                   className="mr-2"
//                 />
//                 MENTOR
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   value="Admin"
//                   {...register("roleName")}
//                   className="mr-2"
//                 />
//                SUPER ADMIN
//               </label>
//             </div>
//             {errors.roleName && <p className="text-red-500 text-sm">{errors.roleName.message}</p>}
//           </div>
//           <div className="flex gap-4">
//             <button
//               type="button"
//               onClick={() => navigate("/")}
//               className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
//             >
//               Back
//             </button>
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="mt-4 text-center">
//           <button
//             onClick={() => navigate("/login")}
//             className="text-blue-500 hover:underline"
//           >
//             Already have an account? Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
import React from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import CommonForm from "../components/CommonForm";
import AuthActions from "../store/actions/auth-actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectDropDown from "../components/FormElements/SelectDropDown";
import { baseUrl } from "../utils/url";
import WithSideImage from "../components/WithSideImage";
import getCountries from "./CountryCode";
import { ALERTS } from "../store/reducers/component-reducer";
import IsValidName from "../components/IsValidName";
import IsValidPhoneNumber from "../components/IsValidPhoneNumber";
const field = [{
    logo: baseUrl + "/logo.png",
    firstname: "Name",
    surname: "Surname",
    email: "E-mail",
    password: "Password",
    phonenumber: "Phone Number",
    aregister: "Already Register",
    regiter: "Register",
    roleName: "roleName"
}]
const countries = getCountries();
console.log(countries, 'amarnathprajapaticountriesdata');
export default function Registration() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let Form = [
        { label: "Name", name: "firstName", value: "firstName", type: "text", props: "", required: true, placeholder: "" },
        { label: "Surname", name: "surname", value: "surname", type: "text", props: "", required: true, placeholder: "" },
        { label: "E-mail", name: "email", value: "email", type: "email", props: "", required: true, placeholder: "" },
        { label: "Phone Number", name: "mobile", value: "firstName", type: "mobile", props: "", required: false, placeholder: "" },
        // {  label: "Amount Raised", name: "amount", value: "firstName", type: "currency", props: "", required: true, placeholder: "" },
        // {
        //     label: "Country Code",
        //     value: "",
        //     name: "mobile",
        //     type: "mobile",
        //     required: true,
        //     props: {
        //         //   onChange: ((e) => {
        //         //   }),
        //     },
        // },
        // {
        //     label: "Phone Number", name: "mobile", value: "mobile", type: "mobile", props: "",
        //     required: true,
        //     placeholder: "",
        //     amp: [{
        //         type: "select",
        //         name: "countryCode",
        //         styling: "w-25",
        //         option: countries,
        //         value: "currency"
        //     }]hh
        
        // },
        {
            label: "Role", name: "roleName", value: "", type: "radio", props: {

            }, required: true, option: [
                { "label": "User", "value": "User" },
                { "label": "Mentor", "value": "Mentor" },
                // { "label": "FUND SEEKER", "value": "Fund Seeker" },
                // { "label": "CHARITABLE ORGANISATION", "value": "Charitable Organisation" }
            ]
        }
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


    //email validation
    const isValidMail = (email) => {
        const pattern = /^[\w\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/;

        if (pattern.test(email)) {
            return true;
        } else {
            return false;
        }
    };
    //valid name
    // const isValidName = (vname) =>{
    //     const pattern = /^[a-zA-Z\s]*$/;
    //     if(pattern.test(vname)){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    const onTableViewSubmit = (data) => {

        let mail = data['email'];
        if (!isValidMail(mail)) {
            let msgdata = {
                show: true,
                icon: "error",
                buttons: [],
                type: 1,
                text: "Please Enter Valid Email Id",
            };
            dispatch(ALERTS(msgdata));
            return;
        }
        let firstName = data['firstName']
        if (!IsValidName(firstName)) {
            let msgdata = {
                show: true,
                icon: "error",
                buttons: [],
                type: 1,
                text: "Invalid Firstname",
            };
            dispatch(ALERTS(msgdata));
            return;
        }
        let surname = data['surname']
        if (!IsValidName(surname)) {
            let msgdata = {
                show: true,
                icon: "error",
                buttons: [],
                type: 1,
                text: "Invalid Surname",
            };
            dispatch(ALERTS(msgdata));
            return;
        }
        let mobile = data['mobile']
        if (!IsValidPhoneNumber(mobile)) {
            let msgdata = {
                show: true,
                icon: "error",
                buttons: [],
                type: 1,
                text: "Invalid Phone Number",
            };
            dispatch(ALERTS(msgdata));
            return;
        }
        console.log("amarnathprajapatimailaswertydfasfasdf", mail);
        console.log(data, "amarnathdatadata")
        dispatch(AuthActions.register(data, () => {
            navigate("/register")
        }))
    }
    return <>
        <WithSideImage sideImage={"bg-sideimage"} formclass={"h-full"} form={<>
            <CommonForm classes={"grid-cols-1 gap-0 font-body "} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues}  />
            <div className="flex gap-4">
            <Button classes={"mt-4 mx-auto bg-neavycolor"} onClick={(()=>{
                navigate("/overview")
            })} name="Back" />
            <Button classes={"mt-4 mx-auto bg-neavycolor"} onClick={(handleSubmit(onTableViewSubmit))} name="Register" />

            </div>
            <div className="p-0 m-2 flex justify-center items-center">
                {/* <div>
                    <p className="text-neavy text-sm dark:text-white"></p>
                </div> */}
                <div onClick={() => {
                    navigate('/login')
                }} >
                    <button className="btn text-neavy text-sm ml-2 dark:text-black hover:text-secLine transition-all duration-500">Already have an account? Login</button>
                </div>
            </div>
        </>} labeling={""} />
    </>
}