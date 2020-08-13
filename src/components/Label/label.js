import React from "react";
import "./label.css";

const Label = (props)=>{
    return(
        <div className="label">
            <p>{props.children}</p>
        </div>
    );
}

export default Label;