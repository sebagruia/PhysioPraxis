import React, { Component } from "react";
import "./errorBoundry.css";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorImageOverlay">
          <div className="errorImageContainer"></div>
          <div className="errorImageText">This Page is Lost in Space</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
