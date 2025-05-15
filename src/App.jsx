// src/App.jsx

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;