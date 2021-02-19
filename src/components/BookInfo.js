import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import books from '../assets/childrensbooks.json';
import { useHistory } from 'react-router-dom';

/**
 * 1. Hämta id från url:en exempelvis localhost:3000/info/1 
 * 2. Läs in childrensbooks.json
 * 3. Filtera ut den bok som motsvarar det ID som finns i url:en
 * 4. Visa detaljerad info om bok
 */


function BookInfo() {
    //Hämtar ut vad som finns i url:en efter /info det som i App.js är :id
    const { id } = useParams();
    const history = useHistory();
    const [book , setBook] = useState({});
    console.log('useParams: ', id);

    useEffect(async () => {          //server.get('/books/:id'
        const response = await fetch(`http://localhost:7000/books/${id}`);
        const data = await response.json();
        
        setBook(data);
    }, [])

    return (
        <main className="background-dark">
            <div className="book-info">
                <header>
                    <a href="#" className="back" onClick={ () => history.push('/') }>&#8592;</a>
                </header>
                <section className="display">
                    <article className="book" style={{ backgroundColor: book.color }}>
                        <section className="bg"></section>
                        <section className="content">
                            <aside></aside>
                            <section className="about">
                                <h2>{ book.title }</h2>
                                <h3>{ book.author }</h3>
                            </section>
                        </section>
                    </article>
                </section>
                <section className="info">
                    <h1>{ book.title }</h1>
                    <h3>{ book.author }</h3>
                    <p>{ book.plot }</p>
                    <footer>
                        <p><b>Audience:</b> { book.audience }</p>
                        <p><b>First Published:</b> { book.year }</p>
                        <p><b>Pages:</b> { book.pages || '-' }</p>
                        <p><b>Publisher:</b> { book.publisher }</p>
                    </footer>
                </section>
            </div>
        </main>
    )
}

export default BookInfo;