import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { PrivyProvider } from "@privy-io/react-auth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrivyProvider appId="cmegit35h00ihju0bqpgz6hk6">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrivyProvider>
  </StrictMode>
);
