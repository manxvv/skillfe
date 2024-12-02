
import Multiselect from "multiselect-react-dropdown";
import React from "react";

const Multiselection = ({
  itm,
  errors,
  handleSubmit,
  setValue,
  getValues,
  register,
}) => {
  return (
    <>
      <div className="w-auto" style={{ position: "relative" }}>
        <div style={{}}>
          <Multiselect
            menuIsOpen={true}
            keepSearchTerm={true}
            groupBy="category"
            options={itm.option}
            showCheckbox
            singleSelect={itm.singleSelect ? itm.singleSelect : false}
            selectedValues={[]} // Preselected value to persist in dropdown
            onSelect={(e) => {
              let finalselection = e.map((itm) => {
                return itm.id;
              });
              setValue(itm.name, finalselection.join());
              console.log(e, "onselection");
            }} // Function will trigger on select event
            onRemove={(e) => {
              let finalselection = e.map((itm) => {
                return itm.id;
              });
              setValue(itm.name, finalselection.join());
              console.log(e, "onRemove");
            }} // Function will trigger on remove event
            {...itm.props}
            displayValue={itm.displayValue ? itm.displayValue : "name"}
            style={
              {
                searchBox: {
                  border: "none",
                  borderRadius: "0px",
                  padding: "0px",
                  color: "black !important",
                },
                multiselectContainer: {
                  minHeight: "40px",
                  maxHeight: "max-content",
                  position: "absolute",
                  // zIndex: "9999",
                  marginTop: "4px",
                  top: "100%",
                  left: "0",
                  minWidth: "200px",
                  maxWidth: "",
                  overflowX: "auto",
                  overflowY: "auto",

                },
              }
            }
            className="pt-1 text-black bg-white block h-16 rounded-md py-1.5 p-2 text-white-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
};

export default Multiselection;
