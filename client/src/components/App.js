// import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './Home';
import BookDetail from './BookDetail';
import { UserProvider } from '../user';
import Login from './Login';
import Signup from './Signup';
import BookForm from './BookForm';

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("/books")
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  function handleAddNewBook(newBook){
    setBooks([...books, newBook])
  }

  function handleUpdateDescription(updatedDescription){
    const changedDescription = books.map((book) => {
      if (book.id === updatedDescription.id) {
        return updatedDescription
      } else {
        return book
      }
    })
    setBooks(changedDescription)
  }

  return (
    <div >
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home books={books}/>} />
          <Route path="/books/:id" element={<BookDetail 
          books={books} setBooks={setBooks}
          onUpdateDescription={handleUpdateDescription}/>} />
          <Route path="/add-book" element={<BookForm onAddNewBook={handleAddNewBook}/>} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App;
