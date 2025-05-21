import { User } from "../../../../types/User";

type Props = {
  user: User
  onEditClick: () => void
}

const UserCardComponent = ({ user, onEditClick} : Props) => {

  return (
    <div className="bg-white rounded shadow space-x-4 flex flex-col transition p-4 w-full hover:shadow-md hover:-translate-y-1" onClick={onEditClick}>
      <div className="flex justify-between w-full space-x-4 px-4">
        <div className="">
          <span className="text-sm text-gray-400">ID</span>
          <p className="font-semibold">{user.userId}</p>
        </div>
        <div className="w-2/3">
          <span className="text-sm text-gray-400">Username</span>
          <p className="font-semibold">{user.username}</p>
        </div>
        <div className="w-1/3">
          <span className="text-sm text-gray-400">Role</span>
          <p className="font-semibold">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCardComponent;
