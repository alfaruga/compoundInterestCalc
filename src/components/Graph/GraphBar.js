import "./GraphBar.css";
import React from "react";


const GraphBar = (props) => {
  const heightStyle = (props.height / props.maxHeight) * 90 + "%";
  const interestHeight = (props.heightInterest / props.height) * 100 + "%";
  const depositsHeight = (props.heightDeposits / props.height) * 100 + "%";

  //compound ineterest   {props.heightInterest}
  //total deposits {props.heightDeposits}
  return (
    <div style={{ height: `${heightStyle}`}} className="graph-bar">
        
        <div
          className="graph-bar_interest"
          style={{ height: `${interestHeight}` }}
        ></div>
        <div
          className="graph-bar_aportations"
          style={{ height: `${depositsHeight}` }}
        ></div>
    </div>
  );
};

export default GraphBar;
