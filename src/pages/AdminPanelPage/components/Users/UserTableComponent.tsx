import FindComponent from "../../../../components/FindComponent";
import UserCardComponent from "./UserCardComponent";
import Pagination from "../../../CatalogPage/components/Pagination";
import UserCreateModal from "./UserCreateModal";
import { useState } from "react";
import FloatingButton from "../../../../components/FloatingButton";
import UserUpdateComponent from "./UserUpdateComponent";
import { User } from "../../../../types/User";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchAllUsersThunk } from "../../../../store/users/fetchAllUsersSlice";

function UserTableComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { users, isLoading, error } = useSelector(
    (state: RootState) => state.fetchAllUsers
  );

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    dispatch(fetchAllUsersThunk());
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col items-center justify-start w-full py-2">
      <FindComponent />
      <FloatingButton onClick={handleClick} />
      {isModalOpen && <UserCreateModal onClose={handleClose} />}
      <div className="py-4 w-full flex flex-row space-x-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 h-full w-full">
          {users.map((user) => (
            <UserCardComponent
              key={user.userId}
              user={user}
              onEditClick={() => setSelectedUser(user)}
            />
          ))}
        </div>
        {selectedUser && (
          <UserUpdateComponent
            user={selectedUser}
            onClose={() => {
              setSelectedUser(null);
            }}
          />
        )}
      </div>
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={(page) => console.log(page)}
      />
    </div>
  );
}
export default UserTableComponent;
