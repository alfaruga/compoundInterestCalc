import Control from "./Control";
import "./Controls.css";
import React from "react";

const Controls = (props) => {
  const updateValues = (key, value) => {
    props.updateHandler(key, value);
  };
  let limit;
  let arr = new Array(
    props.controlsValues.map((value) => {
      if (value.key === "Monthly Deposits") {
        limit = 100000;
      } else {
        limit = 20;
      }
      return (
        <Control
          keyAndValueGetter={updateValues}
          key={value.key}
          label={value.key}
          value={value.value}
          limit={limit}
        />
      );
    })
  );
  return <div className="controls">{arr}</div>;
};

export default Controls;
