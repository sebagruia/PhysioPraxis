import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/navigation";
import Footer from "./components/Footer/footer";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import AboutUs from "./pages/AboutUs/aboutUs";
import Services from "./pages/Services/services";
import ServiceDescription from "./pages/ServiceDescription/serviceDescription";
import AppointmentPage from "./pages/AppointmentPage/appointmentPage";
import News from "./pages/News/news";
import PostPage from "./pages/PostPage/postPage";
import {auth} from "./firebase/firebase";

class App extends Component {

  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Navigation currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/serviceDescription">
            <ServiceDescription />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route path="/news/:post_id">
            <PostPage />
          </Route>
          <Route path="/appointmentPage">
            <AppointmentPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
