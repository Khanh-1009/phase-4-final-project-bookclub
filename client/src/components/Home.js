import React, { useContext } from "react";
import BookList from "./BookList";
import {UserContext} from '../user';

function Home({books}) {
  const {user} = useContext(UserContext)

  if (!user || user.error) {
    return (<h3>Please Login or Signup</h3>)
  } else {
    return (
      <div className="app">
        <h1>Most Recommended Books by Our Members</h1>
        <br/>
        {books.map((book) => (
          <BookList key={book.id} book={book}/>
        ))}
      </div>
    );
  }
}

export default Home;

