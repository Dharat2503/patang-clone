

import React from 'react';
import video from '../../assets/patangvideo.mp4';
import './Layout.css'; 

const Layout = () => {
  return (
    <div className="container">
      <video className="video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="textBox">
          <h1 className="text">Revolving - Patang Firki - Reimagining</h1>
        </div>
      </div>
    </div>
  );
}

export default Layout;
