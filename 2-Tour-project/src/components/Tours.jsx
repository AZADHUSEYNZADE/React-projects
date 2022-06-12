import React from "react";
import Tour from "../components/Tour";
function Tours({ tours, removeTour }) {
  return (
    <div>
      <h1> Our tours</h1>
      <div className="underline">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
