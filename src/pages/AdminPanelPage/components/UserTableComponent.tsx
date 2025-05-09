import FindComponent from "../../../components/FindComponent";
import sampleUsers from "../../../testJson/sampleUsers";
import UserCardComponent from "./UserCardComponent";
import Pagination from "../../CatalogPage/components/Pagination";

function UserTableComponent() {
  return (
    <div className="flex flex-col items-start justify-start h-auto w-full py-2">
      <FindComponent />
      <button className="bg-greenColor text-white rounded px-4 py-2 mt-4 font-bold">
        Neu Aktuelle Verteidigungen
      </button>
      <div className="py-4 w-full h-auto">
        <div className="space-y-4 h-auto">
          {sampleUsers.map((user, idx) => (
            <UserCardComponent key={idx} user={user} />
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
export default UserTableComponent;
