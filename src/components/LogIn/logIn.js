import React, { useState } from "react";
import "./logIn.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import BookButton from "../../components/BookButton/bookButton";

const LogIn = ({activeUser}) => {

  const [inputField, setInputField] = useState("");

 const handleOnChange = (event) => {
    const name = event.target.name;
    setInputField({ [name]: event.target.value });
  };

  return (
    <Form  className="appointment userLogIn" style={activeUser ? {display:"flex"} : {display:"none"}}>
      <div className="appointment-text">
        <h1>Log In</h1>
        <h6>only for administrator</h6>
      </div>
      <FormControl
        onChange={handleOnChange}
        type="text"
        placeholder="Email"
        aria-label="Email"
        value={inputField}
        name="email"
        required
      />
      <FormControl
        onChange={handleOnChange}
        type="password"
        placeholder="Pass"
        aria-label="Pass"
        value={inputField}
        name="password"
        required
      />
      <BookButton buttonName="LOG IN" />
    </Form>
  );
};

export default LogIn;
