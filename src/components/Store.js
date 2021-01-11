import React, { useState } from 'react'
import '../style/Store.css'
import minerals from '../minerals.json'
import { Link } from "react-router-dom";


const Store = (props) => {
  const bgStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1555158337-b5465c6c8c2b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80)',
  };
  const linkStyle = {
    color: 'brown',
    textDecoration: 'none',
    fontSize: '1.2rem'
  };
  const [items] = useState(minerals)

  return (
    <div>
    <div className="top-row" style={bgStyle}><h1> Our Store </h1></div>
    <div className="store-div">
      <div className="items-display">
      {items.map(item => (
        <div className="store-item" key={item.id}>
          <Link style={linkStyle} to={`store/${item.id} `}>
          <img src={item.image} alt={item.name}/>
          <p className="item-name">{item.name}</p>
          </Link>
          <p className="item-origin">{item.origin}</p>
          <h5 className="item-price">{item.price}</h5>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
}

export default Store;
