import React from "react";
import Select from "react-select";
import getCountryCurrencies from "../../pages/CountryCurrency";
let countryCurrency = getCountryCurrencies();
let currencyOptions = countryCurrency.map(currency => {
  return {
    "label": `${currency.currency_code} - ${currency.currency_symbol}`,
    "value": currency.currency_symbol
  };
});
console.log(currencyOptions, 'nnbfbfbfbb')
const Currency = ({
  itm,
  errors,
  handleSubmit,
  setValue,
  getValues,
  register,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 w-full ">
        <select {...register(itm.iname, {
          required: itm.required ? "This " + " Field is required" : false,
          ...itm.props,
        })} className="text-sm" >

          {
            currencyOptions.map((itme) => {
              return <option value={itme.value}>{itme.label}</option>
            })
          }
        </select>
        <input
          type={itm.type}
          disabled={itm.disabled ? true : false}
          {...register(itm.name, {
            required: itm.required ? "This " + " Field is required" : false,
            ...itm.props,
          })}
          placeholder={itm.placeholder ? itm.placeholder : ""}
          className="p-2 block border-b-2 py-1.5 sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-red shadow-lg focus:shadow-indigo-500/30"
          {...itm.props}
        />
      </div>
    </>
  );
};
export default Currency;
