import Control from "./Control";
import './Controls.css'
const Controls = (props) => {

    const updateValues=(key, value)=>{
        props.updateHandler(key, value)
    }
  

    let arr = new Array(props.controlsValues.map(value=>{
   return (<Control keyAndValueGetter={updateValues} key={value.key} label={value.key} value={value.value} />) 
  })
  )
return (<div className="controls">
    {arr}
</div>)
};

export default Controls;