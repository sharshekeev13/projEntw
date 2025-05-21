import { User as UserIcon, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { createUserThunk } from "../../../../store/users/createUserSlice";
import type { AppDispatch } from "../../../../store";
import toast from "react-hot-toast";

const UserCreateModal = ({ onClose }: { onClose: () => void }) => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string>("internal_user");  

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async () => {
    try {
      await dispatch(createUserThunk({ username, password, role })).unwrap();
      toast.success("Benutzer erfolgreich angelegt",{
        position: "bottom-left"
      });
    
    }catch (error) {
      toast.error(`Fehler beim Anlegen eines Benutzers : ${error}`, {
        position: "bottom-left"
      });
    }
  };

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        className={clsx(
          "bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 ease-out w-1/3",
          show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <h2 className="text-xl font-semibold mb-4">Create User</h2>
        <div className="w-full">
          <label className="text-sm text-gray-700">Benutzername</label>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
            <UserIcon className="text-gray-500" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Example: Max Mustermann"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-700">Role</label>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
            <UserIcon className="text-gray-500" />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded w-full py-1 bg-gray-100 border-none"
            >
              <option value={"admin"}>Admin</option>
              <option value={"clerk"}>Mitarbeiter</option>
              <option value={"internal_user"}>Internal User</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 justify-end mt-4 w-full">
          <button
            className="bg-red-900 text-white px-4 py-2 rounded w-1/2 "
            onClick={handleClose}
          >
            schließen
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded w-1/2" type="submit" onClick={()=>{
            handleSubmit();
            handleClose();
          }}>
            speichern
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCreateModal;
