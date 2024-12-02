import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal';
import CommonForm from '../../components/CommonForm';
import Button from '../../components/Button';
import DeckManagementActions from '../../store/actions/deckManagement-actions';
import EmployeeManagementActions from '../../store/actions/employeeDetails-action';
const EmployeeDetailsForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
    console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue")
    const [modalOpen, setmodalOpen] = useState(false)
    let dispatch = useDispatch()
    const fileRef = useRef(null)
    let Form = [
        {
            label: "Name",
            value: "",
            name: "employeeName",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    // setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1",
           
            
        },
        {
            label: "Email",
            value: "",
            name: "email",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    // setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1",
           
        },
        {
            label: "Position",
            value: "",
            name: "position",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    // setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1",
            
        },
        {
            label: "Mobile",
            value: "",
            name: "mobile",
            type: "number",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    // setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1",
            
        },
        {
            label: "Linkedin",
            value: "",
            name: "linkedin",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    // setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1",
            
        },
        {
            label: "Twitter",
            value: "",
            name: "twitter",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    // setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1",
            
        },
        // {
        //     label: "The Ask",
        //     value: "",
        //     name: "amountRaised",
        //     type: "text",
        //     required: true,
        //     props: {
        //         onChange: ((e) => {
        //             // console.log(e.target.value, "e geeter")
        //             setValue("queries", e.target.name)
        //         }),
        //     },
        //     classes: "col-span-1",
        //     amp: [{
        //         type: "select",
        //         name: "currency",
        //         option: currencyOptions,
        //         value: "currency"
        //     }]
        // },
        // {
        //     label: "File",
        //     name: "files",
        //     value: "files",
        //     type: "file",
        //     props: {
        //         onChange: ((e) => {
        //             console.log(e.target.files, "gfdhhh")
        //             fileRef.current = Array.from(e.target.files)
        //             // setValue("queries", e.target.name)
        //         }),
        //     },
        //     required: false,
        //     placeholder: "",
        //     multiple: false,
        //     naming: false
        // },
        //{
        //     label: "Role",
        //     name: "roleId",
        //     value: "Select",
        //     type: "select",
        //     option: roleList,
        //     props: "",
        //     required: true,
        //     classes: "col-span-1"
        // },
        // { label: "User", value: "", option: ["User Name"], type: "select" }
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
    const onTableViewSubmit = (data) => {
        // console.log(data, 'xjxjjj')
        // const formData = new FormData()
        // console.log('kksksks', formData)
        // delete data["files"]
        // Object.keys(data).forEach(key => {
        //     console.log('smmm', key, 'mjsjssjs', data[key])
        //     formData.append(key, data[key])
        //     console.log('kksksks', formData)
        // })
        // fileRef.current.forEach(file => {
        //     console.log(file, 'nnjhhdh')
        //     formData.append('files', file)
        //     console.log(formData, 'kskkssjsjjhh')
        // })
        console.log(data, "datadata")
        if (data.uniqueId) {
            dispatch(EmployeeManagementActions.postEmployeeDetails(true, data, () => {
                setIsOpen(false)
                dispatch(EmployeeManagementActions.getEmployeeList())
            }, data.uniqueId))
        } else {
            dispatch(EmployeeManagementActions.postEmployeeDetails(true, data, () => {
                console.log("CustomQueryActions.postDBConfig")
                setIsOpen(false)
                dispatch(EmployeeManagementActions.getEmployeeList())
            }))
        }
    }
    useEffect(() => {
        dispatch(EmployeeManagementActions.getEmployeeList())
        if (resetting) {
            reset({})
            Form.map((fieldName) => {
                setValue(fieldName["name"], fieldName["value"]);
            });
        } else {
            reset({})
            console.log(Object.keys(formValue), "Object.keys(formValue)")
            Object.keys(formValue).forEach((key) => {
                if (["endAt", "startAt"].indexOf(key) != -1) {
                    console.log("date formValuekey", key, formValue[key])
                    const momentObj = moment(formValue[key]);
                    setValue(key, momentObj.toDate());
                } else {
                    // console.log("formValuekey",key,key)
                    setValue(key, formValue[key]);
                }
            })
        }
    }, [formValue, resetting])
    return <>
        <Modal size={"sm"} children={<><CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} /></>} isOpen={modalOpen} setIsOpen={setmodalOpen} />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            <Button className="mt-0" onClick={(handleSubmit(onTableViewSubmit))} name="Submit" />
        </div>
    </>
};
export default EmployeeDetailsForm;