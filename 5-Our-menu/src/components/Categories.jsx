import React from "react";
import "../styles/categories.css";
function Categories({ newFilteredItems, categories }) {
  return (
    <div className="btnContainer">
      {categories.map((category) => {
        return (
          <button onClick={() => newFilteredItems(category)}>{category}</button>
        );
      })}
    </div>
  );
}

export default Categories;
