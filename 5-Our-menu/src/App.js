import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import data from "../src/data";

const allCategories = [
  "all",
  ...new Set(data.map((category) => category.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const newFilteredItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter(
      (filteredData) => filteredData.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <div className="underline"></div>
      <Categories newFilteredItems={newFilteredItems} categories={categories} />
      <Menu menuItems={menuItems} />
    </div>
  );
}

export default App;
