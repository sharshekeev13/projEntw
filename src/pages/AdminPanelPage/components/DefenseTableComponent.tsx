import FindComponent from "../../../components/FindComponent";
import sampleDefenses from "../../../testJson/sampleDefences";
import Pagination from "../../CatalogPage/components/Pagination";
import DefenseCard from "../../CatalogPage/components/DefenseCard";
import { useNavigate } from "react-router-dom";
import FilterSidebar from "../../../components/FilterSidebar";
import FloatingButton from "../../../components/FloatingButton";

function DefenseTableComponent() {


  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/verteidigung-erstellen");
    };


  return (
    <div className="flex flex-col items-center justify-start h-auto w-full py-2">
      <FindComponent />
      <FloatingButton onClick={handleClick} />
      <div className="py-4 w-full h-auto flex flex-col md:flex-row gap-6 items-start">
              <FilterSidebar />

        <div className="space-y-4 h-auto w-full">
          {sampleDefenses.map((defense, idx) => (
            <DefenseCard key={idx} defense={defense} />
          ))}
          
        </div>
        
      </div>
      <Pagination
          currentPage={1}
          totalPages={5}
          onPageChange={(page) => console.log(page)}
        />
    </div>
  );
}
export default DefenseTableComponent;
