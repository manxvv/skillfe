import React, { useEffect, useState } from "react";
import Button from "./Button";
import PopupMenu from "./PopupMenu";
import { current } from "@reduxjs/toolkit";
import { UilColumns } from "@iconscout/react-unicons";
import { UilFilter } from "@iconscout/react-unicons";
import Modalmoreinfo from "./Modalmoreinfo";
import Modal from "./Modal";
import DatePicker from "react-datepicker";
import { objectToArray } from "../utils/commonFunnction";
import moment from "moment";
import FilterView from "./FilterView";
import { useSelector } from "react-redux";

const AdvancedTable = ({
  tableName = "",
  headerButton,
  filterAfter = () => { },
  handleSubmit = () => { },
  table,
  data,
  errors,
  register,
  setValue,
  getValues,
  totalCount = 10,
}) => {
  const [hide, setHide] = useState([]);
  const [lastVisitedPage, setLastVisitedPage] = useState(100);
  const [RPP, setRPP] = useState(15);
  const [activeFilter, setActiveFilter] = useState([]);
  const [activedFilter, setActivedFilter] = useState({});
  const [currentPage, setcurrentPage] = useState(1);
  let pages = Array.from({
    length: totalCount % RPP == 0 ? totalCount / RPP : totalCount / RPP + 1,
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalBody, setModalBody] = useState("");
  table.properties = {
    ...table.properties,
    rpp: [15, 30, 45, 100],
  };
  console.log(lastVisitedPage, "lastVisitedPagelastVisitedPage");
  const callApiPagination = (value) => {
    let lcllastVisitedPage = lastVisitedPage;
    setcurrentPage(value);
    if (lcllastVisitedPage < totalCount) {
      setLastVisitedPage(lcllastVisitedPage + 100);
      console.log(activedFilter, "activedFilteractivedFilteractivedFilter");
      activedFilter["start"] = lcllastVisitedPage;
      activedFilter["end"] = 100;
      activedFilter["reseter"] = false;

      filterAfter(activedFilter);
    }
  };

  const onSubmit = (formdata) => {
    // alert(value)
    console.log("onSubmit", formdata);
    formdata["reseter"] = true;

    filterAfter(formdata);
    setActivedFilter(formdata);
    setActiveFilter(objectToArray(formdata));
  };
  const onReset = () => {
    // alert(value)

    filterAfter({ reseter: true });
    setActiveFilter([]);
    setActivedFilter({});
  };

  useEffect(() => {
    setActiveFilter([]);
    setActivedFilter({});
  }, [tableName]);

  // const [filterVisiblity, setfilterVisiblity] = useState(false)
  console.log("afasfaisfsfsdfjaslfdm", table);
  console.log("afasfasfasfasfafadfijadfsjd", data?.length);
  //rounak changes
  let mode = useSelector(state=>{
    console.log('adasfdsafasfasfasdfadsf',state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  })
  console.log("aafasfsafassdfsdfdsfsfsdffsafasfdadsf",mode)
  return (
    <>
      <div className={`absolute left-0 right-0 flex-col ${!mode ?"bg-darkBg text-white":""}`}>
        <div className="m-2 ">
          <div className="flex justify-between">
            <div className="flex flex-row">
              {activeFilter.length > 0 && (
                <h1 className="p-1 m-1">Active Filter:</h1>
              )}
              {activeFilter.map((itm) => {
                return (
                  <h1 className="text-pbutton text-white p-1 rounded-xl m-1">
                    {itm}
                  </h1>
                );
              })}
              {/* <label className='h-8 align-middle'>Search: </label><input className="ml-4 pl-2  bg-white border-black border block h-8 w-full rounded-md py-1.5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' /> */}
            </div>
            <div className="flex flex-row">
              {/* <Button onClick={() => { setfilterVisiblity(prev => !prev) }} name={"Filter"} /> */}

              {/* <PopupMenu visiblity={filterVisiblity}/> */}

              <FilterView
                tablefilter={table.filter}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                table={table}
                data={data}
                errors={errors}
                register={register}
                setValue={register}
                getValues={getValues}
              />
              <PopupMenu
                name={"Hide / Unhide"}
                icon={<UilColumns size="32" className={"hello"} />}
                child={
                  <>
                    <div className="flex z-40 h-60 overflow-scroll flex-col">
                      {table.columns.map((itts, index) => {
                        return (
                          <>
                            <div className="flex m-2">
                              <input
                                type="checkbox"
                                value={String(index)}
                                onChange={(e) => {
                                  setHide((prev) => {
                                    // console.log(e.target.checked,prev,[e.target.value],e.target.value,"checkboxchecked")

                                    console.log(
                                      e.target.checked,
                                      e.target.value,
                                      "e.target.checked"
                                    );
                                    // alert("caller")
                                    if (e.target.checked) {
                                      // alert("pusher")
                                      return [...prev, e.target.value];
                                    } else {
                                      // alert("remover")
                                      let vle = prev.indexOf(e.target.value);

                                      console.log(vle, "dsadsadsadasdsadsa");
                                      if (vle != -1) {
                                        prev.splice(vle, 1);
                                      }
                                      return [...prev];
                                    }
                                  });
                                }}
                                name={itts.name}
                              />
                              <span className="text-black mx-2 ">
                                {itts.name}
                              </span>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                }
              />

              {headerButton}
              {console.log(headerButton, "headerButton")}
            </div>
          </div>
        </div>
        {/* <div className='m-2 '>
                <div className='flex'>
                    {
                        table.filter.map((itm) => {
                            return <>
                                <div className='flex flex-col'>
                                    <label className="block text-sm p-2 font-medium text-black  dark:text-black">{itm.name}</label>

                                    {
                                        itm.type == "select" ?

                                            <select onChange={itm.onChanging ? itm.onChanging : null}

                                                {...register(itm.name, {
                                                    required: itm.required ? "This " + " Field is required" : false,
                                                    ...itm.props
                                                })} className={"bg-white border-black border block h-8 w-32 m-1 rounded-md py-1.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}>
                                                {
                                                    itm.option.map((selitm) => {
                                                        return <option value={selitm.value}>{selitm.label}</option>
                                                    })
                                                }
                                            </select> :
                                            <>
                                                <input type={itm.type} {...register(itm.name, {
                                                    required: itm.required ? "This " + " Field is required" : false,
                                                    ...itm.props
                                                })} className=" bg-white border-black border block h-8 w-32 m-1 rounded-md py-1.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...itm.props} />
                                                {console.log(errors[itm.name], itm.required, "errors?.itm?")}
                                                <p className='text-xs text-red-700'>{errors[itm.name]?.message}</p>
                                            </>
                                    }
                                </div>
                            </>
                        })

                    }

                </div>
            </div> */}
        <div className="m-2 overflow-x-scroll h-[78vh] pb-6 border-solid border-black text-justify">
          {data?.length > 0 ? (
            <>
              <table border={1} className="w-[100%] table-auto">
                <thead className="sticky -top-1 h-4 z-30">
                  <tr>
                    {table.columns.map((itts, index) => {
                      console.log(
                        hide.indexOf(itts.name),
                        itts.name,
                        hide,
                        "hidehidehide"
                      );
                      return hide.indexOf(String(index)) == -1 ? (
                        <th className="p-0 m-0 border-2 bg-secLine text-center">
                          <span className="text-white text-sm text-center">
                            {itts.name}
                          </span>
                        </th>
                      ) : (
                        <>No Record Available!</>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {
                    (data.length > 0) ?
                      (<>
                        {
                          data?.slice((currentPage - 1) * RPP, currentPage * RPP).map((itm) => {
                            return (
                              <tr>
                                {table.columns.map((innerItm, index) => {
                                  return hide.indexOf(String(index)) == -1 ? (
                                    <td
                                      className={`text-[14px] pl-1 border-primaryLine border-2 overflow-hidden text-center px-2 ${innerItm.style
                                        ? innerItm.style
                                        : " min-w-[300px] max-w-[500px]"
                                        }`}
                                    >
                                      <Modalmoreinfo
                                        ctt={32}
                                        setModalBody={setModalBody}
                                        setOpenModal={setOpenModal}
                                        value={itm[innerItm.value]}
                                      />
                                    </td>
                                  ) : (
                                    <></>
                                  );
                                })}
                              </tr>
                            );
                          })
                        }
                      </>) :
                      (<>
                        <tr className="text-[14px] pl-1 border-primaryLine border-2 px-2 ">
                          <td colSpan={5} className="text-center font-bold mx-auto ">
                            No Record found!
                          </td>
                        </tr>
                      </>)
                  }
                </tbody>
              </table>
            </>
          ) : (
            <>
              <table border={1} className="w-[100%] table-auto text-justify">
                <thead className="sticky -top-1 h-4 z-30">
                  <tr>
                    {table.columns.map((itts, index) => {
                      console.log(
                        hide.indexOf(itts.name),
                        itts.name,
                        hide,
                        "hidehidehide"
                      );
                      return hide.indexOf(String(index)) == -1 ? (
                        <th className=" border-primaryLine border-2 bg-primaryLine text-justify">
                          <span className="text-white text-[14px]">
                            {itts.name}
                          </span>
                        </th>
                      ) : (
                        <>

                        </>
                      );
                    })}
                  </tr>
                </thead>
              </table>
              <h1 className="flex justify-center">No Records Found!</h1>
            </>
          )}
        </div>
        <div className="m-2">
          <div className="flex justify-between">
            <div>
              <label>Rows Per Page: </label>
              <select
                className="text-black"
                onChange={(e) => setRPP(e.target.value)}
              >
                {table.properties.rpp.map((itm) => {
                  return <option>{itm}</option>;
                })}
              </select>
            </div>

            <div className="flex ">
              {pages.map((itm, index) => {
                return pages.length > 5 ? (
                  (index + 3 > currentPage && index - 1 < currentPage) ||
                    index + 1 == 1 ||
                    index + 1 == pages.length ? (
                    <span
                      onClick={(e) => {
                        callApiPagination(index + 1);
                      }}
                      className={`border cursor-pointer px-2 mx-2 ${currentPage == index + 1
                        ? "bg-primaryLine text-white border-primaryLine"
                        : "bg-white text-black border-primaryLine"
                        } `}
                    >
                      {index + 1}
                    </span>
                  ) : (
                    <></>
                  )
                ) : (
                  <span
                    onClick={(e) => {
                      callApiPagination(index + 1);
                    }}
                    className={`border cursor-pointer border-primaryLine ${currentPage == index + 1
                      ? "bg-primaryLine text-white"
                      : "bg-white"
                      } px-2 mx-2`}
                  >
                    {index + 1}
                  </span>
                );
              })}
              {/* {
                            table.properties.rpp.map((itm) => {
                                return <span className='border border-red-500 px-2 mx-2'>{itm}</span>
                            })
                        } */}
            </div>
          </div>
        </div>
      </div>

      <Modal
        children={modalBody}
        setIsOpen={setOpenModal}
        isOpen={openModal}
        size={"sm"}
      />
    </>
  );
};

export default AdvancedTable;
