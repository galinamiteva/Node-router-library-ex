import React from 'react';
import { useHistory } from 'react-router-dom';

function Book({ book }) {
    const history = useHistory();

    return (
        <article className="book" onClick={() => history.push(`/info/${book.id}`) } style={{ backgroundColor : book.color }}>
            <section className="bg"></section>
            <section className="content">
                <aside></aside>
                <section className="about">
                    <h2>{ book.title }</h2>
                    <h3>{ book.author }</h3>
                </section>
            </section>
        </article>
    )
}

export default Book;