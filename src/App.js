import React, { Component } from "react";
import "./App.css";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import JumbotronTop from "./components/JumbotronTop/JumbotronTop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop />
        <JumbotronTop />
        <About />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
