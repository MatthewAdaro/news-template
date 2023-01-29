import React from "react";

const Pages = ({ totalPost, postPerPages, setCurrentPage }) => {
  let pages = [];
  for (
    let counter = 1;
    counter <= Math.ceil(totalPost / postPerPages);
    counter++
  ) {
    pages.push(counter);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pages;
