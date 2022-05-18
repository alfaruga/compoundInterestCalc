import './GraphArea.css';
import XAxis from "./XAxis";
import YAxis from "./YAxis";


const GraphArea = props=>{
    return(<div className='graph-area'>
        
        <div>Y axis</div>
        <div>BArs and X axis
            <h3>ROI: {props.graphData["Net Gains"]}</h3>
            <h3>Compound inerest: {props.graphData["Compound Interest"]}</h3>
            <h3>Yearly Gains: {props.graphData["Yearly Gains"].map(item=><div>{item}</div>)}</h3>
            <h3>Yearly copound interest: {props.graphData["Yearly Interest"].map(item=><div>{item}</div>)}</h3>

        </div>
    </div>)
}

export default GraphArea;