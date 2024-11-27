import "./single-page.css";
import Modal from "../../components/Modal/Modal";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export const SinglePage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);

  const fetchCharacterById = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch character");
      })
      .then((character) => setCharacter(character))
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  useEffect(() => {
    fetchCharacterById(id);
  }, [id]);

  return (
    <>
      <div className="single-page">
        <div className="img-div">
          <img src={character?.image} alt="character" />
        </div>
        <div className="info-div">
          <h2>Name: {character?.name}</h2>
          <h3>Species: {character?.species}</h3>
          <h3>Gender: {character?.gender}</h3>
          <h3>Status: {character?.status}</h3>
          <h3>Location: {character?.location.name}</h3>
        </div>
        <div className="episodes">
          <h2>Episodes:</h2>
          {character?.episode.map((e) => {
            return <Modal key={e + crypto.randomUUID()} episodeUrl={e} />;
          })}
        </div>
      </div>
    </>
  );
};
