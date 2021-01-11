import React from 'react'

const About = () => {
  const bgStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1606486502060-04dd96a34b27?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80)',
    backgroundPosition:'0% 50%',
  };

  return (
    <div className="About-div">
    <div className="top-row" style={bgStyle}><h1> About us </h1></div>
    <h2>content from:</h2>
    <h3>http://www.mineralstore.com.au/</h3>
    </div>
  );
}

//
export default About;
