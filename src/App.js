import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Project from "./components/pages/Project";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects></Projects>}></Route>
        </Routes>
        <Routes>
          <Route path="/company" element={<Company></Company>}></Route>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/newproject" element={<NewProject></NewProject>}></Route>
          <Route path="/project/:id" element={<Project></Project>}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
