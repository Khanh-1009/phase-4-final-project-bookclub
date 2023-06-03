import React from "react";
import BookList from "./BookList";

function Home({books}) {
  

  return (
    <div className="main">
      <div className="sidebar">
        
      </div>
      {books.map((book) => (
        <BookList key={book.id} book={book}/>
      ))}
    </div>
  );
}

export default Home;

