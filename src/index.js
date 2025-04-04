import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import NewApp from "main";
import NewApp from "./main";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <NewApp /> */}
  </StrictMode>
);
