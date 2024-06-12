import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Tech from "./pages/Tech";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/tech" element={<Tech></Tech>}></Route>
      </Routes>
    </div>
  );
};

export default App;
