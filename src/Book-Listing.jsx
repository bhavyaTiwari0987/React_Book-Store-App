import React from "react";
import { Link } from "react-router-dom";
import BooksData from "./data";
import style from "./public/CSS/BookListing.module.css";
import { useState } from "react";
import BookCard from "./components/bookCard";
import Navbar from "./components/navbar";
import CartItemsList from './components/CartItemsList';


const BookListing = () => {
  const [BookList, setBookList] = useState(BooksData);
  const [filterTextValue, setFilterTextValue] = useState("all");
  const [query, setQuery] = useState("");
  const [Cart, setCart] = useState([]);
  let filterBooksList = BookList.filter((item) => {
    if (filterTextValue === "available") {
      return item.isAvailable === true;
    } else if (filterTextValue === "unavailable") {
      return item.isAvailable === false;
    } else {
      return item;
    }
  });
  function updateCart(newCart){
    setCart(newCart);
  }

  function onFilterValueChange(e) {
    setFilterTextValue(e.target.value);
  }

  return (
    <div className="BookListing-container">
      <Navbar Cart={Cart} />
      <div className={style.navbarMini}>
      <input
        type="text"
        placeholder="Searh book here.."
        onChange={(e) => setQuery(e.target.value)}
      ></input>
       <div className={style.priceFilter} onChange={onFilterValueChange}>
        <select name="isAvailable">
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>
  
      <CartItemsList Cart={Cart}/>
      </div>
      
      <div className={style.bookList}>
        {filterBooksList
          .filter((item) => item.title.toLowerCase().includes(query))
          .map((book) => (
            <BookCard
              key={book.title}
              book={book}
              Cart={Cart}
              updateCart={updateCart}
            />
          ))}
      </div>
    </div>
  );
};


export default BookListing;
