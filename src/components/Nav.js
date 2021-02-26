import React from "react";
import "../style/Nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = (props) => {
	const linkStyle = {
		color: "white",
		textDecoration: "none",
	};

	if (props.isHome === true) {
		return null;
	} else {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<Link style={linkStyle} to="/react-project-shopping_cart/">
							<div className="store-logo"> SomeGemShop </div>
						</Link>
						<div className="right-elements">
							<ul className="nav-links">
								<Link style={linkStyle} to="/react-project-shopping_cart/">
									<li>
										<span className="nav-link-name">Home</span>
										<FontAwesomeIcon
											icon={["fas", "home"]}
											className="fa-icon icon-home sub"
										/>
									</li>
								</Link>
								<Link style={linkStyle} to="/react-project-shopping_cart/store">
									<li>
										<span className="nav-link-name">Store</span>
										<FontAwesomeIcon
											icon={["fas", "gem"]}
											className="fa-icon sub"
										/>
									</li>
								</Link>
								<Link style={linkStyle} to="/react-project-shopping_cart/about">
									<li>
										<span className="nav-link-name">About</span>
										<FontAwesomeIcon
											icon={["fas", "users"]}
											className="fa-icon sub"
										/>
									</li>
								</Link>
								<Link style={linkStyle} to="/react-project-shopping_cart/cart">
									<li className="cart-li">
										<span className="nav-link-name">Cart</span>
										<FontAwesomeIcon
											icon={["fas", "shopping-basket"]}
											className="fa-icon"
										/>
										{props.itemsQuantity !== 0 && (
											<div className="item-quantity">
												{" "}
												{props.itemsQuantity}{" "}
											</div>
										)}
									</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Nav;
