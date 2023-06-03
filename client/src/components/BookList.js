import React from "react";

function BookList({book}) {
  const {title, year, author, description, poster_url, category} = book

  return (
    <div className="bookcard">
        <div className="poster">
            <img src={poster_url} alt={title + " Poster"} />
        </div>
        <div className="bookdetail">
            <h2>{title}</h2>
                <p>
                {category} | {year} 
                </p>
            <p>Author: {author}</p>
            <p>{description}</p>
        </div>
    </div>
  );
}

export default BookList;