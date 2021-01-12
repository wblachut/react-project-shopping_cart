import React from "react";
import '../style/Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const Nav = (props) => {
    const linkStyle = {
      color: 'white',
      textDecoration: 'none'
    };

    return (
      <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <div className="store-logo">
          <a href="https://github.com/wblachut/react-project-shopping_cart//" className="gh-btn">
              <FontAwesomeIcon icon={["fab", "github"]}  className="gh-icon" />
                </a><i className="fab fa-github"></i> 
            SomeGemShop</div>
          <div className="right-elements">
            <ul className="nav-links">
              <Link style={linkStyle} to='/react-project-shopping_cart/'><li>Home</li></Link>
              <Link style={linkStyle} to='/react-project-shopping_cart/store'><li>Store</li></Link>
              <Link style={linkStyle} to='/react-project-shopping_cart/about'><li>About</li></Link>
              <Link style={linkStyle} to='/react-project-shopping_cart/cart'><li className="cart-li"> Cart <FontAwesomeIcon icon={["fas", "shopping-basket"]} className="gh-icon" /> <i className="fab fa-github"></i><div className="item-quantity">{props.itemsQuantity} </div></li></Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Nav
