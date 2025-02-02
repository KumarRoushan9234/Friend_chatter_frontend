import React, { useState, useRef, useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import { User } from "lucide-react";

const ChatMessages = ({ isMobile }) => {
  const { messages, selectedUser, isMessagesLoading, getMessages } =
    useChatStore();
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const myId = "YOUR_USER_ID"; // Replace with actual logged-in user ID

  useEffect(() => {
    console.log(selectedUser);
    console.log("Fetching messages for user:", selectedUser?._id);
    getMessages(selectedUser._id);
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUser]); // Only depend on selectedUser here

  return (
    <div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-700 rounded-md mt-4 mb-16">
        {isMessagesLoading ? (
          <div className="text-center text-white">Loading messages...</div>
        ) : messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.senderId === myId ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex items-center space-x-2">
                {msg.senderId !== myId && (
                  <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                    <User className="text-gray-300 w-5 h-5" />
                  </div>
                )}
                <div
                  className={`p-3 max-w-xs rounded-lg text-white ${
                    msg.senderId === myId ? "bg-blue-500" : "bg-gray-600"
                  }`}
                >
                  <p>{msg.text}</p>
                  <time className="block text-xs opacity-50 mt-1 text-right">
                    {msg.time || "Just now"}
                  </time>
                </div>
                {msg.senderId === myId && (
                  <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                    <User className="text-gray-300 w-5 h-5" />
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-white">No messages yet</div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
