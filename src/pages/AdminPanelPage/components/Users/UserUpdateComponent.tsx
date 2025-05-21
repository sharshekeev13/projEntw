import { User as UserIcon, Lock } from "lucide-react";
import { User } from "../../../../types/User";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { updateUserThunk } from "../../../../store/users/updateUserSlice";
import { useState } from "react";
import { fetchAllUsersThunk } from "../../../../store/users/fetchAllUsersSlice";

type Props = {
  user: User;
  onClose: () => void;
};

const UserUpdateComponent = ({ user, onClose }: Props) => {

  const [updatedUsername, setUpdatedUsername] = useState(user.username);
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [updatedRole, setUpdatedRole] = useState(user.role);


  const dispatch = useDispatch<AppDispatch>();


  const handleSave = () => {
    dispatch(
      updateUserThunk({
        userId: user.userId,
        username: updatedUsername,
        password: updatedPassword,
        role: updatedRole,
      })
    ).unwrap()
    .then(() => {
      dispatch(fetchAllUsersThunk());
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    }
    );
  };

  return (
    <div className="h-auto bg-white rounded p-4 w-1/3 shadow space-y-4 flex flex-col">
      <h3 className="text-lg font-semibold">Profil bearbeiten</h3>
      <h4 className="text-sm text-gray-700">
        Benutzer-ID: {user.userId}
      </h4>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <label className="text-sm text-gray-700">Benutzername</label>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
            <UserIcon className="text-gray-500" />
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUpdatedUsername(e.target.value)}
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-700">Passwort</label>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
            <Lock className="text-gray-500" />
            <input
              type="password"
              placeholder="******"
              onChange={(e) => setUpdatedPassword(e.target.value)}
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-700">Role</label>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
            <UserIcon className="text-gray-500" />
            <select value={updatedRole}  onChange={(e) => setUpdatedRole(e.target.value)} className="border rounded w-full px-2 py-1 bg-gray-100 border-none">
             <option value={"admin"}>Admin</option>
              <option value={"clerk"}>Mitarbeiter</option>
              <option value={"internal_user"}>Internal User</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <button
          className="bg-red-800 text-white px-4 py-2 rounded w-1/2"
          onClick={onClose}
        >
          schließen
        </button>
        <button className="bg-blue-900 text-white px-4 py-2 rounded w-1/2" onClick={() => {
          handleSave();
          onClose();
        }}>
          speichern
        </button>
      </div>
    </div>
  );
};

export default UserUpdateComponent;
