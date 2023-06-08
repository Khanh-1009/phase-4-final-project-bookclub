import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetail({books}) {
  const [currentBook, setCurrentBook] = useState({reviews: []})
  const params = useParams()
  const bookId = parseInt(params.id)

  useEffect(() => {
    if (books.length > 0) {
      const chosenBook = books.find(({ id }) => id === bookId)
      setCurrentBook(chosenBook)
    }
  }, [books])

  return (
    <div className="each-book">
        <div className="poster">
            <img src={currentBook.poster_url} alt={currentBook.title + " Poster"} />
        </div>
        <div className="bookdetail">
            <h2>{currentBook.title}</h2>
            <p>
              {currentBook.category} | {currentBook.year} 
            </p>
            <p>Author: {currentBook.author}</p>
            <p>{currentBook.description}</p>
        </div>
        <div className="button-book">
        <button style={{margin:"15px"}}>Read Online</button>
        <button style={{margin:"15px"}}>Request a copy</button>
        </div>
    </div>
  );
}

export default BookDetail;