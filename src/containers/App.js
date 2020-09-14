import React, { Component } from "react";
import "./App.css";
import {connect} from "react-redux";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/footer";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/home";
import AboutUs from "../pages/AboutUs/aboutUs";
import Services from "../pages/Services/services";
import ServiceDescription from "../pages/ServiceDescription/serviceDescription";
import AppointmentPage from "../pages/AppointmentPage/appointmentPage";
import News from "../pages/News/news";
import PostPage from "../pages/PostPage/postPage";
import {setCurrentUser, getTestimonials, getNews} from "../redux/redux-actions";
import { auth, createUserProfileDocument } from "../firebase/firebase";

class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const snapShot = await userRef.get();
        if (snapShot.exists) {
          this.props.setCurrentUser(snapShot.data())
        }
      } else {
        this.props.setCurrentUser(userAuth)
      }
    });
    this.props.getTestimonials();
    this.props.getNews();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route path="/services/serviceDescription">
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

const mapStateToProps = (state)=>{
  return{
    currentUser:state.userReducer.currentUser
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    setCurrentUser : (user)=>dispatch(setCurrentUser(user)),
    getTestimonials: ()=>dispatch(getTestimonials()),
    getNews: ()=>dispatch(getNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
