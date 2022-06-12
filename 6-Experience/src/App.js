import React, { useState, useEffect } from "react";
import "./App.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [workers, setWorkers] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const result = await fetch(url);
    const data = await result.json();
    setWorkers(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(workers);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  const { company, dates, duties, title } = workers[value];
  return (
    <>
      <h1 className="mainTitle">Experience</h1>
      <div className="underline"></div>

      <div className="mainDiv">
        <div className="leftSide">
          {workers.map((work, index) => {
            return (
              <button onClick={() => setValue(index)}>{work.company}</button>
            );
          })}
        </div>
        <div className="rightSide">
          <h1 className="title">{title}</h1>
          <p className="company">{company}</p>
          <p className="date">{dates}</p>
          {duties.map((duty) => {
            return (
              <div className="dutySide">
                <small className="duty">
                  <AiOutlineDoubleRight className="icon" />
                  {duty}
                </small>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
