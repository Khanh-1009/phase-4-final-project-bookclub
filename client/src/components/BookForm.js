import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookForm({onAddNewBook}) {
  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    author: "",
    description: "",
    poster_url: "",
    category: "",
  })
  const navigate = useNavigate()

  function handleChange(e){
    const keyValue = e.target.id
    setFormData({
      ...formData,
      [keyValue]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((res) => {
      if (res.ok){
        res.json().then((newBook) => {
          onAddNewBook(newBook)
          setFormData({ 
            title: "",
            year: "",
            author: "",
            description: "",
            poster_url: "",
            category: ""
          })
          alert("Thanks for being awesome! We have posted this new book in our website for all members to enjoy!")
          navigate('/')
        })
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <div className="book-form">
        <h1>Add New Book</h1>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <br/>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
          <br/>
          <label>Year</label>
          <br/>
          <input
            type="number"
            id="year"
            value={formData.year}
            onChange={handleChange}
          />
          <br/>
          <label>Author</label>
          <br/>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={handleChange}
          />
          <br/>
          <label>Description</label>
          <br/>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
          <br/>
          <label>Poster</label>
          <br/>
          <input
            type="text"
            id="poster_url"
            value={formData.poster_url}
            onChange={handleChange}
          />
          <br/>
          <label>Category</label>
          <br/>
          <input
            type="text"
            id="category"
            value={formData.category}
            onChange={handleChange}
          />
          <button>Submit Book</button>
          {errors.length > 0 && (
            <div>
              {errors.map((error) => (
                <ul className="error" key={error}><span>!</span>{error}</ul>
              ))}
            </div>
          )}
        </form>
    </div>
  );
}

export default BookForm;