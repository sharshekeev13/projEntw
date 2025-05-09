import { useState } from "react";
import { User } from "../../../types/User";
import { ChevronDown, ChevronUp, User as UserIcon, Lock } from "lucide-react";

const UserCardComponent: React.FC<{ user: User }> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow space-y-4 flex flex-col p-4">
      {/* Верхняя часть */}
      <div className="flex justify-between w-full">
        <div className="w-1/4">
          <span className="text-sm text-gray-400">ID</span>
          <p className="font-semibold">{user.id}</p>
        </div>
        <div className="w-1/4">
          <span className="text-sm text-gray-400">Username</span>
          <p className="font-semibold">{user.username}</p>
        </div>
        <div className="w-1/4">
          <span className="text-sm text-gray-400">Role</span>
          <p className="font-semibold">{user.role}</p>
        </div>
        <div className="w-1/4 flex justify-end">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-600"
            aria-label="toggle edit"
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* Редактируемая часть */}
      {isOpen && (
        <div className="w-full border-t pt-4 space-y-4">
          <h3 className="text-lg font-semibold">Profil bearbeiten</h3>
          <div className="flex flex-row gap-10">
            <div className="w-1/2">
              <label className="text-sm text-gray-700">Benutzername</label>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
                <UserIcon className="text-gray-500" />
                <input
                  type="text"
                  value={user.username}
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="text-sm text-gray-700">Passwort</label>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
                <Lock className="text-gray-500" />
                <input
                  type="password"
                  value="******"
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="text-sm text-gray-700">Role</label>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded mt-1">
                <UserIcon className="text-gray-500" />
                <select className="border rounded w-full px-2 py-1 bg-gray-100 border-none">
                  <option>Alle</option>
                  <option>GM</option>
                  <option>WI</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <button className="bg-red-800 text-white px-4 py-2 rounded">
              Blockieren
            </button>
            <button className="bg-blue-900 text-white px-4 py-2 rounded">
              Speichern
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCardComponent;
