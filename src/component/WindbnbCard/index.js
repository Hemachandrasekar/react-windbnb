import React from "react";
// import Cardtype from "./Card-type"
import "./card.css";

import { Card, ResponsiveEmbed } from "react-bootstrap";

const WindbnbCard = (props) => {
  console.log("Card data value", props.data);
  return (
    <Card style={{ width: "100%" }}>
      <ResponsiveEmbed aspectRatio="16by9">
        <Card.Img
          variant="top"
          className="card-img"
          src={props.data.photo}
          style={{ borderRadius: "15px" }}
        />
      </ResponsiveEmbed>
      <Card.Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 15px 0px 15px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {props.data.superHost && (
            <span className="card-badge ">Super Host</span>
          )}

          <Card.Title className="card-title">{props.data.type}</Card.Title>
        </div>
        <small className="text-muted"> {props.data.rating}</small>
      </Card.Header>
      <Card.Body>
        <Card.Text className="card-title">{props.data.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default WindbnbCard;
