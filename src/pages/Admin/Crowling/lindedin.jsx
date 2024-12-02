import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Unicons from "@iconscout/react-unicons";
import { UilMessage, UilEnvelopeAlt } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import CstmButton from "../../../components/CstmButton";
import EditButton from "../../../components/EditButton";
import ToggleButton from "../../../components/ToggleButton";
import { objectToQueryString } from "../../../utils/commonFunnction";
import { ALERTS } from "../../../store/reducers/component-reducer";
import CommonActions from "../../../store/actions/common-actions";
import { Urls,backendassetUrl } from "../../../utils/url";
import AdvancedTable from "../../../components/AdvancedTable";
import DeleteButton from "../../../components/DeleteButton";
import PitchDeckForm from "../../PitchDeck/PitchDeckForm";
import { UilEye } from "@iconscout/react-unicons";
import DeckManagementActions from "../../../store/actions/deckManagement-actions";
import { useNavigate } from "react-router-dom";
import PitchSent from "../../PitchDeck/PitchSent";
import InvestorManagementActions from "../../../store/actions/Investor-action";
import CommonForm from "../../../components/CommonForm";
import ChatMsg from "../../../components/ChatMsg";
import CrawlingAction from "../../../store/actions/crawling-action";
const Linkedin = () => {
    let getUserId = useSelector((state) => {
        let interdata = state?.auth?.user?.id;
        return interdata;
    });
    let getChatMessge = useSelector((state) => {
        if (state?.websocket?.msg_from_socket[getUserId]) {
            return [...state?.websocket?.msg_from_socket[getUserId]];
        } else {
            return [];
        }
    });
    const [modalOpen, setmodalOpen] = useState(false);
    const [modalBody, setmodalBody] = useState(<></>);
    const [modalHead, setmodalHead] = useState(<></>);
    const [chatmodalOpen, chatsetmodalOpen] = useState(false);
    const [chatmodalBody, chatsetmodalBody] = useState(<></>);
    const [chatmodalHead, chatsetmodalHead] = useState(<></>);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    //chat App
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
        console.log(data, "sdfsdsffsdsf");
        data["uid"] = uid;
        dispatch(
            AuthActions.businessRegister(data, () => {
                navigate("/kycregister/" + uid);
            })
        );
    };

    //implementing the chat section
    const handleModalButtonClick = ({ investorId }) => {
        console.log(getChatMessge, investorId, "getChatMessgegetChatMessgegetChatMessge");
        console.log(getChatMessge)
        const updatedModalBody = (
            <ChatMsg investorId={investorId} />
        );
        setValue("rId", investorId);
        setValue("sId", getUserId);
        setValue("fId", "fundSeeker");
        chatsetmodalBody(updatedModalBody);
        chatsetmodalOpen((prev) => !prev);
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
                status: (
                    <CstmButton
                        child={
                            <ToggleButton
                                onChange={(e) => {
                                    console.log(e.target.checked, "e.target.checked");
                                    let data = {
                                        enabled: e.target.checked ? 1 : 0,
                                    };
                                    dispatch(
                                        AlertConfigurationActions.patchAlertConfig(
                                            true,
                                            data,
                                            () => {
                                                // alert(e.target.checked)
                                                e.target.checked = e.target.checked;
                                            },
                                            itm.uniqueId
                                        )
                                    );
                                    console.log(itm.enabled, "itm.enabled");
                                }}
                                defaultChecked={itm.enabled == 1 ? true : false}
                            ></ToggleButton>
                        }
                    />
                ),
                sentto: (
                    <CstmButton
                        child={
                            <Button
                                classes="w-10"
                                icon={<UilMessage classes="w-4" />}
                                name={""}
                                onClick={() => {
                                    setmodalOpen(true);
                                    setmodalHead("Send To");
                                    setmodalBody(
                                        <>
                                            <PitchSent
                                                isOpen={modalOpen}
                                                setIsOpen={setmodalOpen}
                                                resetting={false}
                                                formValue={itm}
                                            />
                                        </>
                                    );
                                    console.log("ahshshhs", itm);
                                }}
                            ></Button>
                        }
                    />
                ),

                view: (
                    <CstmButton
                        child={
                            <Button
                                name={""}
                                icon={<UilEye size="18" className={"hello"} />}
                                classes="w-10"
                                onClick={() => {
                                    window.open(backendassetUrl + itm?.files);
                                }}
                            ></Button>
                        }
                    />
                ),

                chat: (
                    <CstmButton
                        child={
                            <Button
                                name={""}
                                icon={<UilEnvelopeAlt size="18" className={"hello"} />}
                                classes="w-10"
                                onClick={() => { handleModalButtonClick(itm) }}
                            ></Button>
                        }
                    />
                ),

                edit: (
                    <CstmButton
                        className={"p-2"}
                        child={
                            <EditButton
                                name={""}
                                onClick={() => {
                                    setmodalOpen(true);
                                    setmodalHead("Edit User");
                                    setmodalBody(
                                        <>
                                            <PitchDeckForm
                                                isOpen={modalOpen}
                                                setIsOpen={setmodalOpen}
                                                resetting={false}
                                                formValue={itm}
                                            />
                                        </>
                                    );
                                    console.log("ahshshhs", itm);
                                    //setmodalOpen(false)
                                }}
                            ></EditButton>
                        }
                    />
                ),
                
                delete: (
                    <CstmButton
                        child={
                            <DeleteButton
                                name={""}
                                onClick={() => {
                                    let msgdata = {
                                        show: true,
                                        icon: "warning",
                                        buttons: [
                                            <Button
                                                classes="w-15 bg-green-500"
                                                onClick={() => {
                                                    dispatch(
                                                        CommonActions.deleteApiCaller(
                                                            `${Urls.linkedin}/${itm.uniqueId}`,
                                                            () => {
                                                                dispatch(CrawlingAction.getLinkedinList());
                                                                dispatch(ALERTS({ show: false }));
                                                            }
                                                        )
                                                    );
                                                }}
                                                name={"OK"}
                                            />,
                                            <Button
                                                classes="w-24"
                                                onClick={() => {
                                                    console.log("snnsnsnsns");
                                                    dispatch(ALERTS({ show: false }));
                                                }}
                                                name={"Cancel"}
                                            />,
                                        ],
                                        text: "Are you sure you want to Delete?",
                                    };
                                    dispatch(ALERTS(msgdata));
                                }}
                            ></DeleteButton>
                        }
                    />
                ),
            };
            return updateditm;
        });
    });
    let dbConfigTotalCount = useSelector((state) => {
        let interdata = state?.deckManagement?.deckList;
        if (interdata?.length > 0) {
            return interdata[0]["overall_table_count"];
        } else {
            return 0;
        }
    });
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
    } = useForm();
    let table = {
        columns: [
            {
                name: "Pitch Name",
                value: "pitchDeckName",
                style: "min-w-[50px] max-w-[200px] text-center",
            },
            {
                name: "The Ask",
                value: "amount",
                style: "min-w-[50px] max-w-[200px] text-center",
            },
            {
                name: "Project Current Stage",
                value: "projectCurrentStage",
                style: "min-w-[30px] max-w-[200px] text-center",
            },

            // {
            //     name: "The Ask",
            //     value: "ask",
            //     style: "min-w-[140px] max-w-[200px] text-center"
            // },
            {
                name: "View",
                value: "view",
                style: "min-w-[50px] max-w-[50px] text-center",
            },
            {
                name: "Sent To",
                value: "sentto",
                style: "min-w-[50px] max-w-[50px] text-center",
            },
            {
                name: "Chat",
                value: "chat",
                style: "min-w-[50px] max-w-[50px] text-center",
            },
            {
                name: "Edit",
                value: "edit",
                style: "min-w-[20px] max-w-[50px] text-center",
            },
            {
                name: "Delete",
                value: "delete",
                style: "min-w-[50px] max-w-[50px] text-center",
            },
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
        dispatch(
            CrawlingAction.getLinkedinList(value, objectToQueryString(data))
        );
    };
    useEffect(() => {
        dispatch(CrawlingAction.getLinkedinList());
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
                        <Button
                            onClick={(e) => {

                                setmodalOpen((prev) => !prev);
                                // dispatch(AdminManagementActions.getUsersList())
                                dispatch(CrawlingAction.getLinkedinList());
                                setmodalHead("Upload Pitch Deck");
                                setmodalBody(
                                    <PitchDeckForm
                                        isOpen={modalOpen}
                                        setIsOpen={setmodalOpen}
                                        resetting={true}
                                        formValue={{}}
                                    />
                                );
                            }}
                            name={"Add New"}
                        ></Button>
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
            <Modal
                size={"sm"}
                modalHead={modalHead}
                children={modalBody}
                isOpen={modalOpen}
                setIsOpen={setmodalOpen}
            />
        </div>
    );
};

export default Linkedin;
