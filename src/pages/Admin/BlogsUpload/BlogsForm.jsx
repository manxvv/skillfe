import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../components/Modal';
import CommonForm from '../../../components/CommonForm';
import Button from '../../../components/Button';
import AuthActions from '../../../store/actions/auth-actions';

const BlogsForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
    console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue")
    const [modalOpen, setmodalOpen] = useState(false)
    let dispatch = useDispatch()
    const fileRef = useRef(null)
    let Form = [
        {
            label: "Blog Heading",
            value: "",
            name: "blogHeading",
            type: "text",
            required: false,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    //setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        // {
        //     label: "blog Image",
        //     name: "blogImage",
        //     value: "",
        //     type: "file",
        //     props: {
        //         onChange: ((e) => {
        //             console.log(e.target.files[0]?.name, "Selected file");
        //             setValue("blogImage", e.target.files[0]?.name);
        //         }),
        //     },
        //     required: false,
        //     placeholder: "",
        //     multiple: false,
        //     naming: false
        // },
        {
            label: "blog Image",
            value: "",
            name: "img",
            type: "file",
            // required: false,
            props: {
                onChange: ((e) => {
                    console.log(e.target.files, "e geeter")
                    setValue("blogImage",e.target.files[0])

                }),
            },
            classes: "col-span-1",
            multiple:false,
        },
        {
            label: "Short Description",
            value: "",
            name: "shortDescription",
            type: "text",
            required: false,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    //setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Heading",
            value: "",
            name: "heading",
            type: "text",
            required: false,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Heading Description",
            value: "",
            name: "headingDescription",
            type: "text",
            required: false,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Sub Heading",
            value: "",
            name: "subHeading",
            type: "text",
            required: false,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Sub-Heading Description",
            value: "",
            name: "subHeadingDescription",
            type: "text",
            required: false,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        // {
        //     label: "Youtube Video",
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
        // {
        //     label: "Youtube Video",
        //     value: "",
        //     name: "files",
        //     type: "file",
        //     // required: false,
        //     props: {
        //         onChange: ((e) => {
        //             console.log(e.target.files, "e geeter")
        //             setValue("youTubeVideo",e.target.files[0])
        //         }),
        //     },
        //     classes: "col-span-1",
        //     multiple:false,
        // },
        {
            label: "Youtube Video Description",
            value: "",
            name: "youtubeVideoDescription",
            type: "text",
            required: false,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Youtube Link",
            value: "",
            name: "youtubeLink",
            type: "text",
            required: false,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
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
        dispatch(AuthActions.getblogs(data, () => {
            navigate('/pitch-deck')
        }))
    }
    const onTableViewSubmit = (data) => {
        console.log(data,'sjhhshbhbbh')
        
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
       
        if (data.uniqueId) {
            dispatch(AuthActions.postblogs(true, data, () => {
                setIsOpen(false)
                dispatch(AuthActions.getblogs())
            }, data.uniqueId))
        } else {
            dispatch(AuthActions.postblogs(true, data, () => {
                setIsOpen(false)
                dispatch(AuthActions.getblogs())
            }))
        }
    }
    useEffect(() => {
        // dispatch(AdminManagementActions.getRoleList())
        // let Investors=state
        // console.log(Investors,'hhdhdhdhdh')
        dispatch(AuthActions.getblogs
            ())

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
export default BlogsForm;