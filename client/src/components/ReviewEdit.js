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
        .then(updatedReview => {
            console.log("got here")
            onUpdateReview(updatedReview)})
    }

    return (
        <form onSubmit={handleUpdateReview}>
            <textarea
                id="edit-review"
                value={editReview}
                onChange={handleChangeNewReview}
                />
            <button>Save</button>
        </form>
    )

}

export default ReviewEdit;
