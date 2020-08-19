import React, { Component } from 'react';
import Home from "./Home.js"
import Blog from "./Blog.js"
import Contact from "./Contact.js"
import './App.css';
// get our fontawesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

library.add(fas, fab);


class App extends Component {
  render() {
    return (
      <Router>
      
      
      <div className="App wrapper-outer">
        <nav>
          <div className="wrapper-inner">
            <div className="nav-bar">
              <ul className="nav-bar-one">
                  <li><Link className="homeLink" to="/">HOME</Link></li>
                  <li><a href="#about">ABOUT</a></li>
                  <li><a href="#reserve">RESERVE</a></li>
              </ul>
              <div className="nav-logo">
                <h1>Sunshine</h1>
              </div>
              <ul className="nav-bar-two">
                  <li><Link className="blogLink" to="/blog">BLOG</Link></li>
                  <li><Link className="contactLink" to="/contact">CONTACT</Link></li>
                  <li><i className="fa fa-search"></i></li>
                  <li className="cart">
                  <i className="fa fa-shopping-cart"></i>
                  <div className="circle-test">
                    <p className="two">2</p>
                  </div>
                </li>
              </ul>
              <div className="mobile-bar">
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </nav>

          <Route exact path="/project2React" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
      

        <footer className="">
          <div className="wrapper-inner">
            <div className="footer-border">
              <ul>
                <li><a href="#home">Site Map</a></li>
                <li><a href="#about">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Afilliate</a></li>
              </ul>
              <ul>
                <li><a href="#home">FAQs</a></li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Press</a></li>
              </ul>

              <form>
                <p>Sign up to get our newsletter</p>
                <div className="container-mail">
                  <input type="text" className="footer-form" placeholder="email address" name="mail" required/>
                    <button className="footer-button"><FontAwesomeIcon icon={['fas', 'paper-plane']} /></button>
                    </div>
                </form>
            </div>
              <div className="copyright">
                <p>Copyright &copy; 2019 HackerYou</p>
                <ul>
                  <li><FontAwesomeIcon icon={['fab', 'facebook-f']} /></li>
                  <li><FontAwesomeIcon icon={['fab', 'twitter']} /></li>
                  <li><FontAwesomeIcon icon={['fab', 'instagram']} /></li>
                </ul>
              </div>
            </div>
        </footer>

      </div>

      </Router>

      
      
    );
  }
}

export default App;
