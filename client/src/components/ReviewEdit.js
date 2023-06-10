import React, { useState } from "react";

function ReviewEdit ({id, review, onUpdateReview}){
    const [editReview, setEditReview] = useState(review)

    function handleChangeNewReview(e){
        setEditReview(e.target.value)
    }

    function handleUpdateReview(e){
        e.preventDefault()
        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                review: editReview
            }),
        })
        .then(res => res.json())
        .then(updatedReview => onUpdateReview(updatedReview))
    }

    return (
        <form className="edit-message" onSubmit={handleUpdateReview}>
            <textarea
                id="review"
                value={editReview}
                onChange={handleChangeNewReview}
                />
            <button>Save</button>
          {/* <input type="submit" value="Save" /> */}
        </form>
    )

}

export default ReviewEdit;
