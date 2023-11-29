/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Pokedex = () => {
  const [limit, setLimit] = useState(20);
  const [data, setData] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon";
  const imageUrl = "https://img.pokemondb.net/artwork/";

  useEffect(() => {
    fetchData();
  }, [limit]);

  const fetchData = async () => {
    try {
      const results = await fetch(`${url}?limit=${limit}`);
      const data = await results.json();
      setData(data.results);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center py-4">
      <div className="flex flex-row flex-wrap items-center justify-center my-5 gap-10">
        {data.map((info, index) => (
          <Link key={index} to={`pokemon/${info.name}`}>
            <div className="border-4 border-black bg-white w-56 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-red-900">
              <img className="w-full h-60 p-4 object-contain " src={`${imageUrl}${info.name}.jpg`} alt={info.name} />

              <div className="flex flex-col justify-center items-center py-4 border-t-2 border-black bg-red-600 text-white ">
                <h2 className="text-xl">{info.name.toUpperCase()}</h2>

                <h2>ID: {index + 1}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button
        className="border-4 border-black bg-yellow-400 text-3xl w-60 px-4 py-2 rounded-lg"
        onClick={() => setLimit((prev) => prev + 20)}>
        LOAD MORE
      </button>
    </div>
  );
};

export default Pokedex;
