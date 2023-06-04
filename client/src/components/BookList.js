import React from "react";
import {Link} from "react-router-dom"

function BookList({book}) {
  const {title, year, author, description, poster_url, category, id} = book

  return (
    <div className="bookcard">
        <div className="poster">
            <img src={poster_url} alt={title + " Poster"} />
        </div>
        <div className="bookdetail">
          <Link to={`/books/${id}`}>
            <h2>{title}</h2>
            </Link>
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