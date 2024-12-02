import React from "react";
import getCountries from "../../pages/CountryCode";
import Select from "react-select";
import { Controller } from 'react-hook-form';

let countries = getCountries();
console.log("asdfasfasfaertyuiosfasdfasmfas", countries);
let countriesCode = countries.map((currency) => {
  return {
    label: currency.label,
    value: currency.value,
  };
});

console.log("fsfsfasfasfasfasfasfd", countriesCode);

const CountryPhone = ({
  itm,
  errors,
  handleSubmit,
  setValue,
  getValues,
  register,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 w-full">
        {/*<Select name="countryCode" className="text-sm" options={countries} /> */}

        {/* <select {...register("countryCode", {
          required: itm.required ? "This " + " Field is required" : false,
          ...itm.props,
        })} className="text-sm" >
          {
            countriesCode.map((itme) => {
              return <option value={itme.value}>{itme.label}</option>
            })
          }
        </select> */}

        {/* Rounak changes */}
        <Select
          options={countries}
          {...register("countryCode", {
            required: itm.required ? "This Field is required" : false,
            ...itm.props,
          })}
          className="text-sm"
        >
          {countriesCode.map((itme) => (
            <option key={itme.value} value={itme.value}>
              {itme.label}
            </option>
          ))}
        </Select>




        <input
          type="number"
          disabled={itm.disabled ? true : false}
          {...register(itm.name, {
            required: itm.required ? "This " + " Field is required" : false,
            ...itm.props,
          })}
          placeholder={itm.placeholder ? itm.placeholder : ""}
          className="p-2 block border-b-2 py-1.5 text-white-900 sm:leading-6 rounded-md bg-opacity-50  font-poppins outline-none border-red shadow-lg focus:shadow-indigo-500/30"
          {...itm.props}
        />
      </div>
    </>
  );
};

export default CountryPhone;
