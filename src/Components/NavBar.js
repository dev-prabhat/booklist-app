import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const NavBar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Ninja Reading List</h1>
            <p>Currently, {books.length} {books.length === 1 ? 'book' : 'books'} is in Local DB</p>
        </div>
    )
}

export default NavBar