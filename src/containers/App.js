import React, { Component, lazy, Suspense } from "react";
import "./App.css";

import { connect } from "react-redux";

import { Route, Switch } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import LoadingSpinner from "../components/LoadingSpinner/loadingSpinner";
import Navigation from "../components/Navigation/navigation";
import Footer from "../components/Footer/footer";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundary";

import {
  getingHomePageInfo,
  getTestimonials,
  getAboutUsPage,
  getServices,
  getPosts
} from "../redux/redux-actions";

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
  componentDidMount() {
    this.props.getHomeContent();
    this.props.getTestimonials();
    this.props.getAboutUs();
    this.props.getServices();
    this.props.getPosts();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
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
              <Route exact path="/news/:post_id">
                <PostPage />
              </Route>
              <Route exact path="/appointmentPage">
                <AppointmentPage />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>

        <CookieConsent
          style={{ backgroundColor: "rgb(0, 58, 69, 0.9)" }}
          containerClasses="cookieConsent"
          buttonStyle={{
            backgroundColor: "#e7efe9",
            color: "#003a45",
            border: "2px solid #fff",
          }}
          buttonText="Ich verstehe"
        >
          Diese Website verwendet Cookies, um die Benutzererfahrung zu
          verbessern.
        </CookieConsent>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeContent: () => dispatch(getingHomePageInfo()),
    getTestimonials: () => dispatch(getTestimonials()),
    getAboutUs: () => dispatch(getAboutUsPage()),
    getServices: () => dispatch(getServices()),
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(null, mapDispatchToProps)(App);
