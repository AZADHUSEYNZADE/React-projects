import React from "react";
import "../styles/menu.css";
import Cake from "../images/item-1.jpeg";
function Menu({ menuItems }) {
  return (
    <div className="menu">
      {menuItems.map((item) => {
        return (
          <div key={item.id} className="mainMenuDiv">
            <img src={Cake} alt={item.title} />

            <div>
              <p className="title">{item.title}</p>
              <p className="desc">{item.desc}</p>
              <p className="price">${item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
