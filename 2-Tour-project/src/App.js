import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const url = "https://course-api.com/react-tours-project";

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <div>
        <h1>No tours left</h1>
        <button className="refresh" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </div>
  );
}

export default App;
