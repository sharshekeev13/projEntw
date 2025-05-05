import React from "react";
import FilterSidebar from "./components/FilterSidebar";
import DefenseCard from "./components/DefenseCard";
import Pagination from "./components/Pagination";
import SucheIcon from "../../assets/suche_icon.svg";
import IconPrimaryButton from "../../components/IconPrimaryButton";
import { useState } from "react";

function CatalogPage() {

  type TabKey = keyof typeof tabContent;

  const [activeTab, setActiveTab] = useState<TabKey>("tab1");
  const [showFilters, setShowFilters] = useState(false);


  const sampleDefenses = [
    {
      title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
      date: '15.02.2025',
      student: 'Tomke Bremerbach',
      supervisor: 'Prof. Hausmann',
      room: 'GAB 344',
    },
    {
      title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
      date: '15.02.2025',
      student: 'Tomke Bremerbach',
      supervisor: 'Prof. Hausmann',
      room: 'GAB 344',
    },
    {
      title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
      date: '15.02.2025',
      student: 'Tomke Bremerbach',
      supervisor: 'Prof. Hausmann',
      room: 'GAB 344',
    },
    {
      title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
      date: '15.02.2025',
      student: 'Tomke Bremerbach',
      supervisor: 'Prof. Hausmann',
      room: 'GAB 344',
    },
    {
      title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
      date: '15.02.2025',
      student: 'Tomke Bremerbach',
      supervisor: 'Prof. Hausmann',
      room: 'GAB 344',
    },
    {
      title: 'Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen',
      date: '15.02.2025',
      student: 'Tomke Bremerbach',
      supervisor: 'Prof. Hausmann',
      room: 'GAB 344',
    },

  ];



const tabs = [
    { tabId: "tab1", name: 'Aktuelle Verteidigungen', href: '#', current: true },
    { tabId: "tab2", name: 'Verteidigungen Archiv', href: '#', current: false },
];

const tabContent = {
    tab1:
    <main className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col md:flex-row gap-6 items-start">

    {/* Desktop Sidebar */}
    <div className="hidden md:block">
      <FilterSidebar/>
    </div>

    {/* Content */}
    <div className="flex-1 space-y-4">
      {/* Search */}
      <div className="flex flex-row bg-white border border-gray-300 rounded-md shadow-sm px-1 py-1 gap-2">
        <div className="flex items-center px-2">
          <img src={SucheIcon} alt="" className="w-5" />
        </div>
        <input
          type="text"
          placeholder="Suche..."
          className="px-3 py-1 rounded w-full outline-none"
        />
        <IconPrimaryButton onClick={() => {}} />
      </div>

      {/* Mobile Toggle */}
    <div className="block md:hidden w-full">
      <button
        className="w-full mb-4 bg-primary text-white py-2 rounded shadow"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? 'Filter ausblenden' : 'Filter anzeigen'}
      </button>
      {showFilters && (
        <FilterSidebar/>
      )}
    </div>

      {/* Defense Cards */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
        <div className="space-y-4">
          {sampleDefenses.map((defense, idx) => (
            <DefenseCard key={idx} defense={defense} />
          ))}
        </div>
        <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={(page) => console.log(page)}
        />
      </div>
    </div>
  </main>
    
  } as const


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="max-w-screen-xl w-full flex flex-col sm:flex-row mx-auto px-4 py-4 gap-2 sm:gap-0">
        {tabs.map((tab) => (
          <button
            key={tab.tabId}
            onClick={() => setActiveTab(tab.tabId as TabKey)}
            className={`w-full py-2 px-4 ${
              activeTab === tab.tabId
                ? 'bg-primary text-white rounded font-bold text-sm'
                : 'text-gray-700 text-sm border border-gray-300 rounded'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div>{tabContent[activeTab]}</div>
    </div>
  );
};


export default CatalogPage;