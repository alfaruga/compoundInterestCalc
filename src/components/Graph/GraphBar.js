import "./GraphBar.css";

const GraphBar = (props) => {
  const heightStyle = (props.height / props.maxHeight) * 90 + "%";
  const interestHeight = (props.heightInterest / props.height) * 100 + "%";
  const depositsHeight = (props.heightDeposits / props.height) * 100 + "%";
  return (
    <div className="graph-bar" style={{ height: `${heightStyle}`,  width: `${props.width}`}}>
      
        {props.height}
        <div
        className="graph-bar_interest"
        style={{ height: `${interestHeight}` }}
      >
        {props.heightInterest}
      </div>
      <div
        className="graph-bar_aportations"
        style={{ height: `${depositsHeight}` }}
      >
        {props.heightDeposits}
      </div>
     
    </div>
  );
};

export default GraphBar;
