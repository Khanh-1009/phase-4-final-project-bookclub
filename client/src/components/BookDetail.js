import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

function BookDetail({books, setBooks}) {
  const [currentBook, setCurrentBook] = useState({reviews: []})
  const params = useParams()
  const bookId = parseInt(params.id)

  useEffect(() => {
    if (books.length > 0) {
      const chosenBook = books.find(({ id }) => id === bookId)
      setCurrentBook(chosenBook)
    }
  }, [books])

  function handleAddReview(newReview){
    const addNewReview = [...currentBook.reviews, newReview]
    currentBook.reviews = addNewReview
    const updatedBookAfterAddedReview = books.map(book => book.id === currentBook.book_id ? currentBook : book)
    setBooks(updatedBookAfterAddedReview)
  }

  return (
    <div>
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
          <button style={{margin:"15px"}}>Edit Summary</button>
          {/* <button style={{margin:"15px"}}>Request a copy</button> */}
          </div>
      </div>
      <ReviewForm onAddReview={handleAddReview}/>
      <h2 id="audience-reviews">Audience Reviews</h2>
      {currentBook.reviews.map((bookReviews) => (
        <Reviews key={bookReviews.id} bookReviews={bookReviews}/>
      ))}
    </div>
  );
}

export default BookDetail;