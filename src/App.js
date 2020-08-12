import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/navigation";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/aboutUs";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Home /> */}
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
