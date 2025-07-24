// src/main.jsx
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/700.css";
import "flowbite";
import "react-datepicker/dist/react-datepicker.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ✅ لا تكرار هنا - الثيم يتم تفعيله من index.html فقط

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
