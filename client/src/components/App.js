// import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './Home';
import BookDetail from './BookDetail';

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("/books")
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [])

  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home books={books}/>} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </div>
  )
}

export default App;
