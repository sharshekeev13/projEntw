import FilterSidebar from "./components/FilterSidebar";
import DefenseCard from "./components/DefenseCard";
import Pagination from "./components/Pagination";
import { useState } from "react";
import FloatingButton from "./components/FloatingButton";
import { useNavigate } from "react-router-dom";
import "react-simple-keyboard/build/css/index.css";
import FindComponent from "../../components/FindComponent";
import sampleDefenses from "../../testJson/sampleDefences";


function CatalogPage() {
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/verteidigung-erstellen");
  };

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-2">
      <main className="max-w-screen-xl mx-auto py-4 flex flex-col md:flex-row gap-6 items-start">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <FilterSidebar />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          {/* Search */}
          <FindComponent />
          {/* Mobile Toggle */}
          <div className="block md:hidden w-full">
            <button
              className="w-full mb-4 bg-primary text-white py-2 rounded shadow"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Filter ausblenden" : "Filter anzeigen"}
            </button>
            {showFilters && <FilterSidebar />}
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
      <FloatingButton onClick={handleClick} />
    </div>
  );
}

export default CatalogPage;
