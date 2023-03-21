import React, { useState } from "react";

function Cell(props) {
  const [jewel, setJewel] = useState(props.jewel);

  function handleClick() {
    setJewel("");
  }

  return (
    <td className="cell" onClick={() => handleClick()}>
      <img src={jewel} className="jewel" />
    </td>
  );
}

export default Cell;
