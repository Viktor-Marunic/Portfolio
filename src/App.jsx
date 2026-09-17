import Header from "./components/Header";
{
  /*import LeftPanel from "./components/LeftPanel";*/
}
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [activeView, setActiveView] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  function handleNavigate(view) {
    if (view !== "project") {
      setSelectedProject(null);
    }
    setActiveView(view);
  }

  function handleProjectSelect(project) {
    setSelectedProject(project);
    setActiveView("project");
  }

  return (
    <div className="site-shell">
      <Header onNavigate={handleNavigate} activeView={activeView} />
      {/*<LeftPanel />*/}
      <main className="page-content">
        <div className="page-inner">
          {activeView === "contact" ? (
            <Contact />
          ) : activeView === "project" && selectedProject ? (
            <ProjectDetails
              project={selectedProject}
              onBack={() => handleNavigate("home")}
            />
          ) : (
            <>
              <Hero onNavigate={handleNavigate} />
              <Projects onSelectProject={handleProjectSelect} />
              <About />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
