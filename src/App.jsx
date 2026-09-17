import Header from "./components/Header";
{/*import LeftPanel from "./components/LeftPanel";*/}
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      {/*<LeftPanel />*/}
      <main className="page-content">
        <div className="page-inner">
          <Hero />
          <Projects /> 
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}
