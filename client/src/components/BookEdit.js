import React, { useState } from "react";

function BookEdit({id, description, onEditDescription}){
    const [editDescription, setEditDescription] = useState(description)

    function handleChangeDescription(e){
        setEditDescription(e.target.value)
    }

    function handleSubmitNewDescription(e){
        e.preventDefault()
        fetch(`/books/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: editDescription,
            }),
        })
        .then(res => res.json())
        .then(updatedDescription => onEditDescription(updatedDescription))
    }

    return (
        <form onSubmit={handleSubmitNewDescription}>
            <textarea
                id="edit-book-description"
                value={editDescription}
                onChange={handleChangeDescription}
            />
            <button>Save</button>
        </form>
    )
}

export default BookEdit;