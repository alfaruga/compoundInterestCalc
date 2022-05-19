import GraphBars from "./GraphBars";
import "./GraphArea.css";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

const GraphArea = (props) => {
  return (
    <div className="graph-area">
      <div>Y axis</div>
      <div className="graph-area_xaxis">
        BArs and X axis
        <div className="graph-area_titles">
          <h3>ROI: {props.graphData["Net Gains"]}</h3>
          <h3>Compound inerest: {props.graphData["Compound Interest"]}</h3>
        </div>
        <div className="graph-area_bars">
          <GraphBars
            graphData={props.graphData}
            monthlyDeposit={props.monthlyDeposit}
          />
        </div>
        <div>Xaxis</div>
      </div>
    </div>
  );
};

export default GraphArea;
