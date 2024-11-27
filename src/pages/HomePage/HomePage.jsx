import "./home-page.css";
import { Card } from "../../components/Card/Card";
import { Pagination } from "../../components/Pagination/Pagination";
export const HomePage = ({
  characters,
  setClickedChar,
  nextPage,
  prevPage,
  page,
  setPage,
}) => {
  return (
    <>
      <div className="pagination">
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
      </div>
      <div className="characters">
        {characters.map((char) => {
          return (
            <Card
              key={char.name + crypto.randomUUID()}
              character={char}
              setClickedChar={setClickedChar}
            />
          );
        })}
      </div>
    </>
  );
};
