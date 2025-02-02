import React from "react";
import { useChatStore } from "../../store/useChatStore";
import { X, User } from "lucide-react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();

  return (
    <div className="p-4 bg-gray-800 rounded-md flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-full">
          <User className="text-white w-5 h-5" />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{selectedUser.name}</h4>
          <p className="text-sm text-gray-400">{selectedUser.email}</p>
        </div>
      </div>
      <button
        onClick={() => setSelectedUser(null)}
        className="text-gray-400 hover:text-red-500 transition"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatHeader;
