import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import BookEdit from "./BookEdit";

function BookDetail({books, setBooks, onUpdateDescription}) {
  const [currentBook, setCurrentBook] = useState({reviews: []})
  const [isEditBook, setIsEditBook] = useState(false)
  const params = useParams()
  const bookId = parseInt(params.id)

  useEffect(() => {
    if (books.length > 0) {
      const chosenBook = books.find(({ id }) => id === bookId)
      setCurrentBook(chosenBook)
    }
  }, [books])

  function handleAddReview(newReview){
    const addNewReview = [newReview, ...currentBook.reviews]
    currentBook.reviews = addNewReview
    const updatedBookAfterAddedReview = books.map(book => book.id === currentBook.book_id ? currentBook : book)
    setBooks(updatedBookAfterAddedReview)
  }

  function handleDeleteReview(removeReview){
    const updateAfterRemove = currentBook.reviews.filter((review) => review.id !== removeReview.id)
    currentBook.reviews = updateAfterRemove
    const updatedBookAfterRemoveReview = books.map((book) => book.id === currentBook.book_id ? currentBook : book)
    setBooks(updatedBookAfterRemoveReview)
  }

  function handleChangeReview(updatedReview){
    const updateReviewOfBook = currentBook.reviews.map((review) => {
      if (review.id === updatedReview.id){
        return updatedReview
      } else {
        return review
      }
    })
    currentBook.reviews = updateReviewOfBook
    const updatedBookAfterEditReview = books.map(book => book.id === currentBook.book_id ? currentBook : book)
    setBooks(updatedBookAfterEditReview)
  }

  function handleEditDescription(editedSummary){
    setIsEditBook(false)
    onUpdateDescription(editedSummary)
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
              {isEditBook ? <BookEdit 
              id={currentBook.id} description={currentBook.description}
              onEditDescription={handleEditDescription}/> : <p>{currentBook.description}</p>}
          </div>
          <div className="button-book">
          {isEditBook ? "" : <button style={{margin:"15px"}} onClick={() => setIsEditBook((isEditBook) => !isEditBook)}>Edit Summary</button>}
          </div>
      </div>
      <ReviewForm onAddReview={handleAddReview}/>
      <h2 id="audience-reviews">Audience Reviews</h2>
      {currentBook.reviews.map((bookReview) => (
        <Reviews key={bookReview.id} bookReview={bookReview}
        onChangeReview={handleChangeReview}
        onDeleteReview={handleDeleteReview}/>
      ))}
    </div>
  );
}

export default BookDetail;