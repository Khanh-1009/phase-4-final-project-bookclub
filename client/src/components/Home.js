import React from "react";
import BookList from "./BookList";
import CategoryFilter from "./CategoryFilter";

function Home({books}) {
  

  return (
    <div className="app">
      <div className="sidebar">
        <CategoryFilter />
      </div>
      {books.map((book) => (
        <BookList key={book.id} book={book}/>
      ))}
    </div>
  );
}

export default Home;

