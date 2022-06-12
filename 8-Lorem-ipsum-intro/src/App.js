import React, { useState } from "react";
import "./App.css";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > amount) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <div className="App">
      <div>
        <h3>tired of boring lorem ipsum?</h3>
        <form onSubmit={handleSubmit}>
          <label>Paragraphs:</label>
          <input
            type="number"
            count={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button>Generate</button>
        </form>
      </div>

      {text.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
}

export default App;
