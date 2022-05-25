import Controls from './Controls';
import './Form.css';
import React from 'react';
const Form = props =>{
    const keyAndValueExtractor=(key, value)=>{
        props.updateHandler(key, value)
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        props.makeGraph()
    }
    return(
        <form className="control_form" onSubmit={submitHandler}>
            <Controls updateHandler={keyAndValueExtractor} controlsValues={props.controlsData}/>
            <button>Build Graph</button>
        </form>
    )
}

export default Form;