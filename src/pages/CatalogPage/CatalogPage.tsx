import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterSidebar from "../../components/FilterSidebar";
import FloatingButton from "../../components/FloatingButton";
import SucheIcon from "../../assets/suche_icon.svg";
import IconPrimaryButton from "../../components/IconPrimaryButton";
import "react-simple-keyboard/build/css/index.css";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import DefenseCard from "./components/DefenseCard";
import { fetchPageDefensesThunk } from "../../store/defenses/fetchAllDefensesSlice";
import Pagination from "./components/Pagination";

function CatalogPage() {
  const dispatch = useDispatch<AppDispatch>();
  const role = localStorage.getItem("role");
  const { defenses, isLoading } = useSelector(
    (state: RootState) => state.fetchPageDefenses
  );

  const [filters, setFilters] = useState({
    page: 1,
    pageElements: 10,
    type: "",
    degreeProgram: "",
    faculty: "",
    keywords: [] as string[],
    from: "",
    searchString: "",
    to: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    dispatch(
      fetchPageDefensesThunk({
        page: filters.page,
        pageElements: filters.pageElements,
        type: filters.type,
        degreeProgram: filters.degreeProgram,
        faculty: filters.faculty,
        keywords: filters.keywords,
        searchString: filters.searchString,
        from: filters.from,
        to: filters.to,
        start: filters.start,
        end: filters.end,
      })
    );
  }, [dispatch, filters]);

  const [showFilters, setShowFilters] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [draftFilters, setDraftFilters] = useState(filters);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/verteidigung");
  };

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-2">
      <main className="max-w-screen-xl mx-auto py-4 flex flex-col md:flex-row gap-6 items-start">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <FilterSidebar
            filters={filters}
            draftFilters={draftFilters}
            setDraftFilters={setDraftFilters}
            onApply={() => setFilters(draftFilters)}
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4 w-full">
          {/* Search */}
          <div className=" w- full flex flex-row bg-white border border-gray-300 rounded-md shadow-sm px-1 py-1 gap-2">
            <div className="flex items-center px-2">
              <img src={SucheIcon} alt="" className="w-5" />
            </div>
            <input
              type="text"
              placeholder="Suche..."
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="px-3 py-1 rounded w-full outline-none"
            />

            <IconPrimaryButton
              onClick={() => {
                setFilters({ ...filters, searchString });
              }}
            />
          </div>

          {/* Mobile Filter Toggle */}
          <div className="block md:hidden w-full">
            <button
              className="w-full mb-4 bg-primary text-white py-2 rounded shadow"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Filter ausblenden" : "Filter anzeigen"}
            </button>
            {showFilters && (
              <FilterSidebar
                filters={filters}
                draftFilters={draftFilters}
                setDraftFilters={setDraftFilters}
                onApply={() => setFilters(draftFilters)}
              />
            )}
          </div>

          {/* Defense Cards */}
          <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
            <div className="space-y-4">
              {defenses.content.map((defense, idx) => (
                <DefenseCard key={idx} defense={defense} />
              ))}
            </div>
            <Pagination
              currentPage={page}
              totalPages={defenses.totalPages}
              onPageChange={(page) => {
                setPage(page);
                setFilters({ ...filters, page });
              }}
            />
          </div>
          {isLoading && (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </main>
      {role === "admin" && <FloatingButton onClick={handleClick} />}
    </div>
  );
}

export default CatalogPage;
