import React from "react";

const OperatorButton = (props) => {
  return (
    <button onClick={() => props.update(props.text)}>{props.text}</button>
  );
};

export default OperatorButton;
