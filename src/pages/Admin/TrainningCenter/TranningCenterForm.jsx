import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../components/Modal';
import CommonForm from '../../../components/CommonForm';
import Button from '../../../components/Button';
import AuthActions from '../../../store/actions/auth-actions';

const TranningVideoManagementForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
    console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue")
    const [modalOpen, setmodalOpen] = useState(false)
    let dispatch = useDispatch()
    let Form = [
        {
            label: "Training Video Heading",
            value: "",
            name: "trainningVideoHeading",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Training Video Description",
            value: "",
            name: "trainningVideoDescription",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Training Video",
            value: "",
            name: "files",
            type: "file",   
            required: true,
            props: {
                onChange: ((e) => {
                    console.log(e.target.files, "e geeter")
                    setValue("Video", e.target.files[0])
                }),
            },
            classes: "col-span-1",
            multiple: false,
        },
        {
            label: "For Role", name: "roleName", value: "", type: "radio", props: {}, required: true, option: [
                { "label": "INVESTOR", "value": "Investor" },
                { "label": "FUND SEEKER", "value": "Fund Seeker" },
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
    const onTableViewSubmit = (data) => {
        console.log("asfasfaasdfsfsadfsfasfasaf",data)
        if (data.uniqueId) {
            dispatch(AuthActions.postTranningVideo(true, data, () => {
                setIsOpen(false)
                dispatch(AuthActions.getTranningVideo())
            }, data.uniqueId))
        } else {
            dispatch(AuthActions.postTranningVideo(true, data, () => {
                setIsOpen(false)
                dispatch(AuthActions.getTranningVideo())
            }))
        }
    }
    useEffect(() => {
        dispatch(AuthActions.getTranningVideo())
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
        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
            <CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            <Button className="mt-0" onClick={(handleSubmit(onTableViewSubmit))} name="Submit" />
        </div>
    </>
};
export default TranningVideoManagementForm;