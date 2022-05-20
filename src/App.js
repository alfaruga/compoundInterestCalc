import { useState } from "react";
import "./App.css";
import Form from "./components/Controls/Form";
import Graph from "./components/Graph/Graph";

function App() {
  const controlsValues = [
    { key: "Monthly Deposits", value: +10000 },
    {
      key: "Interest rate",
      value: +6,
    },
    {
      key: "Years",
      value: +20,
    },
    {
      key: "Inflation",
      value: +3,
    },
  ];
  const graphData = {
    "Net Gains": +0,
    "Compound Interest": +0,
    "Yearly Gains": [],
    "Yearly Interest": [],
  };

  const [input, setInput] = useState(controlsValues);
  const [graphValues, setgraphValues] = useState(graphData);

  const updateInput = (key, value) => {
    const copyState = [...input];
    copyState.map((input) => {
      if (input["key"] === key) {
        input["value"] = value;
      }
      return input;
    });
    setInput(copyState);
  };

  const graphBuilder = () => {
    let deposits = parseInt(input[0]["value"]);
    let interest = parseInt(input[1]["value"]);
    let years = parseInt(input[2]["value"]);
    let inflation = parseInt(input[3]["value"]);

    console.log("Building graph...");

    let netGains = 0;
    let yearlyGains = [];
    let yearlyInterest = [];
    for (let i = 1; i <= years * 12; i++) {
      netGains =
        (deposits + netGains) *
        (1 + ((interest - inflation) * 30) / (365 * 100));
      if (i % 12 === 0) {
        yearlyGains = [...yearlyGains, netGains];
        yearlyInterest = [...yearlyInterest, netGains - deposits * i];
        console.log(yearlyGains);
      }
    }
    let compoundInterest = netGains - deposits * years * 12;

    setgraphValues({
      "Net Gains": Math.floor(netGains),
      "Compound Interest": Math.floor(compoundInterest),
      "Yearly Gains": yearlyGains,
      "Yearly Interest": yearlyInterest,
    });
  };

  return (
    <div className="App">
      <Form
        makeGraph={graphBuilder}
        updateHandler={updateInput}
        controlsData={input}
      />
      <Graph
        monthlyDeposit={input[0]["value"]}
        graphData={graphValues}
        input={input}
      />
    </div>
  );
}

export default App;
