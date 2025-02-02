import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useChatStore } from "../../store/useChatStore";
import { FaUser, FaComments } from "react-icons/fa"; // Add FaUser and FaComments icons import

const Home = () => {
  const {
    usersmessages,
    users,
    selectedUser,
    isUsersLoading,
    isMessagesLoading,
  } = useChatStore();

  // Mock users data (you can replace this with real data from your store or API)
  // const users = [
  //   { id: 1, name: "Alice", isActive: true },
  //   { id: 2, name: "Bob", isActive: false },
  //   { id: 3, name: "Charlie", isActive: true },
  //   { id: 4, name: "David", isActive: false },
  //   { id: 1, name: "Alice", isActive: true },
  //   { id: 2, name: "Bob", isActive: false },
  //   { id: 3, name: "Charlie", isActive: true },
  //   { id: 4, name: "David", isActive: false },
  //   { id: 1, name: "Alice", isActive: true },
  //   { id: 2, name: "Bob", isActive: false },
  //   { id: 3, name: "Charlie", isActive: true },
  //   { id: 4, name: "David", isActive: false },
  //   { id: 1, name: "Alice", isActive: true },
  //   { id: 2, name: "Bob", isActive: false },
  //   { id: 3, name: "Charlie", isActive: true },
  //   { id: 4, name: "David", isActive: false },
  // ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-800 text-white p-6 fixed top-16 left-0 h-[600px] min-w-[350px] overflow-y-auto">
          <div className="flex flex-col">
            {/* Sidebar Header */}
            <h2 className="text-2xl font-semibold mb-6">Users</h2>

            {/* User List */}
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow max-w-full"
                placeholder="Search"
              />
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

        {/* Main Content */}
        <div className="flex-1 bg-gray-900 text-white p-6 pl-64 overflow-hidden min-w-[600px]">
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">
                Welcome to Friend Chatter
              </h1>
              <hr className="border-t-2 border-gray-300 w-1/4 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
