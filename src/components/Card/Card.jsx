export const Card = ({ character, setClickedChar }) => {
  return (
    <div
      className="card"
      onClick={() => {
        setClickedChar(character);
      }}
    >
      <img src={character.image} alt="character" />
      <h3>{character.name}</h3>
      <button>Like</button>
    </div>
  );
};
