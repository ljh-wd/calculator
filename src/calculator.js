import {useEffect, useState} from "react";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [firstVal, setFirstVal] = useState(null);
  const [result, setResult] = useState("0");
  const [action, setAction] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clear, setClear] = useState(false);

  const changeDisplay = (e) => {
    if (clear) {
      setInput(e.target.textContent);
      setClear(false);
      return;
    }

    if (!clear) {
      setInput(e.target.textContent);
      if (input !== "0") {
        setInput(input + e.target.textContent);
        setDisabled(false);
      }
      if (input.includes("+", "%", "-", "X")) setInput(e.target.textContent);
    }
  };

  const [operator, setOperator] = useState("");

  const actionKeyPressed = (e) => {
    setFirstVal(parseFloat(input));
    setAction(e.target.textContent);
    setDisabled(false);
    setInput("");
  };

  useEffect(() => {
    setResult(null);
    if (action === "+") setResult(firstVal + parseFloat(input));
    if (action === "-") setResult(firstVal - parseFloat(input));
    if (action === "X") setResult(firstVal * parseFloat(input));
    if (action === "%") setResult(firstVal / parseFloat(input));
    setOperator(null);
    setInput(result);
    setClear(true);
  }, [operator === "="]);

  return (
    <div className="calc-shell">
      <div className="display">{input}</div>
      <div className="keys">
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          1
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          2
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          3
        </button>
        <button className="action-key" onClick={() => setInput("0")}>
          AC
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          4
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          5
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          6
        </button>
        <button className="action-key" onClick={(e) => actionKeyPressed(e)}>
          +
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          7
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          8
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          9
        </button>
        <button className="action-key" onClick={(e) => actionKeyPressed(e)}>
          %
        </button>
        <button onClick={(e) => changeDisplay(e)} className="number-key">
          0
        </button>
        <button
          disabled={disabled}
          className="action-key"
          onClick={(e) => {
            changeDisplay(e);
            setDisabled(true);
          }}
        >
          .
        </button>
        <button className="action-key" onClick={(e) => actionKeyPressed(e)}>
          -
        </button>
        <button className="action-key" onClick={(e) => actionKeyPressed(e)}>
          X
        </button>
        <button
          className="action-key"
          onClick={(e) => setOperator(e.target.textContent)}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
