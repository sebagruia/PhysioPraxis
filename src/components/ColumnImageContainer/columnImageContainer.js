import React from "react";
import { useHistory } from "react-router-dom";
import "./columnImageContainer.css";
import Label from "../../components/Label/label";

const ColumnImageContainer = ({service}) => {
  
  const image = service.fields.image.fields.file.url;
  const title = service.fields.title;

  let history = useHistory();
  const handleOnClick = () => {
    history.push("/services/serviceDescription", { service });
  };

  return (
    <div
      onClick={handleOnClick}
      className="column-image-container"
      role="button"
    >
      <Label>{title}</Label>
      <img src={image} alt="services" />
    </div>
  );
};

export default ColumnImageContainer;
