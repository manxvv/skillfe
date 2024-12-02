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
import PitchDeckForm from "./PitchDeckForm";
import { UilEye } from "@iconscout/react-unicons";
import DeckManagementActions from "../../store/actions/deckManagement-actions";
import { useNavigate } from "react-router-dom";
import PitchSent from "./PitchSent";
import InvestorManagementActions from "../../store/actions/Investor-action";
import CommonForm from "../../components/CommonForm";
import WebsocketActions from "../../store/actions/websocket-actions";
import ChatMsg from "../../components/ChatMsg";
import InvestorDetailsCard from "../../components/InvestorDetailsCard";
import FundseekerAllPitch from "../../components/FundseekerAllPitch";

// import Chat from '../../components/Chat/Chat';
const AllPitches = () => {
  /***************************************/
  let dispatch = useDispatch();

  let datas = useSelector((state) => {
    console.log('jdjdjjd', state)
    let data2 = state?.deckManagement?.alldeckList;
    return data2
  })
  console.log(datas, 'jdjdjjssfsdfsdjdj')
  console.log("aasdfdasfasfasfasfasdf", datas.length);
  // const datae = useSelector((state) => {
  //   let interstatedata = state?.investmentDiscovery?.company_list || [];
  //   console.log(interstatedata, 'judhbdelet');
  //   return interstatedata;
  // });
  // console.log(datae,"fasdfagresdvsd");

  const [layoutGrid, setLayoutGrid] = useState(false);
  const layoutClasses = layoutGrid
    ? "xl:grid-cols-3 sm:grid-cols-2 grid-cols-1"
    : "grid-cols-1";

  const setLayout = () => {
    if (window.innerWidth < 600) {
      setLayoutGrid(true);
    }
  };
  // useEffect(() => {
  //   dispatch(InvestmentDiscoveryActions.getinvestmentDiscoverylist())
  //   dispatch(InvestmentDiscoveryActions.getinvestorCrmlist())
  //   window.addEventListener("resize", setLayout);
  //   return () => {
  //     window.removeEventListener("resize", setLayout);
  //   };
  // }, []);

  // //Adding fileteration funtinality
  // const [typeFilter, setTypeFilter] = useState('');
  // const [companyNameFilter, setCompanyNameFilter] = useState('');

  // const handleTypeFilterChange = (e) => {
  //   setTypeFilter(e.target.value);
  // };

  // const handleCompanyNameFilterChange = (e) => {
  //   setCompanyNameFilter(e.target.value);
  // };
  // const filteredData = datae?.filter(item => {
  //   const matchesType = item?.industryInterest?.toLowerCase().includes(typeFilter.toLowerCase());
  //   const matchesCompanyName = item?.cName?.toLowerCase().includes(companyNameFilter.toLowerCase());
  //   return matchesType && matchesCompanyName;
  // });




  /******************************* */
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


  // let dispatch = useDispatch();
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
    console.log(state, "statesfsfsdstatejjjj");
    let interdata = state?.deckManagement?.alldeckList;
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
                  // if(itm.enabled==0){
                  //     itm.enabled=1
                  // }else{
                  //     itm.enabled=0
                  // }
                  // itm.enabled=itm.enabled==0?1:0
                  console.log(itm.enabled, "itm.enabled");
                }}
                defaultChecked={itm.enabled == 1 ? true : false}
              ></ToggleButton>
            }
          />
        ),
        // "sentto":<CstmButton child={<Button classes='w-10' icon={<UilMessage classes='w-4' />}  name={""} onClick={() => {
        //     setmodalOpen(true)
        //     setmodalHead("Send To")
        //     setmodalBody(<>
        //         <PitchSent isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={false} formValue={itm} />
        //     </>)
        //     console.log('ahshshhs',itm)
        // }}></Button>} />,

        accept: (
          <CstmButton
            child={
              <Button
                name={""}
                icon={<UilCheckCircle size="18" className={"hello"} />}
                classes="w-10"
                onClick={() => {
                  console.log("chdhdhhdhdh", itm);
                  let data = {
                    status: "approve",
                  };
                  dispatch(
                    DeckManagementActions.postStatus(data, itm.uniqueId)
                  );
                  //   let msgdata = {
                  //     show: true,
                  //     icon: "success",
                  //     buttons: [],
                  //     type: 1,
                  //     text: "Status Approved Successfully \n \t Now You can view pitch",
                  //   };
                  //   dispatch(ALERTS(msgdata));
                }}
              ></Button>
            }
          />
        ),
        decline: (
          <CstmButton
            child={
              <Button
                name={""}
                icon={<UilTimesCircle size="18" className={"hello "} />}
                classes="w-10 "
                onClick={() => {
                  let data = {
                    status: "disapprove",
                  };
                  dispatch(
                    DeckManagementActions.postStatus(data, itm.uniqueId)
                  );
                  let msgdata = {
                    show: true,
                    icon: "success",
                    buttons: [],
                    type: 1,
                    text: "Status Declined Successfully",
                  };
                  dispatch(ALERTS(msgdata));
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
                  let msgdata = {
                    show: true,
                    icon: "error",
                    buttons: [],
                    type: 1,
                    text: "You have not Permission to view this",
                  };
                  itm?.status === "approve"
                    ? window.open(backendassetUrl + itm?.files)
                    : dispatch(ALERTS(msgdata));
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
    let interdata = state?.deckManagement?.alldeckList;
    console.log(state?.deckManagement?.alldeckList, "kkxkxdgdfkkxkx");
    if (interdata?.length > 0) {
      return interdata[0]["overall_table_count"];
    } else {
      return 0;
    }
  });
  let table = {
    columns: [
      {
        name: "FundSeeker",
        value: "fundseekerName",
        style: "min-w-[50px] max-w-[150px] text-center",
      },
      {
        name: "Project Stage",
        value: "projectCurrentStage",
        style: "min-w-[50px] max-w-[150px] text-center",
      },
      // {
      //     name: "Investor",
      //     value: "investorName",
      //     style: "min-w-[50px] max-w-[150px] text-center"
      // },
      {
        name: "Project Cost",
        value: "amount",
        style: "min-w-[140px] max-w-[200px] text-center",
      },
      {
        name: "Pitch Name",
        value: "pitchDeckName",
        style: "min-w-[140px] max-w-[200px] text-center",
      },
      {
        name: "Send Request",
        value: "accept",
        style: "min-w-[50px] max-w-[50px] text-center",
      },
      {
        name: "View Pitch",
        value: "view",
        style: "min-w-[50px] max-w-[50px] text-center",
      },
      {
        name: "Chat",
        value: "chat",
        style: "min-w-[50px] max-w-[50px] text-center",
      },
    ],
    properties: {
      rpp: [10, 20, 50, 100],
    },
    filter: [
    ],
  };
  const onSubmit = (data) => {
    console.log("jsjsjsjss", data);
    let value = data.reseter;
    delete data.reseter;
    //dispatch(AdminManagementActions.getUsersList(value, objectToQueryString(data)))
    dispatch(
      DeckManagementActions.getAllPitchDeck(value, objectToQueryString(data))
    );
  };
  useEffect(() => {
    //dispatch(AdminManagementActions.getUsersList())
    //dispatch(AdminManagementActions.getRoleList())
    dispatch(InvestorManagementActions.getInvestorList());
    dispatch(DeckManagementActions.getAllPitchDeck());
  }, []);

  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
  return (
    <div className={`${!mode ? "bg-darkBg text-black ": " "} `}>
      {/* <AdvancedTable
        headerButton={
          <>
            <Button onClick={(e) => {
                setmodalOpen(prev => !prev)
                // dispatch(AdminManagementActions.getUsersList())
                dispatch(DeckManagementActions.getDeckList())
                setmodalHead("Upload Pitch Deck")
                setmodalBody(<PitchDeckForm isOpen={modalOpen} setIsOpen={setmodalOpen} resetting={true} formValue={{}} />)
            }} 
            name={"Add New"}></Button>
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
      /> */}
      {/* <Chat/> */}
      {/* <Modal
        size={"sm"}
        modalHead={"Chat with Us"}
        children={modalBody}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      /> */}
      <div className="p-4 bg-cover">
        {/* <Investment_Discovery_Filters /> */}
        <div className="w-full justify-end pb-2 hidden sm:flex">
          <div className="w-full justify-end pb-2 hidden sm:flex px-2">
            {/* <input
            type="text"
            placeholder="Filter by Company Name"
            value={companyNameFilter}
            onChange={handleCompanyNameFilterChange}
            className="bg-gray-100 px-2 py-1 border border-gray-300 rounded-md mr-2 font-poppins"
          />
          <input
            type="text"
            placeholder="Filter by Type"
            value={typeFilter}
            onChange={handleTypeFilterChange}
            className="bg-gray-100 px-2 py-1 border border-gray-300 rounded-md font-poppins"
          /> */}
          </div>
          {/* <button
          className={`${layoutGrid ? "bg-secLine text-white" : ""
            } font-light border border-gray-300 px-2 rounded-md text-md font-poppins`}
          onClick={() => setLayoutGrid(true)}
        >
          Grid
        </button>
        <button
          className={`${layoutGrid ? "" : "bg-secLine text-white"
            } font-light border border-gray-300 px-2 rounded-md text-md font-poppins`}
          onClick={() => setLayoutGrid(false)}
        >
          List
        </button> */}
        </div>
        <div className={`grid ${layoutClasses} gap-4 overflow-auto`}>

          {
            (datas.length > 0)
              ?
              (<>
                {
                  datas.map((cur, index) => {
                    return (
                      <FundseekerAllPitch
                        key={index}
                        data={cur}
                        layoutGrid={layoutGrid}
                      />
                    );
                  })
                }
              </>)
              : (
                <>
                  <div className="h-[70vh] flex justify-center items-center">
                    <p className="text-heading font-poppins text-2xl">
                      Currently! There is no pitch available.
                    </p>
                  </div>
                </>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default AllPitches;

