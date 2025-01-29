import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <h2>Welcome, User!</h2>
      <p>Here's your dashboard information.</p>
    </div>
  );
};

export default UserInfo;
