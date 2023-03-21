import React, { useState } from "react";
import cardback from "../assets/cardback.png";
import { Container, Row, Col } from "react-bootstrap";

function Rewards(props) {
  return (
    <Container>
      <Row>
        <Col>
          10 Remain
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          10
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          10
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
          <img src={cardback} className="royal" />
        </Col>
      </Row>
    </Container>
  );
}

export default Rewards;
