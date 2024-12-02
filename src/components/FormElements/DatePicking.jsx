import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment/moment';


const DatePicking = ({ itm, errors, handleSubmit, setValue, getValues, register }) => {

    const [value, onChange] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(true);

    console.log(getValues(), "dfghjks")

    return <>

        <DatePicker
            // selected={getValues(itm.name)}
            // onChange={(date) => {
            //     setValue(itm.name,date)
            //     setSelectedDate(prev=>!prev)
            // }}

            maxDate={itm?.props?.maxSelectableDate}
            minDate={itm?.props?.minSelectableDate}
            required
            selected={getValues(itm.name) ? moment(getValues(itm.name), itm?.formatop).toDate() : ""}
            onChange={(date) => {

                console.log(date, getValues(itm.name), "datedatedatedatedate")

                if (date != null) {
                    let curr = moment(date)
                    setValue(itm.name, curr.format(itm?.formatop))
                    setSelectedDate(prev => !prev)
                } else {
                    setValue(itm.name, null)
                }


                // console.log(curr.format(itm?.format), getValues(itm.name), itm?.format, "datedatedatedatedate")

                // console.log(typeof (date), "datedatedatedatedate")

                // console.log(getValues(itm.name) ? moment(getValues(itm.name), itm?.formatop).toDate() : getValues(itm.name), "datedatedatedatedate")



            }}
            showTimeSelect={itm.formattype == "time" || itm.formattype == "datetime"}
            showTimeSelectOnly={itm.formattype == "time" || itm.formattype == "datetime"}
            show={false}
            showIcon={true}
            // dateFormat={itm?.format}
            dateFormat="dd/MM/yyyy"
            // timeIntervals={itm?.interval}
            timeFormat={"HH:mm"}
            className='bg-white border-black border block h-8 w-full rounded-md py-0.5 p-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        {
            (itm.required && !getValues(itm.name)) &&
            <>
                <p className='text-xs text-red-700 '>Field is required</p>
            </>
        }

    </>
};

export default DatePicking;