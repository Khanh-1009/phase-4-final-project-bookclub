import React, { useContext } from "react";
import BookList from "./BookList";
import CategoryFilter from "./CategoryFilter";
import {UserContext} from '../user';

function Home({books}) {
  const {user} = useContext(UserContext)

  if (!user) {
    return (<h3>Please Login or Signup</h3>)
  } else {
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
}

export default Home;

