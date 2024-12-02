import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
// import UserManagementForm from './UserManagementForm';
import EditButton from '../../components/EditButton';
import OperationManagementForm from './OperationManagementForm';
import AdvancedTable from '../../components/AdvancedTable';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import DeleteButton from '../../components/DeleteButton';
import CstmButton from '../../components/CstmButton';
import ToggleButton from '../../components/ToggleButton';
import { objectToQueryString } from '../../utils/commonFunnction';
import { ALERTS } from '../../store/reducers/component-reducer';
import CommonActions from '../../store/actions/common-actions';
import { Urls } from '../../utils/url';
import OperationManagementActions from '../../store/actions/OperationManagement-actions';

const OperationManagement = () => {
    const [modalOpen, setmodalOpen] = useState(false)
    const [modalBody, setmodalBody] = useState(<></>)
    const [modalHead, setmodalHead] = useState(<></>)
    let dispatch = useDispatch()
    let roleList = useSelector((state) => {
        let interdata = state?.operationManagement?.USERS_LIST
        return interdata
    })
    let dbConfigList = useSelector((state) => {
        console.log(state, "state statejjjj")
        let interdata = state?.OperationManagementReducer?.usersList
        return interdata?.map((itm) => {
            console.log(itm, 'jdjdjdjjdjdj')
            let updateditm = {
                ...itm,
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
                "edit": <CstmButton className={"p-2"} child={<EditButton name={""} onClick={() => {
                    setmodalOpen(true)
                    dispatch(OperationManagementActions.getOperationUserList())
                    setmodalHead("Edit User")
                    setmodalBody(<>
                        <OperationManagementForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
                        {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
                    </>)
                    console.log('ahshshhs', itm)
                    //setmodalOpen(false)
                }}></EditButton>} />,

                "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
                    let msgdata = {
                        show: true,
                        icon: 'warning',
                        buttons: [
                            <Button classes='w-15 bg-green-500' onClick={() => {
                                dispatch(CommonActions.deleteApiCaller(`${Urls.operationUser}/${itm.uniqueId}`, () => {
                                    dispatch(OperationManagementActions.getOperationUserList())
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
                name: "First Name",
                value: "firstName",
                style: "min-w-[140px] max-w-[200px] text-center"
            },
            {
                name: "Surname",
                value: "surname",
                style: "min-w-[140px] max-w-[200px] text-center"
            },
            {
                name: "Email",
                value: "email",
                style: "min-w-[250px] max-w-[450px] text-center"
            },
            {
                name: "Mobile No.",
                value: "mobile",
                style: "min-w-[250px] max-w-[450px] text-center"
            },
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
        dispatch(OperationManagementActions.getOperationUserList(value, objectToQueryString(data)))
    }
    useEffect(() => {
        dispatch(OperationManagementActions.getOperationUserList())
        // dispatch(OperationManagementActions.getRoleList())
    }, [])

    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
    return <div className={`font-poppins ${!mode ? "bg-darkBg text-white ": ""} `}>
        <AdvancedTable
            headerButton={<><Button onClick={(e) => {
                setmodalOpen(prev => !prev)
                dispatch(OperationManagementActions.getOperationUserList())
                setmodalHead("New User")
                setmodalBody(<OperationManagementForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />)
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

        {/* <CommonForm/> */}
    </div>


};

export default OperationManagement;