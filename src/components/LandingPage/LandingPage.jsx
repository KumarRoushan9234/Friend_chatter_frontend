import React from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      <header className={styles.header}>
        <h1>Welcome to Our App</h1>
        <nav>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </nav>
      </header>
      <main className={styles.main}>
        <h2>Discover Amazing Features</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris.
        </p>
        <button>Get Started</button>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Our App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
