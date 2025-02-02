import { create } from "zustand";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";

// export const useAuthStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))

export const useAuthStore = create((set) => ({
  authUser: null,
  // destructure the value from Zustand and just use it.

  //for loading
  isSigningUp: false,
  isLoggininIn: false,
  isSigningOut: false,
  isUpdating: false,
  isUpdating: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await api.get("/auth/check-auth");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in CheckAuth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await api.post("/auth/signup", data);
      toast.success("Account Created Successfully! |");
      toast.success(`Welcome ${res.data.name}!`);
      set({ authUser: res.data });
    } catch (error) {
      console.log("error while Signup", error);
      toast.error("Something went worng!");
      toast.error(error.res.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (Credentials) => {
    // const navigate = useNavigate();
    set({ isLoggininIn: true });
    try {
      const res = await api.post("/auth/login", Credentials);
      toast.success("User LoggedIn Successfully! |");
      toast.success(`Welcome back ${res.data.name}!`);
      set({ authUser: res.data });
      console.log("Successful Login! ", res.data);
      // setTimeout(() => {
      //   navigate("/"); // Redirect to login after success
      // }, 2000);
      // return true;
    } catch (error) {
      console.log("Error in Login", error);
      toast.error("Something went worng!");
      toast.error(error.res.message);
      return false;
    } finally {
      set({ isLoggininIn: false });
    }
  },

  logout: async () => {
    set({ isSigningOut: true });
    try {
      await api.post("/auth/logout");
      set({ authUser: null });
      console.log("User Logout Successful");
      toast.success("User Logged out!");
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Something went worng!");
      toast.error(error.res.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await api.put("/auth/update-profile", data);
      toast.success(res.message);
      console.log();
    } catch (error) {
      console.log("Error in updateProfile", error);
      toast.error(`${error.response.data.message}`);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
