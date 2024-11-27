import { Link } from "react-router-dom";
export const Card = ({ character }) => {
  return (
    <Link
      to={`/character/${character.id}`}
      // onClick={() => {
      //   console.log(character);
      // }}
    >
      <div className="card">
        <img src={character.image} alt="character" />
        <h3>{character.name}</h3>
        <button>Like</button>
      </div>
    </Link>
  );
};
