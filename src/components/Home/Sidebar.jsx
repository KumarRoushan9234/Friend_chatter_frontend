import React, { useState, useRef, useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import { FaUser, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const { users, isUsersLoading, getUsers, selectedUser, setSelectedUser } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const usersData = Array.isArray(users) ? users : [];

  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getUsers();
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === "q") {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="w-[450px] min-w-[450px] bg-gray-800 text-white p-6 h-screen overflow-y-auto top-60px">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold mb-6">
          <FaUsers />
          Users
        </h2>

        {/* Search Input */}
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="text"
            ref={searchInputRef}
            className="grow max-w-full p-2 rounded-md bg-gray-700 text-white outline-none"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <kbd className="kbd kbd-sm">ctrl+q</kbd>
        </label>

        {isUsersLoading ? (
          <p>Loading users...</p>
        ) : (
          <div className="space-y-4">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user._id}
                  onClick={() =>
                    setSelectedUser(
                      selectedUser?._id === user._id ? null : user
                    )
                  }
                  className={`flex items-center justify-between p-2 rounded-md transition duration-200 cursor-pointer 
                    ${
                      selectedUser?._id === user._id
                        ? "bg-blue-600 border-2 border-blue-400"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center 
     ${onlineUsers.includes(user._id) ? "bg-green-500" : "bg-blue-500"}`}
                    >
                      <FaUser className="text-sm" />
                    </div>
                    <div>
                      <span className="font-medium block">{user.name}</span>
                      <span className="text-sm text-gray-400">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No users found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";

// const Sidebar = ({ users, isUsersLoading }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Ensure `users` is an array before filtering
//   const usersData = Array.isArray(users) ? users : [];

//   // Filter users based on search query
//   const filteredUsers = usersData.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="w-1/5 bg-gray-800 text-white p-6 fixed top-16 left-0 h-[600px] min-w-[350px] overflow-y-auto">
//       <div className="flex flex-col">

//         {/* Sticky Header and Search Box Container */}
//         <div className="sticky top-0 bg-gray-900 p-4 rounded-md border border-gray-600 z-10">
//           {/* Sidebar Header */}
//           <h2 className="text-2xl font-semibold mb-2">Users</h2>

//           {/* Search Input */}
//           <label className="flex items-center gap-2">
//             <input
//               type="text"
//               className="w-full p-2 rounded-md bg-gray-700 text-white outline-none border border-gray-500"
//               placeholder="Search users..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </label>
//         </div>

//         {/* User List Container */}
//         <div className="mt-4 border border-gray-600 rounded-md p-3 bg-gray-900">
//           {isUsersLoading ? (
//             <p className="text-center">Loading users...</p>
//           ) : (
//             <div className="space-y-4">
//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map((user) => (
//                   <div
//                     key={user._id}
//                     className="flex items-center gap-3 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200 cursor-pointer border border-gray-600"
//                   >
//                     {/* User Icon inside Blue Circle */}
//                     <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
//                       <FaUser className="text-sm" />
//                     </div>
//                     <div>
//                       <span className="font-medium block">{user.name}</span>
//                       <span className="text-sm text-gray-400">
//                         {user.email}
//                       </span>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center">No users found</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
