import React from 'react'
import { useForm } from 'react-hook-form'
import CommonForm from '../../../components/CommonForm'
import Button from '../../../components/Button'
import AuthActions from '../../../store/actions/auth-actions'
import { useDispatch } from 'react-redux'

const FaqManagementForm = ({ qid }) => {
    //form implementation section
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

    let Form = [
        { name: "answer", value: "answer", type: "text", props: "", required: false, placeholder: "Write Answer ......" },
    ]

    const onTableViewSubmit = (data) => {
        console.log("asfdasfaididididsfasd", qid);
        data['qid'] = qid;
        console.log("afasfasfasfasd3ds", data);
        dispatch(AuthActions?.postFaqsAns(data))
        reset({ answer: "" })
        dispatch(AuthActions.getFaqs());
    }
    return (
        <>
            <div className="col-span-2 ">
                <div className='rounded-sm px-4 sm:px-16 md:px-24'>
                    <div className='flex justify-center flex-wrap'>
                        <CommonForm classes={"w-full sm:w-5/6"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
                        <Button classes={"w-1/10 h-1/2 mt-1 md:mt-5"} onClick={handleSubmit(onTableViewSubmit)} name="Reply" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqManagementForm
