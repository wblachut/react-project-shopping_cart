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
          <a href="https://github.com/wblachut/react-project-cv" className="gh-btn">
              <FontAwesomeIcon icon={["fab", "github"]}  className="gh-icon" />
                </a><i className="fab fa-github"></i> 
            SomeShop</div>
          <div className="right-elements">
            <ul className="nav-links">
              <Link style={linkStyle} to='/'><li>Home</li></Link>
              <Link style={linkStyle} to='/store'><li>Store</li></Link>
              <Link style={linkStyle} to='/about'><li>About</li></Link>
              <Link style={linkStyle} to='/cart'><li> Cart <FontAwesomeIcon icon={["fas", "shopping-basket"]} className="gh-icon" /> <i className="fab fa-github"></i></li></Link>
              <Link style={linkStyle} to='/cart'><li><div className="item-quantity">{props.itemsQuantity}</div></li></Link>
              <li></li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
    )
}

export default Nav