import React, { useContext, useEffect, useState } from "react";
import BookList from "./BookList";
import {UserContext} from '../user';
import { Link } from "react-router-dom";

function Home({books}) {
  const {user} = useContext(UserContext)
  // const [bookList, setBookList] = useState([])

  // console.log(bookList)

  // useEffect(() => {
  //   if (books.length > 0) {
  //     setBookList(books)
  //   }
  // }, [books])

  console.log(books)

  if (!user || user.error) {
    return (<h2 id="login-sign">Please <Link to="/login" style={{color: "white"}}>Login</Link> or <Link to="/signup" style={{color: "white"}}>Signup</Link> to share your knowledge and love of greatest books with other book lovers!</h2>)
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

