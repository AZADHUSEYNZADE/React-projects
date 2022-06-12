import React, { useState, useEffect } from "react";
import "./list.css";

import User from "./user.png";
function List() {
  const [people, setPeople] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((actualData) => setPeople(actualData));
  }, []);

  return (
    <div className="mainListDiv">
      <h5>{people.length} birthdays today</h5>
      {people.map((user) => {
        return (
          <div>
            <ul>
              <li>
                <div>
                  <img src={User} alt="user" />
                </div>
                <div>
                  <h6> {user.name}</h6>
                  <p> {user.address.city}</p>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default List;
