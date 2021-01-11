import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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

  const onDeleteItem = (id) => {
    let cartList = [...props.cart].filter((item) => item.id !== id);
    props.setCart(cartList);
    props.updateQuantity();
    props.updateTotal();
  }

  const onAddQuantity = (id) => {
    let cartList = [...props.cart]
    cartList.forEach(item => {
      if (item.id === id) {
        item.quantity += 1;
        console.log('update quantity to:', item.quantity);
      }
    });
    props.setCart(cartList);
    props.updateQuantity();
    props.updateTotal();
  }

  const onSubtractQuantity = (id) => {
    let cartList = [...props.cart]
    console.log(cartList);
    cartList.forEach(item => {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
        console.log('update quantity to:', item.quantity);
      }
    });
    props.updateQuantity();
    props.updateTotal();
  }

  return (
    <div>
    <div className="top-row" style={bgStyle}><h1> Your Cart </h1></div>
    <div className="cart-div">
      <div className="cart-title"><h2> Items in the cart ({props.itemsQuantity}) :</h2></div>
      <div className="cart-table">
        <ol>
        {props.cart.map((item) => (
          <li key={item.id}>
          <Link style={linkStyle} to={`store/${item.id} `}>
            <img src={item.image} alt={item.name}/>
            <span className="">{item.name}</span>
          </Link>
          <div className="cart-item-menage">
          <p className="item-price">{item.price}</p>
          <button className="add-rem" onClick={(id) => {onAddQuantity(item.id)}}>+</button>

            {item.quantity}

            <button className="add-rem" onClick={(id) => {onSubtractQuantity(item.id)}}>-</button>
            

            <button  id={item.id} onClick = {(id) => onDeleteItem(item.id)}
                  className="trash-del"><FontAwesomeIcon icon={["fas", "trash"]} className= "trash-icon"/></button>
                  </div>
          </li>  
        ))}
        <li>
        </li>
        <div className="total"><b>Total: {props.total} €</b>
        <button className="finalize-btn" onClick={props.addToCart}>Finalize</button>
        </div>
        </ol>
      </div>
      </div><div></div>
      </div>
  );
}

export default Cart;
