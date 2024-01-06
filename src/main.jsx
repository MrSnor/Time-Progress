import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./baseTailwind.css";
import VisibilityProvider from "./contexts/Visibility/VisibilityProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
    </VisibilityProvider>
  </React.StrictMode>,
);
