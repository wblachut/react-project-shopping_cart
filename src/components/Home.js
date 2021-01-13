import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

// import './Home.css';

  const Home = (props) => {
  const bgStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1604574081819-cca83c2b0b6d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80)',
  };

  useEffect(() => {
      props.setIsHome(true);
    return function cleanup() {
      props.setIsHome(false);
    };
  }, []);

  return (
    <div className="home">
          <a href="https://github.com/wblachut/react-project-shopping_cart/" className="gh-btn"><FontAwesomeIcon icon={["fab", "github"]}  className="gh-icon" /></a><i className="fab fa-github"></i> 
    <div className="home-top-row" style={bgStyle}><h1> SomeGemShop </h1></div>
    <div className="intro-div"></div>
    <p><b>  </b> <br></br><br></br>
      So you can make your collection a little bit more mesmerizing...</p>
    <Link to='/react-project-shopping_cart/store'>
    <button className="shop-now-btn">
      Shop now</button>
    </Link>
    <div className="home-image"></div>
    </div>
  );
}

export default Home;
