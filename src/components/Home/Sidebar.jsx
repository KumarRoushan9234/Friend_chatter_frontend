// Sidebar.js
import React from "react";
import { FaUser } from "react-icons/fa";

const Sidebar = ({ users }) => {
  return (
    <div className="w-1/5 bg-gray-800 text-white p-6 fixed top-16 left-0 h-[600px] min-w-[350px] overflow-y-auto">
      <div className="flex flex-col">
        {/* Sidebar Header */}
        <h2 className="text-2xl font-semibold mb-6">Users</h2>

        {/* User List */}
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input type="text" className="grow max-w-full" placeholder="Search" />
          <kbd className="kbd kbd-sm">ctrl</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 bg-gray-700 rounded-md"
            >
              <div className="flex items-center gap-2">
                <FaUser className="text-sm text-white" /> {/* User icon */}
                <span className="font-medium">{user.name}</span>
                <span
                  className={`text-sm ${
                    user.isActive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
