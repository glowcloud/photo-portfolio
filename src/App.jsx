import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { peopleImages, natureImages, cityImages } from "./assets/images";

import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Layout from "./components/layout/Layout";

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Gallery images={peopleImages} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/gallery/city"
            element={<Gallery images={cityImages} />}
          />
          <Route
            path="/gallery/people"
            element={<Gallery images={peopleImages} />}
          />
          <Route
            path="/gallery/nature"
            element={<Gallery images={natureImages} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
