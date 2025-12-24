import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/About1";

import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Registration from "./pages/Registration.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/location" element={<Gallery />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>
);
