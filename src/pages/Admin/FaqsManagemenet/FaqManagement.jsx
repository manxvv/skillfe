import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CommonForm from "../../../components/CommonForm";
import Button from "../../../components/Button";
import AuthActions from "../../../store/actions/auth-actions";
import FaqManagementForm from "./FaqManagementForm";

const FaqManagement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthActions.getFaqs());
  }, []);

  const faqsData =
    useSelector((state) => {
      console.log("asdfafdasfasfadsf", state);
      let fdata = state?.auth?.faqs;
      return fdata;
    }) || [];

  console.log("aasfasdafsasdf", faqsData);

  //rounak changes
  let mode = useSelector((state) => {
    console.log("adasfdsafasfasfasdfadsf", state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  });

  return (
    <>
      <div className={` ${!mode? "bg-darkBg text-white":""}`}>
        <h1 className="text-secLine text-2xl m-4 font-poppins font-semibold">
          Frequently Asked Questions
        </h1>
        {faqsData
          ?.slice()
          .reverse()
          .map((item, index) => (
            <>
              <div className="border-b-2 shadow-md mx-4 justify-center sm:mx-10 py-4 rounded-md hover:shadow-lg hover:rounded-lg hover:scale-[102%] transition-all duration-700 my-4">
                {/* questions */}
                <div>
                  <p className={`font-poppins ps-4 sm:ps-10 py-1 ${!mode? " text-white":""}`}>
                    <span className="font-semibold">
                      {/* {index + 1} -  */}
                    </span>
                    {item?.query}
                  </p>
                </div>
                {/* answers */}
                {item?.answer ? (
                  <>
                    <p className={`font-poppins text-gray-500  text-justify sm:ps-10 py-1 ${!mode? " text-gray-300":"text-gray-500"}`}>
                      <span className={` font-semibold ${!mode? " text-white":"text-black"}`}>
                        Answer -{" "}
                      </span>{" "}
                      {item?.answer}
                    </p>
                  </>
                ) : (
                  <>
                    <div>
                      <FaqManagementForm qid={item?.uniqueId} />
                    </div>
                  </>
                )}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default FaqManagement;
