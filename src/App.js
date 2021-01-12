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

const App = () => {
  
  const [total, setTotal] = useState(0);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const updateQuantity = () => {
    let totalQuantity = 0;
    cart.forEach(item => {
    totalQuantity += parseInt(item.quantity) })
    setItemsQuantity(totalQuantity)
    console.log(totalQuantity);
  }

  const updateTotal = () => {
    let totalValue = 0;
    cart.forEach(item => {totalValue += parseInt(item.quantity) * parseFloat(item.price)})
    setTotal(totalValue.toFixed(2))
    console.log(totalValue);
  }

  return (
    <BrowserRouter>
      <div className="App">
      <Nav itemsQuantity={itemsQuantity}/>
      <Switch>
        <Route exact path="/react-project-shopping_cart/" component={Home}/>
        <Route exact path="/react-project-shopping_cart/about" component={About}/>
        <Route exact path="/react-project-shopping_cart/store" component={Store}/> 
        {/* <Route exact path="/store/:id" component={Item}/>  */}
        <Route 
          exact path="/react-project-shopping_cart/store/:id" 
          render = {(props) => (
             <Item {...props}
              cart = {cart}
              setCart = {setCart}
              itemsQuantity = {itemsQuantity}
              setItemsQuantity = {setItemsQuantity}
              total = {total}
              setTotal = {setTotal}
              updateQuantity = {updateQuantity}
              updateTotal = {updateTotal}
              />
          )} /> 
        {/* <Route exact path="/store/:id">
            <Item addToCart={() => addToCart()} total = {total} />
        </Route> */}
        <Route 
          exact path="/react-project-shopping_cart/cart" 
          render = {(props) => (
            <Cart {...props}
            cart = {cart}
            setCart = {setCart}
            itemsQuantity = {itemsQuantity}
            setItemsQuantity = {setItemsQuantity}
            total = {total}
            setTotal = {setTotal}
            updateQuantity = {updateQuantity}
            updateTotal = {updateTotal}
            />
          )}/>

        <Route exact path="/cart" component={Cart}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
