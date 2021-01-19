import React from "react";
import "./bookButton.css";

const BookButton = ({buttonName}) => {
  return (
    <button className="book-button"  type="submit">
      <p>{buttonName}</p>
    </button>
  );
};

export default BookButton;
