import React, { Component } from 'react';
import Home from "./Home.js"
import Blog from "./Blog.js"
import Contact from "./Contact.js"
import './App.css';
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  render() {
    return (
      <div className="App wrapper-outer">
        <nav>
          <div className="wrapper-inner">
            <div className="nav-bar">
              <ul className="nav-bar-one">
                <li><a href="./index.html">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#reserve">RESERVE</a></li>
              </ul>
              <div className="nav-logo">
                <h1>Sunshine</h1>
              </div>
              <ul className="nav-bar-two">
                <li><a href="./blog.html">BLOG</a></li>
                <li><a href="./contact.html">CONTACT</a></li>
                <li><i className="fas fa-search"></i></li>
                <li className="cart">
                  <i className="fas fa-shopping-cart"></i>
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

      <Home />
      {/* <Blog /> */}
      {/* <Contact /> */}




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
                    <button className="footer-button"><i className="far fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>
              <div className="copyright">
                <p>Copyright &copy 2019 HackerYou</p>
                <ul>
                  <li><i className="fab fa-facebook-f"></i></li>
                  <li><i className="fab fa-twitter"></i></li>
                  <li><i className="fab fa-instagram"></i></li>
                </ul>
              </div>
            </div>
        </footer>

      </div>

      
      
    );
  }
}

export default App;
