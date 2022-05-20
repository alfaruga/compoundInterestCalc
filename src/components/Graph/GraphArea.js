import GraphBars from "./GraphBars";
import "./GraphArea.css";
import Xaxis from "./XAxis";
import YAxis from "./YAxis";

const GraphArea = (props) => {
  const numberOfColumns = props.graphData["Yearly Gains"].length;
  console.log(numberOfColumns);
  const barWidth = (1 / props.graphData["Yearly Gains"].length) * 90 + "%";
  const date = new Date();
  const currentYear = date.getFullYear();

  let content = (
    <div className={"graph-area "+ "graph-area_no_Data"}>
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
        <YAxis className="graph-area_yaxis"/>
        <div className="graph-area_xaxis_bars">
            ROI: {props.graphData["Net Gains"]}<br/>
            Compound inerest: {props.graphData["Compound Interest"]}
          <div className="graph-area_bars">
            <GraphBars
              graphData={props.graphData}
              barWidth={barWidth}
              year={currentYear}
              monthlyDeposit={props.monthlyDeposit}
            />
          </div>
          <Xaxis
            className="graph-area_xaxis"
            barWidth={barWidth}
            year={currentYear}
            columns={numberOfColumns}
          />
        </div>
      </div>
    );
  }

  return content;
};

export default GraphArea;
