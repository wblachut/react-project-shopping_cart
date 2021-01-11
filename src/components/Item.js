import React, { useState } from 'react'
import '../style/Item.css'
import { Link } from "react-router-dom";
import minerals from '../minerals.json'

const Item = (match, addToCart) => {
  const product = minerals[match.match.params.id - 1]
  const [item, setItem] = useState(product)
  // console.log(item);
  const [productQuantity, setProductQuantity] = useState(1);

  const bgStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1555158337-b5465c6c8c2b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80)',
  };

  const linkStyle = {
    color: 'brown',
    textDecoration: 'none',
    fontSize: '1.2rem',
    position: 'absolute',
    left: '50%',
    bottom: '10%',
    transform: 'translateX(-50%)',
  };
  
  const inputQuantityHandler = (e) => {
    if (e.target.textContent === '+') {
    setProductQuantity(productQuantity + 1);
  } else if (e.target.textContent === '-') {
    setProductQuantity(productQuantity - 1);
    } else {
      setProductQuantity(e.target.value);
    }
  }

  const onAddToCart = () => {
    addToCart(product, productQuantity);
  }
      
      return (
        <div>
    <div className="top-row" style={bgStyle}><h1> Our Store </h1></div>
        <div className="item-div">
      <div className="image-display">
      {/* <img src={item.image} alt={item.name}/> */}
      <img src="http://www.mineralstore.com.au/sales/images/C013.JPG" alt={item.name}/>
      </div>
      <div className="item-display">
      <h1>{item.name}</h1>
          <p className="item-description">{item.description}</p>
          <p><strong>dimensions:</strong> {item.dimensions}</p>
          <p><strong>origin:</strong><span className="origin"> {item.origin}</span></p>
          <h5>{item.price}</h5>
          <div className="item-add-to-cart">
            <button className="add-rem" onClick={(e) => inputQuantityHandler(e)}>+</button>
              <input type="number" value={productQuantity} range={1-100} onChange={(e) => inputQuantityHandler(e)}></input>
            <button className="add-rem" onClick={(e) => inputQuantityHandler(e)}>-</button>
            <button className="add-to-cart-button" onClick={() => onAddToCart()}>Add to Cart</button>
          </div>
          </div>
        </div>
          <Link style={linkStyle} to={`/store`}><span className="back-sp">Back to Store</span></Link>
      </div>
  );
}


export default Item;