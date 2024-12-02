import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Company_details_section from "../components/company_details/Company_details_section";
import Company_people_connected from "../components/company_details/Company_people_connected";
import Company_profile_section from "../components/company_details/Company_profile_section";
import { useDispatch, useSelector } from "react-redux";
import AuthActions from "../store/actions/auth-actions";
import { baseUrl } from "../utils/url";
import { useParams } from "react-router-dom";

const Details = () => {
  //Get API to access the data

  const { uid } = useParams();
  console.log("fasfasfuidasdsdfasfasdf", uid);

  const dispatch = useDispatch();
  const details = useSelector((state) => state?.auth?.profile);
  useEffect(() => {
    dispatch(AuthActions.profile());
    // if (uid) {
    //     console.log("fafsfasfasfasfasfasdfasfasdfmaincall");
    //     dispatch(AuthActions.profile(uid));
    // } else {
    //     console.log("fafsfasfasfasfasfasdfasfasdfmainelsecall");
    //     dispatch(AuthActions.profile());
    // }
  }, []);

  console.log(details, "swerwfdsvxcv");
  let rating = details?.reviews?.rating;

  let reviewArr = details?.reviews || [];
  console.log("asfasfasfafsdfsdfsfsfsfsdsfasf", reviewArr);

  useState(() => {
    reviewArr = details?.reviews;
  }, [reviewArr]);

  let avgRating = rating * 2;
  console.log(avgRating, "sfasfasfasavg");
  //Extracting the data fron the details
  let geography = details?.continent;
  let fundingStage = details?.fundingStage;
  let investorType = details?.funderType || [];
  let industryFocus = details?.industryInterest || [];

  useEffect(() => {
    investorType = details?.funderType;
    industryFocus = details?.industryInterest;
    console.log("afsasffdasfafadsf", industryFocus);
  }, [investorType, industryFocus]);
  let company_details = {
    name: details?.businessName,
    intro:
      "Wavemaker Partners is an early-stage venture capital firm that was founded in 2003 with offices in Los Angeles and Singapore. The firm invests primarily in Enterprise and Deep Tech startups.",
    address:
      "Singapore Singapore: Santa Monica California United States; Los Angeles California United States; California United States; Asia; North America; United States",
    data: [
      [
        details?.roleName == "Investor" ? "Investor Type" : "Project Type",
        details?.roleName == "Investor"
          ? investorType
            ? investorType.map((itm) => itm + ", ")
            : ""
          : details?.projectType,
      ],
      details?.roleName == "Investor"
        ? ["stage focus", fundingStage]
        : [
            "Business Type",
            details?.businessDesc !== "Other"
              ? details?.businessDesc
              : details?.customBusinessDesc,
          ],
      details?.roleName == "Investor" ? ["Geography focus", geography] : [],
      details?.roleName == "Investor"
        ? ["fund size / aum", "$111,000,000"]
        : [],
      details?.roleName == "Investor"
        ? ["investment range", "$100,000 - $2,500,000"]
        : [],
      details?.roleName == "Investor" ? ["sweet spot", "$500,000"] : [],
    ],
    industry_focus: [
      "Crypto/ web3/ Blockchain",
      "Crypto",
      "web3",
      "Analytics",
      "web3",
      "Analytics",
      "IOT (Internet of Things)",
      "Mobile",
      "Crypto/ web3/ Blockchain",
      "Crypto",
      "web3",
      "Analytics",
      "IOT (Internet of Things)",
      "Mobile",
    ],
    relevant_investments: {
      headers: ["Company", "Cost", "Round"],
      data: [
        ["Smartkarma", "$13,500,000", "Later stage VC"],
        ["Globe", "$13,500,000", "Seed Round"],
        ["Wootag", "$13,500,000", "Seed Round"],
        ["Smartkarma", "$13,500,000", "Later stage VC"],
        ["Globe", "$13,500,000", "Seed Round"],
        ["Wootag", "$13,500,000", "Seed Round"],
      ],
    },
    company_links: {
      portfolio: details?.companyPortfolioLink,
      facebook: details?.companyFacebookLink,
      twitter: details?.companyTwitterLink,
      linkedin: details?.companyLinkedInLink,
      // google: "https://www.google.com",
    },
    rating: avgRating,
    no_of_votes: 5,
  };
  let connected_people = details?.employeesDetails;
  // let connected_people = details?.finalMemberData;
  console.log(connected_people, "sfsdfsfsfssdf");
  // let connected_people = [
  //     {
  //         name: "eric manlunas",
  //         email: "eric@wavemaker.vc"
  //     },
  //     {
  //         name: "eric manlunas",
  //         email: "eric@wavemaker.vc"
  //     },
  //     {
  //         name: "eric manlunas",
  //         email: "eric@wavemaker.vc"
  //     },
  //     {
  //         name: "eric manlunas",
  //         email: "eric@wavemaker.vc"
  //     },
  //     {
  //         name: "eric manlunas",
  //         email: "eric@wavemaker.vc"
  //     },
  //     {
  //         name: "eric manlunas",
  //         email: "eric@wavemaker.vc"
  //     }
  // ]

  //rounak changes
  let mode = useSelector((state) => {
    console.log("adasfdsafasfasfasdfadsf", state);
    let viewMode = state?.auth?.mode;
    return viewMode;
  });

  return (
    <div className={`${!mode ? "bg-darkBg text-white" : ""}`}>
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 ">
        {/* Profile section */}
        <div className="px-5 md:order-1 xl:order-1 order-1 sm:col-span-2 xl:col-span-1">
          <Company_profile_section
            company_links={company_details?.company_links}
            rating={company_details?.rating}
            votes={company_details.no_of_votes}
            logo_url={baseUrl + "/" + details?.clogo}
          />
          <Company_people_connected
            connected_people={connected_people}
            people_type={"Connected Employees"}
          />
        </div>

        {/* Detail Section */}
        <Company_details_section
          reviews={reviewArr}
          projectSummary={details?.descriptionFundSeeking}
          purpose={details?.descriptionUsageFund}
          roleName={details?.roleName}
          name={details?.cName}
          intro={details?.description}
          address={details?.address}
          industry_focus={industryFocus}
          data={company_details.data}
          relevant_investments={company_details.relevant_investments}
        />
        {/* Button details */}
        {/* <div className='pt-10 md:order-2 xl:order-3 order-2 sm:my-auto xl:my-0'>
                    <div>
                        <Button classes='text-white my-2 w-3/4 mx-auto' name={"Add to Investor CRM"}></Button>
                    </div>
                    <div>
                        <Button classes='bg-[#c4c1bc] border border-black my-2 w-3/4 mx-auto' name={"Add Review"}></Button>
                    </div>
                    <div>
                        <Button classes='bg-[#c4c1bc] my-2 w-3/4 mx-auto' name={"Not a Fit"}></Button>
                    </div>
                </div> */}
      </div>
      <hr />
      <div className="grid lg:grid-cols-4 sm:grid-cols-6">
        <div className="sm:col-start-2 sm:col-end-6 lg:col-start-2 lg:col-end-4 col-span-4 px-10 sm:px-0">
          <p className="pt-2 text-heading">Tweeter Feed</p>
          <div className=" p-4 rounded-lg shadow-md">
            <p className="text-md font-poppins mb-2 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, quia illum, cum vel voluptates totam distinctio odit
              voluptatibus optio aspernatur, rem perspiciatis autem repudiandae
              reprehenderit ex. Consequatur quo tenetur quisquam aliquid
              commodi, a illum nemo assumenda temporibus nesciunt velit
              voluptatem cupiditate inventore accusamus suscipit itaque
              molestiae? Suscipit repellendus necessitatibus adipisci natus
              perferendis, sapiente, quia ratione tempore sit veniam deleniti
              distinctio assumenda minima doloremque deserunt officiis.
            </p>
            <p className="text-sm text-gray-600 mb-4 dark:text-white pt-5">
              #Abc Name
            </p>
            <a
              href="https://twitter.com/1051Amar80783/status/1657579323795341313?ref_src=twsrc%5Etfw"
              className="text-blue-500 hover:underline"
            >
              May 14, 2023
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
