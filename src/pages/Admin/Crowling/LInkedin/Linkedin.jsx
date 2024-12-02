import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import AdvancedTable from '../../../components/AdvancedTable';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import CstmButton from '../../../components/CstmButton';
import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import ToggleButton from '../../../components/ToggleButton';
import AdminManagementActions from '../../../store/actions/adminManagement-actions';
import { objectToQueryString } from '../../../utils/commonFunnction';
import { ALERTS } from '../../../store/reducers/component-reducer';
import CommonActions from '../../../store/actions/common-actions';
import { Urls } from '../../../utils/url';
import CustomQueryActions from '../../../store/actions/customQuery-actions';
import AgreementManagementForm from '../AgreementManagement/AgreementManagementForm';
import BlogsForm from './BlogsForm';
import AuthActions from '../../../store/actions/auth-actions';
const Linkedin = () => {
    const [modalOpen, setmodalOpen] = useState(false)
    const [modalBody, setmodalBody] = useState(<></>)
    const [modalHead, setmodalHead] = useState(<></>)
    let dispatch = useDispatch()
    let roleList = useSelector((state) => {
        console.log(state, "state state")
        let interdata = state?.adminManagement?.roleList
        return interdata
    })
    let dbConfigList = useSelector((state) => {
        console.log(state, "state statejjjj")
        let interdata = state?.auth?.users_blog?.dataAll || []
        return interdata.map((itm) => {
            console.log(itm, 'hhdhhhbvvvvv')
            let updateditm = {
                ...itm,
                "htmlDataShow": <div onClick={() => {
                    setmodalBody(<div className='overflow-scroll break-all'><div dangerouslySetInnerHTML={{ __html: itm.htmlData }}></div></div>)
                    setmodalOpen(true)
                }}><div dangerouslySetInnerHTML={{ __html: itm.htmlData }}></div></div>,
                "status": <CstmButton child={<ToggleButton onChange={(e) => {
                    console.log(e.target.checked, "e.target.checked")
                    let data = {
                        "enabled": e.target.checked ? 1 : 0
                    }
                    dispatch(AlertConfigurationActions.patchAlertConfig(true, data, () => {
                        // alert(e.target.checked)
                        e.target.checked = e.target.checked
                    }, itm.id))
                    // if(itm.enabled==0){
                    //     itm.enabled=1
                    // }else{
                    //     itm.enabled=0
                    // }
                    // itm.enabled=itm.enabled==0?1:0
                    console.log(itm.enabled, "itm.enabled")
                }} defaultChecked={itm.enabled == 1 ? true : false}></ToggleButton>} />,
                "edit": <CstmButton child={<EditButton name={""} onClick={() => {
                    console.log(itm, "itm,dsadsadadada")
                    setmodalOpen(true)
                    dispatch(AdminManagementActions.getUsersList())
                    setmodalHead("Edit Blog")
                    setmodalBody(<>
                        <BlogsForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
                        {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
                    </>)
                }}></EditButton>} />,
                // "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
                //     let msgdata = {
                //         show: true,
                //         icon: 'warning',
                //         buttons: [
                //             <Button classes='w-15 bg-green-500' onClick={() => {
                //                 dispatch(CommonActions.deleteApiCaller(`${Urls.alertConfiguration_configureAlert}/${itm.uniqueId}`, () => {
                //                     dispatch(CustomQueryActions.getDBConfig())
                //                     dispatch(ALERTS({ show: false }))
                //                 }))
                //             }} name={"OK"} />,
                //             <Button classes='w-24' onClick={() => {
                //                 dispatch(ALERTS({ show: false }))
                //             }} name={"Cancel"} />
                //         ],
                //         text: "Are you sure you want to Delete?"
                //     }
                //     dispatch(ALERTS(msgdata))
                // }}></DeleteButton>} />
                "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
                    let msgdata = {
                        show: true,
                        icon: 'warning',
                        buttons: [
                            <Button classes='w-15 bg-green-500' onClick={() => {
                                dispatch(CommonActions.deleteApiCaller(`${Urls.blogs}/${itm._id}`, () => {
                                    dispatch(CustomQueryActions.getUserList())
                                    dispatch(ALERTS({ show: false }))
                                }))
                            }} name={"OK"} />,
                            <Button classes='w-24' onClick={() => {
                                console.log('snnsnsnsns')
                                dispatch(ALERTS({ show: false }))
                            }} name={"Cancel"} />
                        ],
                        text: "Are you sure you want to Delete?"
                    }
                    dispatch(ALERTS(msgdata))
                }}></DeleteButton>} />
            }
            return updateditm
        });
    })
    let dbConfigTotalCount = useSelector((state) => {
        let interdata = state?.adminManagement?.usersList
        if (interdata.length > 0) {
            return interdata[0]["overall_table_count"]
        } else {
            return 0
        }
    })
    // let Form = [
    //     { label: "DB Server", value: "", option: ["Please Select Your DB Server"], type: "select" },
    //     { label: "Custom Queries", value: "", type: "textarea" }
    // ]
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setValues,
        getValues,
        formState: { errors },
    } = useForm()

    let table = {
        columns: [
            {
                name: "Blog Heading",
                value: "blogHeading",
                style: "min-w-[140px] max-w-[500px] text-center"
            },
            {
                name: "Short Description",
                value: "shortDescription",
                style: "min-w-[140px] max-w-[500px] text-center"
            },
            {
                name: "Heading",
                value: "heading",
                style: "min-w-[140px] max-w-[500px] text-center"
            },
            {
                name: "Heading Description",
                value: "headingDescription",
                style: "min-w-[140px] max-w-[500px] text-center"
            },
            {
                name: "Sub Heading",
                value: "subHeading",
                style: "min-w-[140px] max-w-[500px] text-center"
            },
            {
                name: "Sub Heading Decription",
                value: "subHeadingDescription",
                style: "min-w-[140px] max-w-[500px] text-center"
            },
            {
                name: "Youtube Link",
                value: "youtubeLink",
                style: "min-w-[140px] max-w-[500px] text-center"
            },
            {
                name: "YoutubeVideo Description",
                value: "youtubeVideoDescription",
                style: "min-w-[140px] max-w-[500px] text-center"
            },


            // {
            //     name: "files",
            //     value: "files",
            //     style: "min-w-[320px] max-w-[320px] text-center"
            // },
            {
                name: "Edit",
                value: "edit",
                style: "min-w-[100px] max-w-[200px] text-center"
            },
            {
                name: "Delete",
                value: "delete",
                style: "min-w-[100px] max-w-[200px] text-center"
            }
        ],
        properties: {
            rpp: [10, 20, 50, 100]
        },
        filter: [
            // {
            //     label: "Role",
            //     type: "select",
            //     name: "rolename",
            //     option: roleList,
            //     props: {

            //     }
            // }
        ]
    }
    const onSubmit = (data) => {
        console.log("jsjsjsjss", data)
        let value = data.reseter
        delete data.reseter
        dispatch(AuthActions.getblogs(value, objectToQueryString(data)))
    }
    useEffect(() => {
        dispatch(AuthActions.getblogs())

    }, [])
    return <>
        <AdvancedTable
            headerButton={<><Button onClick={(e) => {
                setmodalOpen(prev => !prev)
                dispatch(AuthActions.getblogs())
                setmodalHead("New Blog")
                setmodalBody(<BlogsForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />)
            }}
                name={"Add New"}></Button></>}
            table={table}
            filterAfter={onSubmit}
            tableName={"UserListTable"}
            handleSubmit={handleSubmit}
            data={dbConfigList}
            errors={errors}
            register={register}
            setValue={setValue}
            getValues={getValues}
            totalCount={dbConfigTotalCount}
        />

        <Modal size={"sm"} modalHead={modalHead} children={modalBody} isOpen={modalOpen} setIsOpen={setmodalOpen} />
    </>


};

export default Linkedin;
