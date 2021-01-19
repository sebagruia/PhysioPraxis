import React, {useState} from "react";
import "./languageButton.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const LanguageButton = () => {

  const [language, setLanguage] = useState('DE');

  const handleClick = (event) => {
    setLanguage(event.target.innerText)
  };
  return (
    <DropdownButton onClick = {handleClick} id="dropdown-basic-button" className = "newStyles" title={language}>
      <Dropdown.Item href="#/action-1">DE</Dropdown.Item>
      <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
      <Dropdown.Item href="#/action-2">RO</Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageButton;
