import GraphArea from "./GraphArea";
import "./Graph.css";
import React from "react";


const Graph = (props) => {
  let content = <h1>The graph will appear here</h1>;

  if (props.graphData["Net gains"] === 0) {
    console.log("zero");
  } else {
    content = (
      <GraphArea
        graphData={props.graphData}
        monthlyDeposit={props.monthlyDeposit}
      />
    );
  }

  return (
    <div className="graph">
      <h3 style={{ height: "10%" }}>Compound interest</h3>
      {content}
    </div>
  );
};

export default Graph;
