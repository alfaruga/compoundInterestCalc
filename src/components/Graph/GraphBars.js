import GraphBar from "./GraphBar";
import "./GraphBars.css";
import React from "react";

const GraphBars = (props) => {
  const netGains = props.graphData["Net Gains"];
  const yearlyGains = [...props.graphData["Yearly Gains"]];
  const interestData = [...props.graphData["Yearly Interest"]];

  const arrYearlyGains = props.graphData["Yearly Gains"].map((item, index) => {
    return (
      <div
        key={index}
        className="graph-bars_container"
        style={{ width: `${props.barWidth}` }}
      >
        <div className="graph-bars_bar_label">
          <p>ROI: ${Math.round(yearlyGains[index] / 1000)}K</p>
          <p>Interest: ${Math.round(interestData[index] / 1000)}K</p>
        </div>
        <GraphBar
          barWidth={props.barWidth}
          maxHeight={netGains}
          height={item}
          heightInterest={interestData[index]}
          heightDeposits={(index + 1) * 12 * props.monthlyDeposit}
          year={props.year + index + 1}
          barData={props.graphData}
        />
      </div>
    );
  });
  return <div className="graph-bars">{arrYearlyGains}</div>;
};

export default GraphBars;
