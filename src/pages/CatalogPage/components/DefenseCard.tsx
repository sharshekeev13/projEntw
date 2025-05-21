import React from "react";
import { Defense } from "../../../types/Defense";
import { Link } from "react-router-dom";
import { SquarePen, Trash } from "lucide-react";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { deleteDefenseThunk } from "../../../store/defenses/deleteDefenseSlice";
import toast from "react-hot-toast";

const DefenseCard: React.FC<{ defense: Defense }> = ({ defense }) => {
  const role = localStorage.getItem("role");

  const dispatch = useDispatch<AppDispatch>();
  const { success, error } = useSelector(
    (state: RootState) => state.deleteDefense
  );

  const handleDeleteClick = () => {
    dispatch(deleteDefenseThunk(defense.id)).then(() => {
      if (success) {
        toast.success("Verteidigung erfolgreich gelöscht", {
          position: "bottom-left",
        });
      } else if (error) {
        toast.error("Fehler beim Löschen der Verteidigung: " + error, {
          position: "bottom-left",
        });
      }
    });
  };

  return (
    <div className=" h-auto bg-white rounded shadow hover:shadow-md flex p-4 flex-col lg:flex-row lg:justify-between lg:items-start lg:h-48">
      {/* Цветная полоса слева */}
      <div
        className={`h-4 w-full rounded lg:h-40 mb-4 shadow-lg lg:mb-0 lg:mr-4 lg:w-4 ${
          defense.type.typeName === "Bachelorarbeit"
            ? "bg-blue-700"
            : defense.type.typeName === "Masterarbeit"
            ? "bg-green-700"
            : defense.type.typeName === "Diploma"
            ? "bg-orange-700"
            : "bg-white"
        }`}
      ></div>

      {/* Основная часть карточки */}
      <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Левая колонка */}
        <div className="flex-1 space-y-2">
          <div>
            <span className="text-grayText text-sm">Thema:</span>
            <h3 className="font-semibold text-gray-800 text-lg">
              {defense.topic}
            </h3>
          </div>
          <div>
            <span className="text-grayText text-sm">Autor:</span>
            <h6 className="font-semibold text-gray-800 text-sm">
              {defense.author.name + " " + defense.author.surName}
            </h6>
          </div>
          <div>
            <span className="text-grayText text-sm">Betreuer:</span>
            <h6 className="font-semibold text-gray-800 text-sm">
              {defense.author.personTitle +
                " " +
                defense.author.name +
                " " +
                defense.author.surName}
            </h6>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="space-y-2 mt-4 md:mt-0 md:text-right">
          <div>
            <span className="text-grayText text-sm">Datum:</span>
            <h6 className="font-semibold text-gray-800 text-sm">
              {defense.date}
            </h6>
          </div>
          <div>
            <span className="text-grayText text-sm">Raum:</span>
            <h6 className="font-semibold text-gray-800 text-sm">
              {defense.room}
            </h6>
          </div>
          <div>
            <span className="text-grayText text-sm">Zeit:</span>
            <h6 className="font-semibold text-gray-800 text-sm">
              {defense.time}
            </h6>
          </div>
        </div>
      </div>

      {role === "admin" && (
        <div className="w-full md:w-auto mt-5 md:mt-0 h-full flex flex-row md:flex-col justify-center items-start gap-5 p-2 md:ms-5">
          <Link
            to={`/verteidigung/${defense.id}`}
            className="w-full shadow-md p-2 rounded flex justify-center bg-orange-400 hover:bg-orange-500 transition duration-400"
          >
            <SquarePen className="h-8 w-8 text-white" />
          </Link>
          <button
            onClick={handleDeleteClick}
            className="w-full shadow-md p-2 rounded flex justify-center bg-red-400 hover:bg-red-500 transition duration-400"
          >
            <Trash className="h-8 w-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DefenseCard;
