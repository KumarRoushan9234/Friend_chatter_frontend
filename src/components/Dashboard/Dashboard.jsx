import React from "react";
import Taskbar from "./parts/Taskbar";
import UserInfo from "./parts/UserInfo";
import Footer from "./parts/Footer";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Taskbar />
      <main className={styles.main}>
        <UserInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
