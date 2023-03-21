import React, { useState } from "react";
import Board from "./components/Board.jsx";
import Player from "./components/Player.jsx";
import Royals from "./components/Royals.jsx";
import Rewards from "./components/Rewards.jsx";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col className="title">Jewel Duel</Col>
        <Col xs={8}>
          <Royals />
        </Col>
      </Row>
      <Row>
        <Col xs={2} className="col1">
          <Player number="one" />
          <Player number="two" />
        </Col>
        <Col className="col2">
          <Board />
        </Col>
        <Col xs={5}>
          <Rewards />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
