import React from "react";

function Reviews ({bookReviews}){
    const {subject, review, rating, user_id} = bookReviews

    console.log(user_id)

    return (
    <div className="book-review">
        <div className="each-review">
            <h3>{subject} - {rating} &#11088;s</h3>
            <p>{review}</p>
            <p style={{display:"inline-block"}}><i>Posted by user</i></p>
            <button className="btn">Delete Post</button><button className="btn">Edit Post</button>
    
        </div>
    </div>
    )

}

export default Reviews;