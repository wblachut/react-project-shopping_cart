import React, { useState } from 'react'
// import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './style/App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import Store from "./components/Store";
import Item from "./components/Item";
import About from "./components/About";
import Cart from "./components/Cart";

import minerals from "./minerals.json"

const App = () => {
  
  const [total, setTotal] = useState(10);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(minerals);


  const addToCart = (product, quantity) => {
    const cartItems = cart;
    let inCart = false;
    cartItems.forEach(item => {
      if (item.id === product.id) {
        item.count += quantity
        inCart = true;
      }
    });
    if (!inCart) {
      cartItems.push({...product, count: 1});
    }
  
    // setCart(cartItems);
    // updateQuantity();
    // updateTotal();
    console.log(cart);
  }

  const updateQuantity = () => {
    let totalQuantity = 0;
    cart.forEach(item => { totalQuantity += item.count })
    setItemsQuantity(totalQuantity)
  }

  const updateTotal = () => {
    let totalValue = 0;
    cart.forEach(item => {totalValue += item.count * parseFloat(item.price)})
    setTotal(totalValue)
  }


  return (
    <BrowserRouter>
      <div className="App">
      <Nav itemsQuantity={itemsQuantity}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/store" component={Store}/> 
        <Route exact path="/store/:id" component={Item}/> 
        <Route 
          exact path="/store/:id" 
          render = {(props) => (
             <Item {...props}
              addToCart={addToCart()}
              />
          )} /> 
        {/* <Route exact path="/store/:id">
            <Item addToCart={() => addToCart()} total = {total} />
        </Route> */}
        <Route 
          exact path="/cart" 
          render = {(props) => (
            <Cart {...props}
            cart = {cart}
            itemsQuantity = {itemsQuantity}
            total = {total}
            addToCart = {() => addToCart()}
            />
          )}/>

        <Route exact path="/cart" component={Cart}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
