import React from 'react'
import {useLocation} from 'react-router-dom';

const ShoppingCart = (props) => {
  const location = useLocation();
  const cart = location.state?.data;
  console.log(cart);
  return (
    <div>Shopping-Cart</div>
  )
}

export default ShoppingCart