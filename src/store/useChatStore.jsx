import { create } from "zustand";
import api from "../lib/axios";
import toast from "react-hot-toast";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: true,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await api.get("/message/users");
      toast.success(`${res.message}`);
      console.log(res.data);
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await api.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
}));
