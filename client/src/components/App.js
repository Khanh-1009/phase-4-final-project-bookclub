// import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
// import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home';
import { useEffect, useState } from 'react';

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
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home books={books}/>} />
          </Routes>
      </Router> */}
      <Home books={books} />
    </div>
  )
}

export default App;
