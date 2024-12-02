// import { useEffect, useState, useRef } from "react";
// import { useForm } from "react-hook-form";
// import moment from "moment";
// import * as Unicons from "@iconscout/react-unicons";
// import { useDispatch, useSelector } from "react-redux";
// import AlertConfigurationActions from "../../store/actions/alertConfiguration-actions";
// import CustomQueryActions from "../../store/actions/customQuery-actions";
// import Modal from "../../components/Modal";
// import CommonForm from "../../components/CommonForm";
// import Button from "../../components/Button";
// import AdminManagementActions from "../../store/actions/adminManagement-actions";
// import AuthActions from "../../store/actions/auth-actions";
// import DeckManagementActions from "../../store/actions/deckManagement-actions";
// import getCountryCurrencies from "../CountryCurrency";
// import { kyc_doc_type } from "../../utils/queryBuilder";
// const ChatWithFundSeekerForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
//   const [conditioncountform, setconditioncountform] = useState([]);
//   const [nestfilter, setnestfilter] = useState({});
//   console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue");
//   const [modalOpen, setmodalOpen] = useState(false);
//   let dispatch = useDispatch();
//   const fileRef = useRef(null);

//   let countryCurrency = getCountryCurrencies();
//   let currencyOptions = countryCurrency?.map((currency) => {
//     return {
//       label: `${currency?.currency_code} - ${currency?.currency_symbol}`,
//       value: currency?.currency_symbol,
//     };
//   });

//   let conditionmultiForm = [
//     // {
//     // type:'heading',
//     // label:"Identification Documents",
//     // classes: "col-span-1 text-black-900 text-center",
//     //   },
//     {
//       label: "Document Name",
//       value: "",
//       name: "document",
//       //   option: kyc_doc_type,
//       type: "text",
//       //   required: ,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target.name, "e geeter")
//           let tar = e.target.name;
//           let val = e.target.value;
//           setnestfilter((prev) => ({
//             ...prev,
//             [tar]: val,
//           }));
//           // nestfilter[e.target.name]= e.target.value
//           // setOneLoad(true)
//           // dispatch(CustomQueryActions.getTablesList(e.target.value, () => { }))
//         },
//       },
//       classes: "col-span-1",
//     },
//     {
//       label: "File ",
//       value: "",
//       name: "files",
//       type: "file",
//       onChanging: (e) => { },
//       props: {
//         onSelect: (e, a, b, c) => {
//           console.log({ e, a, b, c });
//         },
//       },
//       required: true,
//       classes: "col-span-1",
//     },
//   ];

//   let Form = [
//     {
//       label: "Pitch Deck Name",
//       value: "",
//       name: "pitchDeckName",
//       type: "text",
//       required: true,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target.value, "e geeter")
//           setValue("queries", e.target.name);
//         },
//       },
//       classes: "col-span-1",
//     },
//     // {
//     //   label: "Select Currency",
//     //   value: "",
//     //   name: "currency",
//     //   type: "select",
//     //   option: currencyOptions,
//     //   required: true,
//     //   props: {
//     //     onChange: (e) => {
//     //       // console.log(e.target.value, "e geeter")
//     //       setValue("queries", e.target.name);
//     //     },
//     //   },
//     //   classes: "col-span-1",
//     // },

