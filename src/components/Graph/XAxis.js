import './XAxis.css';
import React from "react";

const Xaxis = (props) => {
  let arr = [];
  for (let i = 0; i < props.columns; i++) {
      console.log(props.columns)
    arr.push(
      <div key={props.year+i} style={{ width: `${props.barWidth}` }}>
        {props.year + i + 1}
      </div>
    );
  }
  return <div className={"xaxis"}>{arr}</div>;
};
export default Xaxis;
