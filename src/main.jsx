import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./baseTailwind.css";
import { ThemeProvider } from "./contexts/Theme/ThemeContext";
import VisibilityProvider from "./contexts/Visibility/VisibilityProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <VisibilityProvider>
        <App />
      </VisibilityProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
