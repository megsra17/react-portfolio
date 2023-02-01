import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Skill from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Project />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
