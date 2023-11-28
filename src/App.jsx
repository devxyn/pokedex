/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import SearchData from "./components/SearchData";
import AllData from "./components/AllData";

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(20);
  const [searchInput, setSearchInput] = useState("");
  const [searchInfo, setSearchInfo] = useState(null);

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

  const handleLimit = () => setLimit((prev) => prev + 20);

  const search = async () => {
    try {
      const results = await fetch(`${url}/${searchInput}`);
      const data = await results.json();
      setSearchInfo(data);
    } catch (error) {
      setSearchInfo(null);
      console.error(`Error: ${error.message}`);
    }
  };

  const handleKeyDown = () => {
    search();
  };

  return (
    <>
      <Header
        onChange={(e) => setSearchInput(e.target.value)}
        handleKeyDown={handleKeyDown}
        onClick={search}
      />
      {!searchInput && (
        <Pokedex handleLimit={handleLimit}>
          <AllData data={data} imageUrl={imageUrl} />
        </Pokedex>
      )}
      {searchInfo && searchInput && <SearchData data={searchInfo} imageUrl={imageUrl} />}
    </>
  );
}

export default App;
