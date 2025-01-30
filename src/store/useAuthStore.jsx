import { create } from "zustand";
import api from "../lib/axios";

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
    try {
      const res = await api.post("/auth/signup", data);
      set({ isSigningUp: true });
    } catch (error) {
      console.log("error while Signup", error);
    }
  },

  login: async (Credentials) => {
    try {
      const res = await api.post("/auth/login", Credentials);
      set({ authUser: res.data });
      console.log("Successful Login! ", res.data);
      return true;
    } catch (error) {
      console.log("Error in Login", error);
      return false;
    }
  },

  logout: () => {
    try {
      api.post("/auth/logout");
      set({ authUser: null });
      console.log("User Logout Successful");
    } catch (error) {
      console.log("Error in Logout", error);
    }
  },
}));
