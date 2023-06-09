import React, { useContext, useState } from "react";
import { UserContext } from "../user";
import ReviewEdit from "./ReviewEdit"

function Reviews ({bookReview, onChangeReview, onDeleteReview}){
    const {subject, review, rating, id, user_id, username} = bookReview
    const {user} = useContext(UserContext)
    const [isEditing, setEditing] = useState(false)
    const [like, setLike] = useState(false)

    function editingReview(updatedReview){
        setEditing(false)
        onChangeReview(updatedReview)
    }

    function handleLike(){
        setLike((like) => !like)
    }

    function handleDeleteReview(){
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        })
        .then(res => {
            if (res.ok) {
                onDeleteReview(bookReview)
            }
        })
    }

     if (user.id === user_id) {
        if (isEditing) {
            return (<ReviewEdit bookReview={bookReview} onUpdateReview={editingReview}/>)
        } else {
            return (
                <div className="book-review">
                    <div className="each-review">
                        <h3>{subject} - {rating} &#11088;s</h3>
                        <p>{review}</p>
                        <p style={{display:"inline-block"}}><i>Posted by {username}</i></p>
                        <button className="btn" onClick={handleDeleteReview}>Delete Post</button>
                        <button className="btn" onClick={() => setEditing((isEditing) => !isEditing)}>Edit Post</button>
                    </div>
                </div>
            )
        }

    } else {
        return (
            <div className="book-review">
                <div className="each-review">
                    <h3>{subject} - {rating} &#11088;s</h3>
                    <p>{review}</p>
                    <p style={{display:"inline-block"}}><i>Posted by {username}</i></p>
                    {like ? <button className="btn" onClick={handleLike}>Liked &#128077;</button> : 
                    <button className="btn" onClick={handleLike}>Like</button>}
                    
                </div>
            </div>
        )
    }
}

export default Reviews;