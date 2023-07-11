import { useState } from "react";
import "./App.css";
import ItemAPI from "./components/ItemAPI/ItemAPI";
import { useEffect } from "react";

function App() {
  const url = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllData() {
      const response = await fetch(url);
      const data = await response.json();

      setData(data.results);
    }

    getAllData();
  }, []);

  const [search, setSearch] = useState("");

  function getSearch(e) {
    setSearch(e.target.value);
  }

  const searchLower = search.toLowerCase();

  const dataFilter = data.filter((character) =>
    character.name.toString().toLowerCase().includes(searchLower)
  );

  return (
    <>
      <div className="inputDiv">
        <input type="text" onChange={getSearch}></input>
      </div>

      <div className="character-grid">
        {dataFilter.map((character) => {
          return (
            <ItemAPI
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              local={character.origin.name}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
