import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as Unicons from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import {
    UilCheckCircle,
    UilTimesCircle,
    UilEnvelopeAlt,
} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
// import Button from '../../../components/Button';
import Button from "../../components/Button";
import { backendassetUrl } from "../../utils/url";
// import CstmButton from '../../../components/CstmButton';
import CstmButton from "../../components/CstmButton";
// import EditButton from '../../../components/EditButton';
import EditButton from "../../components/EditButton";
import ToggleButton from "../../components/ToggleButton";
import AdminManagementActions from "../../store/actions/adminManagement-actions";
import { objectToQueryString } from "../../utils/commonFunnction";
import { ALERTS } from "../../store/reducers/component-reducer";
import CommonActions from "../../store/actions/common-actions";
import { Urls } from "../../utils/url";
import CustomQueryActions from "../../store/actions/customQuery-actions";
import AdvancedTable from "../../components/AdvancedTable";
import DeleteButton from "../../components/DeleteButton";
// import PitchDeckForm from "./PitchDeckForm"; ----------------------
import { UilEye } from "@iconscout/react-unicons";
import DeckManagementActions from "../../store/actions/deckManagement-actions";
import { useNavigate } from "react-router-dom";
// import PitchSent from "./PitchSent"; -----------
import InvestorManagementActions from "../../store/actions/Investor-action";
import CommonForm from "../../components/CommonForm";
import WebsocketActions from "../../store/actions/websocket-actions";
import ChatMsg from "../../components/ChatMsg";
// import Chat from '../../components/Chat/Chat';
import { BsEnvelopeArrowUp } from "react-icons/bs";
const ChatWithFundSeeker = () => {
    const [modalOpen, setmodalOpen] = useState(false);
    const [modalBody, setmodalBody] = useState(<></>);
    const [modalHead, setmodalHead] = useState(<></>);
    const [investingId, setinvestingId] = useState("");

    let data = useSelector((state) => {
        console.log(state?.websocket?.msg_from_socket, "state?.websocket?.msg_from_socket")
    })
    //   websocket
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setValues,
        getValues,
        formState: { errors },
    } = useForm();
    let getUserId = useSelector((state) => {
        let interdata = state?.auth?.user?.id;
        return interdata;
    });
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let SendForm = [
        {
            name: "message",
            value: "message",
            type: "text",
            props: "",
            required: true,
            placeholder: "Type Your Message...",
        },
    ];
    const onTableViewSubmit = (data) => {
        console.log(data, investingId, "sdfsdsffsdsf");
        // data["uid"] = uid
        // dispatch(AuthActions.businessRegister(data, () => {
        //     navigate("/kycregister/" + uid)
        // }))
        dispatch(WebsocketActions.send_to_socket("chat_send", data));
    };
    //implementing the chat section
    const handleModalButtonClick = (investorId, investorName) => {
        // alert("dsaasasaas")
        const updatedModalBody = (
            <ChatMsg investorId={investorId} />
        );
        setValue("rId", investorId);
        setValue("sId", getUserId);
        setValue("fId", "fundSeeker");
        setmodalBody(updatedModalBody);
        setmodalOpen((prev) => !prev);
    };

    let dbConfigList = useSelector((state) => {
        console.log(state, "state statejjjj");
        let interdata = state?.deckManagement.deckList;
        let userRole = state?.auth?.user?.roleName;
        console.log(userRole, "userRoleuserRoleuserRole");
        return interdata.map((itm) => {
            console.log("kkkkkxgg", itm);
            let updateditm = {
                ...itm,
                // status: (
                //     <CstmButton
                //         child={
                //             <ToggleButton
                //                 onChange={(e) => {
                //                     console.log(e.target.checked, "e.target.checked");
                //                     let data = {
                //                         enabled: e.target.checked ? 1 : 0,
                //                     };
                //                     dispatch(
                //                         AlertConfigurationActions.patchAlertConfig(
                //                             true,
                //                             data,
                //                             () => {
                //                                 // alert(e.target.checked)
                //                                 e.target.checked = e.target.checked;
                //                             },
                //                             itm.uniqueId
                //                         )
                //                     );
                //                     // if(itm.enabled==0){
                //                     //     itm.enabled=1
                //                     // }else{
                //                     //     itm.enabled=0
                //                     // }
                //                     // itm.enabled=itm.enabled==0?1:0
                //                     console.log(itm.enabled, "itm.enabled");
                //                 }}
                //                 defaultChecked={itm.enabled == 1 ? true : false}
                //             ></ToggleButton>
                //         }
                //     />
                // ),
                // "sentto":<CstmButton child={<Button classes='w-10' icon={<UilMessage classes='w-4' />}  name={""} onClick={() => {
                //     setmodalOpen(true)
                //     setmodalHead("Send To")
                //     setmodalBody(<>
                //         <PitchSent isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
                //     </>)
                //     console.log('ahshshhs',itm)
                // }}></Button>} />,

                // accept: (
                //   <CstmButton
                //     child={
                //       <Button
                //         name={""}
                //         icon={<UilCheckCircle size="18" className={"hello"} />}
                //         classes="w-10"
                //         onClick={() => {
                //           console.log("chdhdhhdhdh", itm);
                //           let data = {
                //             status: "approve",
                //           };
                //           dispatch(
                //             DeckManagementActions.postStatus(data, itm.uniqueId)
                //           );
                //           // let msgdata = {
                //           //   show: true,
                //           //   icon: "success",
                //           //   buttons: [],
                //           //   type: 1,
                //           //   text: "Status Approved Successfully \n \t Now You can view pitch",
                //           // };
                //           // dispatch(ALERTS(msgdata));
                //         }}
                //       ></Button>
                //     }
                //   />
                // ),
                // decline: (
                //   <CstmButton
                //     child={
                //       <Button
                //         name={""}
                //         icon={<UilTimesCircle size="18" className={"hello "} />}
                //         classes="w-10 "
                //         onClick={() => {
                //           let data = {
                //             status: "disapprove",
                //           };
                //           dispatch(
                //             DeckManagementActions.postStatus(data, itm.uniqueId)
                //           );
                //           let msgdata = {
                //             show: true,
                //             icon: "success",
                //             buttons: [],
                //             type: 1,
                //             text: "Status Declined Successfully",
                //           };
                //           dispatch(ALERTS(msgdata));
                //         }}
                //       ></Button>
                //     }
                //   />
                // ),

                // view: (
                //   <CstmButton
                //     child={
                //       <Button
                //         name={""}
                //         icon={<UilEye size="18" className={"hello"} />}
                //         classes="w-10"
                //         onClick={() => {
                //           let msgdata = {
                //             show: true,
                //             icon: "error",
                //             buttons: [],
                //             type: 1,
                //             text: "You have not Permission to view this",
                //           };
                //           itm?.status === "approve"
                //             ? window.open(backendassetUrl + itm?.files)
                //             : dispatch(ALERTS(msgdata));
                //         }}
                //       ></Button>
                //     }
                //   />
                // ),

                chat: (
                    <CstmButton
                        child={
                            <Button
                                name={""}
                                icon={<BsEnvelopeArrowUp size={20} />}
                                classes="w-[45px]"
                                onClick={() => {
                                    handleModalButtonClick(
                                        itm?.fundseekerId,
                                        itm?.fundseekerName
                                    );
                                }}
                            ></Button>
                        }
                    />
                ),
            };
            return updateditm;
        });
    });
    let dbConfigTotalCount = useSelector((state) => {
        let interdata = state?.deckManagement.deckList;
        console.log(state.deckManagement.deckList, "kkxkxkkxkx");
        if (interdata?.length > 0) {
            return interdata[0]["overall_table_count"];
        } else {
            return 0;
        }
    });
    let table = {
        columns: [
            {
                name: "Chat With Funder",
                value: "chat",
                style: "min-w-[50px] max-w-[50px] text-center",
            },
            {
                name: "FundSeeker Name",
                value: "fundseekerName",
                style: "min-w-[50px] max-w-[150px] text-center",
            },
            {
                name: "FundSeeker Company",
                value: "projectCurrentStage",
                style: "min-w-[50px] max-w-[150px] text-center",
            },
            {
                name: "Project Name",
                value: "amount",
                style: "min-w-[140px] max-w-[200px] text-center",
            },
            //   {
            //     name: "Pitch Name",
            //     value: "pitchDeckName",
            //     style: "min-w-[140px] max-w-[200px] text-center",
            //   },
            //   {
            //     name: "Accept",
            //     value: "accept",
            //     style: "min-w-[50px] max-w-[50px] text-center",
            //   },
            //   {
            //     name: "Decline",
            //     value: "decline",
            //     style: "min-w-[50px] max-w-[50px] text-center",
            //   },
            //   {
            //     name: "View Pitch",
            //     value: "view",
            //     style: "min-w-[50px] max-w-[50px] text-center",
            //   },

        ],
        properties: {
            rpp: [10, 20, 50, 100],
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
        ],
    };
    const onSubmit = (data) => {
        console.log("jsjsjsjss", data);
        let value = data.reseter;
        delete data.reseter;
        //dispatch(AdminManagementActions.getUsersList(value, objectToQueryString(data)))
        dispatch(
            DeckManagementActions.getDeckList(value, objectToQueryString(data))
        );
    };
    useEffect(() => {
        //dispatch(AdminManagementActions.getUsersList())
        //dispatch(AdminManagementActions.getRoleList())
        dispatch(InvestorManagementActions.getInvestorList());
        dispatch(DeckManagementActions.getDeckList());
    }, []);
    //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
    return (
        <div className={`font-poppins ${!mode ? "bg-darkBg text-white ": ""} `}>
            <AdvancedTable
                headerButton={
                    <>
                        {/* <Button onClick={(e) => {
                setmodalOpen(prev => !prev)
                // dispatch(AdminManagementActions.getUsersList())
                dispatch(DeckManagementActions.getDeckList())
                setmodalHead("Upload Pitch Deck")
                setmodalBody(<PitchDeckForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />)
            }} 
            name={"Add New"}></Button> */}
                    </>
                }
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
            {/* <Chat/> */}
            <Modal
                size={"sm"}
                modalHead={"Chat with Us"}
                children={modalBody}
                isOpen={modalOpen}
                setIsOpen={setmodalOpen}
            />
        </div>
    );
};

export default ChatWithFundSeeker;

