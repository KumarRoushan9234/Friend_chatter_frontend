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
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/common/Header";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import { useAuthStore } from "./store/useAuthStore";
// import {Loader} from "lucide-react";
import toast from "react-hot-toast";

function App() {
  // Zustand hook
  toast();
  return (
    <Router>
      <RouteContent />
    </Router>
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
    <>
      {showHeader && <Header />} {/* Conditionally render Header */}
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
          path="/admin"
          element={authUser ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
