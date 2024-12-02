
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UilMessage } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import CstmButton from '../../components/CstmButton';
import EditButton from '../../components/EditButton';
import ToggleButton from '../../components/ToggleButton';
import { objectToQueryString } from '../../utils/commonFunnction';
import { ALERTS } from '../../store/reducers/component-reducer';
import CommonActions from '../../store/actions/common-actions';
import { Urls } from '../../utils/url';
import AdvancedTable from '../../components/AdvancedTable';
import DeleteButton from '../../components/DeleteButton';
import { UilEye  } from '@iconscout/react-unicons'
import EmployeeManagementActions from '../../store/actions/employeeDetails-action';
import { useNavigate } from 'react-router-dom';
import EmployeeDetailsForm from './EmployeeDetailsForm';
const EmployeeDetails = () => {
    const [modalOpen, setmodalOpen] = useState(false)
    const [modalBody, setmodalBody] = useState(<></>)
    const [modalHead, setmodalHead] = useState(<></>)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let userRole = useSelector((state)=>{
        let data=state?.auth?.user?.roleName
        return data
    })
    console.log(userRole,'userRoleuserRoleuserRole')
    let dbConfigList = useSelector((state) => {
        console.log(state, "state statejjjj")
        let interdata = state?.employeeDetailsManagement?.empList
        console.log(interdata,'dkdjdjdhh')
        return interdata.map((
            itm) => {
            console.log('kkkkkxgg',itm)
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
                    }, itm.uniqueId))
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
                    setmodalHead("Edit User")
                    setmodalBody(<>
                        <EmployeeDetailsForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
                    </>)
                    console.log('ahshshhs',itm)
                    //setmodalOpen(false)
                }}></EditButton>} />,
                "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
                    let msgdata = {
                        show: true,
                        icon: 'warning',
                        buttons: [
                            <Button classes='w-15 bg-green-500' onClick={() => {
                                dispatch(CommonActions.deleteApiCaller(`${Urls.employeeDetails}/${itm.uniqueId}`, () => {
                                    dispatch(EmployeeManagementActions.getEmployeeList())
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
                }}></DeleteButton>}/>
            }
            return updateditm
        });
    })
    let dbConfigTotalCount = useSelector((state) => {
        let interdata = state?.employeeDetailsManagement?.empList
        if(interdata?.length>0){
            return interdata[0]["overall_table_count"]
        }else{
            return 0
        }
    })
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setValues,
        getValues,
        formState: { errors },
    } = useForm()
    let table2 = {
        columns: [
            {
                name: "Employee Name",
                value: "",
                style: "min-w-[20px] max-w-[200px] text-center p-3"
            },
            {
                name: "Company Email",
                value: "companyEmail",
                style: "min-w-[100px] max-w-[300px] text-center"
            },
            {
                name: "Emp. Name",
                value: "employeeName",
                style: "min-w-[100px] max-w-[200px] text-center p-3"
            },
            {
                name: "Emp. Email",
                value: "email",
                style: "min-w-[100px] max-w-[300px] text-center"
            },
            {
                name: "Emp. Position",
                value: "position",
                style: "min-w-[100px] max-w-[200px] text-center"
            },
            {
                name: "Emp. Mobile",
                value: "mobile",
                style: "min-w-[100px] max-w-[200px] text-center"
            },
            {
                name: "Linkedin",
                value: "linkedin",
                style: "min-w-[100px] max-w-[200px] text-center"
            },
            {
                name: "Twitter",
                value: "twitter",
                style: "min-w-[100px] max-w-[200px] text-center"
            },
            
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
    let table = {
        columns: [
            {
                name: "Name",
                value: "employeeName",
                style: "min-w-[20px] max-w-[200px] text-center ",             
            },
            {
                name: "Email",
                value: "email",
                style: "min-w-[20px] max-w-[200px] text-center"
            },
            {
                name: "Position",
                value: "position",
                style: "min-w-[20px] max-w-[200px] text-center"
            },
            {
                name: "Mobile",
                value: "mobile",
                style: "min-w-[20px] max-w-[200px] text-center"
            },
            {
                name: "Linkedin",
                value: "linkedin",
                style: "min-w-[20px] max-w-[400px] text-center"
            },
            {
                name: "Twitter",
                value: "twitter",
                style: "min-w-[20px] max-w-[400px] text-center"
            },
            {
                name: "Delete",
                value: "delete",
                style: "min-w-[50px] max-w-[50px] text-center"
            },
            {
                name: "Edit",
                value: "edit",
                style: "min-w-[50px] max-w-[50px] text-center"
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
        console.log("jsjsjsjss",data)
        let value = data.reseter
        delete data.reseter
        dispatch(EmployeeManagementActions.getEmployeeList(value, objectToQueryString(data)))
    }
    useEffect(() => {
        dispatch(EmployeeManagementActions.getEmployeeList())
    }, [])

    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
    return <div className={`font-poppins ${!mode ? "bg-darkBg text-black ": ""} `}>
        <AdvancedTable 
            headerButton={<><Button onClick={(e) => {
                setmodalOpen(prev => !prev)
                dispatch(EmployeeManagementActions.getEmployeeList())
                setmodalHead("Upload Employee Details")
                setmodalBody(<EmployeeDetailsForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />)
            }} 
            name={userRole == "Admin"? "Add New" : "Add New"}></Button></>} 
            table={userRole == "Admin"? table2 : table} 
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
    </div>
};

export default EmployeeDetails;

