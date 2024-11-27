import { HomePage } from "./pages/HomePage/HomePage";
import { SinglePage } from "./pages/SinglePage/SinglePage";
import { Head } from "./components/Header/Head";
import { useState, useEffect } from "react";
import { CHARACTER_URL } from "./constants";
import "./app.css";
function App() {
  const [clickedChar, setClickedChar] = useState(null);
  //usestate za prikaz podataka iz fetcha
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(CHARACTER_URL + `?page=${page}`)
      .then((res) => res.json())
      //.results iz api-ja da povuce podatke (preko setData setter)
      .then((data) => {
        setData(data.results);
        // console.log(data?.results);
      });
  }, [page]);

  const handleNextPageChange = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPageChange = () => {
    setPage((nextPage) => nextPage - 1);
  };

  return (
    <div className="App">
      <Head setClickedChar={setClickedChar} setPage={setPage} />
      {!clickedChar ? (
        <HomePage
          characters={data}
          setClickedChar={setClickedChar}
          nextPage={handleNextPageChange}
          prevPage={handlePrevPageChange}
          page={page}
          setPage={setPage}
        />
      ) : (
        <SinglePage clickedChar={clickedChar} />
      )}
    </div>
  );
}

export default App;
