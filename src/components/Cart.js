import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Cart.css'


const Cart = (props) => {
  const bgStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1564275513-b6fbcb2f0962?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1787&q=80)',
    backgroundPosition:'0% 30%',
  };

  const linkStyle = {
    color: 'brown',
    textDecoration: 'none',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600'
  };

  return (
    <div>
    <div className="top-row" style={bgStyle}><h1> Your Cart </h1></div>
    <div className="cart-div">
      <div className="cart-title"><h2> Items in the cart ({props.itemsQuantity}) :</h2></div>
      <div className="cart-table">
        <ol>
        {props.cart.map(item => (
          <li key={item.id}>
          <Link style={linkStyle} to={`store/${item.id} `}>
            <img src={item.image} alt={item.name}/>
            <span className="">{item.name}</span>
          </Link>
          <p className="item-price">{item.price}</p>
          <button className="add-rem" onClick={() => {
            props.setCart(...props.cart, props.cart[item.id].quantity + 1)}}>+</button>

            {item.quantity}

            <button className="add-rem" onClick={() => {
            props.setCart(...props.cart, props.cart[item.id].quantity - 1)}}>-</button>
            
            <span></span>
            <hr/>        
          </li>  
        ))}
        </ol>
        <div className="total">{props.total}</div>
        <button className="cart" onClick={() => {props.addToCart(props.cart[0], 5)}}>add to cartt</button>
      </div>
      </div>
      </div>
  );
}

export default Cart;
