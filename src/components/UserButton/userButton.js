import React, { Fragment } from "react";
import "./userButton.css";
import User from "../../assets/iconmonstr-user.png";
import UserRed from "../../assets/iconmonstr-user-red.png";
import { signInWithGoogle } from "../../firebase/firebase";
import { signOutWithGoogle } from "../../firebase/firebase";

const UserButton = ({ currentUser }) => {
  const handleClick = () => {
    if (currentUser) {
      if (window.confirm("Sign out?")) {
        signOutWithGoogle();
      }
    } else {
      alert("Only for Administrator");
      signInWithGoogle();
    }
  };

  return (
    <Fragment>
      <div onClick={handleClick} className="user" role="button">
        <img src={currentUser ? UserRed : User} alt="user logo" />
      </div>
    </Fragment>
  );
};

export default UserButton;
