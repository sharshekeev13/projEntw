import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { useEffect, useState } from "react";
import { fetchFacultyThunk } from "../../../../store/faculty/fetchAllFaculty";
import FloatingButton from "../../../../components/FloatingButton";




function FacultyTableComponent() {

  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { faculty, isLoading, error } = useSelector(
      (state: RootState) => state.fetchAllFaculty
    );

    useEffect(() => {
      dispatch(fetchFacultyThunk());
    }, [dispatch]);


  return (
    <div className="flex flex-col items-center justify-start h-auto w-full py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 h-full w-full">
        {faculty.map((faculty) => (
          <div key={faculty.facultyId} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold">{faculty.facultyAbbreviation}</h3>
            <p className="text-sm text-gray-700">ID: {faculty.facultyName}</p>
          </div>
        ))}
      </div>
      <FloatingButton onClick={() => {
        setIsEditPanelOpen(true);
      }} />
    </div>
  );
}
export default FacultyTableComponent;