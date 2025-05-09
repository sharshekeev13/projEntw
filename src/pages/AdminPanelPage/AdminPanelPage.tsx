import UserTableComponent from "./components/UserTableComponent";
import DefenseTableComponent from "./components/DefenseTableComponent";
import { useState } from "react";

function AdminPanelPage() {
  const tabs = [
    {
      tabName: "userTab",
      label: "Users",
      tabComponent: <UserTableComponent />,
    },
    {
      tabName: "defenseTab",
      label: "Verteidigungen",
      tabComponent: <DefenseTableComponent />,
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("userTab");

  const currentTab = tabs.find((tab) => tab.tabName === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-2">
      <main className="max-w-screen-xl mx-auto py-4 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex flex-col w-full">
          <div className="flex mb-4 bg-white w-full rounded shadow-md">
            {tabs.map((tab) => (
              <button
                key={tab.tabName}
                onClick={() => setActiveTab(tab.tabName)}
                className={`py-2 w-1/2 ${
                  activeTab === tab.tabName
                    ? "bg-primary text-white rounded"
                    : "bg-white text-gray-800 rounded-r"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div>{currentTab?.tabComponent}</div>
        </div>
      </main>
    </div>
  );
}

export default AdminPanelPage;
