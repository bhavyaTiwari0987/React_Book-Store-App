import React from 'react'
import style from '../public/CSS/BookCard.module.css';
import { Link } from 'react-router-dom';


function BookCard({ book, Cart, addInCart , updateCartTotal }) {
  function handleAddToCart(book) {
    const newCart = [...Cart, book];
    addInCart(newCart);
    updateCartTotal(newCart);
  }
  return (
    <div className={style.bookCard} key={book.title} >
      <img src={book.imageLink} alt="book" />
      <div className={style.cardContent}>
        <p>{book.title}</p>
        <p>Price: {book.price}/-</p>
        {book.isAvailable ? <button style={{ background: "#099268", height: 30, width: 80}}>Available</button> : <button style={{ background: "#e03131", height: 30, width: 80}}>Unavailable</button>}
        <div>
          <Link to="/BookDetails" state={{ data: book }}>
            Book Details
          </Link>
        </div>

        <button onClick={() => handleAddToCart(book)}>
          Add to cart
        </button>
      </div>


    </div>
  )

}

export default BookCard