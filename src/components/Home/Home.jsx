import React, { useState, useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import Sidebar from "./Sidebar";
import ChatContent from "../ChatContent/ChatContent";

const Home = () => {
  const { selectedUser } = useChatStore();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen pt-[64px]">
      {/* Sidebar (Always visible on desktop, visible alone on mobile) */}
      <div
        className={`w-[450px] min-w-[450px] fixed top-16 left-0 h-[calc(100vh-64px)] overflow-y-auto bg-gray-800 ${
          isMobile && selectedUser ? "hidden" : "block"
        }`}
      >
        <Sidebar />
      </div>

      {/* Chat Content */}
      <div
        className={`flex-1 ml-[450px] h-[calc(100vh-64px)] overflow-y-auto ${
          isMobile ? "hidden" : "block"
        }`}
      >
        <ChatContent isMobile={isMobile} />
      </div>

      {/* Mobile Modal for Chat */}
      {isMobile && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="w-full h-full bg-gray-900 text-white p-6">
            <ChatContent isMobile={isMobile} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
