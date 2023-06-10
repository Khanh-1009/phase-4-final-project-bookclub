import React, { useContext, useState } from "react";
import { UserContext } from "../user";
import ReviewEdit from "./ReviewEdit"

function Reviews ({bookReviews, onChangeReview}){
    const {subject, review, rating, id, user_id} = bookReviews
    const {user} = useContext(UserContext)
    const [isEditing, setEditing] = useState(false)

    function editingReview(updatedReview){
        setEditing(false)
        onChangeReview(updatedReview)
    }

    if (user.id === user_id) {
        return (
            <div className="book-review">
                <div className="each-review">
                    <h3>{subject} - {rating} &#11088;s</h3>
                    {isEditing ? <ReviewEdit id={id} review={review} onUpdateReview={editingReview}/> : <p>{review}</p>}
                    <p style={{display:"inline-block"}}><i>Posted by {user.username}</i></p>
                    <button className="btn" onClick={() => setEditing((isEditing) => !isEditing)}>Edit Post</button>
                    <button className="btn">Delete Post</button>
                </div>
            </div>
            )
    } else {
        return (
            <div className="book-review">
                <div className="each-review">
                    <h3>{subject} - {rating} &#11088;s</h3>
                    <p>{review}</p>
                    <p style={{display:"inline-block"}}><i>Posted by </i></p>
                    <button className="btn">Helpful &#128077;</button>
                </div>
            </div>
            )
    }



}

export default Reviews;