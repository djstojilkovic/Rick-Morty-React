import "./single-page.css";
import Modal from "../../components/Modal/Modal";
export const SinglePage = ({ clickedChar }) => {
  return (
    <>
      <div className="single-page">
        <div className="img-div">
          <img src={clickedChar.image} alt="character" />
        </div>
        <div className="info-div">
          <h2>Name: {clickedChar.name}</h2>
          <h3>Species: {clickedChar.species}</h3>
          <h3>Gender: {clickedChar.gender}</h3>
          <h3>Status: {clickedChar.status}</h3>
          <h3>Location: {clickedChar.location.name}</h3>
        </div>
        <div className="episodes">
          <h2>Episodes:</h2>
          {clickedChar.episode.map((e) => {
            return <Modal key={e + crypto.randomUUID()} episodeUrl={e} />;
          })}
        </div>
      </div>
    </>
  );
};
