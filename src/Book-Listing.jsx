import React from 'react'
import {Link} from 'react-router-dom';
import BooksData from './data';
import style from './public/CSS/BookListing.module.css';

const BookListing = () => {
  return (
        <div className='BookListing-container'>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/BookDetails/345">Book Details Page</Link>
          </div>
          <input type="text" placeholder='Searh book here..'></input>
          <div className={style.bookList}>
            {BooksData.map((book) => {
              return(
                <div className={style.bookCard} key={book.title} >
                  <img src={book.imageLink} alt="book"/>
                  <p>{book.title}</p>
                  <p>{book.author}</p>
                  <p>{book.country}</p>
                  <p>{book.language}</p>
                  <p>{book.pages}</p>
                  <p>{book.year}</p>
                </div>
              )
            })}
          </div>
        </div> 
 )
}

export default BookListing