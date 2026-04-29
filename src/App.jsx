import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import Register from "./pages/Register";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </Router>
);

export default App;
