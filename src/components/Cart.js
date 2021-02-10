/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Cart = (props) => {
	const bgStyle = {
		backgroundImage:
			"url(https://images.unsplash.com/photo-1564275513-b6fbcb2f0962?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1787&q=80)",
		backgroundPosition: "0% 39%",
	};

	const linkStyle = {
		color: "brown",
		textDecoration: "none",
		fontSize: "1.2rem",
		display: "flex",
		alignItems: "center",
		fontWeight: "600",
	};

	const onDeleteItem = async (id) => {
		const cartList = [...props.cart].filter((item) => item.id !== id);
		props.setCart(cartList);
	};

	const onAddQuantity = (id) => {
		const cartList = [...props.cart];
		cartList.map((item) => {
			if (item.id === id) {
				item.quantity = parseInt(item.quantity);
				item.quantity += 1;
			}
		});
		props.setCart(cartList);
	};

	const onSubtractQuantity = (id) => {
		const cartList = [...props.cart];
		cartList.map((item) => {
			if (item.id === id && item.quantity > 1) {
				item.quantity = parseInt(item.quantity);
				item.quantity -= 1;
			}
		});
		props.setCart(cartList);
	};

	return (
		<div>
			<div className="top-row" style={bgStyle}>
				<h1> Your Cart </h1>
			</div>
			<div className="cart-div">
				<div className="cart-title">
					<h2> Items in the cart ({props.itemsQuantity}) :</h2>
				</div>
				{props.itemsQuantity === 0 && (
					<h3 style={{ textAlign: "center", color: "chocolate" }}>
						Your cart is empty!
					</h3>
				)}
				<div className="cart-table">
					<ol>
						{props.cart.map((item) => (
							<li key={item.id}>
								<Link
									style={linkStyle}
									to={`/react-project-shopping_cart/store/${item.id} `}
								>
									<img src={item.image} alt={item.name} />
									<span className="">{item.name}</span>
								</Link>
								<div className="cart-item-menage">
									<p className="item-price">{item.price}</p>
									<button
										className="add-rem"
										onClick={(id) => {
											onAddQuantity(item.id);
										}}
									>
										+
									</button>
									{item.quantity}
									<button
										className="add-rem"
										onClick={(id) => {
											onSubtractQuantity(item.id);
										}}
									>
										-
									</button>
									<button
										id={item.id}
										onClick={(id) => onDeleteItem(item.id)}
										className="trash-del"
									>
										<FontAwesomeIcon
											icon={["fas", "trash"]}
											className="trash-icon"
										/>
									</button>
								</div>
							</li>
						))}
						<li></li>
						<Link style={linkStyle} to={`/react-project-shopping_cart/store`}>
							<span className="back-sp">Back to store</span>
						</Link>
						<div className="total">
							<b>Total: {props.total} €</b>
							<button
								className="finalize-btn"
								onClick={() => console.log("Finalize")}
							>
								Finalize
							</button>
						</div>
					</ol>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Cart;

Cart.propTypes = {
	cart: PropTypes.array,
	setCart: PropTypes.func,
	total: PropTypes.number,
	itemsQuantity: PropTypes.number,
};
