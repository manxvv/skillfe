import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import * as Unicons from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import AlertConfigurationActions from '../../store/actions/alertConfiguration-actions';
import CustomQueryActions from '../../store/actions/customQuery-actions';
import Modal from '../../components/Modal';
import CommonForm from '../../components/CommonForm';
import Button from '../../components/Button';
import AdminManagementActions from '../../store/actions/adminManagement-actions';
import AuthActions from '../../store/actions/auth-actions';
import DeckManagementActions from '../../store/actions/deckManagement-actions';
import InvestorManagementActions from '../../store/actions/Investor-action';
const PitchSent = ({ isOpen, setIsOpen, resetting, formValue = {} }) => {
    console.log(isOpen, setIsOpen, resetting, formValue, "formValueformValue")
    const [modalOpen, setmodalOpen] = useState(false)
    let dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        formState: { errors },
    } = useForm()
    //let investorData=state.InvestorManagementActions.
    let investorr = useSelector((state) => {
        let investorData = state?.investorReducer?.investorList

        return {
            
            investorData
        }
    })
    console.log(investorr,'dhhhfhffgfgfg')
    let datas = investorr?.investorData?.map((item) => {
        console.log(item, 'nnhnhdh')
        return {
            'id': item?.uniqueId,
            // 'name': "< " + item.firstName + item.surname + " > < " + item.email + " >"
            'name': item?.cName
        }
    })
    let Form = [
        {
            label: "Email",
            name: "investorId",
            value: "",
            type: "muitiSelect",
            option: datas,
            onChanging: ((e) => {
                console.log({ e }, 'shshhshbbxbxbsh')
            }),
            // props: {
            //   onSelect: (e, a) => { console.log({ e, a, },'shshhshsh'),setValue("investorId",e) },
            // },[]
            props: {
                onSelect: (e, a) => {
                    console.log(e, a, 'shsggsggs')
                    console.log("asfasfasdfasfasdfsdfaidsfd", e)
                    let investorStr = "";
                    // const selctedIds = e?.map(value => value.id);
                    // console.log(selctedIds, '+');
                    // setValue("investohhrId", selctedIds);
                    
                    const selctedIds = e?.map(value => {
                        console.log(value.id, 'nhhhdhhdh', typeof(value.id));
                        let str = "" ;
                        if (typeof value.id === 'string') {
                            str = str+String(value.id);
                        } else {
                            str = str+value.id;
                        }
                        console.log(str, 'djdhhdhdh');
                        investorStr = investorStr + str + "," ;
                    });
                    if (investorStr.endsWith(',')) {
                        investorStr = investorStr.slice(0, -1);
                    }
                    console.log("asfasfdasfdasfasdfasdfasdf",investorStr);
                    console.log(selctedIds, '+');
                    setValue("investohhrId", investorStr);
                },
            },
            required: true,

        },
    ]
    const onSubmit = (data) => {
        console.log(data)
        dispatch(DeckManagementActions.getDeckList(data, () => {
            navigate('/pitch-deck')
        }))
    }
    const onTableViewSubmit = (data) => {
        console.log(data, "datadata")
        if (data.uniqueId) {
            console.log('hiibsbssbiiii')
            dispatch(DeckManagementActions.postPitchDeck(true, data, () => {
                setIsOpen(false)
                dispatch(InvestorManagementActions.getInvestorList())
            }
                , data.uniqueId)
            )
        } else {
            dispatch(DeckManagementActions.postPitchDeck(true, data, () => {
                console.log("CustomQueryActions.postDBConfig")
                setIsOpen(false)
                dispatch(InvestorManagementActions.getInvestorList())
            }))
        }
    }
    useEffect(() => {
        dispatch(InvestorManagementActions.getInvestorList())
        dispatch(DeckManagementActions.getDeckList())
        if (resetting) {
            reset({})
            Form.map((fieldName) => {
                setValue(fieldName["name"], fieldName["value"]);
            });
        } else {
            reset({})
            console.log(Object.keys(formValue), "Object.keys(formValue)")
            Object.keys(formValue).forEach((key) => {
                if (["endAt", "startAt"].indexOf(key) != -1) {
                    console.log("date formValuekey", key, formValue[key])
                    const momentObj = moment(formValue[key]);
                    setValue(key, momentObj.toDate());
                } else {
                    setValue(key, formValue[key]);
                }
            })
        }
    }, [formValue, resetting])
    return <>
        {/* <Modal size={"sm"} children={<><CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} /></>} isOpen={modalOpen} setIsOpen={setmodalOpen} /> */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <CommonForm classes={"grid-cols-1 gap-1"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            <Button classes="absolute bottom-4 w-1/2 d-block text-center" onClick={(handleSubmit(onTableViewSubmit))} name="Submit" />
        </div>
    </>
};
export default PitchSent;