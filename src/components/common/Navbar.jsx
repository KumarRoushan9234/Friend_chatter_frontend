import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";
import { useEffect } from "react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(authUser);
  // }, [authUser]);

  const handleLogout = async (e) => {
    e.preventDefault();
    // e.preventDefault();
    logout();
  };
  return (
    <header className="bg-blue-900 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-blue-900/80">
      <div className="container mx-auto px-6 py-4 h-16 min-h-[60px]">
        <div className="flex items-center justify-between h-full rounded-lg">
          {/* Logo and Home Link */}
          <div className="flex items-center gap-8">
            <Link
              to="/home"
              className="flex items-center gap-2.5 transition-colors duration-300 hover:text-blue-400"
            >
              <h1 className="text-lg font-bold text-white">Friend Chatter</h1>
            </Link>
          </div>

          {/* Profile, Settings, and Logout */}
          <div className="flex items-center gap-2">
            {authUser && (
              <>
                {/* Profile Link */}
                <Link
                  to="/profile"
                  className="btn btn-sm gap-2 text-white hover:bg-blue-800 rounded-lg"
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline">
                    {authUser.data?.name || "User"}
                  </span>{" "}
                  {/* Added fallback */}
                </Link>

                {/* Settings Link with no text */}
                <Link
                  to="/settings"
                  className="btn btn-sm gap-2 text-white hover:bg-blue-800 rounded-lg"
                >
                  <Settings className="w-4 h-4" />
                </Link>

                {/* Logout Button (red) */}
                <button
                  // onClick={handleLogout}
                  className="flex gap-2 items-center text-red-500 hover:bg-red-600 rounded-lg"
                  onClick={handleLogout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
