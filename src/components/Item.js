import React, { useState } from "react";
import { Link } from "react-router-dom";
import minerals from "../minerals.json";
import PropTypes from "prop-types";
import "../style/Item.css";

const Item = (props) => {
	const product = minerals[props.match.params.id - 1];
	const [item] = useState(product);
	const [productQuantity, setProductQuantity] = useState(1);

	const bgStyle = {
		backgroundImage:
			"url(https://images.unsplash.com/photo-1555158337-b5465c6c8c2b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80)",
	};

	const linkStyle = {
		color: "brown",
		textDecoration: "none",
	};

	const inputQuantityHandler = (e) => {
		if (e.target.textContent === "+") {
			setProductQuantity(productQuantity + 1);
		} else if (e.target.textContent === "-") {
			productQuantity > 1
				? setProductQuantity(productQuantity - 1)
				: setProductQuantity(1);
		} else {
			setProductQuantity(e.target.value);
		}
	};

	const addToCart = (product, quantity) => {
		const cartItems = [...props.cart];
		let inCart = false;
		cartItems.map((item) => {
			if (item.id === product.id) {
				item.quantity = parseInt(item.quantity);
				item.quantity += parseInt(quantity);
				inCart = true;
			}
		});
		if (!inCart) {
			cartItems.push({ ...product, quantity: parseInt(quantity) });
		}
		props.setCart([...cartItems]);
		setProductQuantity(1);
	};

	return (
		<div>
			<div className="top-row" style={bgStyle}>
				<h1> Our Store </h1>
			</div>
			<div className="item-div">
				<div className="image-display">
					<img src={`../${item.image}`} alt={item.name} />
				</div>
				<div className="item-display">
					<h1>{item.name}</h1>
					<p className="item-description">{item.description}</p>
					<p>
						<strong>dimensions:</strong> {item.dimensions}
					</p>
					<p>
						<strong>origin:</strong>
						<span className="origin"> {item.origin}</span>
					</p>
					<h5>{item.price}</h5>
					<div className="item-add-to-cart">
						<button
							className="add-rem"
							onClick={(e) => inputQuantityHandler(e)}
						>
							+
						</button>
						<input
							type="number"
							value={productQuantity}
							min="1"
							max="50"
							onChange={(e) => inputQuantityHandler(e)}
						></input>
						<button
							className="add-rem"
							onClick={(e) => inputQuantityHandler(e)}
						>
							-
						</button>
						<button
							className="add-to-cart-button"
							onClick={() => addToCart(product, productQuantity)}
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
			<Link style={linkStyle} to={`/react-project-shopping_cart/store`}>
				<span className="back-sp">Back to Store</span>
			</Link>
		</div>
	);
};

export default Item;

Item.propTypes = {
	cart: PropTypes.array,
	setCart: PropTypes.func,
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	}),
};
