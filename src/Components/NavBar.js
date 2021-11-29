import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const NavBar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Ninja Reading List</h1>
            <p>{books.length}</p>
        </div>
    )
}

export default NavBar