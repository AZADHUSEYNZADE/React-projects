import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDrinks(res);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {drinks
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((drink) => {
          return (
            <div>
              <h5>{drink.title}</h5>
            </div>
          );
        })}
    </div>
  );
}

export default App;
