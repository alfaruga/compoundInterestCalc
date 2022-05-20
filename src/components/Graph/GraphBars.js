import GraphBar from "./GraphBar";
import "./GraphBars.css";

const GraphBars = (props) => {
  const netGains = props.graphData["Net Gains"];
  const yearlyGains = [...props.graphData["Yearly Gains"]];
  const interestData = [...props.graphData["Yearly Interest"]];

  const arrYearlyGains = props.graphData["Yearly Gains"].map((item, index) => {
    return (
      <div className="graph-bars_container" style={{width: `${props.barWidth}`}}>
        <p>Net gains: {Math.round(yearlyGains[index])}</p>
        <p>Interest: {Math.round(interestData[index])}</p>

        <GraphBar
          key={index}
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
