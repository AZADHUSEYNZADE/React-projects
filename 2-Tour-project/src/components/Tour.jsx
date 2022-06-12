import React, { useState } from "react";
import "../styles/tour.css";
function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="mainDiv">
      <div className="bottomSide">
        <img src={image} alt={id} />
        <div className="nameAndPrice">
          <h6 className="name">{name}</h6>
          <p className="price">${price}</p>
        </div>

        <p className="info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="toggleButton"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button className="notInterested" onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
