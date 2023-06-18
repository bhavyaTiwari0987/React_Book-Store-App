import React from "react";
import { useState } from "react";
import style from "../public/CSS/CartItem.module.css";
import {Link} from 'react-router-dom';

function CartItemsList({ Cart , deleteFromCart , CartTotal , updateCartTotal}) {
  const [showCart, setShowCart] = useState(false);
  function openCart() {
    setShowCart(true);
  }
  function closeCart() {
    setShowCart(false);
  }
  function deleteBook(currBook){
    const newCart = Cart;
    const index = newCart.indexOf(currBook);
    newCart.splice(index, 1);
    deleteFromCart(newCart);
    updateCartTotal(newCart);
  }

  return (
    <div>
      <div className={style.cartButton}>
      <button onClick={openCart}>CART</button>
      {Cart.length > 0 ? <span>{Cart.length}</span> : ""}
      </div>
      
      <div>
        {showCart ? (
          <div className={style.cartModal}>
            <div className={style.cartHeading}>
            <p >Cart Items</p>
            <button onClick={closeCart}>❌</button>
            </div>
            <div className={style.cartTotal}>
              <span>Total: {CartTotal}/-</span>
              <button>Place Order</button>
            </div>
           
            
            {Cart.length > 0 ? <span>
                {Cart.map((item) =>
                 <div className={style.cartContent} key={item.title}>
                    <img src={item.imageLink} alt="book"></img>
                    <div>
                      <p>{item.title}</p>
                      <p>{item.author}</p>
                      <p>{item.price}/-</p>
                    </div>
                    <button onClick={()=> {deleteBook(item); closeCart()}}>
                     delete</button>
                </div>)}

            </span> : <span></span>}
            
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CartItemsList;
