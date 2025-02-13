import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
// import AlertConfigurationActions from '../../../store/actions/alertConfiguration-actions';
//import CustomQueryActions from '../../../store/actions/customQuery-actions';
import Modal from '../../components/Modal';
import CommonForm from '../../components/CommonForm';
import Button from '../../components/Button';
// import OperationManagementActions from '../../../store/actions/adminManagement-actions';
// import OperationManagementActions from '../../../store/actions/OperationManagement-actions';
import InvestmentDetailsActions from '../../store/actions/InvestmentDetails-action';
import getCountryCurrencies from '../CountryCurrency';
const InvestmentDetailsManagementForm = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {

    console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue")

    const [modalOpen, setmodalOpen] = useState(false)


    let dispatch = useDispatch()
    // let roleList = useSelector((state) => {
    //     console.log(state, "state state")
    //     return state?.adminManagement?.roleList
    // })
    let databaseList = useSelector((state) => {
        console.log(state, "state")
        let interdata = state?.customQuery?.databaseList

        console.log(interdata, "interdatainterdata")
        return state?.customQuery?.databaseList
    })
    // let Form = [
    //     { label: "DB Server", value: "", option: ["Please Select Your DB Server"], type: "select" },
    //     { label: "Custom Queries", value: "", type: "textarea" }
    // ]
    let countryCurrency = getCountryCurrencies();
    let currencyOptions = countryCurrency.map(currency => {
        return {
            "label": `${currency.currency_code} - ${currency.currency_symbol}`,
            "value": currency.currency_symbol
        };
    });
    let Form = [
        // {
        //     label: "Login Type",
        //     name: "loginType",
        //     value: "Select",
        //     type: "select",
        //     option: [
        //         { "label": "Password Based", "value": "PasswordBased" },
        //         { "label": "Two Way Auth", "value": "TwoWayAuth" }
        //     ],
        //     props: "",
        //     required: true,
        //     classes: "col-span-1"
        // },
        {
            label: "Investor Name",
            value: "",
            name: "investorName",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")

                    // setValue("queries",e.target.name)

                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Investor Company",
            value: "",
            name: "investorCompany",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")

                    // setValue("queries",e.target.name)

                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Investor Email",
            value: "",
            name: "investorEmail",
            type: "email",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")

                    // setValue("queries",e.target.name)

                }),
            },
            classes: "col-span-1"
        },
        {
            label: "Investment Type",
            value: "",
            option: [
                { "label": "Stocks (Equities)", "value": "StocksEquities" },
                { "label": "Bonds (Fixed Income)", "value": "BondsFixedIncome" },
                { "label": "Mutual Funds", "value": "MutualFunds" },
                { "label": "Exchange-Traded Funds (ETFs)", "value": "ETFs" },
                { "label": "Real Estate", "value": "RealEstate" },
                { "label": "Commodities", "value": "Commodities" },
                { "label": "Derivatives", "value": "Derivatives" },
                { "label": "Foreign Exchange (Forex)", "value": "Forex" },
                { "label": "Cryptocurrencies", "value": "Cryptocurrencies" },
                { "label": "Private Equity", "value": "PrivateEquity" },
                { "label": "Venture Capital", "value": "VentureCapital" },
                { "label": "Hedge Funds", "value": "HedgeFunds" }
            ],
            name: "investmentType",
            type: "select",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")

                    // setValue("queries",e.target.name)

                }),
            },
            classes: "col-span-1"
        },
        // {
        //     label: "Username",
        //     value: "",
        //     name: "username",
        //     type: "text",
        //     required: true,
        //     props: {
        //         onChange: ((e) => {
        //             // console.log(e.target.value, "e geeter")

        //             // setValue("queries",e.target.name)

        //         }),
        //     },
        //     classes: "col-span-1"
        // }, 
        {
            label: "Amount",
            value: "",
            name: "amountRaised",
            type: "text",
            required: true,
            props: {
                onChange: ((e) => {
                    // console.log(e.target.value, "e geeter")
                    setValue("queries", e.target.name)
                }),
            },
            classes: "col-span-1",
            amp: [{
                type: "select",
                name: "currency",
                option: currencyOptions,
                value: "currency"
            }]
        },
        //  {
        //     label: "Role",
        //     name: "roleId",
        //     value: "Select",
        //     type: "select",
        //     option: roleList,
        //     props: "",
        //     required: true,
        //     classes: "col-span-1"
        // }, 
        // { label: "User", value: "", option: ["User Name"], type: "select" }
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
        //     navigate('/authenticate')
        // }))
    }
    const onTableViewSubmit = (data) => {
        console.log(data, "datashhshshdata")
        // dasdsadsadasdas
        if (formValue.uniqueId) {
            console.log('jjjjjjjjf', formValue)
            dispatch(InvestmentDetailsActions.postInvestmentDetailsList(true, data, () => {
                console.log("CustomQueryActions.postDBConfig")
                setIsOpen(false)
                dispatch(InvestmentDetailsActions.getInvestmentDetailsList())

            }, formValue.uniqueId))
        } else {
            dispatch(InvestmentDetailsActions.postInvestmentDetailsList(true, data, () => {
                console.log("CustomQueryActions.postDBConfig")
                setIsOpen(false)
                dispatch(InvestmentDetailsActions.getInvestmentDetailsList())
            }))
        }
    }
    console.log(Form, "Form 11")
    useEffect(() => {
        if (resetting) {
            reset({})
            Form.map((fieldName) => {
                setValue(fieldName["name"], fieldName["value"]);
            });
        } else {
            reset({})

            console.log(Object.keys(formValue), "Object.keys(formValue)")
            Form.forEach((key) => {
                if (["endAt", "startAt"].indexOf(key.name) != -1) {
                    console.log("date formValuekey", key.name, formValue[key.name])
                    const momentObj = moment(formValue[key.name]);
                    setValue(key.name, momentObj.toDate());


                } else {
                    // console.log("formValuekey",key,key)
                    setValue(key.name, formValue[key.name]);
                }
            })
        }
    }, [formValue, resetting])
    return <>
        <Modal size={"sm"} children={<><CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} /></>} isOpen={modalOpen} setIsOpen={setmodalOpen} />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            {/* <button></button> */}
            {/* <button onClick={() => { setmodalOpen(true) }} className='flex bg-primaryLine mt-6 w-42 absolute right-1 top-1 justify-center rounded-md bg-pbutton px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton'>Add DB Type <Unicons.UilPlus /></button> */}
            {/* <Table headers={["S.No.", "DB Type", "DB Server", "DB Name", "Created By", "Created Date", "Last Modified By", "Last Modified Date", "Actions"]} columns={[["1", "abcd", "ancd", "abcd", "ancd"], ["2", "adsa", "dasdas", "abcd", "ancd"]]} /> */}
            {/* <button onClick={(handleSubmit(onTableViewSubmit))} className='bg-primaryLine mt-6 w-full justify-center rounded-md bg-pbutton px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-pbutton'>Submit</button> */}
            <Button classes={"mt-2 "} onClick={(handleSubmit(onTableViewSubmit))} name="Submit" />
        </div>
    </>


};

export default InvestmentDetailsManagementForm;