import React, { useEffect } from 'react';
import Table from '../../components/Table';
import DPAOneRow from '../../components/DPAOneRow';
import nokiaPrePostActions from '../../store/actions/nokiaPrePost-actions';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import AutoSuggestion from '../../components/FormElements/AutoSuggestion';
import SelectDropDown from '../../components/FormElements/SelectDropDown';
import DatePicking from '../../components/FormElements/DatePicking';
import WebsocketActions from '../../store/actions/websocket-actions';
import { WebSocketUrls } from '../../utils/url';
import SiteAnalyticsCard from '../../components/SiteAnalyticsCard';


const SiteAnalyticsPro = () => {

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()

    let AllDataShowing = useSelector((state) => {
        return state?.nokiaPrePost?.networkAnalyticsPro
    })



    let DataSorter = useSelector((state) => {
        return state?.nokiaPrePost?.networkAnalyticsProSorter
    })


    let common_socket = useSelector((state) => {
        return state?.websocket?.socket_setup
    })


    let dataCols={
        "5G PM KPI Check":["KPI", "Pre", "Post", "Delta"],
        "4G PM KPI Check":["KPI", "Pre", "Post", "Delta"],
        "3G PM KPI Check":["KPI", "Pre", "Post", "Delta"],
        "2G PM KPI Check":["KPI", "Pre", "Post", "Delta"],
        "5G PCI Check":["Site ID","Issue","<1 KM","1-5 KM",">5KM"],
        "4G PCI Check":["Site ID","Issue","<1 KM","1-5 KM",">5KM"],
        "3G PSC Check":["Site ID","Issue","<1 KM","1-5 KM",">5KM"],
        "2G BCCH Check":["Site ID","Issue","<1 KM","1-5 KM",">5KM"]
    }







    for (let key in AllDataShowing) {

        console.log(key, AllDataShowing[key], "keykeykeykey")

        let dataInner = AllDataShowing[key]
        for (let innerkey in dataInner) {
            console.log(innerkey, dataInner[innerkey], "keykeykeykey")
        }
        // if (AllDataShowing.hasOwnProperty(key)) {
        //     console.log(`${key}: ${AllDataShowing[key]}`,"AllDataShowing");
        // }
    }


    useEffect(() => {
        dispatch(nokiaPrePostActions.getnetworkanalyticspro())
    }, [])

    let idSelector = [
        { label: "Select Site ID", name: "frequency", value: "Select", type: "text", option: [{ "label": "Hourly", "value": "Hourly" }, { "label": "Daily", "value": "Daily" }], props: "", required: true, },
        { label: "Pre Date", name: "startAt", type: "datetime", formattype: "date", format: "yyyy-MM-dd", formatop: "yyyy-MM-DD", required: true },
        { label: "Post Date", name: "startAt", type: "datetime", formattype: "date", format: "yyyy-MM-dd", formatop: "yyyy-MM-DD", required: true }
    ]
    return <>
        <div className='p-2'>
            {/* <div className=' bg-secLine text-white text-2xl text-center'><h1>Site Analytics</h1></div> */}
            <div className=' text-black text-2xl text-center flex flex-col sm:flex-row'>
                {/* {
                    idSelector
                } */}
                <div className='flex '>

                    <label className="block text-sm font-medium text-black whitespace-nowrap dark:text-black  py-2 pl-1 w-48">{idSelector[0]["label"]}</label>
                    <AutoSuggestion itm={idSelector[0]} errors={errors} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues} register={register} />
                </div>

                <div className='flex '>
                    <label className="block text-sm font-medium text-black whitespace-nowrap dark:text-black  py-2 pl-1 w-48">{idSelector[1]["label"]}</label>
                    <DatePicking itm={idSelector[1]} errors={errors} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues} register={register} />
                </div>
                <div className='flex '>
                    <label className="block text-sm font-medium text-black whitespace-nowrap dark:text-black py-2 pl-1 w-48">{idSelector[2]["label"]}</label>
                    <DatePicking itm={idSelector[2]} errors={errors} handleSubmit={handleSubmit} setValue={setValue} getValues={getValues} register={register} />
                </div>
            </div>


            <div class="grid grid-cols-12 gap-2 bg-white mt-8 rounded-md">
                <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 grid col-span-12 rounded-md' >
                    {
                        // Object.keys(AllDataShowing).map((ckey) => (

                        DataSorter.map((ckey) => (
                            <>
                                {/* <div className='col-span-12 grid grid-cols-1 m-2 mt-4 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-4' > */}
                                {/* <div className=''> */}
                                {
                                    //  ["5G", "4G", "3G", "2G"].map((innerkey) => {
                                    // //     console.log(AllDataShowing,innerkey,ckey,"AllDataShowing")
                                    //     return <>

                                    <div className='m-0.5 mt-4 bg-white rounded-xl shadow-lg hover:shadow-2xl shadow-slate-400 '>
                                        <SiteAnalyticsCard AllDataShowing={AllDataShowing} innerkey={"innerkey"} ckey={ckey} fetchBackend={false} headers={dataCols[ckey]} />
                                        {/* <SiteAnalyticsCard AllDataShowing={AllDataShowing} innerkey={"innerkey"} ckey={ckey} fetchBackend={false} headers={["Site ID", "Issue", "<1 KM", "1-5 KM",">5KM"]} /> */}
                                    </div>
                                    //     </>
                                    //     })
                                }
                                {/* {
                                    ["6G", "4G", "3G", "2G"].map((innerkey) => {
                                        console.log(AllDataShowing,innerkey,ckey,"AllDataShowing")
                                        return <>
                                            <SiteAnalyticsCard AllDataShowing={AllDataShowing} innerkey={innerkey} ckey={ckey} fetchBackend={false}/>
                                        </>
                                    })
                                } */}



                                {/* </div> */}
                            </>
                        ))

                    }

                </div>





                {/* <div className='col-span-6'>
                    <div className='grid grid-cols-2 mt-4'>
                        <div class="flex flex-row">

                            {
                                ["Cluster", "General", "Market", "Network"].map((itm) => {
                                    return <span className='border-gray-900 border-2 m-1 p-1'>{itm}</span>
                                })
                            }
                        </div>
                    </div>
                    <div className='col-span-3 bg-transparent'>
                        <div class="flex flex-row">
                            <input type="checkbox" />
                            <span>DA0019BA</span>
                        </div>
                    </div>
                    <div className='w-full bg-blue-900 text-white text-center mt-4'>View Health</div>
                    <div className='grid grid-cols-2 mt-4'>
                        <div class="m-2">Pre-Period</div>
                        <div class="m-2"><input type="date" /></div>
                        <div class="m-2">Post-Period</div>
                        <div class="m-2"><input type="date" /></div>
                    </div>
                    <div className='w-full bg-blue-900 text-white text-center mt-4'>Alarms</div>

                    <Table headers={["Alarm Name", "Type"]} columns={[["abcd", "ancd"], ["adsa", "dasdas"]]} />
                    <div className='w-full bg-orange-500 text-white text-center mt-10'>NOK</div>
                    <div className='w-full bg-blue-900 text-white text-center mt-4'>PM Check</div>
                    <Table headers={["Names", "Check"]} columns={[["abcd", "ancd"], ["adsa", "dasdas"], ["adsa", "dasdas"], ["adsa", "dasdas"], ["adsa", "dasdas"]]} />
                </div> */}
                {/*                 
                <div className='col-span-5 bg-transparent'>
                    <div className='w-full bg-blue-900 text-white text-center mt-10'>CM Quick Health Check</div>
                    <Table headers={["CM Param", "Check", "Remarks"]} columns={[["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"], ["abcd", "ancd", "sadasda"]]} />
                    <div className='w-full bg-blue-900 text-white text-center mt-10'>SW Change Check ({"<"} 30 Days)</div>
                    <Table headers={["MRBTS", "Date", "Pre SW", "Post/Current SW"]} columns={[["12345", "abcd", "ancd", "sadasda"]]} />
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <div className='w-full bg-blue-900 text-white text-center mt-10'>NR PCI/RSI Conflict</div>
                            <Table headers={["Issue", "< 1 mile>", "1 - 5 mile", "5 > mile"]} columns={[["12345", "abcd", "ancd", "sadasda"]]} />
                            <div className='w-full bg-blue-900 text-white text-center mt-10'>Timing Advance Cell Over Shooters</div>
                            <div className='w-fulls text-black text-center mt-2'> 4 Over shooters </div>
                            <div className='w-full bg-orange-500 text-white text-center mt-2'>NOK</div>
                        </div>
                        <div>
                            <div className='w-full bg-blue-900 text-white text-center mt-10'>LTE PCI/RSI Conflict</div>
                            <Table headers={["RSI Conflict", "PCI Conflict", "PCI Confusion"]} columns={[["12345", "321", "123"]]} />
                            <div className='w-full bg-blue-900 text-white text-center mt-10'>HW Change Check ({"<"} 30 Days) </div>
                            <div className='w-fulls text-black text-center mt-2'> 0 Change </div>
                            <div className='w-full bg-green-500 text-white text-center mt-2'>NOK</div>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 bg-transparent'>
                    <div className='w-full bg-blue-900 text-white text-center mt-10'>NR Basic KPI Check</div>
                    <Table headers={["KPI", "Pre", "Post", "Delta"]} columns={[["12345", "abcd", "ancd", "sadasda"], ["12345", "abcd", "ancd", "sadasda"], ["12345", "abcd", "ancd", "sadasda"]]} />
                    <div className='w-full bg-green-500 text-white text-center mt-2'>OK</div>
                    <div className='w-full bg-blue-900 text-white text-center mt-2'>LTE Basic KPI Check</div>
                    <Table headers={["KPI", "Pre", "Post", "Delta"]} columns={[["12345", "abcd", "ancd", "sadasda"], ["12345", "abcd", "ancd", "sadasda"], ["12345", "abcd", "ancd", "sadasda"]]} />
                    <div className='w-full bg-green-500 text-white text-center mt-2'>OK</div>
                    <div className='w-full bg-blue-900 text-white text-center mt-2'>LTE Traffic Imbalance</div>
                    <div className='w-fulls text-black text-center mt-2'> No Issue </div>
                    <div className='w-full bg-green-500 text-white text-center mt-2'>OK</div>
                    <div className='w-full bg-blue-900 text-white text-center mt-2'>LTE TA Check</div>
                    <div className='w-fulls text-black text-center mt-2'> 9 Cells Ctrs w/ {">"} 50% Change Pre/Post </div>
                    <div className='w-full bg-green-500 text-white text-center mt-2'>NOK</div>
                </div> */}
            </div>
        </div>
    </>
};

export default SiteAnalyticsPro;
