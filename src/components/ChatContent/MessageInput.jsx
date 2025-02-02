import React, { useState, useRef, useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";

const MessageInput = ({ isMobile }) => {
  const { selectedUser, sendMessage } = useChatStore();
  const [text, setText] = useState("");

  const handleSendMessage = () => {
    if (!text.trim()) return; // Don't send if the text is empty
    console.log("Sending message to:", selectedUser._id);
    console.log("Message data:", text);
    sendMessage({ text });
    console.log(`Message sent: ${text}`);
    setText(""); // Clear input after sending
  };

  return (
    <div>
      {/* Message Input Box (Fixed at the bottom) */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-gray-800 p-3 ${
          isMobile ? "w-full" : "left-[450px] w-auto"
        }`}
      >
        <div className="flex items-center w-full">
          <input
            type="text"
            className="flex-1 p-2 bg-gray-700 text-white rounded-md outline-none w-full"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className={`ml-3 px-4 py-2 rounded-md transition ${
              text.trim()
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-gray-600 cursor-not-allowed"
            }`}
            disabled={!text.trim()} // Disable the button if input is empty
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
