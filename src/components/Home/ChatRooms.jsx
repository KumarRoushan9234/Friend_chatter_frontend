import React from "react";

const ChatRooms = () => {
  // Dummy chat room data
  const chatRooms = [
    { id: 1, name: "General Chat", isActive: true },
    { id: 2, name: "Tech Talk", isActive: true },
    { id: 3, name: "Gaming Zone", isActive: false },
    { id: 4, name: "Music Lovers", isActive: true },
  ];
  return (
    <div>
      <h4>Chat Rooms</h4>
      {/* Line between Users and Chat Rooms */}
      <hr className="my-6 border-gray-600" />

      {/* Chat Rooms Section */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-4">Chat Rooms</h4>
        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input type="text" className="grow max-w-full" placeholder="Search" />
          <kbd className="kbd kbd-sm">ctrl</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <div className="space-y-3">
          {chatRooms.map((room) => (
            <div
              key={room.id}
              className={`flex items-center p-3 bg-gray-700 rounded-md cursor-pointer hover:bg-gray-600 ${
                room.isActive ? "bg-green-600" : "bg-gray-500"
              }`}
            >
              <FaComments className="text-white mr-3" />
              <span className="text-white font-medium">{room.name}</span>
              <span
                className={`ml-auto text-sm font-semibold ${
                  room.isActive ? "text-green-400" : "text-red-400"
                }`}
              >
                {room.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatRooms;
