import React from "react";
import './App.css';

import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import logo from "./assets/logo-in.png";
import facebook from "./assets/facebook-brands.svg";
import twitter from "./assets/twitter-brands.svg";
import instagram from "./assets/instagram-brands.svg";
import dribbble from "./assets/dribbble-brands.svg";
import github from "./assets/github-brands.svg";
import envelope from "./assets/envelope-open-text-solid.svg";


function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="App">

      <nav className="navbar">
        <img src={logo} alt="School in the Clouds Logo" className="logo"/>
        <div className="navLinksContainer">
          <Link to="#" className="navLinks">Login</Link>
          <Link to="#" className="navLinks">SignUp</Link>
          <Link to="/" className="navLinks" onClick={handleLogout}>Logout</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <footer className="footer">
        <div className="icons"> 
          <img src={facebook} alt="facebook"/>
          <img src={twitter} alt="twitter"/>
          <img src={instagram} alt="instagram"/>
          <img src={dribbble} alt="dribbble"/>
          <img src={github} alt="github"/>
          <img src={envelope} alt="envelope"/>
        </div>
        <h4>Copyright &copy; School in the Cloud 2021. All Rights Reserved. </h4>
      </footer>
    </div>
  );
}

export default App;
