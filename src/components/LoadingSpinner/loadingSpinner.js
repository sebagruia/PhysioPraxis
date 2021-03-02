import React from "react";
import "./loadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loadingSpinner_container">
      <div className="loadingSpinner">
        <div className="loadingSpinner-1">
          <div className="loadingSpinner-2">
            <div className="loadingSpinner-3">
              <div className="loadingSpinner-4">
                <div className="loadingSpinner-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
