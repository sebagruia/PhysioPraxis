import React from "react";
import "./button.css";

const Button = ({ children, onClick }) => {
  return (
    <div onClick = {onClick} className="continue-reading" role="button">
      <p>{children}</p>
    </div>
  );
};

export default Button;
