import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import AlertConfigurationActions from '../../../store/actions/alertConfiguration-actions';
import CustomQueryActions from '../../../store/actions/customQuery-actions';
import Modal from '../../../components/Modal';
import CommonForm from '../../../components/CommonForm';
import Button from '../../../components/Button';
import AdminManagementActions from '../../../store/actions/adminManagement-actions';
import { Sidebar_content } from '../../../utils/sidebar_values';
import NestedDropdown from '../../../components/NestedDropdown';
const RoleManagementForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
    const [modalOpen, setmodalOpen] = useState(false)
    const [filtering, setFiltering] = useState("Select * from values;")
    const [gopen, SetgOpen] = useState([])
    const [dataValue, setDataValue] = useState({})
    let dispatch = useDispatch()
    let roleList = useSelector((state) => {
        console.log(state, "state state")
        return state?.adminManagement?.roleList
    })
    let databaseList = useSelector((state) => {
        console.log(state, "state")
        let interdata = state?.customQuery?.databaseList
        console.log(interdata, "interdatainterdata")
        return state?.customQuery?.databaseList
    })
    // let Form = [
    //     { label: "DB Server", value: "", option: ["Please Select Your DB Server"], type: "select" },
    //     { label: "Custom Queries", value: "", type: "textarea" }
    // ]
    let Form = [
        {
            label: "Role Name",
            value: "",
            name: "label",
            type: "text",
            required: true,
            disabled: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    // setValue("queries",e.target.name)
                }),
            },
            classes: "col-span-1"
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
    const onSubmit = (data) => {
        console.log(data)
        // dispatch(AuthActions.signIn(data, () => {
        //     navigate('/authenticate')
        // }))
    }
    const onTableViewSubmit = (data) => {
        console.log(data, dataValue,formValue, "datannnnndata")
        data["permission"] = JSON.stringify(dataValue)
        // dasdsadsadasdas
        if (formValue.value) {
            dispatch(AdminManagementActions.postRole(true, data, () => {
                console.log("CustomQueryActions.postDBConfig")
                setIsOpen(false)
                dispatch(AdminManagementActions.getRoleList())
            }, formValue.value))
        } else {
            dispatch(AdminManagementActions.postRole(true, data, () => {
                console.log("CustomQueryActions.postDBConfig")
                setIsOpen(false)
                dispatch(AdminManagementActions.getRoleList())
            }))
        }
    }
    console.log(Form, "Form 11")
    console.log("Sidebar_content", Sidebar_content["all_routes"])
    useEffect(() => {
        dispatch(AdminManagementActions.getRoleList())
        console.log(formValue,"formValueformValue")
        if (resetting) {
            reset({})
            Form.map((fieldName) => {
                setValue(fieldName["name"], fieldName["value"]);
            });
        } else {
            reset({})

            console.log(formValue["permission"],"formValue[")
            if(formValue["permission"]!=null){
                setDataValue(JSON.parse(formValue["permission"]))
            }else{
                setDataValue({})
            }
            console.log(Object.keys(formValue), "Object.keys(formValue)")
            Form.forEach((key) => {
                if (["endAt", "startAt","permission"].indexOf(key.name) != -1) {
                    console.log("date formValuekey", key.name, formValue[key.name])
                    const momentObj = moment(formValue[key.name]);
                    setValue(key.name, momentObj.toDate());


                } else {
                    // console.log("formValuekey",key,key)
                    setValue(key.name, formValue[key.name]);
                }
            })

            

        }
    }, [formValue, resetting])
    return <>


        <Modal
            size={"sm"}
            children={<>
                <CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            </>}
            isOpen={modalOpen}
            setIsOpen={setmodalOpen} />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl">

            <CommonForm classes={"grid-cols-2 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            {/* <button></button> */}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8'>


                    {
                        Sidebar_content["all_routes"].map((itm) => {
                            return <>
                                <NestedDropdown filtering={filtering} SetgOpen={SetgOpen} gopen={gopen} setDataValue={setDataValue} dataValue={dataValue} itm={itm} value={20} size={0} parentation={itm} />
                            </>
                        })
                    }
            </div>

            {/* <button onClick={() => { setmodalOpen(true) }} className='flex bg-primaryLine mt-6 w-42 absolute right-1 top-1 justify-center rounded-md bg-pbutton px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton'>Add DB Type <Unicons.UilPlus /></button> */}
            {/* <Table headers={["S.No.", "DB Type", "DB Server", "DB Name", "Created By", "Created Date", "Last Modified By", "Last Modified Date", "Actions"]} columns={[["1", "abcd", "ancd", "abcd", "ancd"], ["2", "adsa", "dasdas", "abcd", "ancd"]]} /> */}
            {/* <button onClick={(handleSubmit(onTableViewSubmit))} className='bg-primaryLine mt-6 w-full justify-center rounded-md bg-pbutton px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton'>Submit</button> */}
            <Button classes={"mt-2 "} onClick={(handleSubmit(onTableViewSubmit))} name="Submit" />
        </div>
    </>


};

export default RoleManagementForm;
