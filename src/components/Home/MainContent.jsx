// MainContent.js
import React from "react";

const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-900 text-white p-6 pl-64 overflow-hidden min-w-[600px]">
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Friend Chatter</h1>
          <hr className="border-t-2 border-gray-300 w-1/4 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
