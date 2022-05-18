import "./Control.css";

const Control = (props) => {
  const inputHandler = (event) => {
    console.log(event.target.id, event.target.value);
    props.keyAndValueGetter(event.target.id, event.target.value);
  };

  return (
    <div>
      <p>{props.label}</p>
      <input
        id={props.label}        
        onChange={inputHandler}
        value={props.value}
        type="number"
        min="1"
        step="1"
      ></input>
    </div>
  );
};

export default Control;
