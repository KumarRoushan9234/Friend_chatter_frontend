import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import createRoot
import { BrowserRouter as Router } from "react-router-dom"; // ✅ Move Router here
import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
