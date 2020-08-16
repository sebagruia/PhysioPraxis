import React from "react";
import "./pageHeader.css";

const PageHeader = (props)=>{
    return(
        <div className="page-header container-fluid">
        <div className="page-title container">
          <h1>{props.children}</h1>
        </div>
      </div>
    );
}

export default PageHeader;