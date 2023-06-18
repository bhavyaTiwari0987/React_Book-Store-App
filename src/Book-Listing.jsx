import React from "react";
import { Link } from "react-router-dom";
import BooksData from "./data";
import style from "./public/CSS/BookListing.module.css";
import { useState } from "react";
import BookCard from "./components/bookCard";
import Navbar from "./components/navbar";
import CartItemsList from "./components/CartItemsList";

const BookListing = () => {
  const [BookList, setBookList] = useState(BooksData);
  const [filterTextValue, setFilterTextValue] = useState("all");
  const [query, setQuery] = useState("");
  const [Cart, setCart] = useState([]);
  const [CartTotal , setCartTotal]= useState(0);

  let filterBooksList = BookList.filter((item) => {
    if (filterTextValue === "available") {
      return item.isAvailable === true;
    } else if (filterTextValue === "unavailable") {
      return item.isAvailable === false;
    } else {
      return item;
    }
  });
  function addInCart(newCart) {
    setCart(newCart);
  }
  function deleteFromCart(newCart , index){  
    setCart(newCart);    
  }

  function onFilterValueChange(e) {
    setFilterTextValue(e.target.value);
  }
  function updateCartTotal(newCart){
    let total = 0;
    for(let i = 0;i<newCart.length;i++){
      total= total + newCart[i].price;
    }
    setCartTotal(total) 
 }

  return (
    <div className="BookListing-container">
      {/* Navbar */}
      <Navbar Cart={Cart} />

      {/* Search container */}
      <div className={style.navbarMini}>
        {/* input box */}
        <input
          type="text"
          placeholder="Searh book here.."
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        {/* Filter box */}
        <div className={style.priceFilter} onChange={onFilterValueChange}>
          <select name="isAvailable">
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        {/* Cart Open Button */}
        <CartItemsList updateCartTotal={updateCartTotal} CartTotal={CartTotal} Cart={Cart} deleteFromCart={deleteFromCart} />
      </div>

      <div className={style.bookList}>
        {filterBooksList
          .filter((item) => item.title.toLowerCase().includes(query))
          .map((book) => (
            <BookCard
              key={book.title}
              book={book}
              Cart={Cart}
              addInCart={addInCart}
              updateCartTotal={updateCartTotal}
            />
          ))}
      </div>
    </div>
  );
};

export default BookListing;
