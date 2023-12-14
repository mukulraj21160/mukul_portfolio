"useClient";
import Header from "./components/header/page";
import Home from "./components/home/page";
import About from "./components/about/page";
import Skills from "./components/skills/page";
import Project from "./components/projects/page";
import Contact from "./components/contact/page";

export default function Client() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
