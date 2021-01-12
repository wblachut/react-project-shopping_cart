import React from 'react'

const About = () => {
  const bgStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1581060594877-ba0c6f15b1e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80)',
    backgroundPosition:'0% 59%',
  };

  return (
    <div className="about-div">
    <div className="top-row" style={bgStyle}><h1> About us </h1></div>
    <div className="about">
    <div className="about-img-wrapper"></div>
    <h2>Content on the page from</h2>
    <h3>http://www.mineralstore.com.au/</h3>
    <h4>All rights reserved ®</h4>
    </div>
    </div>
  );
}

export default About;
