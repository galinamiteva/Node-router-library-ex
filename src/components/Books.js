import React, { useState, useEffect } from 'react';
import '../App.css';

import Book from './Book';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(async () => {                      //server.get('/books'
        const response = await fetch('http://localhost:7000/books');
        const data = await response.json();
        setBooks(data);
    }, [])

    return (
        <section className="library">
            <div className="wrapper">
                <main className="books">
                    { books.map((book, index) => {
                        return <Book book={ book } key={ index } />
                    })}
                </main>
            </div>
        </section>
    )
}

export default Books;