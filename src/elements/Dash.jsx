import React from 'react';

import '../assets/css/dash.css';

function Dash() {
  return ( 
    <div id="dash">
      <div id="dashWrap">
        <div id="dashTitle">
          <h1>Hi, I'm <span className="highlight">Dylan</span></h1>
          <h2>Web Developer</h2>
        </div>
        <div id="dashContent">
          <p>Front-end web developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, and Node.js. I am a quick learner and always eager to expand my knowledge and skills.</p>
        </div>
      </div>
    </div>
  )
}

export default Dash;