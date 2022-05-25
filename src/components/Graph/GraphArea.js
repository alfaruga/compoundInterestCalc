import GraphBars from "./GraphBars";
import "./GraphArea.css";
import Xaxis from "./XAxis";
import YAxis from "./YAxis";
import React from "react";

const GraphArea = (props) => {
  const numberOfColumns = props.graphData["Yearly Gains"].length;
  const barWidth = (1 / props.graphData["Yearly Gains"].length) * 90 + "%";
  const date = new Date();
  const currentYear = date.getFullYear();

  let content = (
    <div className={"graph-area graph-area_no_Data"}>
      <h1>The graph will appear here</h1>
      <h4>
        Select a monthly deposit, interest rate, years and inflation to build
        the graph
      </h4>
    </div>
  );

  if (numberOfColumns !== 0) {
    content = (
      <div className="graph-area">
        <YAxis
          className="graph-area_yaxis"
          ticks={numberOfColumns}
          limit={props.graphData["Net Gains"]}
        />
        <div className="graph-area_xaxis_bars">
          <div className="graph-area_bars">
            <GraphBars
              graphData={props.graphData}
              barWidth={barWidth}
              year={currentYear}
              monthlyDeposit={props.monthlyDeposit}
            />
          </div>
          <div className="graph-area_xaxis">
            <Xaxis
              barWidth={barWidth}
              year={currentYear}
              columns={numberOfColumns}
            />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default GraphArea;
