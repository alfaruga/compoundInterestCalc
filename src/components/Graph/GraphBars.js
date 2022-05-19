import GraphBar from "./GraphBar";
import "./GraphBars.css";

const GraphBars = (props) => {
  const netGains = props.graphData["Net Gains"];
  const compoundInterest = props.graphData["Compound Interest"];
  const interestData = [...props.graphData["Yearly Interest"]];
  const date = new Date();
  const currentYear = date.getFullYear();
  const barWidth = (1 / props.graphData["Yearly Gains"].length) * 100 + "%";
  const arrYearlyGains = props.graphData["Yearly Gains"].map((item, index) => {
    return (
      <GraphBar
        width={barWidth}
        maxHeight={netGains}
        height={item}
        heightInterest={interestData[index]}
        heightDeposits={(index + 1) * 12 * props.monthlyDeposit}
        year={currentYear + index + 1}
        barData={props.graphData}
      />
    );
  });
  return <div className="graph-bars">{arrYearlyGains}</div>;
};

export default GraphBars;
