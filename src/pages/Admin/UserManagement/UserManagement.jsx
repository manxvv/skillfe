import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import AdvancedTable from '../../../components/AdvancedTable';
import UserManagementForm from './UserManagementForm';
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
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import User from '../../../components/Important/UserDashboard/User';


const UserManagement = () => {


    const navigate = useNavigate(); 

    const categories = [
      {
        id: 1,
        title: 'Technical Skills',
        items: [
          'Coding & Algorithms',
          'Data Structures',
          'Database Management',
          'System Design',
          'Web Development',
          'Cloud Computing & DevOps',
          'Machine Learning & AI',
        ],
      },
      {
        id: 2,
        title: 'Behavioral Skills',
        items: [
          'Common HR Questions',
          'STAR Method (Situation, Task, Action, Result)',
          'Communication Skills',
          'Teamwork and Collaboration',
          'Leadership Skills',
          'Problem-solving and Critical Thinking',
        ],
      },
      {
        id: 3,
        title: 'Industry-Specific Preparation',
        items: [
          'IT & Software',
          'Finance & Accounting',
          'Marketing & Sales',
          'Healthcare',
          'Engineering',
        ],
      },
      {
        id: 4,
        title: 'Role-Specific Preparation',
        items: [
          'Software Engineer/Developer',
          'Data Scientist',
          'Project Manager',
          'Business Analyst',
          'Designer (UX/UI, Graphic Design)',
        ],
      },
      {
        id: 5,
        title: 'Aptitude and Logical Reasoning',
        items: [
          'Numerical Aptitude',
          'Logical Reasoning',
          'Verbal Ability',
        ],
      },
      {
        id: 6,
        title: 'Mock Interviews and Practice',
        items: [
          'Mock Interview Simulations',
          'Coding Challenges and Practice Tests',
          'Behavioral Interview Practice Questions',
          'Role-Playing Scenarios for Real-World Situations',
        ],
      },
    ];
  
    const handleRedirect = (category) => {
      navigate("/subscription");
    };
  
    return (
      <>
        <User />
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
            Interview Preparation Categories
          </h1>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: category.id * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-700 mb-4">{category.title}</h2>
                <ul className="pl-5 space-y-2 list-none">
                  {category.items.map((item, index) => (
                    <motion.li
                      key={index}
                      onClick={() => handleRedirect(item)} 
                      className="cursor-pointer hover:text-indigo-600 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </>
    );


//     const [modalOpen, setmodalOpen] = useState(false)
//     const [modalBody, setmodalBody] = useState(<></>)
//     const [modalHead, setmodalHead] = useState(<></>)
//     let dispatch = useDispatch()
//     let roleList = useSelector((state) => {
//         console.log(state, "state state")
//         let interdata = state?.adminManagement?.roleList
//         return interdata
//     })
//     let dbConfigList = useSelector((state) => {
//         console.log(state, "state statejjjj")
//         let interdata = state?.adminManagement?.usersList
//         return interdata.map((itm) => {
//             console.log(itm, 'hhdhhhbvvvvv')
//             let updateditm = {
//                 ...itm,
//                 "status": <CstmButton child={<ToggleButton onChange={(e) => {
//                     console.log(e.target.checked, "e.target.checked")
//                     let data = {
//                         "enabled": e.target.checked ? 1 : 0
//                     }
//                     dispatch(AlertConfigurationActions.patchAlertConfig(true, data, () => {
//                         // alert(e.target.checked)
//                         e.target.checked = e.target.checked
//                     }, itm.id))
//                     // if(itm.enabled==0){
//                     //     itm.enabled=1
//                     // }else{
//                     //     itm.enabled=0
//                     // }
//                     // itm.enabled=itm.enabled==0?1:0
//                     console.log(itm.enabled, "itm.enabled")
//                 }} defaultChecked={itm.enabled == 1 ? true : false}></ToggleButton>} />,
//                 "edit": <CstmButton child={<EditButton name={""} onClick={() => {
//                     console.log(itm, "itm,dsadsadadada")
//                     setmodalOpen(true)
//                     dispatch(AdminManagementActions.getUsersList())
//                     setmodalHead("Edit User")
//                     setmodalBody(<>
//                         <UserManagementForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
//                         {/* <div className='mx-3'><Button name={"Submit"} classes={""} onClick={(handleSubmit(onTableViewSubmit))} /></div> */}
//                     </>)
//                 }}></EditButton>} />,
//                 // "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
//                 //     let msgdata = {
//                 //         show: true,
//                 //         icon: 'warning',
//                 //         buttons: [
//                 //             <Button classes='w-15 bg-green-500' onClick={() => {
//                 //                 dispatch(CommonActions.deleteApiCaller(`${Urls.alertConfiguration_configureAlert}/${itm.uniqueId}`, () => {
//                 //                     dispatch(CustomQueryActions.getDBConfig())
//                 //                     dispatch(ALERTS({ show: false }))
//                 //                 }))
//                 //             }} name={"OK"} />,
//                 //             <Button classes='w-24' onClick={() => {
//                 //                 dispatch(ALERTS({ show: false }))
//                 //             }} name={"Cancel"} />
//                 //         ],
//                 //         text: "Are you sure you want to Delete?"
//                 //     }
//                 //     dispatch(ALERTS(msgdata))
//                 // }}></DeleteButton>} />
//                 "delete": <CstmButton child={<DeleteButton name={""} onClick={() => {
//                     let msgdata = {
//                         show: true,
//                         icon: 'warning',
//                         buttons: [
//                             <Button classes='w-15 bg-green-500' onClick={() => {
//                                 dispatch(CommonActions.deleteApiCaller(`${Urls.admin_userList}/${itm.id}`, () => {
//                                     dispatch(CustomQueryActions.getUserList())
//                                     dispatch(ALERTS({ show: false }))
//                                 }))
//                             }} name={"OK"} />,
//                             <Button classes='w-24' onClick={() => {
//                                 console.log('snnsnsnsns')
//                                 dispatch(ALERTS({ show: false }))
//                             }} name={"Cancel"} />
//                         ],
//                         text: "Are you sure you want to Delete?"
//                     }
//                     dispatch(ALERTS(msgdata))
//                 }}></DeleteButton>} />
//             }
//             return updateditm
//         });
//     })
//     let dbConfigTotalCount = useSelector((state) => {
//         let interdata = state?.adminManagement?.usersList
//         if (interdata.length > 0) {
//             return interdata[0]["overall_table_count"]
//         } else {
//             return 0
//         }
//     })
//     // let Form = [
//     //     { label: "DB Server", value: "", option: ["Please Select Your DB Server"], type: "select" },
//     //     { label: "Custom Queries", value: "", type: "textarea" }
//     // ]
//     const {
//         register,
//         handleSubmit,
//         watch,
//         setValue,
//         setValues,
//         getValues,
//         formState: { errors },
//     } = useForm()

//     let table = {
//         columns: [
//             {
//                 name: "First Name",
//                 value: "firstName",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Surname",
//                 value: "surname",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Email",
//                 value: "email",
//                 style: "min-w-[250px] max-w-[450px] text-center"
//             },
//             {
//                 name: "Status",
//                 value: "profileStatus",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Active/Blocked",
//                 value: "status",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Role",
//                 value: "rolename",
//                 style: "min-w-[140px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Edit",
//                 value: "edit",
//                 style: "min-w-[100px] max-w-[200px] text-center"
//             },
//             {
//                 name: "Delete",
//                 value: "delete",
//                 style: "min-w-[100px] max-w-[200px] text-center"
//             }
//         ],
//         properties: {
//             rpp: [10, 20, 50, 100]
//         },
//         filter: [
//             // {
//             //     label: "Role",
//             //     type: "select",
//             //     name: "rolename",
//             //     option: roleList,
//             //     props: {

//             //     }
//             // }
//         ]
//     }
//     const onSubmit = (data) => {
//         console.log("jsjsjsjss", data)
//         let value = data.reseter
//         delete data.reseter
//         dispatch(AdminManagementActions.getUsersList(value, objectToQueryString(data)))
//     }
//     useEffect(() => {
//         dispatch(AdminManagementActions.getUsersList())
//         dispatch(AdminManagementActions.getRoleList())
//     }, [])

//   let mode = useSelector(state=>{
//     console.log('adasfdsafasfasfasdfadsf',state);
//     let viewMode = state?.auth?.mode;
//     return viewMode;
//   })
//     return <div className={`font-poppins ${!mode ? "bg-darkBg text-white ": ""} `}>
//         <AdvancedTable
//             headerButton={<><Button onClick={(e) => {
//                 setmodalOpen(prev => !prev)
//                 dispatch(AdminManagementActions.getUsersList())
//                 setmodalHead("New User")
//                 setmodalBody(<UserManagementForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />)
//             }}
//                 name={"Add New"}></Button></>}
//             table={table}
//             filterAfter={onSubmit}
//             tableName={"UserListTable"}
//             handleSubmit={handleSubmit}
//             data={dbConfigList}
//             errors={errors}
//             register={register}
//             setValue={setValue}
//             getValues={getValues}
//             totalCount={dbConfigTotalCount}
//         />

//         <Modal size={"sm"} modalHead={modalHead} children={modalBody} isOpen={modalOpen} setIsOpen={setmodalOpen} />

//     </div>


};

export default UserManagement;