//     {
//       label: "The Ask",
//       value: "",
//       name: "amountRaised",
//       iname: "amountRaisedCurr",
//       type: "currency",
//       required: true,
//       props: {
//         onChange: (e) => {
//           // console.log(e.target, "e geeter")
//           setValue("queries", e.target.name);
//         },
//       },
//       classes: "col-span-1",
//       // amp: [{
//       //     label: "Select Currency",
//       //     value: "",
//       //     name: "currency",
//       //     type: "select",
//       //     option: currencyOptions,
//       //     required: true,
//       //     props: {
//       //         onChange: ((e) => {
//       //             // console.log(e.target.value, "e geeter")
//       //             setValue("cyqueries", e.target.name)
//       //         }),
//       //     },
//       //     classes: "col-span-1"
//       // }]
//     },
//     {
//       label: "Project Current Stage",
//       name: "projectCurrentStage",
//       value: "",
//       type: "select",
//       // props: {
//       //   onChange: (e) => {
//       //     setshowSocialMediaOther(e.target.value === "Other");
//       //   },
//       // },
//       props: {},
//       required: false,
//       option: [
//         { label: "Pre-seed", value: "Pre-seed" },
//         { label: "Seed", value: "Seed" },
//         { label: "Series A", value: "Series A" },
//         { label: "Series B", value: "Series B" },
//         { label: "Series C", value: "Series C" },
//         { label: "Series D", value: "Series D" },
//         { label: "Series E", value: "Series E" },
//         { label: "Other", value: "Other" },
//       ],
//     },
//   ];

//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // dispatch(AuthActions.signIn(data, () => {
//     //     navigate('/pitch-deck')
//     // }))
//     dispatch(
//       DeckManagementActions.getDeckList(data, () => {
//         navigate("/pitch-deck");
//       })
//     );
//   };
//   const onTableViewSubmit = (data) => {
//     console.log(data, "xjxjjj");
//     const formData = new FormData();
//     console.log("kksksks", formData);
//     // delete data["files"];
//     // Object.keys(data).forEach((key) => {
//     //   console.log("smmm", key, "mjsjssjs", data[key], "hhbbhhb", formData);
//     //   formData.append(key, data[key]);
//     //   console.log("kksksks", formData);
//     // });
//     // fileRef?.current?.forEach((file) => {
//     //   console.log(file, "nnhjhhdh");
//     //   formData?.append("files", file);
//     //   console.log(formData, "kskkssjsjjhh");
//     // });
//     console.log(data, "datadata");
//     if (data.uniqueId) {
//       dispatch(
//         DeckManagementActions.postPitchDeck(
//           true,
//           data,
//           () => {
//             setIsOpen(false);
//             dispatch(DeckManagementActions.getDeckList());
//           },
//           data.uniqueId
//         )
//       );
//     } else {
//       dispatch(
//         DeckManagementActions.postPitchDeck(true, data, () => {
//           console.log("CustomQueryActions.postDBConfig");
//           setIsOpen(false);
//           dispatch(DeckManagementActions.getDeckList());
//         })
//       );
//     }
//   };
//   useEffect(() => {
//     // dispatch(AdminManagementActions.getRoleList())
//     // let Investors=state
//     // console.log(Investors,'hhdhdhdhdh')
//     dispatch(DeckManagementActions.getDeckList());

