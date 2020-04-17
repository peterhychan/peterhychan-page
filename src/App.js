import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <Header />
      <AboutPage id="about" />
      <ProjectsPage id="projects" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
