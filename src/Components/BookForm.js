import React, { useState, useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const BookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_BOOK", book: {
                title, author
            }
        })
        setAuthor("")
        setTitle("")
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="Book Title" value={title}
                onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Author Name" value={author}
                onChange={(e) => setAuthor(e.target.value)} required />
            <button className="btn">Add Book</button>
        </form>
    )
}

export default BookForm
