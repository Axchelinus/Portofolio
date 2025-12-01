// Libary
import { Routes, Route } from "react-router-dom";

// Folder Page
import Nav from "./Page/Nav";
import Hero from "./Page/Hero";
import AboutMe from "./Page/AboutMe";
import Project from "./Page/Project";
import Footer from "./Page/Footer";

// Folder CaseStudy
import ReBakoPersonalCase from "./CaseStudy/ReBakoPersonalCase";
import ResearchCase from "./CaseStudy/ResearchCase";
import NutricycleCase from "./CaseStudy/NutricycleCase";
import ReBakoTeamCase from "./CaseStudy/ReBakoTeamCase";

// App
function App() {
  return (
    <>
      <Nav />
      
      <Routes>
        {/* Home Page */}
        <Route 
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Project />
            </>
          } 
        />

        {/* Project Routes */}
        <Route path="/projects/rebako-personal" element={<ReBakoPersonalCase />} />
        <Route path="/projects/research" element={<ResearchCase />} />
        <Route path="/projects/nutricycle" element={<NutricycleCase />} />
        <Route path="/projects/rebako-team" element={<ReBakoTeamCase />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;