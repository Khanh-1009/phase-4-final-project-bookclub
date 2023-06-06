import React from "react";

function BookForm() {
  return (
    <div className="book-form">
        <form>
          <label>Title</label>
          <br/>
          <input
            type="text"
            id="title"
            value=""
            onChange=""
          />
          <br/>
          <label>Year</label>
          <br/>
          <input
            type="number"
            id="year"
            value=""
            onChange=""
          />
          <br/>
          <label>Author</label>
          <br/>
          <input
            type="text"
            id="author"
            value=""
            onChange=""
          />
          <br/>
          <label>Description</label>
          <br/>
          <textarea
            id="description"
            value=""
            onChange=""
          />
          <br/>
          <label>Poster</label>
          <br/>
          <input
            type="text"
            id="poster_url"
            value=""
            onChange=""
          />
          <br/>
          <label>Category</label>
          <br/>
          <input
            type="text"
            id="category"
            value=""
            onChange=""
          />
        </form>
    </div>
  );
}

export default BookForm;