import "./head.css";
export const Head = ({ setClickedChar, setPage }) => {
  return (
    <div
      className="head"
      onClick={() => {
        setPage(1);
        setClickedChar();
      }}
    >
      Rick & Morty Wiki
    </div>
  );
};
