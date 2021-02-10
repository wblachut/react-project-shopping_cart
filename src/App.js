import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style/App.css";
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
	const [isHome, setIsHome] = useState(false);

	useEffect(() => {
		updateQuantity();
		updateTotal();
	}, [cart]);

	const updateQuantity = () => {
		const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
		setItemsQuantity(totalQuantity);
	};

	const toFixedNumber = (num, digits, base) => {
		var pow = Math.pow(base || 10, digits);
		return Math.round(num * pow) / pow;
	};

	const updateTotal = () => {
		const totalValue = cart.reduce((acc, item) => {
			return acc + parseInt(item.quantity) * parseFloat(item.price);
		}, 0);
		setTotal(toFixedNumber(totalValue, 2, 10));
	};

	return (
		<BrowserRouter>
			<div className="App">
				<Nav itemsQuantity={itemsQuantity} isHome={isHome} />
				<Switch>
					<Route
						exact
						path="/react-project-shopping_cart/"
						render={(props) => (
							<Home {...props} isHome={isHome} setIsHome={setIsHome} />
						)}
					/>
					<Route
						exact
						path="/react-project-shopping_cart/about"
						component={About}
					/>
					<Route
						exact
						path="/react-project-shopping_cart/store"
						component={Store}
					/>
					<Route
						exact
						path="/react-project-shopping_cart/store/:id"
						render={(props) => (
							<Item
								{...props}
								cart={cart}
								setCart={setCart}
								itemsQuantity={itemsQuantity}
								setItemsQuantity={setItemsQuantity}
								total={total}
								setTotal={setTotal}
								updateQuantity={updateQuantity}
								updateTotal={updateTotal}
							/>
						)}
					/>
					<Route
						exact
						path="/react-project-shopping_cart/cart"
						render={(props) => (
							<Cart
								{...props}
								cart={cart}
								setCart={setCart}
								itemsQuantity={itemsQuantity}
								setItemsQuantity={setItemsQuantity}
								total={total}
								setTotal={setTotal}
								updateQuantity={updateQuantity}
								updateTotal={updateTotal}
							/>
						)}
					/>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
