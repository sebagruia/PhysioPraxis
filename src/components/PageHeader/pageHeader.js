import React from "react";
import "./pageHeader.css";

const PageHeader = ({children})=>{
    return(
        <div className="page-header container-fluid">
        <div className="page-title container">
          <h1>{children}</h1>
        </div>
      </div>
    );
}

export default PageHeader;