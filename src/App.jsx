import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SectionWrapper from './components/SectionWrapper';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow relative">
        <SectionWrapper id="home" className="pt-24">
          <Home />
        </SectionWrapper>
        
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
        
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        
        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>
        
        <SectionWrapper id="achievements">
          <Achievements />
        </SectionWrapper>
        
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
