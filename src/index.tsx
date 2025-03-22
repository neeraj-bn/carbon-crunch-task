import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop";
import App from "./App";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Desktop />
    <App/>

  </StrictMode>,
);
