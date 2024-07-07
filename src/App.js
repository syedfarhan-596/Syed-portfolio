import React from "react";
import { ThemeProvider } from "./Theme";
import Header from "./components/header/header";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
