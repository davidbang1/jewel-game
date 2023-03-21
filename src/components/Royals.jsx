import React, { useState } from "react";
import scroll from "../assets/scroll.jpeg";
import royal from "../assets/royal.png";

function Royals(props) {
  return (
    <div className="players">
      <img src={royal} className="royal" />
      <img src={royal} className="royal" />
      <img src={royal} className="royal" />
      <img src={royal} className="royal" />
      <br></br>
      <img src={scroll} className="scroll" />
      <img src={scroll} className="scroll" />
      <img src={scroll} className="scroll" />
    </div>
  );
}

export default Royals;
