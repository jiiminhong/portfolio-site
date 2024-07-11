import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Tech from "./pages/Tech";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Education from "./pages/Education";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/tech" element={<Tech></Tech>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/education" element={<Education></Education>}></Route>
      </Routes>
    </div>
  );
};

export default App;
