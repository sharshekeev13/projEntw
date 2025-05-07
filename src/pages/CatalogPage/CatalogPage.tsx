import FilterSidebar from "./components/FilterSidebar";
import DefenseCard from "./components/DefenseCard";
import Pagination from "./components/Pagination";
import SucheIcon from "../../assets/suche_icon.svg";
import IconPrimaryButton from "../../components/IconPrimaryButton";
import { useState, useRef } from "react";
import FloatingButton from "./components/FloatingButton";
import { useNavigate } from "react-router-dom";
import Keyboard from "react-simple-keyboard";
import { KeyboardReactInterface } from "react-simple-keyboard/build/interfaces";
import "react-simple-keyboard/build/css/index.css";
import {Keyboard as KeyboardIcon} from "lucide-react"


function CatalogPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [input, setInput] = useState("");
  const [layoutName, setLayoutName] = useState<"default" | "shift">("default");
  const keyboardRef = useRef<KeyboardReactInterface | null>(null);

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName((prev) => (prev === "default" ? "shift" : "default"));
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/verteidigung-erstellen");
  };

  const sampleDefenses = [
    {
      title:
        "Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen",
      date: "15.02.2025",
      student: "Tomke Bremerbach",
      supervisor: "Prof. Hausmann",
      room: "GAB 344",
      time: "10:00",
    },
    {
      title:
        "Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen",
      date: "15.02.2025",
      student: "Tomke Bremerbach",
      supervisor: "Prof. Hausmann",
      room: "GAB 344",
      time: "10:00",
    },
    {
      title:
        "Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen",
      date: "15.02.2025",
      student: "Tomke Bremerbach",
      supervisor: "Prof. Hausmann",
      room: "GAB 344",
      time: "10:00",
    },
    {
      title:
        "Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen",
      date: "15.02.2025",
      student: "Tomke Bremerbach",
      supervisor: "Prof. Hausmann",
      room: "GAB 344",
      time: "10:00",
    },
    {
      title:
        "Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen",
      date: "15.02.2025",
      student: "Tomke Bremerbach",
      supervisor: "Prof. Hausmann",
      room: "GAB 344",
      time: "10:00",
    },
    {
      title:
        "Experimentelle Untersuchungen der Schärfentiefe von digitalen Hologrammen",
      date: "15.02.2025",
      student: "Tomke Bremerbach",
      supervisor: "Prof. Hausmann",
      room: "GAB 344",
      time: "10:00",
    },
  ];

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
          <div className="flex flex-row bg-white border border-gray-300 rounded-md shadow-sm px-1 py-1 gap-2">
            <div className="flex items-center px-2">
              <img src={SucheIcon} alt="" className="w-5" />
            </div>
            <input
              type="text"
              placeholder="Suche..."
              className="px-3 py-1 rounded w-full outline-none"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                keyboardRef.current?.setInput(e.target.value);
              }}
              onFocus={() => keyboardRef.current?.setInput(input)}
            />
            <button onClick={() => setShowKeyboard((prev) => !prev)}>
              <KeyboardIcon className="w-6 h-6 mr-4 text-gray-500" />
            </button>
          
            <IconPrimaryButton onClick={()=>{}} />
          </div>
          {/* Mobile Toggle */}
          <div className="block md:hidden w-full">
            <button>
              <KeyboardIcon className="w-6 h-6 text-gray-500" />
            </button>
          
            <button
              className="w-full mb-4 bg-primary text-white py-2 rounded shadow"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Filter ausblenden" : "Filter anzeigen"}
            </button>
            {showFilters && <FilterSidebar />}
          </div>
          {/* Keyboard */}
          {showKeyboard && (
            <div className="space-y-4">
            <Keyboard
              keyboardRef={(r) => (keyboardRef.current = r)}
              layoutName={layoutName}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              layout={{
                default: [
                  "^ 1 2 3 4 5 6 7 8 9 0 ß ´ {bksp}",
                  "q w e r t z u i o p ü + #",
                  "a s d f g h j k l ö ä {enter}",
                  "{shift} y x c v b n m , . - {shift}",
                  "{space}",
                ],
                shift: [
                  '° ! " § $ % & / ( ) = ? ` {bksp}',
                  "Q W E R T Z U I O P Ü * '",
                  "A S D F G H J K L Ö Ä {enter}",
                  "{shift} Y X C V B N M ; : _ {shift}",
                  "{space}",
                ],
              }}
              display={{
                "{bksp}": "⌫",
                "{enter}": "⏎",
                "{shift}": "⇧",
                "{space}": "␣",
              }}
              theme="hg-theme-default"
              buttonTheme={[
                {
                  class:
                    "bg-gray-100 text-black hover:bg-gray-200 rounded px-1 py-1",
                  buttons:
                    "1 2 3 4 5 6 7 8 9 0 q w e r t z u i o p a s d f g h j k l y x c v b n m",
                },
                {
                  class: "bg-blue-500 text-black hover:bg-blue-600 rounded",
                  buttons: "{enter} {shift} {bksp}",
                },
                {
                  class: "bg-gray-300 text-black px-4",
                  buttons: "{space}",
                },
              ]}
            />
          </div>
          )}

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
