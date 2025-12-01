// Libary
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";

// Component
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
      <BrowserRouter basename="/Portofolio/">
      <div className=""></div>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;