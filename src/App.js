import React from 'react'
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import NavBar from './Components/NavBar';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
