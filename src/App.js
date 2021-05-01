import React, { useState, useEffect } from "react";
import WindbnbCard from "./component/WindbnbCard";
import data from "./mock-server/data";

import { Container, Row, Col } from "react-bootstrap";

import "./styles.css";

const App = (props) => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    setApiResponse(data);
  }, []);
  console.log("data", data);
  return (
    <Container>
      <Row>
        {apiResponse.map((item) => {
          console.log("apiResponse", item);
          return (
            <Col md={4} style={{ margin: "10px 0" }}>
              <WindbnbCard data={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default App;
