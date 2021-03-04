import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
// Components
import Home from "./components/Home";
import AdminLandingPage from "./components/admin/AdminLandingPage";
import VolunteerLandingPage from "./components/volunteer/VolunteerLandingPage";
import StudentLandingPage from "./components/student/StudentLandingPage";
import PrivateRoute from "./components/PrivateRoute";
// Styles 
import './App.css';
import logo from "./assets/logo-in.png";
import facebook from "./assets/facebook-brands.svg";
import twitter from "./assets/twitter-brands.svg";
import instagram from "./assets/instagram-brands.svg";
import dribbble from "./assets/dribbble-brands.svg";
import github from "./assets/github-brands.svg";
import envelope from "./assets/envelope-open-text-solid.svg";


function App() {
  const history= useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    history.push('/');
  };

  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="School in the Clouds Logo" className="logo"/>
        <div className="navLinksContainer">
          <a href="#mainRegion" className="navLinks" onClick={handleLogout}>Login</a>
          <a href="#mainRegion" className="navLinks" onClick={handleLogout}>SignUp</a>
          <Link to="/" className="navLinks" onClick={handleLogout}>Logout</Link>
        </div>
      </nav>
      <Switch>
        <PrivateRoute path="/admin/:id" component={AdminLandingPage} />
        <PrivateRoute path="/students/:id" component={StudentLandingPage} />
        <PrivateRoute path="/volunteers/:id" component={VolunteerLandingPage} />
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
