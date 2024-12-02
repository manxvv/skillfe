import React, { useState } from "react";
import TabItem from "./TabItem";
import TabContent from "./TabContent";

const tabs = [
  "Summary",
  "Contacts",
  "Notes",
  "Activities",
  "Email",
  "Files",
  "History",
];

const InvestorCRMTabs = ({ data, setData }) => {
  const [activeTab, setActiveTab] = useState(0);

  function changeTab(index) {
    setActiveTab(index);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-md p-4">
      <div className="grid pb-4 border-b-gray-200 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            value={tab}
            index={index}
            handleTabClick={changeTab}
            isSelected={index == activeTab}
          />
        ))}
      </div>
      <div className="py-4">
        {
          <TabContent
            activeTab={tabs[activeTab]}
            data={data}
            setData={setData}
            tabs={tabs}
          />
        }
      </div>
    </div>
  );
};

export default InvestorCRMTabs;
