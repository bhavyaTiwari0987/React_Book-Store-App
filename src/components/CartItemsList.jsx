import React from "react";
import { useState } from "react";
import style from "../public/CSS/CartItem.module.css";

function CartItemsList({ Cart }) {
  console.log(Cart);
  const [showCart, setShowCart] = useState(false);
  function openCart() {
    setShowCart(true);
  }
  function closeCart() {
    setShowCart(false);
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
           
            
            {Cart.length > 0 ? <span>
                {Cart.map((item) =>
                 <div className={style.cartContent}>
                    <img src={item.imageLink} alt="book"></img>
                    <div>
                      <p>{item.title}</p>
                      <p>{item.author}</p>
                      <p>{item.price}</p>
                    </div>
                    <button>Delete</button>
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
