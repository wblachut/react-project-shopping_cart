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
						<div className="store-logo"> SomeGemShop </div>
						<div className="right-elements">
							<ul className="nav-links">
								<Link style={linkStyle} to="/react-project-shopping_cart/">
									<li>Home</li>
								</Link>
								<Link style={linkStyle} to="/react-project-shopping_cart/store">
									<li>Store</li>
								</Link>
								<Link style={linkStyle} to="/react-project-shopping_cart/about">
									<li>About</li>
								</Link>
								<Link style={linkStyle} to="/react-project-shopping_cart/cart">
									<li className="cart-li">
										{" "}
										Cart{" "}
										<FontAwesomeIcon
											icon={["fas", "shopping-basket"]}
											className="fa-icon"
										/>{" "}
										<i className="fab fa-github"></i>
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
