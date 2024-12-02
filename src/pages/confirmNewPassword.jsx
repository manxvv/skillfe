import React from 'react'

const confirmNewPassword = () => {
 

    return <>
        <WithSideImage sideImage={"bg-setuppassword"} formclass={" h-[75vh]"} form={<>
            <CommonForm classes={"grid-cols-1 gap-1 font-body"} Form={Form} errors={errors} register={register} setValue={setValue} getValues={getValues} />
            <Button classes={"mt-4 mx-auto bg-neavycolor"} onClick={(handleSubmit(onTableViewSubmit))} name="Set Password and Continue" />
        </>} labeling={""} />
    </>
}

export default confirmNewPassword