import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import * as Unicons from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import CommonForm from "../components/CommonForm";
import Modal from "../components/Modal";
import DeckManagementActions from "../store/actions/deckManagement-actions";
import getCountryCurrencies from "./CountryCurrency";


const NewProjectForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
    const [conditioncountform, setconditioncountform] = useState([]);
    const [nestfilter, setnestfilter] = useState({});
    //adding custom field
    const [customStage, setCustomStage] = useState("")
    const [customNature, setCustomNature] = useState(false)

    console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue");
    const [modalOpen, setmodalOpen] = useState(false);
    let dispatch = useDispatch();
    const fileRef = useRef(null);
    let countryCurrency = getCountryCurrencies();
    let currencyOptions = countryCurrency?.map((currency) => {
        return {
            label: `${currency?.currency_code} - ${currency?.currency_symbol}`,
            value: currency?.currency_symbol,
        };
    });

    let uid = useSelector((state) => {
        console.log(state, 'jhhdfghjkjhgfdfghjjggg')
        const uid = state?.auth?.user?.uid
        return uid
    })

    console.log("sfasfasdfasdadsfasdf", uid);

    let conditionmultiForm = [
        {
            label: "Project Name",
            name: "addedProjectName",
            value: "", classes: "col-span-2 md:col-span-1 text-black",
            type: "text",
            props: "",
            required: false,
            placeholder: "",
            subClasses: "text-heading text-sm"
            
        },
        {
            label: "Project Specific Organizational Chart ",
            value: "", classes: "col-span-2 md:col-span-1",
            name: "addedProjectChart",
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
            name: "addedProjectShareStructure",
            type: "file",
            onChanging: ((e) => {

            }),
            props: {
                onSelect: (e, a, b, c) => { console.log({ e, a, b, c }) }
            },
            required: true,

            subClasses: "text-heading text-sm"

        },
    ];

    let Form = [
        { label: "Name", classes:"text-black", name: "firstName", value: "", type: "text", props: "", required: true, placeholder: "" },
        { label: "Surname", classes:"text-black",  name: "surname", value: "", type: "text", props: "", required: true, placeholder: "" },
        { label: "E-mail", classes:"text-black",  name: "email", value: "", type: "text", props: "", required: true, placeholder: "" },
        { label: "Phone Number", classes:"text-black",  name: "mobile", value: "", type: "mobile", props: "", required: true, placeholder: "" },

        ...(customStage === "Other"
            ? [
                {
                    label: "Specify your current stage",
                    value: "",
                    name: "customStage",
                    type: "text",
                    required: true,
                    props: {

                    },
                    classes: "col-span-1 ",
                    subClasses: ""
                },
            ]
            : []),
        {
            label: "Specify the Nature of Funding",
            name: "fundingNature",
            value: "",
            type: "select",
            // props: {
            //   onChange: (e) => {
            //     setshowSocialMediaOther(e.target.value === "Other");
            //   },
            // },
            props: {
                onChange: ((e) => {
                    setCustomNature(e.target.value === 'Other')
                })
            },
            required: false,
            subClasses: "",
            classes:"text-black", 
            option: [
                { label: "Loan", value: "Loan" },
                { label: "Debt", value: "Debt" },
                { label: "Equity", value: "Equity" },
                { label: "Quasi Equity", value: "Quasi Equity" },
                { label: "Other", value: "Other" },
            ],
        },
        ...(customNature === true ?
            [
                {
                    label: "Specify your Nature of Funding",
                    value: "",
                    name: "customNature",
                    type: "text",
                    required: true,
                    props: {

                    },
                    classes: "col-span-1 text-black bg-black",
                    subClasses: "",
                
                },
            ]
            : [])
    ];

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // dispatch(AuthActions.signIn(data, () => {
        //     navigate('/pitch-deck')
        // }))
        dispatch(
            DeckManagementActions.getDeckList(data, () => {
                navigate("/pitch-deck");
            })
        );
    };



    const onTableViewSubmit = (data) => {
        data['uid'] = uid;
        console.log(data, "xjxjjj");
        const formData = new FormData();
        console.log("kksksks", formData);
        console.log(data, "datadata");
        if (data.uniqueId) {
            dispatch(
                DeckManagementActions.postNewProject(
                    true,
                    data,
                    () => {
                        setIsOpen(false);
                        dispatch(DeckManagementActions.getDeckList());
                    },
                    data.uniqueId
                )
            );
        } else {
            dispatch(
                DeckManagementActions.postNewProject(true, data, () => {
                    console.log("CustomQueryActions.postDBConfig");
                    setIsOpen(false);
                    dispatch(DeckManagementActions.getDeckList());
                })
            );
        }
    };
    useEffect(() => {
        // dispatch(AdminManagementActions.getRoleList())
        // let Investors=state
        // console.log(Investors,'hhdhdhdhdh')
        dispatch(DeckManagementActions.getDeckList());

        if (resetting) {
            reset({});
            Form.map((fieldName) => {
                setValue(fieldName["name"], fieldName["value"]);
            });
        } else {
            reset({});
            console.log(Object.keys(formValue), "Object.keys(formValue)");
            Object.keys(formValue).forEach((key) => {
                if (["endAt", "startAt"].indexOf(key) != -1) {
                    console.log("date formValuekey", key, formValue[key]);
                    const momentObj = moment(formValue[key]);
                    setValue(key, momentObj.toDate());
                } else {
                    // console.log("formValuekey",key,key)
                    setValue(key, formValue[key]);
                }
            });
        }
    }, [formValue, resetting]);











    return (
        <>
            <Modal
                size={"sm"}
                children={
                    <>
                        <CommonForm
                            classes={"grid-cols-1 gap-1"}
                            Form={Form}
                            errors={errors}
                            register={register}
                            setValue={setValue}
                            getValues={getValues}
                        />
                    </>
                }
                isOpen={modalOpen}
                setIsOpen={setmodalOpen}
            />

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <CommonForm
                    classes={"grid-cols-1 gap-1 dark:text-black"}
                    Form={Form}
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                />
                <div class="grid h-fit grid-cols-1 gap-2 rounded-md ">
                    <div className="col-span-1 h-full  pt-0 overflow-scroll relative border-gray-500 border rounded-md">
                        <div className="flex w-full top sticky top-0 justify-between bg-primaryLine py-2 pt-0 rounded-md">
                            <h1 className="text-white">
                                <p className="mt-2 font-oxygen font-semibold ms-2 ">Upload Projects Documents</p>
                            </h1>
                            <button
                                onClick={() => {
                                    let finval = 0;
                                    setconditioncountform((prev) => {
                                        let val = [...prev];
                                        let sval = val.pop();
                                        if (isNaN(sval)) {
                                            finval = 1;
                                        } else {
                                            finval = sval + 1;
                                        }
                                        console.log(finval, "finval", val, prev);
                                        return [...prev, finval];
                                    });
                                    setnestfilter((newprev) => ({
                                        ...newprev,
                                        ["wherecondition" + "_" + finval + "_form"]: "blank",
                                    }));
                                }}
                                className="bg-pbutton text-white rounded-full mt-2"
                            >
                                <Unicons.UilPlus size="24" />
                            </button>
                        </div>
                        <div className="flex flex-col justify-between p-2">
                            <p className="font-oxygen font-semibold text-center">
                                Click on <span className='text-xl text-heading'> &#x2A01; </span> to upload more file
                            </p>
                            <div class="overflow-scroll">
                                {conditioncountform.map((val, index) => {
                                    return (
                                        <dv>
                                            <CommonForm
                                                classes={"grid-cols-1 w-full"}
                                                errors={errors}
                                                Form={conditionmultiForm.map((itm) => {
                                                    return {
                                                        ...itm,
                                                        type:
                                                            itm.name == "formovalue"
                                                                ? nestfilter[
                                                                    "wherecondition" + "_" + val + "_form"
                                                                ] == "joins"
                                                                    ? "muitiSelect"
                                                                    : "text"
                                                                : itm.type,
                                                        props:
                                                            itm.label == "Select Column" ||
                                                                (itm.label == "Value" &&
                                                                    nestfilter[
                                                                    "wherecondition" + "_" + val + "_form"
                                                                    ] == "joins")
                                                                ? {
                                                                    ...itm.props,
                                                                    onSelect: (a, b) => {
                                                                        console.log(
                                                                            "gamecall",
                                                                            a,
                                                                            b,
                                                                            "column" + "_" + val + "_form"
                                                                        );
                                                                        setValue(
                                                                            itm.label == "Select Column"
                                                                                ? "wherecolumn" + "_" + val + "_form"
                                                                                : "formovalue" + "_" + val + "_form",
                                                                            b.category + "smartGame" + b.name
                                                                        );
                                                                    },
                                                                }
                                                                : { ...itm.props },
                                                        option:
                                                            itm.label == "Expression"
                                                                ? all_command_type_wise[
                                                                nestfilter[
                                                                "wherecondition" + "_" + val + "_form"
                                                                ]
                                                                ]
                                                                : itm.option,
                                                        name: itm.name + "_" + val + "_form",
                                                        // name: "files"
                                                    };
                                                })}
                                                register={register}
                                                setValue={setValue}
                                                getValues={getValues}
                                            />
                                        </dv>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    classes="mx-auto w-1/2 text-center mt-4"
                    onClick={handleSubmit(onTableViewSubmit)}
                    name="Submit"
                />
            </div>
        </>
    );
};
export default NewProjectForm;
