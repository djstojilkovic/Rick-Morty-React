import "./home-page.css";
import { Card } from "../../components/Card/Card";
// import { Pagination } from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
export const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  // const fetchAllCharacters = () => {
  //   fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
  //     .then((response) => response.json())
  //     .then((data) => setCharacters(data.results));
  // };
  const fetchAllCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch characters");
      })
      .then((data) => setCharacters(data.results))
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);
  return (
    <>
      {/* <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => {
            prevPage();
          }}
        >
          Prev
        </button>
        <Pagination page={page} setPage={setPage} />
        <button
          disabled={page === 42}
          onClick={() => {
            nextPage();
          }}
        >
          Next
        </button>
      </div> */}
      <div className="characters">
        {characters.map((char) => {
          return (
            <Card key={char.name + crypto.randomUUID()} character={char} />
          );
        })}
      </div>
    </>
  );
};
