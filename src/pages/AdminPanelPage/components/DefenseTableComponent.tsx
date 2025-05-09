import FindComponent from "../../../components/FindComponent";
import sampleDefenses from "../../../testJson/sampleDefences";
import Pagination from "../../CatalogPage/components/Pagination";
import DefenseCard from "../../CatalogPage/components/DefenseCard";

function DefenseTableComponent() {
  return (
    <div className="flex flex-col items-start justify-start h-auto w-full py-2">
      <FindComponent />
      <button className="bg-greenColor text-white rounded px-4 py-2 mt-4 font-bold">
        Neu Aktuelle Verteidigungen
      </button>
      <div className="p-4 w-full h-auto">
        <div className="space-y-4 h-auto">
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
  );
}
export default DefenseTableComponent;
