import React, { Fragment, useState } from "react";
import "./userButton.css";
import User from "../../assets/iconmonstr-user.png";
import LogIn from "../LogIn/logIn";

const UserButton = () => {
  const [activeUser, setActiveUser] = useState(false);
  const handleClick = () => {
    setActiveUser(!activeUser);
  };

  return (
    <Fragment>
      <div onClick={handleClick} className="user" role="button">
        <img src={User} alt="user logo" />
      </div>
        <LogIn activeUser={activeUser}/>
    </Fragment >
  );
};

export default UserButton;
