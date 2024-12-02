import Button from "../components/Button";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MySubscriptions = () => {
  const userRole = useSelector((state) => {
    console.log("amarnathadafasfasfasfafasdf", state?.auth?.user?.roleName);
    let role = state?.auth?.user?.roleName;
    return role;
  });
  console.log("adsfdasfasfamarnathafafdsadsf", userRole);
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalBody, setmodalBody] = useState(<></>);
  const [modalHead, setmodalHead] = useState(<></>);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const services = [
    "Financial Assessment (Budget Forecast)",
    "Financial Assessment (Budget DCF)",
    "Business Plan/Teaser/Pitch Deck",
    "Due Diligence",
    "Market Analysis",
    "Organisation of Business Trip",
    "Intercultural Training and Mediation",
    "Advice on Strategy",
  ];
  // const features = [
  //   {
  //     icon: "/trend.png",
  //     title: "Investment Experience",
  //     description:
  //       "Our team boasts a combined 30 years of experience in project funding across Africa and Europe.",
  //   },
  //   {
  //     icon: "/hamburger.png",
  //     title: "Verified Investors and Project Owners",
  //     description:
  //       "Our big data offers insights for smarter decisions, enhancing your experience and increasing your success.",
  //   },
  //   {
  //     icon: "/cloud.png",
  //     title: "Big Data",
  //     description:
  //       "Our Big Data Provides Insights to make Informed and Smarter Decisions, thereby enhancing your Overall Experience.",
  //   },
  //   {
  //     icon: "/loop.png",
  //     title: "Value-Added Services",
  //     description:
  //       "We offer personalized Services based on your specific requirements.",
  //   },
  // ];

  const pricingPlans = [
    {
      title: "Value-Added Services (VAS)",
      features: [
        {
          para: "Financial Assessment (Budget Forecast)",
          gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Financial-Assessment-Budget-Forecast-1",
        },
        {
          para: "Financial Assessment (Budget DCF)",
          gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Financial-Assessment-DCF-1",
        },
        {
          para: "Business Plan/Teaser/Pitch Deck",
          gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Business-Plan-Teaser-Picth-Deck",
          // gate: "https://checkout.reepay.com/#/signup/9c2d298f77c108befb62dab55440c7f0/business-plan-teaser-picth-deck",

        },
        {
          para: "Due Diligence",
          gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Due-Diligence",
          // gate: "https://checkout.reepay.com/#/signup/9c2d298f77c108befb62dab55440c7f0/due-diligence",

        },
        {
          para: "Market Analysis",
          gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Market-Analysis",
        },
        {
          para: "Organisation of Business Trip",
          gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Organisation-Management-of-Business-Trip",
        },
        {
          para: "Intercultural Training and Mediation",
          gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Intercultural-Training-Mediation",
        },
        {
          para: "Advice on Strategy",
          gate: "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Advice-on-Strategy",
        },
      ],
      button: "buy now",
    },
  ];

  const handleChoosePlan = () => {
    const paymentLink =
      "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Basic-Investor-Monthly-Subscription";
    // const paymentLink ='https://checkout.reepay.com/#/signup/9c2d298f77c108befb62dab55440c7f0/testing-product';
    window.location.href = paymentLink;

    setLoading(true);
  };

  const handleChoosePlan2 = () => {
    const paymentLink =
      "https://checkout.reepay.com/#/signup/e8c9a612ba56d4b5e928bfdf846d0378/Basic-Project-Owner-Monthly-Subscription";
    // const paymentLink ='https://checkout.reepay.com/#/signup/9c2d298f77c108befb62dab55440c7f0/testing-product';
    window.location.href = paymentLink;

    setLoading(true);
  };


  const checkPaymentStatus = async () => {
    try {
      const response = await axios.get("/api/check-payment-status", {
        params: { userId: "user_1" },
      });

      if (response.data.paymentConfirmed) {
        setPaymentComplete(true);
        setLoading(false);

        navigate("/");
      }
    } catch (error) {
      console.error("Error checking payment status:", error);
    }
  };

  useEffect(() => {
    if (!paymentComplete) {
      const interval = setInterval(() => {
        checkPaymentStatus();
      }, 5000); // Check every 5 seconds

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [paymentComplete]);

  if (loading) {
    return <p>Redirecting to the payment gateway, please wait...</p>;
  }

  //rounak change
  //rounak changes
  let mode = useSelector((state) => {
    console.log("adasfdsafasfasfasdfadsf", state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  });

  return (
    <div className={` h-full ${!mode ? "bg-darkBg text-white" : ""}`}>
      <div
        className={`md:ml-2 flex justify-between py-12 md:p-12 mt-2 ${
          !mode
            ? "bg-darkBg text-white"
            : " border-gray-300 border-2 rounded-lg font-oxygen"
        }`}
      >
        <div className="flex text-2xl">
          <span
            className={`font-semibold text-lg sm:text-2xl ps-2 ${
              !mode ? " text-white" : ""
            }`}
          >
            Current Plan
          </span>
          <h1 className="text-secLine font-bold mx-3 text-lg sm:text-2xl">
            Basic
          </h1>
        </div>
        <div className="me-4">
          <Button
            classes='w-30 md:w-40 text-2xl"'
            name={"Change Plan"}
            onClick={() => {
              setmodalOpen(true);
              setmodalHead("Choose Plan");
              setmodalBody(
                <>
                  <div className="min-h-screen flex justify-center items-center font-oxygen overflow-scroll">
                    <div className="">
                      <div className="text-center font-semibold">
                        <h1 className="text-5xl">
                          {/* <span className="text-blue-700 tracking-wide">
                            AMANSAS{" "}
                          </span> */}
                          <img
                            className="w-[100px] block mx-auto"
                            src="../../../Amansas_logo.png"
                            alt=""
                          />
                          <span className="font-oxygen text-4xl my-1 text-heading">
                            Plans
                          </span>
                        </h1>
                        <p
                          className={`text-2xl  font-oxygen w-full px-8 md:w-full font-semibold dark:text-white ${
                            !mode ? "text-white" : "text-black"
                          }`}
                        >
                          Choose a plan that works best for You
                          <br />
                        </p>
                      </div>

                       {userRole === "Investor" && (
                        <>
                        <div className="flex justify-center items-center">
  <div className="pt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">
    {/* Basic Plan */}
    <div className="w-full max-w-sm h-auto p-4 bg-white border-[1px] border-gray-200 text-center rounded-xl shadow-xl hover:scale-105 transition-all duration-500 m-4">
      <h1 className="text-black font-semibold text-2xl md:text-3xl text-secLine ">
        Basic Investor
      </h1>
      <p className="pt-2 tracking-wide">
        <span className="align-top text-xl"> </span>
        <span className="font-medium text-lg">
          {/* / user per month */}
        </span>
      </p>
      <hr className="mt-4 border-1" />
      <div className="pt-4 relative">
        <div className="text-left text-gray-500">
          <p className="font-[550] font-oxygen text-md py-2 flex">
            <MdOutlineCheckCircleOutline
              className="me-2 text-secLine"
              size={30}
            />
            Smart Platform
          </p>
          <p className="font-[550] font-oxygen text-md py-2 flex">
            <MdOutlineCheckCircleOutline
              className="me-2 text-secLine"
              size={30}
            />
            Free Access for 3 months
          </p>
          <p className="font-[550] font-oxygen text-md py-2 flex">
            <MdOutlineCheckCircleOutline
              className="me-2 text-secLine"
              size={30}
            />
            Unlimited Access to Project Database
          </p>
        </div>
        <div className="py-4 flex justify-center">
          <Button
            onClick={handleChoosePlan}
            className="w-40"
            name={"Choose Plan"}
          />
        </div>
      </div>
    </div>

    {/* Dynamic Pricing Plans */}
    <div className="w-full max-w-lg h-auto p-4 bg-white border-[1px] border-gray-200 text-center rounded-xl shadow-xl hover:scale-105 transition-all duration-500 m-4">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg text-center"
        >
          <h4 className="text-black font-semibold text-2xl md:text-3xl text-secLine pb-6 border-b-2">
            {plan.title}
          </h4>
          <ul className="text-left space-y-2 text-gray-500 mb-6">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="flex font-oxygen items-center"
              >
                <span className="font-[550] font-oxygen text-md flex py-2">
                  <MdOutlineCheckCircleOutline
                    className="me-2 text-secLine"
                    size={30}
                  />
                  {" "}
                  {feature.para}
                </span>
                {plan.button && (
                  <div className="">
                    <button className="hover:text-red-600 ml-5 text-black font-bold py-1 px-2 rounded-full">
                      <a href={feature.gate}>
                        {plan.button}
                      </a>
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>

                        </>
                      )}

                      {userRole === "Fund Seeker" && (
                        <>
                       <div className="flex justify-center items-center">
  <div className="pt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">
    {/* Basic Plan */}
    <div
      className={`w-full max-w-sm h-auto p-4 text-center rounded-xl shadow-xl hover:scale-105 transition-all duration-500 m-4 ${
        !mode ? "bg-gray-900 text-white" : "border-[1px] border-gray-200"
      }`}
    >
      <h1 className="text-black font-semibold text-2xl md:text-3xl text-secLine ">
        Basic Project Owner
      </h1>
      <p className="pt-2 tracking-wide">
        <span className="align-top text-xl"></span>
        <span className="font-medium text-lg"></span>
      </p>
      <hr className="mt-4 border-1" />
      <div className="pt-4 relative">
        <div className={`text-left ${!mode ? "text-gray-300" : "text-gray-500"}`}>
          <p className="font-[550] font-oxygen text-md py-2 flex">
            <MdOutlineCheckCircleOutline className="me-2 text-secLine" size={30} />
            Smart Platform
          </p>
          <p className="font-[550] font-oxygen text-md py-2 flex">
            <MdOutlineCheckCircleOutline className="me-2 text-secLine" size={30} />
            Free Access for 3 months
          </p>
          <p className="font-[550] font-oxygen text-md py-2 flex">
            <MdOutlineCheckCircleOutline className="me-2 text-secLine" size={30} />
            Access to Funders
          </p>
        </div>
        <div className="py-4 flex justify-center">
          <Button onClick={handleChoosePlan2} className="w-40" name={"Choose Plan"} />
        </div>
      </div>
    </div>

    {/* Gold Plan */}
    <div className="w-full max-w-lg h-auto p-4 bg-white border-[1px] border-gray-200 text-center rounded-xl shadow-xl hover:scale-105 transition-all duration-500 m-4">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="bg-white p-6 rounded-lg text-center">
          <h4 className="text-black font-semibold text-2xl md:text-3xl text-secLine pb-6 border-b-2">
            {plan.title}
          </h4>
          <ul className="text-left space-y-2 text-gray-500 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex font-oxygen items-center">
                <span className="font-[550] font-oxygen text-md flex py-2">
                  <MdOutlineCheckCircleOutline className="me-2 text-secLine" size={30} />
                  {" "}{feature.para}
                </span>
                {plan.button && (
                  <div className="">
                    <button className="hover:text-red-600 ml-5 text-black font-bold py-1 px-2 rounded-full">
                      <a href={feature.gate}>{plan.button}</a>
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>

                        </>
                      )}
                    </div>
                  </div>
                </>
              );
              console.log("amarnathahshshhs");
            }}
          ></Button>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <Modal
        size={"xl"}
        modalHead={modalHead}
        children={modalBody}
        isOpen={modalOpen}
        setIsOpen={setmodalOpen}
      />
    </div>
  );
};

export default MySubscriptions;
