import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/loadingSpinner";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/footer";
import {
  setCurrentUser,
  getTestimonials,
  getNews,
} from "../redux/redux-actions";
import { auth, createUserProfileDocument } from "../firebase/firebase";

const Home = lazy(() => import("../pages/Home/home"));
const AboutUs = lazy(() => import("../pages/AboutUs/aboutUs"));
const Services = lazy(() => import("../pages/Services/services"));
const ServiceDescription = lazy(() =>
  import("../pages/ServiceDescription/serviceDescription")
);
const AppointmentPage = lazy(() =>
  import("../pages/AppointmentPage/appointmentPage")
);
const News = lazy(() => import("../pages/News/news"));
const PostPage = lazy(() => import("../pages/PostPage/postPage"));

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        const snapShot = await userRef.get();
        if (snapShot.exists) {
          this.props.setCurrentUser(snapShot.data());
        }
      } else {
        this.props.setCurrentUser(userAuth);
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
        <Navigation />
        <Switch>
          <Suspense fallback={<LoadingSpinner />}>
            <Route exact path="/">
              <Home />
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
            <Route exact path="/appointmentPage">
              <AppointmentPage />
            </Route>
          </Suspense>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    getTestimonials: () => dispatch(getTestimonials()),
    getNews: () => dispatch(getNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
