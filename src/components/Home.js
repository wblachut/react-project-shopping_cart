import React from 'react'
// import './Home.css';

const Home = () => {
  const bgStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1555158337-b5465c6c8c2b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80)',
  };

  return (
    <div className="Home">
    <div className="home-top-row" style={bgStyle}><h1> HOME </h1></div>
    <div className="home-image"></div>
    </div>
  );
}

export default Home;
