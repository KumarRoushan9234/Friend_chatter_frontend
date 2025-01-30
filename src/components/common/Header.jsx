import React from "react";

const Header = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* ✅ Navbar with better contrast */}
        <div className="navbar bg-gray-800 text-white w-full max-w-[calc(100%-2.5rem)] m-5 outline outline-gray-600 rounded-lg shadow-lg">
          {/* Sidebar Toggle Button */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* ✅ Navbar Title - Now Visible */}
          <div className="mx-2 flex-1 px-2 text-lg font-bold">Navbar Title</div>

          {/* ✅ Desktop Navbar Links - Proper Contrast */}
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ Sidebar Drawer - Fix Positioning & Contrast */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-900 text-white min-h-full w-80 p-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
