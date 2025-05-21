import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { DefenseDto } from "../../types/DefenseDto";
import { createDefense } from "../../store/defenses/createDefenceSlice";
import { fetchFacultyThunk } from "../../store/faculty/fetchAllFaculty";
import { fetchPersonThunk } from "../../store/person/fetchPersonSlice";
import { fetchDegreeProgramThunk } from "../../store/degreeProgramm/fetchAllDegreeProgramm";
import { Person } from "../../types/Person";
import { fetchTypeThunk } from "../../store/type/fetchAllTypeSlice";
import toast from "react-hot-toast";
import { PagePerson } from "../../types/PagePerson";
import { useParams } from "react-router-dom";
import { Defense } from "../../types/Defense";
import { fetchGetDefenseByIdThunk } from "../../store/defenses/fetchDefenceById";
import { updateDefenseThunk } from "../../store/defenses/fetchUpdateDefense";

const VerteidigungForm: React.FC = () => {
  const { id: defenseId } = useParams<{ id: string }>();

  const dispatch = useDispatch<AppDispatch>();
  const {
    creating,
    createdDefense,
    error: createError,
  } = useSelector((state: RootState) => state.fetchAllDefenses);
  const { error: updateError } = useSelector(
    (state: RootState) => state.updateDefense
  );
  const { faculty } = useSelector((state: RootState) => state.fetchAllFaculty);
  const { degreeProgram } = useSelector(
    (state: RootState) => state.fetchAllDegreeProgram
  );

  const { types } = useSelector((state: RootState) => state.fetchAllTypes);

  const [authorSearch, setAuthorSearch] = useState("");
  const [supervisorSearch, setSupervisorSearch] = useState("");
  const [authorResults, setAuthorResults] = useState<Person[]>([]);
  const [supervisorResults, setSupervisorResults] = useState<Person[]>([]);
  const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);
  const [showSupervisorDropdown, setShowSupervisorDropdown] = useState(false);

  useEffect(() => {
    if (defenseId) {
      dispatch(fetchGetDefenseByIdThunk(Number(defenseId))).then((res) => {
        const result = res as { payload: Defense };
        const defense = result.payload;
        if (defense) {
          setFormData({
            defenseDate: defense.defenseDate,
            time: defense.time,
            room: defense.room,
            author: defense.author.personId,
            topic: defense.topic,
            degreeProgram: defense.degreeProgram.id,
            type: defense.type.id,
            faculty: defense.faculty.facultyId,
            supervisor: defense.supervisor.personId,
            publicDefense: defense.publicDefense,
          });
          setAuthorSearch(`${defense.author.name} ${defense.author.surName}`);
          setSupervisorSearch(
            `${defense.supervisor.name} ${defense.supervisor.surName}`
          );
          setShowAuthorDropdown(false);
          setShowSupervisorDropdown(false);
        }
      });
    }
  }, [defenseId, dispatch]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (authorSearch.trim()) {
        dispatch(fetchPersonThunk({ fullName: authorSearch })).then((res) => {
          const result = res as { payload: PagePerson };
          setAuthorResults(result.payload?.content || []);
          setShowAuthorDropdown(true);
        });
      } else {
        setAuthorResults([]);
        setShowAuthorDropdown(false);
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [authorSearch, dispatch]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (supervisorSearch.trim()) {
        dispatch(fetchPersonThunk({ fullName: supervisorSearch })).then(
          (res) => {
            const result = res as { payload: PagePerson };
            setAuthorResults(result.payload?.content || []);
            setShowAuthorDropdown(true);
          }
        );
      } else {
        setSupervisorResults([]);
        setShowSupervisorDropdown(false);
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [dispatch, supervisorSearch]);

  useEffect(() => {
    dispatch(fetchDegreeProgramThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFacultyThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTypeThunk());
  }, [dispatch]);

  const [formData, setFormData] = useState<DefenseDto>({
    defenseDate: "",
    time: "",
    room: "",
    author: 0,
    topic: "",
    degreeProgram: 0,
    type: 0,
    faculty: 0,
    supervisor: 0,
    publicDefense: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    let newValue: string | number | boolean = value;
    if (type === "number") {
      newValue = parseInt(value, 10);
    }
    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  useEffect(() => {
    if (createdDefense) {
      toast.success("Verteidigung erfolgreich erstellt", {
        position: "bottom-left",
      });

      // Очистка формы
      setFormData({
        defenseDate: "",
        time: "",
        room: "",
        author: 0,
        topic: "",
        degreeProgram: 0,
        type: 0,
        faculty: 0,
        supervisor: 0,
        publicDefense: false,
      });
      setAuthorSearch("");
      setSupervisorSearch("");
      setAuthorResults([]);
      setSupervisorResults([]);
      setShowAuthorDropdown(false);
      setShowSupervisorDropdown(false);
    }
  }, [createdDefense]);

  useEffect(() => {
    if (createError) {
      toast.error(`Fehler beim Erstellen der Verteidigung: ${createError}`, {
        position: "bottom-left",
      });
    }
  }, [createError]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // yyyy-MM-dd
  };

  const formatTime = (timeString: string): string => {
    const [hours, minutes] = timeString.split(":");
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`; // HH:mm
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      defenseDate: formData.defenseDate ? formatDate(formData.defenseDate) : "",
      time: formData.time ? formatTime(formData.time) : "",
    };
    if (defenseId) {
      dispatch(
        updateDefenseThunk({ id: Number(defenseId), payload: formattedData })
      ).then(() => {
        if (!updateError) {
          toast.success("Verteidigung erfolgreich aktualisiert", {
            position: "bottom-left",
          });
        } else {
          toast.error("Fehler beim Aktualisieren der Verteidigung", {
            position: "bottom-left",
          });
        }
      });
    } else {
      dispatch(createDefense(formattedData));
    }
  };

  return (
    <div className=" bg-white py-12 px-4 flex justify-center">
      <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-2xl p-10">
        <h1 className="text-2xl font-bold text-blue-900 mb-10">
          Verteidigung erstellen
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"
        >
          <div>
            <label className="text-sm text-gray-700">Thema</label>
            <input
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Thema"
              className="w-full bg-gray-100 rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Studiengang (ID)</label>
            <select
              name="degreeProgram"
              value={formData.degreeProgram}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-2 mt-1"
            >
              <option value={0}>Bitte wählen</option>
              {degreeProgram.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.degreeProgramName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700">Author (Suche)</label>
            <input
              name="author"
              type="text"
              value={authorSearch}
              onChange={(e) => setAuthorSearch(e.target.value)}
              placeholder="Author"
              className="w-full bg-gray-100 rounded p-2 mt-1"
              onFocus={() => {
                if (authorResults.length > 0) setShowAuthorDropdown(true);
              }}
              onBlur={() => {
                setTimeout(() => setShowAuthorDropdown(false), 100);
              }}
            />
            {authorSearch.trim() !== "" &&
              authorResults.length > 0 &&
              showAuthorDropdown && (
                <ul className="absolute z-10 bg-white border rounded shadow max-h-40 overflow-y-auto mt-1">
                  {authorResults.slice(0, 5).map((person) => (
                    <li
                      key={person.personId}
                      className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        const fullName =
                          `${person.name} ${person.surName}`.trim();
                        setFormData((prev) => ({
                          ...prev,
                          author: person.personId,
                        }));
                        setAuthorSearch(fullName);
                        setShowAuthorDropdown(false);
                      }}
                    >
                      {person.name} {person.surName}
                    </li>
                  ))}
                </ul>
              )}
          </div>

          <div>
            <label className="text-sm text-gray-700">Fakultät</label>
            <select
              name="faculty"
              value={formData.faculty}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-2 mt-1"
            >
              <option value={0}>Bitte wählen</option>
              {faculty.map((item) => (
                <option key={item.facultyId} value={item.facultyId}>
                  {item.facultyAbbreviation} – {item.facultyName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700">Betreuer (Suche)</label>
            <input
              name="supervisor"
              type="text"
              value={supervisorSearch}
              onChange={(e) => setSupervisorSearch(e.target.value)}
              placeholder="Betreuer"
              className="w-full bg-gray-100 rounded p-2 mt-1"
              onFocus={() => {
                if (supervisorResults.length > 0)
                  setShowSupervisorDropdown(true);
              }}
              onBlur={() => {
                setTimeout(() => setShowSupervisorDropdown(false), 100);
              }}
            />
            {supervisorSearch.trim() !== "" &&
              supervisorResults.length > 0 &&
              showSupervisorDropdown && (
                <ul className="absolute z-10 bg-white border rounded shadow max-h-40 overflow-y-auto mt-1">
                  {supervisorResults.slice(0, 5).map((person) => (
                    <li
                      key={person.personId}
                      className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        const fullName =
                          `${person.name} ${person.surName}`.trim();
                        setFormData((prev) => ({
                          ...prev,
                          supervisor: person.personId,
                        }));
                        setSupervisorSearch(fullName);
                        setShowSupervisorDropdown(false);
                      }}
                    >
                      {person.name} {person.surName}
                    </li>
                  ))}
                </ul>
              )}
          </div>

          <div>
            <label className="text-sm text-gray-700">Datum</label>
            <input
              type="date"
              name="defenseDate"
              value={formData.defenseDate}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Uhrzeit</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Art der Arbeit</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-2 mt-1"
            >
              {types.map((item) => (
                <option key={item.typeName} value={item.id}>
                  {item.typeName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700">Raum</label>
            <input
              name="room"
              value={formData.room}
              onChange={handleChange}
              placeholder="Raum"
              className="w-full bg-gray-100 rounded p-2 mt-1"
            />
          </div>

          <div className="md:col-span-2 flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="publicDefense"
                checked={formData.publicDefense}
                onChange={handleChange}
              />
              Öffentlich
            </label>

            <button
              type="submit"
              disabled={creating}
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition disabled:opacity-50"
            >
              Speichern
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerteidigungForm;
