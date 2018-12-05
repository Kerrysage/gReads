import React, { Component } from 'react'
import React from 'react'
import Book from './Book'
import { Card } from 'semantic-ui-react';
 const Library = ({books}) => {
    return ( 
    <Card.Group centered>
    {books.map((book, i) => {
        return (
            <Book 
                key={i}
                title={book.title}
                genre={book.genre}
                description={book.description}
                img={book.coverURL}
                authors={book.authors}
            />
        )
     })}
    </Card.Group>
    )
}

export default Library