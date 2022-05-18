import Controls from './Controls';

const Form = props =>{
    const keyAndValueExtractor=(key, value)=>{
        props.updateHandler(key, value)
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        props.makeGraph()
    }
    return(
        <form onSubmit={submitHandler}>
            <Controls updateHandler={keyAndValueExtractor} controlsValues={props.controlsData}/>
            <button>Build Graph</button>
        </form>
    )
}

export default Form;