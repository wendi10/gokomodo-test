import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import "./App.css";
import logo from "./assets/images/logo.png";
import AboutUs from "./pages/about-us/AboutUs";

import Detail from "./pages/film/detail";
import List from "./pages/film/list";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <img className="logo" src={logo}></img>

          <div className="nav">
            <span>
              <NavLink activeclassname="active" to="/film">
                Home
              </NavLink>
            </span>
            <span>
              <NavLink activeclassname="active" to="/about-us">
                About Us
              </NavLink>
            </span>
          </div>
        </div>

        <Routes>
          <Route exact path="/film" element={<List />}></Route>
          <Route path="/" element={<Navigate replace to="/film" />}></Route>
          <Route exact path="/about-us" element={<AboutUs />}></Route>
          <Route exact path="/film/detail" element={<Detail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
