import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Loader from "./components/common/Loader";
import Settings from "./components/Settingss/Settings";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import { useAuthStore } from "./store/useAuthStore";
// import {Loader} from "lucide-react";
import { Toaster } from "react-hot-toast";
import ChangePassword from "./components/Profile/ChangePassword";

function App() {
  // Zustand hook
  return (
    // data-theme="retro"
    <div>
      <RouteContent />
    </div>
  );
}

function RouteContent() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  useEffect(() => {
    console.log("Current route:", location.pathname);
  }, [location]);
  console.log(authUser);

  if (isCheckingAuth && !authUser) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const excludeHeaderPaths = ["/", "/login", "/signup"]; // Array of paths where Header should not be shown

  // Render Header only if the current pathname is NOT in the excludeHeaderPaths array
  const showHeader = !excludeHeaderPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {showHeader && <Navbar />} {/* Conditionally render Header */}
      <main className="flex-grow">
        <Routes>
          <Route
            exact
            path="/"
            // element={!authUser ? <LandingPage /> : <Navigate to="/login" />}
            element={<LandingPage />}
          />
          <Route
            path="/login"
            element={!authUser ? <Login /> : <Navigate to="/home" />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUp /> : <Navigate to="/home" />}
          />
          <Route
            path="/home"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/settings"
            element={authUser ? <Settings /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={authUser ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="profile/change_password"
            element={authUser ? <ChangePassword /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      {/* {showHeader && <Footer />} */}
      {/* Conditionally render Header */}
      <Toaster />
    </div>
  );
}

export default App;
