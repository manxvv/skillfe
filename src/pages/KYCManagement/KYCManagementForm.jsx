import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import CommonForm from '../../components/CommonForm';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import AdminManagementActions from '../../store/actions/adminManagement-actions';
import OperationManagementActions from '../../store/actions/OperationManagement-actions';
import { ALERTS } from '../../store/reducers/component-reducer';
const KYCManagementForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {

    console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue")

    const [modalOpen, setmodalOpen] = useState(false)


    let dispatch = useDispatch()
    let roleList = [
        {
            label: "Pending",
            value: 1
        },
        {
            label: "Approve",
            value: 2
        },
        {
            label: "Not Approve",
            value: 3
        }
    ]
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
    let Form = [{
        label: "Status",
        name: "kycStatus",
        value: "Select",
        type: "select",
        option: roleList,
        props: {
            valueAsNumber: true,
        },
        required: true,

        classes: "col-span-1"
    }]

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
        console.log(data, formValue, "datadata")
        console.log("amarnathasdfadfasfpjasdfj",formValue?.userid);
        if (formValue?.userid) {
            dispatch(OperationManagementActions.patchKycStatusList(true, data, () => {
                console.log("CustomQueryActions.postDBConfig")


                let msgdata = { 
                    show: true,
                    icon: "success",
                    buttons: [],
                    type: 1,
                    text: "Status Updated Successfully",
                };
                dispatch(ALERTS(msgdata));



                setIsOpen(false) 
                dispatch(OperationManagementActions.getKycStatusList())
            }, formValue.userid))
        } else {
            dispatch(OperationManagementActions.patchKycStatusList(true, data, () => {
                console.log("CustomQueryActions.postDBConfig")

                let msgdata = { 
                    show: true,
                    icon: "success",
                    buttons: [],
                    type: 1,
                    text: "Status Updated Successfully",
                };
                dispatch(ALERTS(msgdata));



                setIsOpen(false)
                dispatch(OperationManagementActions.getKycStatusList())
            }))
        }
    }
    console.log(Form, "Form 11")
    useEffect(() => {
        dispatch(AdminManagementActions.getRoleList())
        if (resetting) {
            reset({})
            Form.map((fieldName) => {
                console.log(fieldName["name"], fieldName["value"], "fieldName,fieldName")
                setValue(fieldName["name"], fieldName["value"]);
            });
        } else {
            reset({})
            console.log(Object.keys(formValue), "Object.keys(formValue)")
            Form.forEach((itm) => {
                if (["endAt", "startAt"].indexOf(itm.name) != -1) {
                    console.log("date formValuekey", itm.name, formValue[itm.name])
                    const momentObj = moment(formValue[itm.name]);
                    setValue(itm.name, momentObj.toDate());
                } else {
                    console.log("formValuekey", itm.name, itm.name)
                    setValue(itm.name, formValue[itm.name]);
                }
            })
        }
    }, [formValue, resetting])
    return <>
        <Modal size={"xl"} children={<><CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} /></>} isOpen={modalOpen} setIsOpen={setmodalOpen} />
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            <Button classes={"mt-2 "} onClick={(handleSubmit(onTableViewSubmit))} name="Submit" />
        </div>
    </>


};

export default KYCManagementForm;