import React from "react";
import { useHistory } from "react-router-dom";
import "./columnImageContainer.css";
import Label from "../../components/Label/label";

const ColumnImageContainer = ({ service, label, description}) => {
  let history = useHistory();
  const handleOnClick = () => {
    history.push("/services/serviceDescription", { service, label, description});
  };
  return (
    <div
      onClick={handleOnClick}
      className="column-image-container"
      role="button"
    >
      <Label>{label}</Label>
      <img src={service} alt="services" />
    </div>
  );
};

export default ColumnImageContainer;
