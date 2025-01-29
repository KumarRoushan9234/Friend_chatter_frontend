import React from "react";
import styles from "./Taskbar.module.css";

const Taskbar = () => {
  return (
    <div className={styles.taskbar}>
      <div className={styles.appName}>Friend Chatter</div>
      <div className={styles.actions}>
        <button className={styles.hamburgerMenu}>☰</button>
        <div className={styles.profileIcon}>👤</div>
      </div>
    </div>
  );
};

export default Taskbar;
