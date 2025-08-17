import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { GuildProvider } from "./Context/GuildContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuildProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GuildProvider>
  </StrictMode>
);
