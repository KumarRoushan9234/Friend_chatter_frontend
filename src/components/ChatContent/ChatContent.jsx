import React, { useState, useRef, useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import ChatHeader from "./ChatHeader";
import { X, User } from "lucide-react";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";

const ChatContent = ({ isMobile }) => {
  const {
    messages,
    selectedUser,
    isMessagesLoading,
    setSelectedUser,
    getMessages,
  } = useChatStore();
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    console.log(`Message sent: ${newMessage}`);
    setNewMessage(""); // Clear input after sending
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    // if (selectedUser) getMessages(selectedUser._id);
  }, [, getMessages]);
  // selectedUser._id

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white p-6">
      {selectedUser ? (
        <div className="flex flex-col h-full">
          {/* Selected User Header */}
          <ChatHeader />

          {/* Chat Messages */}
          <ChatMessages />
          {/* <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-700 rounded-md mt-4 mb-16">
            {isMessagesLoading ? (
              // Skeleton Loading when messages are being fetched
              <div className="space-y-4">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                      <User className="text-gray-300 w-5 h-5" />
                    </div>
                  </div>
                  <div className="chat-header bg-gray-600 h-4 w-24 animate-pulse rounded"></div>
                  <div className="chat-bubble bg-gray-600 h-6 w-40 animate-pulse rounded"></div>
                  <div className="chat-footer bg-gray-600 h-4 w-16 animate-pulse rounded"></div>
                </div>
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
                      <User className="text-gray-300 w-5 h-5" />
                    </div>
                  </div>
                  <div className="chat-header bg-gray-600 h-4 w-24 animate-pulse rounded"></div>
                  <div className="chat-bubble bg-gray-600 h-6 w-40 animate-pulse rounded"></div>
                  <div className="chat-footer bg-gray-600 h-4 w-16 animate-pulse rounded"></div>
                </div>
              </div>
            ) : messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat ${
                    msg.sender === "me" ? "chat-end" : "chat-start"
                  }`}
                >
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full bg-gray-500 flex items-center justify-center">
                      <User className="text-gray-300 w-5 h-5" />
                    </div>
                  </div>
                  <div className="chat-header">
                    {msg.sender}
                    <time className="text-xs opacity-50">{msg.time}</time>
                  </div>
                  <div className="chat-bubble">{msg.text}</div>
                  <div className="chat-footer opacity-50">
                    {msg.status || "Delivered"}
                  </div>
                </div>
              ))
            ) : (
              // Skeleton for no messages yet
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
            )}
          </div> */}

          {/* Message Input Box (Fixed at the bottom) */}
          {/* <div
            className={`fixed bottom-0 left-0 right-0 bg-gray-800 p-3 ${
              isMobile ? "w-full" : "left-[450px] w-auto"
            }`}
          >
            <div className="flex items-center w-full">
              <input
                type="text"
                className="flex-1 p-2 bg-gray-700 text-white rounded-md outline-none w-full"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="ml-3 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition"
              >
                Send
              </button>
            </div>
          </div> */}
          <MessageInput />
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
              Welcome to Friend Chatter
            </h1>
            <hr className="border-t-2 border-gray-300 w-1/4 mx-auto" />
            <p>Chat Container</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatContent;
