import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../components/Modal';
import CommonForm from '../../../components/CommonForm';
import Button from '../../../components/Button';
import CrawlingAction from '../../../store/actions/crawling-action';
const CrawlingForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
    console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue")
    const [modalOpen, setmodalOpen] = useState(false)
    let dispatch = useDispatch()
    let Form = [
        {
            label: "Linkedin id",
            value: "",
            name: "linkedin",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        
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
        //     navigate('/pitch-deck')
        // }))
        dispatch(CrawlingAction.getLinkedinList(data, () => {
            
        }))
    }
    const onTableViewSubmit = (data) => {
        console.log(data, 'xjxjjj')
        if (data.uniqueId) {
            dispatch(CrawlingAction.postLinkedin(true, formData, () => {
                setIsOpen(false)
                dispatch(CrawlingAction.getLinkedinList())
            }, data.uniqueId))
        } else {
            dispatch(CrawlingAction.postLinkedin(true, formData, () => {
                setIsOpen(false)
                dispatch(CrawlingAction.getLinkedinList())
            }))
        }
    }
    useEffect(() => {
        dispatch(CrawlingAction.getLinkedinList())
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
export default CrawlingForm;