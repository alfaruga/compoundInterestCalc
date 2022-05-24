import "./YAxis.css";

const YAxis = (props) => {
  let arr = [];
  let yAxisMax = props.limit;
  let n = 0;
  while (yAxisMax >= 10) {
    yAxisMax /= 10;
    Math.ceil(yAxisMax);
    n++;
  }
  yAxisMax *= Math.pow(10, n);
  console.log(yAxisMax);
  let ticks = 90 / 8 + "%";

  for (let i = 0; i < 8; i++) {
    arr.unshift(
      <div style={{ height: `${ticks}` }} className="yaxis_tick">
        {Math.ceil(((yAxisMax / 8)*(i + 1)/1000))}<div className="yaxis_line"></div>
      </div>
    );
  }
  return (
    <div className="yaxis">
      <div className="yaxis_ticks">{arr}</div>
      <div className="yaxis_label">$10<sup>3</sup>/Yrs</div>
    </div>
  );
};

export default YAxis;
