import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import TextBox from "./FormElements/TextBox";
import FilePicker from "./FormElements/FilePicker";
import SelectDropDown from "./FormElements/SelectDropDown";
import TextArea from "./FormElements/TextArea";
import Multiselection from "./FormElements/Multiselection";
import DatePicking from "./FormElements/DatePicking";
import AutoSuggestion from "./FormElements/AutoSuggestion";
import Radio from "./FormElements/Radio";
import Disabled from "./FormElements/Disabled";
import CheckBox from "./FormElements/CheckBox";
import FilePickers from "./FormElements/FilePickers";
import CountryPhone from "./FormElements/CountryPhone";
import PhoneInput from "react-phone-number-input";
import Currency from "./FormElements/CountryCurrency";

const CommonForm = ({
  classes,
  // subClasses="block text-sm font-medium text-txt-neavy ml-3 dark:text-black",
  encType = false,
  Form,
  errors,
  handleSubmit,
  setValue,
  getValues,
  register,
}) => {
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(true);
  // let Form = [
  //     { label: "Name", value: "", type: "text" },
  //     { label: "Email", value: "", type: "email" },
  //     { label: "Password", value: "", type: "password" },
  //     { label: "DB Server", value: "", option: ["Abc","bca"], type: "select" }
  // ]
  // let Form = [
  //     { label: "Name", value: "", type: "text" },
  //     { label: "Email", value: "", type: "email" },
  //     { label: "Password", value: "", type: "password" },
  //     { label: "DB Server", value: "", option: ["Please Select Your DB Server"], type: "select" },
  //     { label: "Custom Queries", value: "", option: ["Please Select Your DB Server"], type: "textarea" }
  // ]

  console.log("Forms....... " + Form);

  let types = ["text", "password", "email", "hidden", "number"];

  let uiList = {
    text: {
      height: "h-[30px] w-full",
    },
    file: {
      height: "h-[30px] w-full",
    },
    password: {
      height: "h-[30px] w-full",
    },
    number: {
      height: "h-[30px] w-full",
    },
    email: {
      height: "h-[30px] w-full",
    },
    hidden: {
      height: "h-[30px] w-full",
    },
    select: {
      height: "h-[60px] w-full",
    },
    datetime: {
      height: "h-[30px] w-full",
    },
    muitiSelect: {
      height: "h-[40px] w-full",
    },
    sdisabled: {
      height: "h-[30px] w-full",
    },
    hdisabled: {
      height: "h-[30px] w-full",
    },

    textarea: {
      height: "h-[200px] w-full",
    },
    mobile: {
      height: "h-[30px] w-full",
    },
  };

  

  console.log(Form, "Form");
  return (
    <>
      <form className={"grid " + classes} encType="multipart/form-data">
        {console.log(errors, "errors")}
        {Form.map((itm) => {
          {
            console.log(itm, "itmnewitmnewitm");
          }
          return (
            <>
              {itm.type == "heading" ? (
                <>
                  <div
                    className={`${itm.classes ? itm.classes : "col-span-1"}`}
                  >
                    <h1 className="pl-2 md:pl-8">{itm.label}</h1>
                  </div>
                </>
              ) : (
                <></>
              )}
              {itm.type != "hidden" && itm.type != "heading" ? (
                <div
                  className={`mx-0 my-3 p-1 ${
                    itm.classes ? itm.classes : "col-span-1 "
                  }`}
                >
                  {itm?.showlabel == false ? (
                    <></>
                  ) : (
                    <div className="items-center justify-between">
                      {
                        <label className={itm.subClasses}>
                          {itm.label}
                          {
                            (itm?.required) &&
                            <span className="text-red-500">*</span>
                          }
                        </label>
                      }
                    </div>
                  )}
                  <div className={uiList[itm.type]?.height + " mt-2  px-2"}>
                    {itm?.amp &&
                      itm?.amp?.map((its) => {
                        return (
                          <div
                            className={`flex flex-row border-blue-2 text-white-900 sm:text-sm sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-gray-400 shadow-lg focus:shadow-indigo-500/30 ${
                              its?.styling
                            } ${its?.styling?.includes("w-") ? "" : " w-24 "}`}
                          >
                            {its?.type == "" && (
                              <SelectDropDown
                                itm={its}
                                errors={errors}
                                handleSubmit={handleSubmit}
                                setValue={setValue}
                                getValues={getValues}
                                register={register}
                              />
                            )}

                            {types.indexOf(its.type) != -1 && (
                              <TextBox
                                itm={its}
                                errors={errors}
                                handleSubmit={handleSubmit}
                                setValue={setValue}
                                getValues={getValues}
                                register={register}
                              />
                            )}
                          </div>
                        );
                      })}

                    {types.indexOf(itm.type) != -1 ? (
                      <>
                        <TextBox
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "sdisabled" || itm.type == "hdisabled" ? (
                      <>
                        <Disabled
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "radio" ? (
                      <>
                        <Radio
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "checkbox" ? (
                      <>
                        <CheckBox
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "file" ? (
                      <>
                        <FilePicker
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "mobile" ? (
                      <>
                        <CountryPhone
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                          //keepSearchTerm={true} rounak change
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "currency" ? (
                      <>
                        <Currency
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "fileAll" ? (
                      <>
                        <FilePickers
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "select" ? (
                      <>
                        <SelectDropDown
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "autoSuggestion" ? (
                      <>
                        <AutoSuggestion
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "textarea" ? (
                      <>
                        <TextArea
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {/* {
                                    itm.type == "datetime" ?
                                        <>
                                            <input type={"datetime-local"} {...register(itm.name, {
                                                required: itm.required ? "This " + " Field is required" : false,
                                                ...itm.props
                                            })} className={"bg-white border-black border block h-8 w-full rounded-md py-0.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"} />
                                            <p className='text-xs text-red-700'>{errors[itm.name]?.message}</p>
                                        </> :
                                        <></>
                                } */}
                    {itm.type == "datetime" ? (
                      <>
                        <DatePicking
                          itm={itm}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          setValue={setValue}
                          getValues={getValues}
                          register={register}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                    {itm.type == "muitiSelect" ? (
                      <Multiselection
                        itm={itm}
                        errors={errors}
                        handleSubmit={handleSubmit}
                        setValue={setValue}
                        getValues={getValues}
                        register={register}
                      />
                    ) : (
                      <></>
                    )}
                    {console.log(errors, "errorsendDateendDate")}
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          );

          //     <div className="mt-2">
          //         <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          //     </div>
          // </div >
          // </>
          // return  <input type={"text"} />
          // }
        })}
      </form>
    </>
  );
};

export default CommonForm;
