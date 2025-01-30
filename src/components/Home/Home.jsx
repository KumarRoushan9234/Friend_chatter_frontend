import React from "react";
import { useAuthStore } from "../../store/useAuthStore";

const Home = () => {
  const { authUser } = useAuthStore();
  return <div>Home</div>;
};

export default Home;
