import GraphArea from "./GraphArea";
import "./Graph.css";
const Graph = (props) => {

    
  let content = <h1>The graph will appear here</h1>;
  
  if (props.graphData["Net gains"] === 0) {
    console.log("zero")
  }else{content=<GraphArea graphData={props.graphData} years={props.years}/>}

  return (
    <div className="graph">
      <h3 style={{ height: "10%" }}>Compound interest</h3>
      {content}
    </div>
  );
};

export default Graph;
