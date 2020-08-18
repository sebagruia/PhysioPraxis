import React from "react";
import "./userButton.css";
import User from "../../assets/iconmonstr-user.png"

const UserButton = ()=>{
    return(
        <div className="user" role="button">
            <img src={User} alt="user logo" />
        </div>
    );
}

export default UserButton;