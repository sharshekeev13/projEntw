import React, { useEffect } from "react";
import ButtonPrimary from "./ButtonPrimary";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchKeywordsThunk } from "../store/keywords/fetchKeywordsSlice";
import { fetchFacultyThunk } from "../store/faculty/fetchAllFaculty";
import { fetchDegreeProgramThunk } from "../store/degreeProgramm/fetchAllDegreeProgramm";
import { fetchTypeThunk } from "../store/type/fetchAllTypeSlice";

type FilterValues = {
  page: number;
  pageElements: number;
  type: string;
  degreeProgram: string;
  faculty: string;
  keywords: string[];
  searchString: string;
  from: string;
  to: string;
  start: string;
  end: string;
};

type FilterSidebarProps = {
  className?: string;
  filters: FilterValues; // текущие
  draftFilters: FilterValues; // изменяемые
  setDraftFilters: (f: FilterValues) => void;
  onApply: () => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  className = "",
  draftFilters,
  setDraftFilters,
  onApply,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { keywords } = useSelector((state: RootState) => state.fetchKeywords);
  const { faculty } = useSelector((state: RootState) => state.fetchAllFaculty);
  const { degreeProgram } = useSelector(
    (state: RootState) => state.fetchAllDegreeProgram
  );
  const { types } = useSelector((state: RootState) => state.fetchAllTypes);

  useEffect(() => {
    dispatch(fetchKeywordsThunk());
    dispatch(fetchFacultyThunk());
    dispatch(fetchDegreeProgramThunk());
    dispatch(fetchTypeThunk());
  }, [dispatch]);

  const [keyword, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleAddKeyword = () => {
    const trimmed = inputValue.trim();
    const existsInStore = keywords.some(
      (k) => k?.keyword?.toLowerCase() === trimmed.toLowerCase()
    );

    const alreadyExists = keyword.some(
      (k) => k.toLowerCase() === trimmed.toLowerCase()
    );

    if (trimmed && existsInStore && !alreadyExists) {
      setKeywords([...keyword, trimmed]);
      setInputValue("");
      setNotFound(false);
    } else {
      setNotFound(true);
    }
  };

  const handleRemoveKeyword = (tag: string) => {
    setKeywords(keyword.filter((k) => k !== tag));
  };

  return (
    <div
      className={`bg-white p-4 shadow rounded-md space-y-6 flex flex-col w-full md:w-64 ${className}`}
    >
      <h2 className="font-bold text-lg text-center">Filters</h2>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <div className="h-4 w-4 bg-blue-700 rounded-full"></div>
          <div>Bachelor</div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="h-4 w-4 bg-green-700 rounded-full"></div>
          <div>Master</div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="h-4 w-4 bg-orange-700 rounded-full"></div>
          <div>Diploma</div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Datum</label>
        <div className="flex items-center gap-2">
          <span className="text-sm w-12">von:</span>
          <input
            value={draftFilters.from}
            onChange={(e) =>
              setDraftFilters({ ...draftFilters, from: e.target.value })
            }
            type="date"
            className="border rounded w-full px-2 py-1"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm w-12">bis:</span>
          <input
          value={draftFilters.to}
          onChange={(e) => setDraftFilters({ ...draftFilters, to: e.target.value })}
            type="date"
            className="border rounded w-full px-2 py-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Zeit</label>
        <div className="flex items-center gap-2">
          <span className="text-sm w-12">von:</span>
          <input
          value={draftFilters.start}
          onChange={(e) => setDraftFilters({ ...draftFilters, start: e.target.value })}
            type="time"
            className="border rounded w-full px-2 py-1"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm w-12">bis:</span>
          <input
            value={draftFilters.end}
            onChange={(e) => setDraftFilters({ ...draftFilters, end: e.target.value })}
            type="time"
            className="border rounded w-full px-2 py-1"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Art der Arbeit</label>
        <select
          value={draftFilters.type}
          onChange={(e) => setDraftFilters({ ...draftFilters, type: e.target.value })}
          className="border rounded w-full px-2 py-1"
        >
          <option value="">Alle</option>
          {types.map((type) => (
            <option key={type.id} value={type.typeName}>
              {type.typeName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Studiengang</label>
        <select
          value={draftFilters.degreeProgram}
          onChange={(e) =>
            setDraftFilters({ ...draftFilters, degreeProgram: e.target.value })
          }
          className="border rounded w-full px-2 py-1"
        >
          <option value="">Alle</option>
          {degreeProgram.map((program) => (
            <option key={program.id} value={program.degreeProgramName}>
              {program.degreeProgramName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Fakultät</label>
        <select
          value={draftFilters.faculty}
          onChange={(e) => setDraftFilters({ ...draftFilters, faculty: e.target.value })}
          className="border rounded w-full px-2 py-1"
        >
          <option value="">Alle</option>
          {faculty.map((f) => (
            <option key={f.facultyId} value={f.facultyName}>
              {f.facultyName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Keywords</label>
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setNotFound(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleAddKeyword()}
            placeholder="Search"
            className="w-full border px-3 py-1 rounded bg-gray-100"
          />
          {inputValue.trim() !== "" && (
            <ul className="absolute z-10 bg-white border w-auto rounded shadow max-h-40 overflow-y-auto mt-10">
              {keywords
                .filter(
                  (k) =>
                    k?.keyword &&
                    k.keyword
                      .toLowerCase()
                      .includes(inputValue.toLowerCase()) &&
                    !keyword.includes(k.keyword)
                )
                .slice(0, 5)
                .map((k) => (
                  <li
                    key={k.id}
                    className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      const trimmed = k.keyword.trim();
                      const alreadyExists = keyword.some(
                        (kw) => kw.toLowerCase() === trimmed.toLowerCase()
                      );

                      if (!alreadyExists) {
                        setKeywords((prev) => [...prev, trimmed]);
                      }

                      setInputValue("");
                      setNotFound(false);
                    }}
                  >
                    {k.keyword}
                  </li>
                ))}
            </ul>
          )}
        </div>
        {notFound && (
          <div className="text-red-500 text-sm mt-1">
            Schlüsselwort nicht gefunden
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {keyword.map((tag) => (
            <div
              key={tag}
              onClick={() => handleRemoveKeyword(tag)}
              className="cursor-pointer bg-primary text-white text-sm px-3 py-1 rounded flex items-center hover:bg-blue-800 transition"
            >
              {tag} &times;
            </div>
          ))}
        </div>
      </div>

      <ButtonPrimary
        label="Filter anwenden"
        onClick={() => {
          onApply();
        }}
      />
    </div>
  );
};

export default FilterSidebar;
