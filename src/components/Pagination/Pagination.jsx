export const Pagination = ({ page, setPage }) => {
  let pagArr = [1, 2, 3, 4, 5];
  if (page > 3 && page < 40) {
    //page 4 => 2,3,4,5,6
    //page 5=> 3,4,5,6,7
    //page 6 => 4,5,6,7,8
    pagArr = [page - 2, page - 1, page, page + 1, page + 2];
  } else if (page >= 40) {
    pagArr = [38, 39, 40, 41, 42];
  }
  return (
    <div>
      {pagArr.map((e) => {
        return (
          <button
            className="current-page"
            onClick={() => {
              setPage(e);
            }}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};
