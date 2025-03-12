import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Services from './pages/Services';
import About from './pages/About';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import Ribbon from './components/Ribbon';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000); // 2 seconds
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      easing: 'ease-in-out', 
      once: false, 
      offset: 0, 
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function changeToggle(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Aside isOpen={isOpen} setIsOpen={setIsOpen} changeToggle={changeToggle} />
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} changeToggle={changeToggle} />
          <Hero />
          <About />
          <Projects />
          <Ribbon />
          <Skills />
          <Services />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