//     if (resetting) {
//       reset({});
//       Form.map((fieldName) => {
//         setValue(fieldName["name"], fieldName["value"]);
//       });
//     } else {
//       reset({});
//       console.log(Object.keys(formValue), "Object.keys(formValue)");
//       Object.keys(formValue).forEach((key) => {
//         if (["endAt", "startAt"].indexOf(key) != -1) {
//           console.log("date formValuekey", key, formValue[key]);
//           const momentObj = moment(formValue[key]);
//           setValue(key, momentObj.toDate());
//         } else {
//           // console.log("formValuekey",key,key)
//           setValue(key, formValue[key]);
//         }
//       });
//     }
//   }, [formValue, resetting]);
//   return (
//     <>
//       <Modal
//         size={"sm"}
//         children={
//           <>
//             <CommonForm
//               classes={"grid-cols-1 gap-1"}
//               Form={Form}
//               errors={errors}
//               register={register}
//               setValue={setValue}
//               getValues={getValues}
//             />
//           </>
//         }
//         isOpen={modalOpen}
//         setIsOpen={setmodalOpen}
//       />

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <CommonForm
//           classes={"grid-cols-1 gap-1 dark:text-black"}
//           Form={Form}
//           errors={errors}
//           register={register}
//           setValue={setValue}
//           getValues={getValues}
//         />
//         <div class="grid h-96 grid-cols-1 gap-2 bg-white rounded-md ">
//           <div className="col-span-1 h-full  pt-0 overflow-scroll relative border-gray-500 border rounded-md">
//             <div className="flex w-full top  relative justify-between bg-primaryLine py-2 pt-0 rounded-md">
//               <h1 className="text-white">
//                 <p className="mt-2">Upload Pitch Documents</p>
//               </h1>
//               <button
//                 onClick={() => {
//                   let finval = 0;
//                   setconditioncountform((prev) => {
//                     let val = [...prev];
//                     let sval = val.pop();
//                     if (isNaN(sval)) {
//                       finval = 1;
//                     } else {
//                       finval = sval + 1;
//                     }
//                     console.log(finval, "finval", val, prev);
//                     return [...prev, finval];
//                   });
//                   setnestfilter((newprev) => ({
//                     ...newprev,
//                     ["wherecondition" + "_" + finval + "_form"]: "blank",
//                   }));
//                 }}
//                 className="bg-pbutton text-white rounded-full mt-2"
//               >
//                 <Unicons.UilPlus size="24" />
//               </button>
//             </div>
//             <div className="flex flex-col justify-between p-2">
//               <div class="overflow-scroll">
//                 {conditioncountform.map((val, index) => {
//                   return (
//                     <dv>
//                       <CommonForm
//                         classes={"grid-cols-1 w-full"}
//                         errors={errors}
//                         Form={conditionmultiForm.map((itm) => {
//                           return {
//                             ...itm,
//                             type:
//                               itm.name == "formovalue"
//                                 ? nestfilter[
//                                   "wherecondition" + "_" + val + "_form"
//                                 ] == "joins"
//                                   ? "muitiSelect"
//                                   : "text"
//                                 : itm.type,
//                             props:
//                               itm.label == "Select Column" ||
//                                 (itm.label == "Value" &&
//                                   nestfilter[
//                                   "wherecondition" + "_" + val + "_form"
//                                   ] == "joins")
//                                 ? {
//                                   ...itm.props,
//                                   onSelect: (a, b) => {
//                                     console.log(
//                                       "gamecall",
//                                       a,
//                                       b,
//                                       "column" + "_" + val + "_form"
//                                     );
//                                     setValue(
//                                       itm.label == "Select Column"
//                                         ? "wherecolumn" + "_" + val + "_form"
//                                         : "formovalue" + "_" + val + "_form",
//                                       b.category + "smartGame" + b.name
//                                     );
//                                   },
//                                 }
//                                 : { ...itm.props },
//                             option:
//                               itm.label == "Expression"
//                                 ? all_command_type_wise[
//                                 nestfilter[
//                                 "wherecondition" + "_" + val + "_form"
//                                 ]
//                                 ]
//                                 : itm.option,
//                             name: itm.name + "_" + val + "_form",
//                             // name: "files"
//                           };
//                         })}
//                         register={register}
//                         setValue={setValue}
//                         getValues={getValues}
//                       />
//                     </dv>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <button></button> */}
//         {/* <button onClick={() => { setmodalOpen(true) }} className='flex bg-primaryLine mt-6 w-42 absolute right-1 top-1 justify-center rounded-md bg-pbutton px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton'>Add DB Type <Unicons.UilPlus /></button> */}
//         {/* <Table headers={["S.No.", "DB Type", "DB Server", "DB Name", "Created By", "Created Date", "Last Modified By", "Last Modified Date", "Actions"]} columns={[["1", "abcd", "ancd", "abcd", "ancd"], ["2", "adsa", "dasdas", "abcd", "ancd"]]} /> */}
//         {/* <button onClick={(handleSubmit(onTableViewSubmit))} className='bg-primaryLine mt-6 w-full justify-center rounded-md bg-pbutton px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton'>Submit</button> */}
//         <Button
//           className="mt-0"
//           onClick={handleSubmit(onTableViewSubmit)}
//           name="Submit"
//         />
//       </div>
//     </>
//   );
// };
// export default ChatWithFundSeekerForm;
