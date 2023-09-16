/* eslint react/prop-types: 0 */

import { useState, useEffect } from "react";
import Loading from "./loading";
import Tours from "./tours";

const url = "http://localhost:3000/dataForTours/";

function OurTours() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
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
      <main className=" w-11/12 max-w-5xl my-20 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center my-6 tracking-widest capitalize leading-loose mb-0">
            no tours left
          </h2>
          <button
            className="inline-block w-24 my-8 mx-auto py-1 px-2 text-white bg-teal-600  cursor-pointer text-lg tracking-widest rounded-md shadow-md shadow-slate-400 hover:shadow-slate-700"
            onClick={() => fetchTours()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-300">
      <div className=" w-10/12 max-w-4xl py-20 mx-auto">
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </main>
  );
}

export default OurTours;
